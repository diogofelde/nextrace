/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/vi", [], function () {
 return {
 inputTooLong: function (n) {
 return "Vui lng xa bt " + (n.input.length - n.maximum) + " k t";
 },
 inputTooShort: function (n) {
 return (
 "Vui lng nhp thm t " +
 (n.minimum - n.input.length) +
 " k t tr ln"
 );
 },
 loadingMore: function () {
 return "ang ly thm kt qu";
 },
 maximumSelected: function (n) {
 return "Ch c th chn c " + n.maximum + " la chn";
 },
 noResults: function () {
 return "Khng tm thy kt qu";
 },
 searching: function () {
 return "ang tm";
 },
 removeAllItems: function () {
 return "Xa tt c cc mc";
 },
 };
 }),
 n.define,
 n.require);
})();