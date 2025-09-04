/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var e = jQuery.fn.select2.amd;
 (e.define("select2/i18n/fr", [], function () {
 return {
 errorLoading: function () {
 return "Les rsultats ne peuvent pas tre chargs.";
 },
 inputTooLong: function (e) {
 var n = e.input.length - e.maximum;
 return "Supprimez " + n + " caractre" + (n > 1 ? "s" : "");
 },
 inputTooShort: function (e) {
 var n = e.minimum - e.input.length;
 return "Saisissez au moins " + n + " caractre" + (n > 1 ? "s" : "");
 },
 loadingMore: function () {
 return "Chargement de rsultats supplmentaires";
 },
 maximumSelected: function (e) {
 return (
 "Vous pouvez seulement slectionner " +
 e.maximum +
 " lment" +
 (e.maximum > 1 ? "s" : "")
 );
 },
 noResults: function () {
 return "Aucun rsultat trouv";
 },
 searching: function () {
 return "Recherche en cours";
 },
 removeAllItems: function () {
 return "Supprimer tous les lments";
 },
 };
 }),
 e.define,
 e.require);
})();