function acenarMascote() {
 const mascote = document.getElementById("imagemMascote");
 mascote.style.transform = "rotate(10deg)";
 setTimeout(() => {
 mascote.style.transform = "rotate(-10deg)";
 }, 200);
 setTimeout(() => {
 mascote.style.transform = "rotate(0deg)";
 }, 400);
}