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
        define("@angular/common/locales/hr-BA", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY.
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (v === 0 && (i % 10 === 1 && !(i % 100 === 11)) || f % 10 === 1 && !(f % 100 === 11))
            return 1;
        if (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 2 && i % 10 <= 4) && !(i % 100 >= 12 && i % 100 <= 14)) || f % 10 === Math.floor(f % 10) && (f % 10 >= 2 && f % 10 <= 4) && !(f % 100 >= 12 && f % 100 <= 14))
            return 3;
        return 5;
    }
    exports.default = ["hr-BA", [["AM", "PM"], u, u], u, [["N", "P", "U", "S", "Č", "P", "S"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"], ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"]], u, [["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], ["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], ["siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenoga", "prosinca"]], [["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], ["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"]], [["pr.n.e.", "AD"], ["pr. Kr.", "po. Kr."], ["prije Krista", "poslije Krista"]], 1, [6, 0], ["d. M. yy.", "d. MMM y.", "d. MMMM y.", "EEEE, d. MMMM y."], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss (zzzz)"], ["{1} {0}", u, "{1} 'u' {0}", u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "BAM", "KM", "konvertibilna marka", { "AUD": [u, "$"], "BAM": ["KM"], "BRL": [u, "R$"], "CAD": [u, "$"], "CNY": [u, "¥"], "EUR": [u, "€"], "GBP": [u, "£"], "HKD": [u, "$"], "ILS": [u, "₪"], "INR": [u, "₹"], "JPY": [u, "¥"], "KRW": [u, "₩"], "MXN": [u, "$"], "NZD": [u, "$"], "TWD": [u, "NT$"], "USD": [u, "$"], "VND": [u, "₫"], "XCD": [u, "$"], "XPF": [], "XXX": [] }, "ltr", plural];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHItQkEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9oci1CQS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDBDQUEwQztJQUMxQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN6QixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQ25GLE9BQU8sQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7WUFDck4sT0FBTyxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxrQkFBZSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsRUFBQyxDQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLFNBQVMsRUFBQyxTQUFTLENBQUMsRUFBQyxDQUFDLGNBQWMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsa0JBQWtCLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLHFCQUFxQixFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRlkuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbmNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aCwgZiA9IHBhcnNlSW50KG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLCAxMCkgfHwgMDtcblxuaWYgKHYgPT09IDAgJiYgKGkgJSAxMCA9PT0gMSAmJiAhKGkgJSAxMDAgPT09IDExKSkgfHwgZiAlIDEwID09PSAxICYmICEoZiAlIDEwMCA9PT0gMTEpKVxuICAgIHJldHVybiAxO1xuaWYgKHYgPT09IDAgJiYgKGkgJSAxMCA9PT0gTWF0aC5mbG9vcihpICUgMTApICYmIChpICUgMTAgPj0gMiAmJiBpICUgMTAgPD0gNCkgJiYgIShpICUgMTAwID49IDEyICYmIGkgJSAxMDAgPD0gMTQpKSB8fCBmICUgMTAgPT09IE1hdGguZmxvb3IoZiAlIDEwKSAmJiAoZiAlIDEwID49IDIgJiYgZiAlIDEwIDw9IDQpICYmICEoZiAlIDEwMCA+PSAxMiAmJiBmICUgMTAwIDw9IDE0KSlcbiAgICByZXR1cm4gMztcbnJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXCJoci1CQVwiLFtbXCJBTVwiLFwiUE1cIl0sdSx1XSx1LFtbXCJOXCIsXCJQXCIsXCJVXCIsXCJTXCIsXCLEjFwiLFwiUFwiLFwiU1wiXSxbXCJuZWRcIixcInBvblwiLFwidXRvXCIsXCJzcmlcIixcIsSNZXRcIixcInBldFwiLFwic3ViXCJdLFtcIm5lZGplbGphXCIsXCJwb25lZGplbGpha1wiLFwidXRvcmFrXCIsXCJzcmlqZWRhXCIsXCLEjWV0dnJ0YWtcIixcInBldGFrXCIsXCJzdWJvdGFcIl0sW1wibmVkXCIsXCJwb25cIixcInV0b1wiLFwic3JpXCIsXCLEjWV0XCIsXCJwZXRcIixcInN1YlwiXV0sdSxbW1wiMS5cIixcIjIuXCIsXCIzLlwiLFwiNC5cIixcIjUuXCIsXCI2LlwiLFwiNy5cIixcIjguXCIsXCI5LlwiLFwiMTAuXCIsXCIxMS5cIixcIjEyLlwiXSxbXCJzaWpcIixcInZlbGpcIixcIm/FvnVcIixcInRyYVwiLFwic3ZpXCIsXCJsaXBcIixcInNycFwiLFwia29sXCIsXCJydWpcIixcImxpc1wiLFwic3R1XCIsXCJwcm9cIl0sW1wic2lqZcSNbmphXCIsXCJ2ZWxqYcSNZVwiLFwib8W+dWprYVwiLFwidHJhdm5qYVwiLFwic3ZpYm5qYVwiLFwibGlwbmphXCIsXCJzcnBuamFcIixcImtvbG92b3phXCIsXCJydWpuYVwiLFwibGlzdG9wYWRhXCIsXCJzdHVkZW5vZ2FcIixcInByb3NpbmNhXCJdXSxbW1wiMS5cIixcIjIuXCIsXCIzLlwiLFwiNC5cIixcIjUuXCIsXCI2LlwiLFwiNy5cIixcIjguXCIsXCI5LlwiLFwiMTAuXCIsXCIxMS5cIixcIjEyLlwiXSxbXCJzaWpcIixcInZlbGpcIixcIm/FvnVcIixcInRyYVwiLFwic3ZpXCIsXCJsaXBcIixcInNycFwiLFwia29sXCIsXCJydWpcIixcImxpc1wiLFwic3R1XCIsXCJwcm9cIl0sW1wic2lqZcSNYW5qXCIsXCJ2ZWxqYcSNYVwiLFwib8W+dWpha1wiLFwidHJhdmFualwiLFwic3ZpYmFualwiLFwibGlwYW5qXCIsXCJzcnBhbmpcIixcImtvbG92b3pcIixcInJ1amFuXCIsXCJsaXN0b3BhZFwiLFwic3R1ZGVuaVwiLFwicHJvc2luYWNcIl1dLFtbXCJwci5uLmUuXCIsXCJBRFwiXSxbXCJwci4gS3IuXCIsXCJwby4gS3IuXCJdLFtcInByaWplIEtyaXN0YVwiLFwicG9zbGlqZSBLcmlzdGFcIl1dLDEsWzYsMF0sW1wiZC4gTS4geXkuXCIsXCJkLiBNTU0geS5cIixcImQuIE1NTU0geS5cIixcIkVFRUUsIGQuIE1NTU0geS5cIl0sW1wiSEg6bW1cIixcIkhIOm1tOnNzXCIsXCJISDptbTpzcyB6XCIsXCJISDptbTpzcyAoenp6eilcIl0sW1wiezF9IHswfVwiLHUsXCJ7MX0gJ3UnIHswfVwiLHVdLFtcIixcIixcIi5cIixcIjtcIixcIiVcIixcIitcIixcIi1cIixcIkVcIixcIsOXXCIsXCLigLBcIixcIuKInlwiLFwiTmFOXCIsXCI6XCJdLFtcIiMsIyMwLiMjI1wiLFwiIywjIzDCoCVcIixcIiMsIyMwLjAwwqDCpFwiLFwiI0UwXCJdLFwiQkFNXCIsXCJLTVwiLFwia29udmVydGliaWxuYSBtYXJrYVwiLHtcIkFVRFwiOlt1LFwiJFwiXSxcIkJBTVwiOltcIktNXCJdLFwiQlJMXCI6W3UsXCJSJFwiXSxcIkNBRFwiOlt1LFwiJFwiXSxcIkNOWVwiOlt1LFwiwqVcIl0sXCJFVVJcIjpbdSxcIuKCrFwiXSxcIkdCUFwiOlt1LFwiwqNcIl0sXCJIS0RcIjpbdSxcIiRcIl0sXCJJTFNcIjpbdSxcIuKCqlwiXSxcIklOUlwiOlt1LFwi4oK5XCJdLFwiSlBZXCI6W3UsXCLCpVwiXSxcIktSV1wiOlt1LFwi4oKpXCJdLFwiTVhOXCI6W3UsXCIkXCJdLFwiTlpEXCI6W3UsXCIkXCJdLFwiVFdEXCI6W3UsXCJOVCRcIl0sXCJVU0RcIjpbdSxcIiRcIl0sXCJWTkRcIjpbdSxcIuKCq1wiXSxcIlhDRFwiOlt1LFwiJFwiXSxcIlhQRlwiOltdLFwiWFhYXCI6W119LFwibHRyXCIsIHBsdXJhbF07XG4iXX0=