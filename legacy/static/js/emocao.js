function motivacaoPorXP(xp) {
 if (xp < 100) return "Voc est comeando muito bem!";
 if (xp < 300) return "Continue assim, voc est evoluindo rpido!";
 return "Voc  um verdadeiro guardio da rede!";
}

window.onload = () => {
 const xpAtual = 250; // puxar do backend
 const frase = motivacaoPorXP(xpAtual);
 falarMascote(frase);
};