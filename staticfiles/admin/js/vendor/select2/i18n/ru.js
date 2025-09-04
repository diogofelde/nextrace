/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/ru", [], function () {
 function n(n, e, r, u) {
 return (n % 10 < 5 && n % 10 > 0 && n % 100 < 5) || n % 100 > 20
 ? n % 10 > 1
 ? r
 : e
 : u;
 }
 return {
 errorLoading: function () {
 return "  ";
 },
 inputTooLong: function (e) {
 var r = e.input.length - e.maximum,
 u = ",   " + r + " ";
 return ((u += n(r, "", "a", "")), (u += " "));
 },
 inputTooShort: function (e) {
 var r = e.minimum - e.input.length,
 u = ",     " + r + " ";
 return (u += n(r, "", "a", ""));
 },
 loadingMore: function () {
 return " ";
 },
 maximumSelected: function (e) {
 var r = "     " + e.maximum + " ";
 return (r += n(e.maximum, "", "a", ""));
 },
 noResults: function () {
 return "  ";
 },
 searching: function () {
 return "";
 },
 removeAllItems: function () {
 return "  ";
 },
 };
 }),
 n.define,
 n.require);
})();