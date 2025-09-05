/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/pl", [], function () {
 var n = ["znak", "znaki", "znakw"],
 e = ["element", "elementy", "elementw"],
 r = function (n, e) {
 return 1 === n ? e[0] : n > 1 && n <= 4 ? e[1] : n >= 5 ? e[2] : void 0;
 };
 return {
 errorLoading: function () {
 return "Nie mona zaadowa wynikw.";
 },
 inputTooLong: function (e) {
 var t = e.input.length - e.maximum;
 return "Usu " + t + " " + r(t, n);
 },
 inputTooShort: function (e) {
 var t = e.minimum - e.input.length;
 return "Podaj przynajmniej " + t + " " + r(t, n);
 },
 loadingMore: function () {
 return "Trwa adowanie";
 },
 maximumSelected: function (n) {
 return "Moesz zaznaczy tylko " + n.maximum + " " + r(n.maximum, e);
 },
 noResults: function () {
 return "Brak wynikw";
 },
 searching: function () {
 return "Trwa wyszukiwanie";
 },
 removeAllItems: function () {
 return "Usu wszystkie przedmioty";
 },
 };
 }),
 n.define,
 n.require);
})();