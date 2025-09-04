function falarMascote(texto) {
 const fala = document.createElement("div");
 fala.className = "fala-mascote";
 fala.innerText = texto;
 document.getElementById("mascote-container").appendChild(fala);

 // Remover balo aps 5 segundos
 setTimeout(() => {
 fala.remove();
 }, 5000);

 // Fala com voz real
 if ("speechSynthesis" in window) {
 const utterance = new SpeechSynthesisUtterance(texto);
 utterance.lang = "pt-BR";
 utterance.rate = 1;
 utterance.pitch = 1;
 speechSynthesis.speak(utterance);
 }
}