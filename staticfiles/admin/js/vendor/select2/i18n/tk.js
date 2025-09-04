/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var e = jQuery.fn.select2.amd;
 (e.define("select2/i18n/tk", [], function () {
 return {
 errorLoading: function () {
 return "Netije klenmedi.";
 },
 inputTooLong: function (e) {
 return e.input.length - e.maximum + " harp bozu.";
 },
 inputTooShort: function (e) {
 return "ene-de i az " + (e.minimum - e.input.length) + " harp azy.";
 },
 loadingMore: function () {
 return "Kprk netije grkezilr";
 },
 maximumSelected: function (e) {
 return "Die " + e.maximum + " sanysyny sala.";
 },
 noResults: function () {
 return "Netije tapylmady.";
 },
 searching: function () {
 return "Gzlenr";
 },
 removeAllItems: function () {
 return "Remove all items";
 },
 };
 }),
 e.define,
 e.require);
})();