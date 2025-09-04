/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/tr", [], function () {
 return {
 errorLoading: function () {
 return "Sonu yklenemedi";
 },
 inputTooLong: function (n) {
 return n.input.length - n.maximum + " karakter daha girmelisiniz";
 },
 inputTooShort: function (n) {
 return (
 "En az " +
 (n.minimum - n.input.length) +
 " karakter daha girmelisiniz"
 );
 },
 loadingMore: function () {
 return "Daha fazla";
 },
 maximumSelected: function (n) {
 return "Sadece " + n.maximum + " seim yapabilirsiniz";
 },
 noResults: function () {
 return "Sonu bulunamad";
 },
 searching: function () {
 return "Aranyor";
 },
 removeAllItems: function () {
 return "Tm eleri kaldr";
 },
 };
 }),
 n.define,
 n.require);
})();