/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var e = jQuery.fn.select2.amd;
 (e.define("select2/i18n/sk", [], function () {
 var e = {
 2: function (e) {
 return e ? "dva" : "dve";
 },
 3: function () {
 return "tri";
 },
 4: function () {
 return "tyri";
 },
 };
 return {
 errorLoading: function () {
 return "Vsledky sa nepodarilo nata.";
 },
 inputTooLong: function (n) {
 var t = n.input.length - n.maximum;
 return 1 == t
 ? "Prosm, zadajte o jeden znak menej"
 : t >= 2 && t <= 4
 ? "Prosm, zadajte o " + e[t](!0) + " znaky menej"
 : "Prosm, zadajte o " + t + " znakov menej";
 },
 inputTooShort: function (n) {
 var t = n.minimum - n.input.length;
 return 1 == t
 ? "Prosm, zadajte ete jeden znak"
 : t <= 4
 ? "Prosm, zadajte ete alie " + e[t](!0) + " znaky"
 : "Prosm, zadajte ete alch " + t + " znakov";
 },
 loadingMore: function () {
 return "Natanie alch vsledkov";
 },
 maximumSelected: function (n) {
 return 1 == n.maximum
 ? "Mete zvoli len jednu poloku"
 : n.maximum >= 2 && n.maximum <= 4
 ? "Mete zvoli najviac " + e[n.maximum](!1) + " poloky"
 : "Mete zvoli najviac " + n.maximum + " poloiek";
 },
 noResults: function () {
 return "Nenali sa iadne poloky";
 },
 searching: function () {
 return "Vyhadvanie";
 },
 removeAllItems: function () {
 return "Odstrte vetky poloky";
 },
 };
 }),
 e.define,
 e.require);
})();