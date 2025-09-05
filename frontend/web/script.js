document.addEventListener("DOMContentLoaded", () => {
 const logoutBtn = document.getElementById("logoutBtn");

 if (logoutBtn) {
 logoutBtn.addEventListener("click", () => {
 alert("Voc saiu com sucesso.");
 window.location.href = "index.html";
 });
 }
});