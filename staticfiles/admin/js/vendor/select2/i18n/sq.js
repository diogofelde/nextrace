/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var e = jQuery.fn.select2.amd;
 (e.define("select2/i18n/sq", [], function () {
 return {
 errorLoading: function () {
 return "Rezultatet nuk mund t ngarkoheshin.";
 },
 inputTooLong: function (e) {
 var n = e.input.length - e.maximum,
 t = "T lutem fshi " + n + " karakter";
 return (1 != n && (t += "e"), t);
 },
 inputTooShort: function (e) {
 return (
 "T lutem shkruaj " +
 (e.minimum - e.input.length) +
 " ose m shum karaktere"
 );
 },
 loadingMore: function () {
 return "Duke ngarkuar m shum rezultate";
 },
 maximumSelected: function (e) {
 var n = "Mund t zgjedhsh vetm " + e.maximum + " element";
 return (1 != e.maximum && (n += "e"), n);
 },
 noResults: function () {
 return "Nuk u gjet asnj rezultat";
 },
 searching: function () {
 return "Duke krkuar";
 },
 removeAllItems: function () {
 return "Hiq t gjitha sendet";
 },
 };
 }),
 e.define,
 e.require);
})();