/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbstractEmitterVisitor, CATCH_ERROR_VAR, CATCH_STACK_VAR, escapeIdentifier } from './abstract_emitter';
import * as o from './output_ast';
/**
 * In TypeScript, tagged template functions expect a "template object", which is an array of
 * "cooked" strings plus a `raw` property that contains an array of "raw" strings. This is
 * typically constructed with a function called `__makeTemplateObject(cooked, raw)`, but it may not
 * be available in all environments.
 *
 * This is a JavaScript polyfill that uses __makeTemplateObject when it's available, but otherwise
 * creates an inline helper with the same functionality.
 *
 * In the inline function, if `Object.defineProperty` is available we use that to attach the `raw`
 * array.
 */
const makeTemplateObjectPolyfill = '(this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e})';
export class AbstractJsEmitterVisitor extends AbstractEmitterVisitor {
    constructor() {
        super(false);
    }
    visitDeclareClassStmt(stmt, ctx) {
        ctx.pushClass(stmt);
        this._visitClassConstructor(stmt, ctx);
        if (stmt.parent != null) {
            ctx.print(stmt, `${stmt.name}.prototype = Object.create(`);
            stmt.parent.visitExpression(this, ctx);
            ctx.println(stmt, `.prototype);`);
        }
        stmt.getters.forEach((getter) => this._visitClassGetter(stmt, getter, ctx));
        stmt.methods.forEach((method) => this._visitClassMethod(stmt, method, ctx));
        ctx.popClass();
        return null;
    }
    _visitClassConstructor(stmt, ctx) {
        ctx.print(stmt, `function ${stmt.name}(`);
        if (stmt.constructorMethod != null) {
            this._visitParams(stmt.constructorMethod.params, ctx);
        }
        ctx.println(stmt, `) {`);
        ctx.incIndent();
        if (stmt.constructorMethod != null) {
            if (stmt.constructorMethod.body.length > 0) {
                ctx.println(stmt, `var self = this;`);
                this.visitAllStatements(stmt.constructorMethod.body, ctx);
            }
        }
        ctx.decIndent();
        ctx.println(stmt, `}`);
    }
    _visitClassGetter(stmt, getter, ctx) {
        ctx.println(stmt, `Object.defineProperty(${stmt.name}.prototype, '${getter.name}', { get: function() {`);
        ctx.incIndent();
        if (getter.body.length > 0) {
            ctx.println(stmt, `var self = this;`);
            this.visitAllStatements(getter.body, ctx);
        }
        ctx.decIndent();
        ctx.println(stmt, `}});`);
    }
    _visitClassMethod(stmt, method, ctx) {
        ctx.print(stmt, `${stmt.name}.prototype.${method.name} = function(`);
        this._visitParams(method.params, ctx);
        ctx.println(stmt, `) {`);
        ctx.incIndent();
        if (method.body.length > 0) {
            ctx.println(stmt, `var self = this;`);
            this.visitAllStatements(method.body, ctx);
        }
        ctx.decIndent();
        ctx.println(stmt, `};`);
    }
    visitWrappedNodeExpr(ast, ctx) {
        throw new Error('Cannot emit a WrappedNodeExpr in Javascript.');
    }
    visitReadVarExpr(ast, ctx) {
        if (ast.builtin === o.BuiltinVar.This) {
            ctx.print(ast, 'self');
        }
        else if (ast.builtin === o.BuiltinVar.Super) {
            throw new Error(`'super' needs to be handled at a parent ast node, not at the variable level!`);
        }
        else {
            super.visitReadVarExpr(ast, ctx);
        }
        return null;
    }
    visitDeclareVarStmt(stmt, ctx) {
        ctx.print(stmt, `var ${stmt.name}`);
        if (stmt.value) {
            ctx.print(stmt, ' = ');
            stmt.value.visitExpression(this, ctx);
        }
        ctx.println(stmt, `;`);
        return null;
    }
    visitCastExpr(ast, ctx) {
        ast.value.visitExpression(this, ctx);
        return null;
    }
    visitInvokeFunctionExpr(expr, ctx) {
        const fnExpr = expr.fn;
        if (fnExpr instanceof o.ReadVarExpr && fnExpr.builtin === o.BuiltinVar.Super) {
            ctx.currentClass.parent.visitExpression(this, ctx);
            ctx.print(expr, `.call(this`);
            if (expr.args.length > 0) {
                ctx.print(expr, `, `);
                this.visitAllExpressions(expr.args, ctx, ',');
            }
            ctx.print(expr, `)`);
        }
        else {
            super.visitInvokeFunctionExpr(expr, ctx);
        }
        return null;
    }
    visitTaggedTemplateExpr(ast, ctx) {
        // The following convoluted piece of code is effectively the downlevelled equivalent of
        // ```
        // tag`...`
        // ```
        // which is effectively like:
        // ```
        // tag(__makeTemplateObject(cooked, raw), expression1, expression2, ...);
        // ```
        const elements = ast.template.elements;
        ast.tag.visitExpression(this, ctx);
        ctx.print(ast, `(${makeTemplateObjectPolyfill}(`);
        ctx.print(ast, `[${elements.map(part => escapeIdentifier(part.text, false)).join(', ')}], `);
        ctx.print(ast, `[${elements.map(part => escapeIdentifier(part.rawText, false)).join(', ')}])`);
        ast.template.expressions.forEach(expression => {
            ctx.print(ast, ', ');
            expression.visitExpression(this, ctx);
        });
        ctx.print(ast, ')');
        return null;
    }
    visitFunctionExpr(ast, ctx) {
        ctx.print(ast, `function${ast.name ? ' ' + ast.name : ''}(`);
        this._visitParams(ast.params, ctx);
        ctx.println(ast, `) {`);
        ctx.incIndent();
        this.visitAllStatements(ast.statements, ctx);
        ctx.decIndent();
        ctx.print(ast, `}`);
        return null;
    }
    visitDeclareFunctionStmt(stmt, ctx) {
        ctx.print(stmt, `function ${stmt.name}(`);
        this._visitParams(stmt.params, ctx);
        ctx.println(stmt, `) {`);
        ctx.incIndent();
        this.visitAllStatements(stmt.statements, ctx);
        ctx.decIndent();
        ctx.println(stmt, `}`);
        return null;
    }
    visitTryCatchStmt(stmt, ctx) {
        ctx.println(stmt, `try {`);
        ctx.incIndent();
        this.visitAllStatements(stmt.bodyStmts, ctx);
        ctx.decIndent();
        ctx.println(stmt, `} catch (${CATCH_ERROR_VAR.name}) {`);
        ctx.incIndent();
        const catchStmts = [CATCH_STACK_VAR.set(CATCH_ERROR_VAR.prop('stack')).toDeclStmt(null, [
                o.StmtModifier.Final
            ])].concat(stmt.catchStmts);
        this.visitAllStatements(catchStmts, ctx);
        ctx.decIndent();
        ctx.println(stmt, `}`);
        return null;
    }
    visitLocalizedString(ast, ctx) {
        // The following convoluted piece of code is effectively the downlevelled equivalent of
        // ```
        // $localize `...`
        // ```
        // which is effectively like:
        // ```
        // $localize(__makeTemplateObject(cooked, raw), expression1, expression2, ...);
        // ```
        ctx.print(ast, `$localize(${makeTemplateObjectPolyfill}(`);
        const parts = [ast.serializeI18nHead()];
        for (let i = 1; i < ast.messageParts.length; i++) {
            parts.push(ast.serializeI18nTemplatePart(i));
        }
        ctx.print(ast, `[${parts.map(part => escapeIdentifier(part.cooked, false)).join(', ')}], `);
        ctx.print(ast, `[${parts.map(part => escapeIdentifier(part.raw, false)).join(', ')}])`);
        ast.expressions.forEach(expression => {
            ctx.print(ast, ', ');
            expression.visitExpression(this, ctx);
        });
        ctx.print(ast, ')');
        return null;
    }
    _visitParams(params, ctx) {
        this.visitAllObjects(param => ctx.print(null, param.name), params, ctx, ',');
    }
    getBuiltinMethodName(method) {
        let name;
        switch (method) {
            case o.BuiltinMethod.ConcatArray:
                name = 'concat';
                break;
            case o.BuiltinMethod.SubscribeObservable:
                name = 'subscribe';
                break;
            case o.BuiltinMethod.Bind:
                name = 'bind';
                break;
            default:
                throw new Error(`Unknown builtin method: ${method}`);
        }
        return name;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3RfanNfZW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9vdXRwdXQvYWJzdHJhY3RfanNfZW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBeUIsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNySSxPQUFPLEtBQUssQ0FBQyxNQUFNLGNBQWMsQ0FBQztBQUVsQzs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sMEJBQTBCLEdBQzVCLG1JQUFtSSxDQUFDO0FBRXhJLE1BQU0sT0FBZ0Isd0JBQXlCLFNBQVEsc0JBQXNCO0lBQzNFO1FBQ0UsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNRLHFCQUFxQixDQUFDLElBQWlCLEVBQUUsR0FBMEI7UUFDMUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxH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QUFHLFdBQVcsQ0FBQztnQkFDbkIsTUFBTTtZQUNSLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJO2dCQUN2QixJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUNkLE1BQU07WUFDUjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0Fic3RyYWN0RW1pdHRlclZpc2l0b3IsIENBVENIX0VSUk9SX1ZBUiwgQ0FUQ0hfU1RBQ0tfVkFSLCBFbWl0dGVyVmlzaXRvckNvbnRleHQsIGVzY2FwZUlkZW50aWZpZXJ9IGZyb20gJy4vYWJzdHJhY3RfZW1pdHRlcic7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0X2FzdCc7XG5cbi8qKlxuICogSW4gVHlwZVNjcmlwdCwgdGFnZ2VkIHRlbXBsYXRlIGZ1bmN0aW9ucyBleHBlY3QgYSBcInRlbXBsYXRlIG9iamVjdFwiLCB3aGljaCBpcyBhbiBhcnJheSBvZlxuICogXCJjb29rZWRcIiBzdHJpbmdzIHBsdXMgYSBgcmF3YCBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIGFuIGFycmF5IG9mIFwicmF3XCIgc3RyaW5ncy4gVGhpcyBpc1xuICogdHlwaWNhbGx5IGNvbnN0cnVjdGVkIHdpdGggYSBmdW5jdGlvbiBjYWxsZWQgYF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KWAsIGJ1dCBpdCBtYXkgbm90XG4gKiBiZSBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50cy5cbiAqXG4gKiBUaGlzIGlzIGEgSmF2YVNjcmlwdCBwb2x5ZmlsbCB0aGF0IHVzZXMgX19tYWtlVGVtcGxhdGVPYmplY3Qgd2hlbiBpdCdzIGF2YWlsYWJsZSwgYnV0IG90aGVyd2lzZVxuICogY3JlYXRlcyBhbiBpbmxpbmUgaGVscGVyIHdpdGggdGhlIHNhbWUgZnVuY3Rpb25hbGl0eS5cbiAqXG4gKiBJbiB0aGUgaW5saW5lIGZ1bmN0aW9uLCBpZiBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBpcyBhdmFpbGFibGUgd2UgdXNlIHRoYXQgdG8gYXR0YWNoIHRoZSBgcmF3YFxuICogYXJyYXkuXG4gKi9cbmNvbnN0IG1ha2VUZW1wbGF0ZU9iamVjdFBvbHlmaWxsID1cbiAgICAnKHRoaXMmJnRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3R8fGZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcInJhd1wiLHt2YWx1ZTp0fSk6ZS5yYXc9dCxlfSknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RKc0VtaXR0ZXJWaXNpdG9yIGV4dGVuZHMgQWJzdHJhY3RFbWl0dGVyVmlzaXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGZhbHNlKTtcbiAgfVxuICBvdmVycmlkZSB2aXNpdERlY2xhcmVDbGFzc1N0bXQoc3RtdDogby5DbGFzc1N0bXQsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICBjdHgucHVzaENsYXNzKHN0bXQpO1xuICAgIHRoaXMuX3Zpc2l0Q2xhc3NDb25zdHJ1Y3RvcihzdG10LCBjdHgpO1xuXG4gICAgaWYgKHN0bXQucGFyZW50ICE9IG51bGwpIHtcbiAgICAgIGN0eC5wcmludChzdG10LCBgJHtzdG10Lm5hbWV9LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoYCk7XG4gICAgICBzdG10LnBhcmVudC52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICAgIGN0eC5wcmludGxuKHN0bXQsIGAucHJvdG90eXBlKTtgKTtcbiAgICB9XG4gICAgc3RtdC5nZXR0ZXJzLmZvckVhY2goKGdldHRlcikgPT4gdGhpcy5fdmlzaXRDbGFzc0dldHRlcihzdG10LCBnZXR0ZXIsIGN0eCkpO1xuICAgIHN0bXQubWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHRoaXMuX3Zpc2l0Q2xhc3NNZXRob2Qoc3RtdCwgbWV0aG9kLCBjdHgpKTtcbiAgICBjdHgucG9wQ2xhc3MoKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2l0Q2xhc3NDb25zdHJ1Y3RvcihzdG10OiBvLkNsYXNzU3RtdCwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpIHtcbiAgICBjdHgucHJpbnQoc3RtdCwgYGZ1bmN0aW9uICR7c3RtdC5uYW1lfShgKTtcbiAgICBpZiAoc3RtdC5jb25zdHJ1Y3Rvck1ldGhvZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLl92aXNpdFBhcmFtcyhzdG10LmNvbnN0cnVjdG9yTWV0aG9kLnBhcmFtcywgY3R4KTtcbiAgICB9XG4gICAgY3R4LnByaW50bG4oc3RtdCwgYCkge2ApO1xuICAgIGN0eC5pbmNJbmRlbnQoKTtcbiAgICBpZiAoc3RtdC5jb25zdHJ1Y3Rvck1ldGhvZCAhPSBudWxsKSB7XG4gICAgICBpZiAoc3RtdC5jb25zdHJ1Y3Rvck1ldGhvZC5ib2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3R4LnByaW50bG4oc3RtdCwgYHZhciBzZWxmID0gdGhpcztgKTtcbiAgICAgICAgdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoc3RtdC5jb25zdHJ1Y3Rvck1ldGhvZC5ib2R5LCBjdHgpO1xuICAgICAgfVxuICAgIH1cbiAgICBjdHguZGVjSW5kZW50KCk7XG4gICAgY3R4LnByaW50bG4oc3RtdCwgYH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2l0Q2xhc3NHZXR0ZXIoc3RtdDogby5DbGFzc1N0bXQsIGdldHRlcjogby5DbGFzc0dldHRlciwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpIHtcbiAgICBjdHgucHJpbnRsbihcbiAgICAgICAgc3RtdCxcbiAgICAgICAgYE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgke3N0bXQubmFtZX0ucHJvdG90eXBlLCAnJHtnZXR0ZXIubmFtZX0nLCB7IGdldDogZnVuY3Rpb24oKSB7YCk7XG4gICAgY3R4LmluY0luZGVudCgpO1xuICAgIGlmIChnZXR0ZXIuYm9keS5sZW5ndGggPiAwKSB7XG4gICAgICBjdHgucHJpbnRsbihzdG10LCBgdmFyIHNlbGYgPSB0aGlzO2ApO1xuICAgICAgdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoZ2V0dGVyLmJvZHksIGN0eCk7XG4gICAgfVxuICAgIGN0eC5kZWNJbmRlbnQoKTtcbiAgICBjdHgucHJpbnRsbihzdG10LCBgfX0pO2ApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRDbGFzc01ldGhvZChzdG10OiBvLkNsYXNzU3RtdCwgbWV0aG9kOiBvLkNsYXNzTWV0aG9kLCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCkge1xuICAgIGN0eC5wcmludChzdG10LCBgJHtzdG10Lm5hbWV9LnByb3RvdHlwZS4ke21ldGhvZC5uYW1lfSA9IGZ1bmN0aW9uKGApO1xuICAgIHRoaXMuX3Zpc2l0UGFyYW1zKG1ldGhvZC5wYXJhbXMsIGN0eCk7XG4gICAgY3R4LnByaW50bG4oc3RtdCwgYCkge2ApO1xuICAgIGN0eC5pbmNJbmRlbnQoKTtcbiAgICBpZiAobWV0aG9kLmJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgY3R4LnByaW50bG4oc3RtdCwgYHZhciBzZWxmID0gdGhpcztgKTtcbiAgICAgIHRoaXMudmlzaXRBbGxTdGF0ZW1lbnRzKG1ldGhvZC5ib2R5LCBjdHgpO1xuICAgIH1cbiAgICBjdHguZGVjSW5kZW50KCk7XG4gICAgY3R4LnByaW50bG4oc3RtdCwgYH07YCk7XG4gIH1cblxuICBvdmVycmlkZSB2aXNpdFdyYXBwZWROb2RlRXhwcihhc3Q6IG8uV3JhcHBlZE5vZGVFeHByPGFueT4sIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBlbWl0IGEgV3JhcHBlZE5vZGVFeHByIGluIEphdmFzY3JpcHQuJyk7XG4gIH1cblxuICBvdmVycmlkZSB2aXNpdFJlYWRWYXJFeHByKGFzdDogby5SZWFkVmFyRXhwciwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiBzdHJpbmd8bnVsbCB7XG4gICAgaWYgKGFzdC5idWlsdGluID09PSBvLkJ1aWx0aW5WYXIuVGhpcykge1xuICAgICAgY3R4LnByaW50KGFzdCwgJ3NlbGYnKTtcbiAgICB9IGVsc2UgaWYgKGFzdC5idWlsdGluID09PSBvLkJ1aWx0aW5WYXIuU3VwZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgJ3N1cGVyJyBuZWVkcyB0byBiZSBoYW5kbGVkIGF0IGEgcGFyZW50IGFzdCBub2RlLCBub3QgYXQgdGhlIHZhcmlhYmxlIGxldmVsIWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdXBlci52aXNpdFJlYWRWYXJFeHByKGFzdCwgY3R4KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgb3ZlcnJpZGUgdmlzaXREZWNsYXJlVmFyU3RtdChzdG10OiBvLkRlY2xhcmVWYXJTdG10LCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgY3R4LnByaW50KHN0bXQsIGB2YXIgJHtzdG10Lm5hbWV9YCk7XG4gICAgaWYgKHN0bXQudmFsdWUpIHtcbiAgICAgIGN0eC5wcmludChzdG10LCAnID0gJyk7XG4gICAgICBzdG10LnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgIH1cbiAgICBjdHgucHJpbnRsbihzdG10LCBgO2ApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG92ZXJyaWRlIHZpc2l0Q2FzdEV4cHIoYXN0OiBvLkNhc3RFeHByLCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgYXN0LnZhbHVlLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG92ZXJyaWRlIHZpc2l0SW52b2tlRnVuY3Rpb25FeHByKGV4cHI6IG8uSW52b2tlRnVuY3Rpb25FeHByLCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IHN0cmluZ1xuICAgICAgfG51bGwge1xuICAgIGNvbnN0IGZuRXhwciA9IGV4cHIuZm47XG4gICAgaWYgKGZuRXhwciBpbnN0YW5jZW9mIG8uUmVhZFZhckV4cHIgJiYgZm5FeHByLmJ1aWx0aW4gPT09IG8uQnVpbHRpblZhci5TdXBlcikge1xuICAgICAgY3R4LmN1cnJlbnRDbGFzcyEucGFyZW50IS52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICAgIGN0eC5wcmludChleHByLCBgLmNhbGwodGhpc2ApO1xuICAgICAgaWYgKGV4cHIuYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN0eC5wcmludChleHByLCBgLCBgKTtcbiAgICAgICAgdGhpcy52aXNpdEFsbEV4cHJlc3Npb25zKGV4cHIuYXJncywgY3R4LCAnLCcpO1xuICAgICAgfVxuICAgICAgY3R4LnByaW50KGV4cHIsIGApYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyLnZpc2l0SW52b2tlRnVuY3Rpb25FeHByKGV4cHIsIGN0eCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG92ZXJyaWRlIHZpc2l0VGFnZ2VkVGVtcGxhdGVFeHByKGFzdDogby5UYWdnZWRUZW1wbGF0ZUV4cHIsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvbnZvbHV0ZWQgcGllY2Ugb2YgY29kZSBpcyBlZmZlY3RpdmVseSB0aGUgZG93bmxldmVsbGVkIGVxdWl2YWxlbnQgb2ZcbiAgICAvLyBgYGBcbiAgICAvLyB0YWdgLi4uYFxuICAgIC8vIGBgYFxuICAgIC8vIHdoaWNoIGlzIGVmZmVjdGl2ZWx5IGxpa2U6XG4gICAgLy8gYGBgXG4gICAgLy8gdGFnKF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSwgZXhwcmVzc2lvbjEsIGV4cHJlc3Npb24yLCAuLi4pO1xuICAgIC8vIGBgYFxuICAgIGNvbnN0IGVsZW1lbnRzID0gYXN0LnRlbXBsYXRlLmVsZW1lbnRzO1xuICAgIGFzdC50YWcudmlzaXRFeHByZXNzaW9uKHRoaXMsIGN0eCk7XG4gICAgY3R4LnByaW50KGFzdCwgYCgke21ha2VUZW1wbGF0ZU9iamVjdFBvbHlmaWxsfShgKTtcbiAgICBjdHgucHJpbnQoYXN0LCBgWyR7ZWxlbWVudHMubWFwKHBhcnQgPT4gZXNjYXBlSWRlbnRpZmllcihwYXJ0LnRleHQsIGZhbHNlKSkuam9pbignLCAnKX1dLCBgKTtcbiAgICBjdHgucHJpbnQoYXN0LCBgWyR7ZWxlbWVudHMubWFwKHBhcnQgPT4gZXNjYXBlSWRlbnRpZmllcihwYXJ0LnJhd1RleHQsIGZhbHNlKSkuam9pbignLCAnKX1dKWApO1xuICAgIGFzdC50ZW1wbGF0ZS5leHByZXNzaW9ucy5mb3JFYWNoKGV4cHJlc3Npb24gPT4ge1xuICAgICAgY3R4LnByaW50KGFzdCwgJywgJyk7XG4gICAgICBleHByZXNzaW9uLnZpc2l0RXhwcmVzc2lvbih0aGlzLCBjdHgpO1xuICAgIH0pO1xuICAgIGN0eC5wcmludChhc3QsICcpJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgb3ZlcnJpZGUgdmlzaXRGdW5jdGlvbkV4cHIoYXN0OiBvLkZ1bmN0aW9uRXhwciwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiBhbnkge1xuICAgIGN0eC5wcmludChhc3QsIGBmdW5jdGlvbiR7YXN0Lm5hbWUgPyAnICcgKyBhc3QubmFtZSA6ICcnfShgKTtcbiAgICB0aGlzLl92aXNpdFBhcmFtcyhhc3QucGFyYW1zLCBjdHgpO1xuICAgIGN0eC5wcmludGxuKGFzdCwgYCkge2ApO1xuICAgIGN0eC5pbmNJbmRlbnQoKTtcbiAgICB0aGlzLnZpc2l0QWxsU3RhdGVtZW50cyhhc3Quc3RhdGVtZW50cywgY3R4KTtcbiAgICBjdHguZGVjSW5kZW50KCk7XG4gICAgY3R4LnByaW50KGFzdCwgYH1gKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBvdmVycmlkZSB2aXNpdERlY2xhcmVGdW5jdGlvblN0bXQoc3RtdDogby5EZWNsYXJlRnVuY3Rpb25TdG10LCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgY3R4LnByaW50KHN0bXQsIGBmdW5jdGlvbiAke3N0bXQubmFtZX0oYCk7XG4gICAgdGhpcy5fdmlzaXRQYXJhbXMoc3RtdC5wYXJhbXMsIGN0eCk7XG4gICAgY3R4LnByaW50bG4oc3RtdCwgYCkge2ApO1xuICAgIGN0eC5pbmNJbmRlbnQoKTtcbiAgICB0aGlzLnZpc2l0QWxsU3RhdGVtZW50cyhzdG10LnN0YXRlbWVudHMsIGN0eCk7XG4gICAgY3R4LmRlY0luZGVudCgpO1xuICAgIGN0eC5wcmludGxuKHN0bXQsIGB9YCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgb3ZlcnJpZGUgdmlzaXRUcnlDYXRjaFN0bXQoc3RtdDogby5UcnlDYXRjaFN0bXQsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICBjdHgucHJpbnRsbihzdG10LCBgdHJ5IHtgKTtcbiAgICBjdHguaW5jSW5kZW50KCk7XG4gICAgdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoc3RtdC5ib2R5U3RtdHMsIGN0eCk7XG4gICAgY3R4LmRlY0luZGVudCgpO1xuICAgIGN0eC5wcmludGxuKHN0bXQsIGB9IGNhdGNoICgke0NBVENIX0VSUk9SX1ZBUi5uYW1lfSkge2ApO1xuICAgIGN0eC5pbmNJbmRlbnQoKTtcbiAgICBjb25zdCBjYXRjaFN0bXRzID1cbiAgICAgICAgWzxvLlN0YXRlbWVudD5DQVRDSF9TVEFDS19WQVIuc2V0KENBVENIX0VSUk9SX1ZBUi5wcm9wKCdzdGFjaycpKS50b0RlY2xTdG10KG51bGwsIFtcbiAgICAgICAgICBvLlN0bXRNb2RpZmllci5GaW5hbFxuICAgICAgICBdKV0uY29uY2F0KHN0bXQuY2F0Y2hTdG10cyk7XG4gICAgdGhpcy52aXNpdEFsbFN0YXRlbWVudHMoY2F0Y2hTdG10cywgY3R4KTtcbiAgICBjdHguZGVjSW5kZW50KCk7XG4gICAgY3R4LnByaW50bG4oc3RtdCwgYH1gKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG92ZXJyaWRlIHZpc2l0TG9jYWxpemVkU3RyaW5nKGFzdDogby5Mb2NhbGl6ZWRTdHJpbmcsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvbnZvbHV0ZWQgcGllY2Ugb2YgY29kZSBpcyBlZmZlY3RpdmVseSB0aGUgZG93bmxldmVsbGVkIGVxdWl2YWxlbnQgb2ZcbiAgICAvLyBgYGBcbiAgICAvLyAkbG9jYWxpemUgYC4uLmBcbiAgICAvLyBgYGBcbiAgICAvLyB3aGljaCBpcyBlZmZlY3RpdmVseSBsaWtlOlxuICAgIC8vIGBgYFxuICAgIC8vICRsb2NhbGl6ZShfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdyksIGV4cHJlc3Npb24xLCBleHByZXNzaW9uMiwgLi4uKTtcbiAgICAvLyBgYGBcbiAgICBjdHgucHJpbnQoYXN0LCBgJGxvY2FsaXplKCR7bWFrZVRlbXBsYXRlT2JqZWN0UG9seWZpbGx9KGApO1xuICAgIGNvbnN0IHBhcnRzID0gW2FzdC5zZXJpYWxpemVJMThuSGVhZCgpXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFzdC5tZXNzYWdlUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhcnRzLnB1c2goYXN0LnNlcmlhbGl6ZUkxOG5UZW1wbGF0ZVBhcnQoaSkpO1xuICAgIH1cbiAgICBjdHgucHJpbnQoYXN0LCBgWyR7cGFydHMubWFwKHBhcnQgPT4gZXNjYXBlSWRlbnRpZmllcihwYXJ0LmNvb2tlZCwgZmFsc2UpKS5qb2luKCcsICcpfV0sIGApO1xuICAgIGN0eC5wcmludChhc3QsIGBbJHtwYXJ0cy5tYXAocGFydCA9PiBlc2NhcGVJZGVudGlmaWVyKHBhcnQucmF3LCBmYWxzZSkpLmpvaW4oJywgJyl9XSlgKTtcbiAgICBhc3QuZXhwcmVzc2lvbnMuZm9yRWFjaChleHByZXNzaW9uID0+IHtcbiAgICAgIGN0eC5wcmludChhc3QsICcsICcpO1xuICAgICAgZXhwcmVzc2lvbi52aXNpdEV4cHJlc3Npb24odGhpcywgY3R4KTtcbiAgICB9KTtcbiAgICBjdHgucHJpbnQoYXN0LCAnKScpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRQYXJhbXMocGFyYW1zOiBvLkZuUGFyYW1bXSwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0QWxsT2JqZWN0cyhwYXJhbSA9PiBjdHgucHJpbnQobnVsbCwgcGFyYW0ubmFtZSksIHBhcmFtcywgY3R4LCAnLCcpO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0QnVpbHRpbk1ldGhvZE5hbWUobWV0aG9kOiBvLkJ1aWx0aW5NZXRob2QpOiBzdHJpbmcge1xuICAgIGxldCBuYW1lOiBzdHJpbmc7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2Ugby5CdWlsdGluTWV0aG9kLkNvbmNhdEFycmF5OlxuICAgICAgICBuYW1lID0gJ2NvbmNhdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBvLkJ1aWx0aW5NZXRob2QuU3Vic2NyaWJlT2JzZXJ2YWJsZTpcbiAgICAgICAgbmFtZSA9ICdzdWJzY3JpYmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugby5CdWlsdGluTWV0aG9kLkJpbmQ6XG4gICAgICAgIG5hbWUgPSAnYmluZCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGJ1aWx0aW4gbWV0aG9kOiAke21ldGhvZH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbn1cbiJdfQ==