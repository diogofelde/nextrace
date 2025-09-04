/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
 var e = jQuery.fn.select2.amd;
 (e.define("select2/i18n/cs", [], function () {
 function e(e, n) {
 switch (e) {
 case 2:
 return n ? "dva" : "dv";
 case 3:
 return "ti";
 case 4:
 return "tyi";
 }
 return "";
 }
 return {
 errorLoading: function () {
 return "Vsledky nemohly bt nateny.";
 },
 inputTooLong: function (n) {
 var t = n.input.length - n.maximum;
 return 1 == t
 ? "Prosm, zadejte o jeden znak mn."
 : t <= 4
 ? "Prosm, zadejte o " + e(t, !0) + " znaky mn."
 : "Prosm, zadejte o " + t + " znak mn.";
 },
 inputTooShort: function (n) {
 var t = n.minimum - n.input.length;
 return 1 == t
 ? "Prosm, zadejte jet jeden znak."
 : t <= 4
 ? "Prosm, zadejte jet dal " + e(t, !0) + " znaky."
 : "Prosm, zadejte jet dalch " + t + " znak.";
 },
 loadingMore: function () {
 return "Nataj se dal vsledky";
 },
 maximumSelected: function (n) {
 var t = n.maximum;
 return 1 == t
 ? "Mete zvolit jen jednu poloku."
 : t <= 4
 ? "Mete zvolit maximln " + e(t, !1) + " poloky."
 : "Mete zvolit maximln " + t + " poloek.";
 },
 noResults: function () {
 return "Nenalezeny dn poloky.";
 },
 searching: function () {
 return "Vyhledvn";
 },
 removeAllItems: function () {
 return "Odstrate vechny poloky";
 },
 };
 }),
 e.define,
 e.require);
})();