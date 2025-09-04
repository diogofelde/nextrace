/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var e = jQuery.fn.select2.amd;
 (e.define("select2/i18n/lv", [], function () {
 function e(e, n, u, i) {
 return 11 === e ? n : e % 10 == 1 ? u : i;
 }
 return {
 inputTooLong: function (n) {
 var u = n.input.length - n.maximum,
 i = "Ldzu ievadiet par " + u;
 return (i += " simbol" + e(u, "iem", "u", "iem")) + " mazk";
 },
 inputTooShort: function (n) {
 var u = n.minimum - n.input.length,
 i = "Ldzu ievadiet vl " + u;
 return (i += " simbol" + e(u, "us", "u", "us"));
 },
 loadingMore: function () {
 return "Datu ielde";
 },
 maximumSelected: function (n) {
 var u = "Js varat izvlties ne vairk k " + n.maximum;
 return (u += " element" + e(n.maximum, "us", "u", "us"));
 },
 noResults: function () {
 return "Sakritbu nav";
 },
 searching: function () {
 return "Meklana";
 },
 removeAllItems: function () {
 return "Noemt visus vienumus";
 },
 };
 }),
 e.define,
 e.require);
})();