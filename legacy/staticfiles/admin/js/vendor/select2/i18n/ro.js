/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var e = jQuery.fn.select2.amd;
 (e.define("select2/i18n/ro", [], function () {
 return {
 errorLoading: function () {
 return "Rezultatele nu au putut fi incrcate.";
 },
 inputTooLong: function (e) {
 var t = e.input.length - e.maximum,
 n = "V rugm s tergei" + t + " caracter";
 return (1 !== t && (n += "e"), n);
 },
 inputTooShort: function (e) {
 return (
 "V rugm s introducei " +
 (e.minimum - e.input.length) +
 " sau mai multe caractere"
 );
 },
 loadingMore: function () {
 return "Se ncarc mai multe rezultate";
 },
 maximumSelected: function (e) {
 var t = "Avei voie s selectai cel mult " + e.maximum;
 return ((t += " element"), 1 !== e.maximum && (t += "e"), t);
 },
 noResults: function () {
 return "Nu au fost gsite rezultate";
 },
 searching: function () {
 return "Cutare";
 },
 removeAllItems: function () {
 return "Eliminai toate elementele";
 },
 };
 }),
 e.define,
 e.require);
})();