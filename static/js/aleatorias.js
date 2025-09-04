const motivacoes = [
 "Voc est indo muito bem!",
 "Continue assim, o conhecimento  seu superpoder!",
 "Cada erro  uma chance de aprender.",
 "Seu esforo est valendo a pena!",
];

function falarMotivacaoAleatoria() {
 const index = Math.floor(Math.random() * motivacoes.length);
 falarMascote(motivacoes[index]);
}