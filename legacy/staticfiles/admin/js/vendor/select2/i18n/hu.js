/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var e = jQuery.fn.select2.amd;
 (e.define("select2/i18n/hu", [], function () {
 return {
 errorLoading: function () {
 return "Az eredmnyek betltse nem sikerlt.";
 },
 inputTooLong: function (e) {
 return (
 "Tl hossz. " +
 (e.input.length - e.maximum) +
 " karakterrel tbb, mint kellene."
 );
 },
 inputTooShort: function (e) {
 return (
 "Tl rvid. Mg " +
 (e.minimum - e.input.length) +
 " karakter hinyzik."
 );
 },
 loadingMore: function () {
 return "Tlts";
 },
 maximumSelected: function (e) {
 return "Csak " + e.maximum + " elemet lehet kivlasztani.";
 },
 noResults: function () {
 return "Nincs tallat.";
 },
 searching: function () {
 return "Keress";
 },
 removeAllItems: function () {
 return "Tvoltson el minden elemet";
 },
 };
 }),
 e.define,
 e.require);
})();