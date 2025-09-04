/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/uk", [], function () {
 function n(n, e, u, r) {
 return n % 100 > 10 && n % 100 < 15
 ? r
 : n % 10 == 1
 ? e
 : n % 10 > 1 && n % 10 < 5
 ? u
 : r;
 }
 return {
 errorLoading: function () {
 return "  ";
 },
 inputTooLong: function (e) {
 return (
 " ,  " +
 (e.input.length - e.maximum) +
 " " +
 n(e.maximum, "", "", "")
 );
 },
 inputTooShort: function (n) {
 return (
 " ,  " +
 (n.minimum - n.input.length) +
 "   "
 );
 },
 loadingMore: function () {
 return "  ";
 },
 maximumSelected: function (e) {
 return (
 "    " +
 e.maximum +
 " " +
 n(e.maximum, "", "", "")
 );
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