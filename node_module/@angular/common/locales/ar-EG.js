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
        define("@angular/common/locales/ar-EG", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY.
    var u = undefined;
    function plural(n) {
        if (n === 0)
            return 0;
        if (n === 1)
            return 1;
        if (n === 2)
            return 2;
        if (n % 100 === Math.floor(n % 100) && (n % 100 >= 3 && n % 100 <= 10))
            return 3;
        if (n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 99))
            return 4;
        return 5;
    }
    exports.default = ["ar-EG", [["ص", "م"], u, u], [["ص", "م"], u, ["صباحًا", "مساءً"]], [["ح", "ن", "ث", "ر", "خ", "ج", "س"], ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], u, ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"]], u, [["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"], ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], u], u, [["ق.م", "م"], u, ["قبل الميلاد", "ميلادي"]], 6, [5, 6], ["d‏/M‏/y", "dd‏/MM‏/y", "d MMMM y", "EEEE، d MMMM y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1} {0}", u, u, u], [".", ",", ";", "‎%‎", "‎+", "‎-", "E", "×", "‰", "∞", "ليس رقمًا", ":"], ["#,##0.###", "#,##0%", "¤ #,##0.00", "#E0"], "EGP", "ج.م.‏", "جنيه مصري", { "AED": ["د.إ.‏"], "ARS": [u, "AR$"], "AUD": ["AU$"], "BBD": [u, "BB$"], "BHD": ["د.ب.‏"], "BMD": [u, "BM$"], "BND": [u, "BN$"], "BSD": [u, "BS$"], "BZD": [u, "BZ$"], "CAD": ["CA$"], "CLP": [u, "CL$"], "CNY": ["CN¥"], "COP": [u, "CO$"], "CUP": [u, "CU$"], "DOP": [u, "DO$"], "DZD": ["د.ج.‏"], "EGP": ["ج.م.‏", "E£"], "FJD": [u, "FJ$"], "GBP": ["UK£"], "GYD": [u, "GY$"], "HKD": ["HK$"], "IQD": ["د.ع.‏"], "IRR": ["ر.إ."], "JMD": [u, "JM$"], "JOD": ["د.أ.‏"], "JPY": ["JP¥"], "KWD": ["د.ك.‏"], "KYD": [u, "KY$"], "LBP": ["ل.ل.‏", "L£"], "LRD": [u, "$LR"], "LYD": ["د.ل.‏"], "MAD": ["د.م.‏"], "MRU": ["أ.م."], "MXN": ["MX$"], "NZD": ["NZ$"], "OMR": ["ر.ع.‏"], "QAR": ["ر.ق.‏"], "SAR": ["ر.س.‏"], "SBD": [u, "SB$"], "SDD": ["د.س.‏"], "SDG": ["ج.س."], "SRD": [u, "SR$"], "SYP": ["ل.س.‏", "£"], "THB": ["฿"], "TND": ["د.ت.‏"], "TTD": [u, "TT$"], "TWD": ["NT$"], "USD": ["US$"], "UYU": [u, "UY$"], "XXX": ["***"], "YER": ["ر.ي.‏"] }, "rtl", plural];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXItRUcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9hci1FRy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDBDQUEwQztJQUMxQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUV6QixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUNsRSxPQUFPLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1lBQ25FLE9BQU8sQ0FBQyxDQUFDO1FBQ2IsT0FBTyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsa0JBQWUsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsYUFBYSxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWS5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuXG5pZiAobiA9PT0gMClcbiAgICByZXR1cm4gMDtcbmlmIChuID09PSAxKVxuICAgIHJldHVybiAxO1xuaWYgKG4gPT09IDIpXG4gICAgcmV0dXJuIDI7XG5pZiAobiAlIDEwMCA9PT0gTWF0aC5mbG9vcihuICUgMTAwKSAmJiAobiAlIDEwMCA+PSAzICYmIG4gJSAxMDAgPD0gMTApKVxuICAgIHJldHVybiAzO1xuaWYgKG4gJSAxMDAgPT09IE1hdGguZmxvb3IobiAlIDEwMCkgJiYgKG4gJSAxMDAgPj0gMTEgJiYgbiAlIDEwMCA8PSA5OSkpXG4gICAgcmV0dXJuIDQ7XG5yZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1wiYXItRUdcIixbW1wi2LVcIixcItmFXCJdLHUsdV0sW1tcIti1XCIsXCLZhVwiXSx1LFtcIti12KjYp9it2YvYp1wiLFwi2YXYs9in2KHZi1wiXV0sW1tcItitXCIsXCLZhlwiLFwi2KtcIixcItixXCIsXCLYrlwiLFwi2KxcIixcItizXCJdLFtcItin2YTYo9it2K9cIixcItin2YTYp9ir2YbZitmGXCIsXCLYp9mE2KvZhNin2KvYp9ihXCIsXCLYp9mE2KPYsdio2LnYp9ihXCIsXCLYp9mE2K7ZhdmK2LNcIixcItin2YTYrNmF2LnYqVwiLFwi2KfZhNiz2KjYqlwiXSx1LFtcItij2K3Yr1wiLFwi2KXYq9mG2YrZhlwiLFwi2KvZhNin2KvYp9ihXCIsXCLYo9ix2KjYudin2KFcIixcItiu2YXZitizXCIsXCLYrNmF2LnYqVwiLFwi2LPYqNiqXCJdXSx1LFtbXCLZilwiLFwi2YFcIixcItmFXCIsXCLYo1wiLFwi2YhcIixcItmGXCIsXCLZhFwiLFwi2LpcIixcItizXCIsXCLZg1wiLFwi2KhcIixcItivXCJdLFtcItmK2YbYp9mK2LFcIixcItmB2KjYsdin2YrYsVwiLFwi2YXYp9ix2LNcIixcItij2KjYsdmK2YRcIixcItmF2KfZitmIXCIsXCLZitmI2YbZitmIXCIsXCLZitmI2YTZitmIXCIsXCLYo9i62LPYt9izXCIsXCLYs9io2KrZhdio2LFcIixcItij2YPYqtmI2KjYsVwiLFwi2YbZiNmB2YXYqNixXCIsXCLYr9mK2LPZhdio2LFcIl0sdV0sdSxbW1wi2YIu2YVcIixcItmFXCJdLHUsW1wi2YLYqNmEINin2YTZhdmK2YTYp9ivXCIsXCLZhdmK2YTYp9iv2YpcIl1dLDYsWzUsNl0sW1wiZOKAjy9N4oCPL3lcIixcImRk4oCPL01N4oCPL3lcIixcImQgTU1NTSB5XCIsXCJFRUVF2IwgZCBNTU1NIHlcIl0sW1wiaDptbSBhXCIsXCJoOm1tOnNzIGFcIixcImg6bW06c3MgYSB6XCIsXCJoOm1tOnNzIGEgenp6elwiXSxbXCJ7MX0gezB9XCIsdSx1LHVdLFtcIi5cIixcIixcIixcIjtcIixcIuKAjiXigI5cIixcIuKAjitcIixcIuKAji1cIixcIkVcIixcIsOXXCIsXCLigLBcIixcIuKInlwiLFwi2YTZitizwqDYsdmC2YXZi9inXCIsXCI6XCJdLFtcIiMsIyMwLiMjI1wiLFwiIywjIzAlXCIsXCLCpMKgIywjIzAuMDBcIixcIiNFMFwiXSxcIkVHUFwiLFwi2Kwu2YUu4oCPXCIsXCLYrNmG2YrZhyDZhdi12LHZilwiLHtcIkFFRFwiOltcItivLtilLuKAj1wiXSxcIkFSU1wiOlt1LFwiQVIkXCJdLFwiQVVEXCI6W1wiQVUkXCJdLFwiQkJEXCI6W3UsXCJCQiRcIl0sXCJCSERcIjpbXCLYry7YqC7igI9cIl0sXCJCTURcIjpbdSxcIkJNJFwiXSxcIkJORFwiOlt1LFwiQk4kXCJdLFwiQlNEXCI6W3UsXCJCUyRcIl0sXCJCWkRcIjpbdSxcIkJaJFwiXSxcIkNBRFwiOltcIkNBJFwiXSxcIkNMUFwiOlt1LFwiQ0wkXCJdLFwiQ05ZXCI6W1wiQ07CpVwiXSxcIkNPUFwiOlt1LFwiQ08kXCJdLFwiQ1VQXCI6W3UsXCJDVSRcIl0sXCJET1BcIjpbdSxcIkRPJFwiXSxcIkRaRFwiOltcItivLtisLuKAj1wiXSxcIkVHUFwiOltcItisLtmFLuKAj1wiLFwiRcKjXCJdLFwiRkpEXCI6W3UsXCJGSiRcIl0sXCJHQlBcIjpbXCJVS8KjXCJdLFwiR1lEXCI6W3UsXCJHWSRcIl0sXCJIS0RcIjpbXCJISyRcIl0sXCJJUURcIjpbXCLYry7YuS7igI9cIl0sXCJJUlJcIjpbXCLYsS7YpS5cIl0sXCJKTURcIjpbdSxcIkpNJFwiXSxcIkpPRFwiOltcItivLtijLuKAj1wiXSxcIkpQWVwiOltcIkpQwqVcIl0sXCJLV0RcIjpbXCLYry7Zgy7igI9cIl0sXCJLWURcIjpbdSxcIktZJFwiXSxcIkxCUFwiOltcItmELtmELuKAj1wiLFwiTMKjXCJdLFwiTFJEXCI6W3UsXCIkTFJcIl0sXCJMWURcIjpbXCLYry7ZhC7igI9cIl0sXCJNQURcIjpbXCLYry7ZhS7igI9cIl0sXCJNUlVcIjpbXCLYoy7ZhS5cIl0sXCJNWE5cIjpbXCJNWCRcIl0sXCJOWkRcIjpbXCJOWiRcIl0sXCJPTVJcIjpbXCLYsS7YuS7igI9cIl0sXCJRQVJcIjpbXCLYsS7Zgi7igI9cIl0sXCJTQVJcIjpbXCLYsS7Ysy7igI9cIl0sXCJTQkRcIjpbdSxcIlNCJFwiXSxcIlNERFwiOltcItivLtizLuKAj1wiXSxcIlNER1wiOltcItisLtizLlwiXSxcIlNSRFwiOlt1LFwiU1IkXCJdLFwiU1lQXCI6W1wi2YQu2LMu4oCPXCIsXCLCo1wiXSxcIlRIQlwiOltcIuC4v1wiXSxcIlRORFwiOltcItivLtiqLuKAj1wiXSxcIlRURFwiOlt1LFwiVFQkXCJdLFwiVFdEXCI6W1wiTlQkXCJdLFwiVVNEXCI6W1wiVVMkXCJdLFwiVVlVXCI6W3UsXCJVWSRcIl0sXCJYWFhcIjpbXCIqKipcIl0sXCJZRVJcIjpbXCLYsS7Zii7igI9cIl19LFwicnRsXCIsIHBsdXJhbF07XG4iXX0=