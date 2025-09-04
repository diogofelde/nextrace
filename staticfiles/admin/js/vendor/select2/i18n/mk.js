/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/mk", [], function () {
 return {
 inputTooLong: function (n) {
 var e =
 (n.input.length,
 n.maximum,
 "   " + n.maximum + "  ");
 return (1 !== n.maximum && (e += ""), e);
 },
 inputTooShort: function (n) {
 var e =
 (n.minimum,
 n.input.length,
 "    " + n.maximum + " ");
 return (1 !== n.maximum && (e += ""), e);
 },
 loadingMore: function () {
 return " ";
 },
 maximumSelected: function (n) {
 var e = "    " + n.maximum + " ";
 return (1 === n.maximum ? (e += "") : (e += ""), e);
 },
 noResults: function () {
 return "  ";
 },
 searching: function () {
 return "";
 },
 removeAllItems: function () {
 return "   ";
 },
 };
 }),
 n.define,
 n.require);
})();