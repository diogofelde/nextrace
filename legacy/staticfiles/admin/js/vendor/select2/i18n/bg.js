/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/bg", [], function () {
 return {
 inputTooLong: function (n) {
 var e = n.input.length - n.maximum,
 u = "   " + e + " - ";
 return (e > 1 && (u += "a"), u);
 },
 inputTooShort: function (n) {
 var e = n.minimum - n.input.length,
 u = "   " + e + " ";
 return (e > 1 && (u += "a"), u);
 },
 loadingMore: function () {
 return "  ";
 },
 maximumSelected: function (n) {
 var e = "    " + n.maximum + " ";
 return (n.maximum > 1 ? (e += "") : (e += ""), e);
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