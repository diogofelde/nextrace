/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var n = jQuery.fn.select2.amd;
 (n.define("select2/i18n/is", [], function () {
 return {
 inputTooLong: function (n) {
 var t = n.input.length - n.maximum,
 e = "Vinsamlegast stytti texta um " + t + " staf";
 return t <= 1 ? e : e + "i";
 },
 inputTooShort: function (n) {
 var t = n.minimum - n.input.length,
 e = "Vinsamlegast skrifi " + t + " staf";
 return (t > 1 && (e += "i"), (e += "  vibt"));
 },
 loadingMore: function () {
 return "Ski fleiri niurstur";
 },
 maximumSelected: function (n) {
 return " getur aeins vali " + n.maximum + " atrii";
 },
 noResults: function () {
 return "Ekkert fannst";
 },
 searching: function () {
 return "Leita";
 },
 removeAllItems: function () {
 return "Fjarlgu ll atrii";
 },
 };
 }),
 n.define,
 n.require);
})();