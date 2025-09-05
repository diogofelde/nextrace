/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/dsb", [], function () {
 var n = ["znamuko", "znamuce", "znamuka", "znamukow"],
 e = ["zapisk", "zapiska", "zapiski", "zapiskow"],
 u = function (n, e) {
 return 1 === n
 ? e[0]
 : 2 === n
 ? e[1]
 : n > 2 && n <= 4
 ? e[2]
 : n >= 5
 ? e[3]
 : void 0;
 };
 return {
 errorLoading: function () {
 return "Wusldki njejsu se dali zacyta.";
 },
 inputTooLong: function (e) {
 var a = e.input.length - e.maximum;
 return "Posym lauj " + a + " " + u(a, n);
 },
 inputTooShort: function (e) {
 var a = e.minimum - e.input.length;
 return "Posym zapdaj nanejmjenjej " + a + " " + u(a, n);
 },
 loadingMore: function () {
 return "Dalne wusldki se zacytaju";
 },
 maximumSelected: function (n) {
 return "Mo jano " + n.maximum + " " + u(n.maximum, e) + "wubra.";
 },
 noResults: function () {
 return "edne wusldki namakane";
 },
 searching: function () {
 return "Pyta se";
 },
 removeAllItems: function () {
 return "Remove all items";
 },
 };
 }),
 n.define,
 n.require);
})();