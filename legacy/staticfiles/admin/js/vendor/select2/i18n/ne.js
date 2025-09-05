/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/ne", [], function () {
 return {
 errorLoading: function () {
 return "  ";
 },
 inputTooLong: function (n) {
 var e = n.input.length - n.maximum,
 u = " " + e + "  ";
 return (1 != e && (u += " " + e + "  "), u);
 },
 inputTooShort: function (n) {
 return (
 "   " +
 (n.minimum - n.input.length) +
 "     "
 );
 },
 loadingMore: function () {
 return "   ";
 },
 maximumSelected: function (n) {
 var e = " " + n.maximum + "    ";
 return (
 1 != n.maximum &&
 (e = " " + n.maximum + "    "),
 e
 );
 },
 noResults: function () {
 return "   ";
 },
 searching: function () {
 return " ";
 },
 };
 }),
 n.define,
 n.require);
})();