/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/az", [], function () {
 return {
 inputTooLong: function (n) {
 return n.input.length - n.maximum + " simvol silin";
 },
 inputTooShort: function (n) {
 return n.minimum - n.input.length + " simvol daxil edin";
 },
 loadingMore: function () {
 return "Daha ox ntic yklnir";
 },
 maximumSelected: function (n) {
 return "Sadc " + n.maximum + " element se bilrsiniz";
 },
 noResults: function () {
 return "Ntic taplmad";
 },
 searching: function () {
 return "Axtarlr";
 },
 removeAllItems: function () {
 return "Btn elementlri sil";
 },
 };
 }),
 n.define,
 n.require);
})();