/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/hsb", [], function () {
 var n = ["znamjeko", "znamjece", "znamjeka", "znamjekow"],
 e = ["zapisk", "zapiskaj", "zapiski", "zapiskow"],
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
 return "Wusldki njedachu so zaita.";
 },
 inputTooLong: function (e) {
 var a = e.input.length - e.maximum;
 return "Prou zhaej " + a + " " + u(a, n);
 },
 inputTooShort: function (e) {
 var a = e.minimum - e.input.length;
 return "Prou zapodaj znajmjea " + a + " " + u(a, n);
 },
 loadingMore: function () {
 return "Dale wusldki so zaitaja";
 },
 maximumSelected: function (n) {
 return "Me jeno " + n.maximum + " " + u(n.maximum, e) + "wubra";
 },
 noResults: function () {
 return "ane wusldki namakane";
 },
 searching: function () {
 return "Pyta so";
 },
 removeAllItems: function () {
 return "Remove all items";
 },
 };
 }),
 n.define,
 n.require);
})();