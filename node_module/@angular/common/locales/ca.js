/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/ca", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY.
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = ["ca", [["a. m.", "p. m."], u, u], u, [["dg", "dl", "dt", "dc", "dj", "dv", "ds"], ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."], ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"], ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."]], u, [["GN", "FB", "MÇ", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"], ["de gen.", "de febr.", "de març", "d’abr.", "de maig", "de juny", "de jul.", "d’ag.", "de set.", "d’oct.", "de nov.", "de des."], ["de gener", "de febrer", "de març", "d’abril", "de maig", "de juny", "de juliol", "d’agost", "de setembre", "d’octubre", "de novembre", "de desembre"]], [["GN", "FB", "MÇ", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"], ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."], ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"]], [["aC", "dC"], u, ["abans de Crist", "després de Crist"]], 1, [6, 0], ["d/M/yy", "d MMM y", "d MMMM 'de' y", "EEEE, d MMMM 'de' y"], ["H:mm", "H:mm:ss", "H:mm:ss z", "H:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} 'a' 'les' {0}", u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00 ¤", "#E0"], "EUR", "€", "euro", { "AUD": ["AU$", "$"], "BRL": [u, "R$"], "CAD": [u, "$"], "CNY": [u, "¥"], "ESP": ["₧"], "MXN": [u, "$"], "THB": ["฿"], "USD": [u, "$"], "VEF": [u, "Bs F"], "XCD": [u, "$"], "XXX": [] }, "ltr", plural];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2EuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9jYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDBDQUEwQztJQUMxQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN6QixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRXBGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNsQixPQUFPLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELGtCQUFlLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsRUFBQyxDQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLGdCQUFnQixFQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxxQkFBcUIsQ0FBQyxFQUFDLENBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsY0FBYyxDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZLlxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG5jb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGg7XG5cbmlmIChpID09PSAxICYmIHYgPT09IDApXG4gICAgcmV0dXJuIDE7XG5yZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1wiY2FcIixbW1wiYS7CoG0uXCIsXCJwLsKgbS5cIl0sdSx1XSx1LFtbXCJkZ1wiLFwiZGxcIixcImR0XCIsXCJkY1wiLFwiZGpcIixcImR2XCIsXCJkc1wiXSxbXCJkZy5cIixcImRsLlwiLFwiZHQuXCIsXCJkYy5cIixcImRqLlwiLFwiZHYuXCIsXCJkcy5cIl0sW1wiZGl1bWVuZ2VcIixcImRpbGx1bnNcIixcImRpbWFydHNcIixcImRpbWVjcmVzXCIsXCJkaWpvdXNcIixcImRpdmVuZHJlc1wiLFwiZGlzc2FidGVcIl0sW1wiZGcuXCIsXCJkbC5cIixcImR0LlwiLFwiZGMuXCIsXCJkai5cIixcImR2LlwiLFwiZHMuXCJdXSx1LFtbXCJHTlwiLFwiRkJcIixcIk3Dh1wiLFwiQUJcIixcIk1HXCIsXCJKTlwiLFwiSkxcIixcIkFHXCIsXCJTVFwiLFwiT0NcIixcIk5WXCIsXCJEU1wiXSxbXCJkZSBnZW4uXCIsXCJkZSBmZWJyLlwiLFwiZGUgbWFyw6dcIixcImTigJlhYnIuXCIsXCJkZSBtYWlnXCIsXCJkZSBqdW55XCIsXCJkZSBqdWwuXCIsXCJk4oCZYWcuXCIsXCJkZSBzZXQuXCIsXCJk4oCZb2N0LlwiLFwiZGUgbm92LlwiLFwiZGUgZGVzLlwiXSxbXCJkZSBnZW5lclwiLFwiZGUgZmVicmVyXCIsXCJkZSBtYXLDp1wiLFwiZOKAmWFicmlsXCIsXCJkZSBtYWlnXCIsXCJkZSBqdW55XCIsXCJkZSBqdWxpb2xcIixcImTigJlhZ29zdFwiLFwiZGUgc2V0ZW1icmVcIixcImTigJlvY3R1YnJlXCIsXCJkZSBub3ZlbWJyZVwiLFwiZGUgZGVzZW1icmVcIl1dLFtbXCJHTlwiLFwiRkJcIixcIk3Dh1wiLFwiQUJcIixcIk1HXCIsXCJKTlwiLFwiSkxcIixcIkFHXCIsXCJTVFwiLFwiT0NcIixcIk5WXCIsXCJEU1wiXSxbXCJnZW4uXCIsXCJmZWJyLlwiLFwibWFyw6dcIixcImFici5cIixcIm1haWdcIixcImp1bnlcIixcImp1bC5cIixcImFnLlwiLFwic2V0LlwiLFwib2N0LlwiLFwibm92LlwiLFwiZGVzLlwiXSxbXCJnZW5lclwiLFwiZmVicmVyXCIsXCJtYXLDp1wiLFwiYWJyaWxcIixcIm1haWdcIixcImp1bnlcIixcImp1bGlvbFwiLFwiYWdvc3RcIixcInNldGVtYnJlXCIsXCJvY3R1YnJlXCIsXCJub3ZlbWJyZVwiLFwiZGVzZW1icmVcIl1dLFtbXCJhQ1wiLFwiZENcIl0sdSxbXCJhYmFucyBkZSBDcmlzdFwiLFwiZGVzcHLDqXMgZGUgQ3Jpc3RcIl1dLDEsWzYsMF0sW1wiZC9NL3l5XCIsXCJkIE1NTSB5XCIsXCJkIE1NTU0gJ2RlJyB5XCIsXCJFRUVFLCBkIE1NTU0gJ2RlJyB5XCJdLFtcIkg6bW1cIixcIkg6bW06c3NcIixcIkg6bW06c3MgelwiLFwiSDptbTpzcyB6enp6XCJdLFtcInsxfSB7MH1cIixcInsxfSwgezB9XCIsXCJ7MX0gJ2EnICdsZXMnIHswfVwiLHVdLFtcIixcIixcIi5cIixcIjtcIixcIiVcIixcIitcIixcIi1cIixcIkVcIixcIsOXXCIsXCLigLBcIixcIuKInlwiLFwiTmFOXCIsXCI6XCJdLFtcIiMsIyMwLiMjI1wiLFwiIywjIzAlXCIsXCIjLCMjMC4wMMKgwqRcIixcIiNFMFwiXSxcIkVVUlwiLFwi4oKsXCIsXCJldXJvXCIse1wiQVVEXCI6W1wiQVUkXCIsXCIkXCJdLFwiQlJMXCI6W3UsXCJSJFwiXSxcIkNBRFwiOlt1LFwiJFwiXSxcIkNOWVwiOlt1LFwiwqVcIl0sXCJFU1BcIjpbXCLigqdcIl0sXCJNWE5cIjpbdSxcIiRcIl0sXCJUSEJcIjpbXCLguL9cIl0sXCJVU0RcIjpbdSxcIiRcIl0sXCJWRUZcIjpbdSxcIkJzIEZcIl0sXCJYQ0RcIjpbdSxcIiRcIl0sXCJYWFhcIjpbXX0sXCJsdHJcIiwgcGx1cmFsXTtcbiJdfQ==