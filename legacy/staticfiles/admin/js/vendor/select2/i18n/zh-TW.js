/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/zh-TW", [], function () {
 return {
 inputTooLong: function (n) {
 return "" + (n.input.length - n.maximum) + "";
 },
 inputTooShort: function (n) {
 return "" + (n.minimum - n.input.length) + "";
 },
 loadingMore: function () {
 return "";
 },
 maximumSelected: function (n) {
 return "" + n.maximum + "";
 },
 noResults: function () {
 return "";
 },
 searching: function () {
 return "";
 },
 removeAllItems: function () {
 return "";
 },
 };
 }),
 n.define,
 n.require);
})();