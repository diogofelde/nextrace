/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/lt", [], function () {
 function n(n, e, i, t) {
 return n % 10 == 1 && (n % 100 < 11 || n % 100 > 19)
 ? e
 : n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19)
 ? i
 : t;
 }
 return {
 inputTooLong: function (e) {
 var i = e.input.length - e.maximum,
 t = "Paalinkite " + i + " simbol";
 return (t += n(i, "", "ius", "i"));
 },
 inputTooShort: function (e) {
 var i = e.minimum - e.input.length,
 t = "raykite dar " + i + " simbol";
 return (t += n(i, "", "ius", "i"));
 },
 loadingMore: function () {
 return "Kraunama daugiau rezultat";
 },
 maximumSelected: function (e) {
 var i = "Js galite pasirinkti tik " + e.maximum + " element";
 return (i += n(e.maximum, "", "us", ""));
 },
 noResults: function () {
 return "Atitikmen nerasta";
 },
 searching: function () {
 return "Iekoma";
 },
 removeAllItems: function () {
 return "Paalinti visus elementus";
 },
 };
 }),
 n.define,
 n.require);
})();