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
        define("@angular/common/locales/ff-CM", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // **Note**: Locale files are generated through Bazel and never part of the sources. This is an
    // exception for backwards compatibility. With the Gulp setup we never deleted old locale files
    // when updating CLDR, so older locale files which have been removed, or renamed in the CLDR
    // data remained in the repository. We keep these files checked-in until the next major to avoid
    // potential breaking changes. It's worth noting that the locale data for such files is outdated
    // anyway. e.g. the data is missing the directionality, throwing off the indices.
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n));
        if (i === 0 || i === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'ff-CM', [['subaka', 'kikiiɗe'], u, u], u,
        [
            ['d', 'a', 'm', 'n', 'n', 'm', 'h'], ['dew', 'aaɓ', 'maw', 'nje', 'naa', 'mwd', 'hbi'],
            ['dewo', 'aaɓnde', 'mawbaare', 'njeslaare', 'naasaande', 'mawnde', 'hoore-biir'],
            ['dew', 'aaɓ', 'maw', 'nje', 'naa', 'mwd', 'hbi']
        ],
        u,
        [
            ['s', 'c', 'm', 's', 'd', 'k', 'm', 'j', 's', 'y', 'j', 'b'],
            ['sii', 'col', 'mbo', 'see', 'duu', 'kor', 'mor', 'juk', 'slt', 'yar', 'jol', 'bow'],
            [
                'siilo', 'colte', 'mbooy', 'seeɗto', 'duujal', 'korse', 'morso', 'juko', 'siilto', 'yarkomaa',
                'jolal', 'bowte'
            ]
        ],
        u, [['H-I', 'C-I'], u, ['Hade Iisa', 'Caggal Iisa']], 1, [6, 0],
        ['d/M/y', 'd MMM, y', 'd MMMM y', 'EEEE d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], 'FCFA', 'Mbuuɗi Seefaa BEAC',
        { 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'] }, plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmYtQ00uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9mZi1DTS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILCtGQUErRjtJQUMvRiwrRkFBK0Y7SUFDL0YsNEZBQTRGO0lBQzVGLGdHQUFnRztJQUNoRyxnR0FBZ0c7SUFDaEcsaUZBQWlGO0lBRWpGLElBQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUVwQixTQUFTLE1BQU0sQ0FBQyxDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekM7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RGLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDO1lBQ2hGLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1NBQ2xEO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3BGO2dCQUNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVU7Z0JBQzdGLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1NBQ0Y7UUFDRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDO1FBQ2xELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUM5RCxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxvQkFBb0I7UUFDMUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFDLEVBQUUsTUFBTTtLQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vICoqTm90ZSoqOiBMb2NhbGUgZmlsZXMgYXJlIGdlbmVyYXRlZCB0aHJvdWdoIEJhemVsIGFuZCBuZXZlciBwYXJ0IG9mIHRoZSBzb3VyY2VzLiBUaGlzIGlzIGFuXG4vLyBleGNlcHRpb24gZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBXaXRoIHRoZSBHdWxwIHNldHVwIHdlIG5ldmVyIGRlbGV0ZWQgb2xkIGxvY2FsZSBmaWxlc1xuLy8gd2hlbiB1cGRhdGluZyBDTERSLCBzbyBvbGRlciBsb2NhbGUgZmlsZXMgd2hpY2ggaGF2ZSBiZWVuIHJlbW92ZWQsIG9yIHJlbmFtZWQgaW4gdGhlIENMRFJcbi8vIGRhdGEgcmVtYWluZWQgaW4gdGhlIHJlcG9zaXRvcnkuIFdlIGtlZXAgdGhlc2UgZmlsZXMgY2hlY2tlZC1pbiB1bnRpbCB0aGUgbmV4dCBtYWpvciB0byBhdm9pZFxuLy8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIEl0J3Mgd29ydGggbm90aW5nIHRoYXQgdGhlIGxvY2FsZSBkYXRhIGZvciBzdWNoIGZpbGVzIGlzIG91dGRhdGVkXG4vLyBhbnl3YXkuIGUuZy4gdGhlIGRhdGEgaXMgbWlzc2luZyB0aGUgZGlyZWN0aW9uYWxpdHksIHRocm93aW5nIG9mZiB0aGUgaW5kaWNlcy5cblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XG4gIGlmIChpID09PSAwIHx8IGkgPT09IDEpIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnZmYtQ00nLCBbWydzdWJha2EnLCAna2lraWnJl2UnXSwgdSwgdV0sIHUsXG4gIFtcbiAgICBbJ2QnLCAnYScsICdtJywgJ24nLCAnbicsICdtJywgJ2gnXSwgWydkZXcnLCAnYWHJkycsICdtYXcnLCAnbmplJywgJ25hYScsICdtd2QnLCAnaGJpJ10sXG4gICAgWydkZXdvJywgJ2FhyZNuZGUnLCAnbWF3YmFhcmUnLCAnbmplc2xhYXJlJywgJ25hYXNhYW5kZScsICdtYXduZGUnLCAnaG9vcmUtYmlpciddLFxuICAgIFsnZGV3JywgJ2FhyZMnLCAnbWF3JywgJ25qZScsICduYWEnLCAnbXdkJywgJ2hiaSddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ3MnLCAnYycsICdtJywgJ3MnLCAnZCcsICdrJywgJ20nLCAnaicsICdzJywgJ3knLCAnaicsICdiJ10sXG4gICAgWydzaWknLCAnY29sJywgJ21ibycsICdzZWUnLCAnZHV1JywgJ2tvcicsICdtb3InLCAnanVrJywgJ3NsdCcsICd5YXInLCAnam9sJywgJ2JvdyddLFxuICAgIFtcbiAgICAgICdzaWlsbycsICdjb2x0ZScsICdtYm9veScsICdzZWXJl3RvJywgJ2R1dWphbCcsICdrb3JzZScsICdtb3JzbycsICdqdWtvJywgJ3NpaWx0bycsICd5YXJrb21hYScsXG4gICAgICAnam9sYWwnLCAnYm93dGUnXG4gICAgXVxuICBdLFxuICB1LCBbWydILUknLCAnQy1JJ10sIHUsIFsnSGFkZSBJaXNhJywgJ0NhZ2dhbCBJaXNhJ11dLCAxLCBbNiwgMF0sXG4gIFsnZC9NL3knLCAnZCBNTU0sIHknLCAnZCBNTU1NIHknLCAnRUVFRSBkIE1NTU0geSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLCBbJ3sxfSB7MH0nLCB1LCB1LCB1XSxcbiAgWycsJywgJ8KgJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sICdGQ0ZBJywgJ01idXXJl2kgU2VlZmFhIEJFQUMnLFxuICB7J0pQWSc6IFsnSlDCpScsICfCpSddLCAnVVNEJzogWydVUyQnLCAnJCddfSwgcGx1cmFsXG5dO1xuIl19