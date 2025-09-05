function gerarMensagemPorNivel(nivel) {
 switch (nivel) {
 case 1:
 return "Bem-vindo ao nvel 1! Vamos comear com o bsico.";
 case 2:
 return "timo progresso! No nvel 2, voc j est dominando os fundamentos.";
 case 3:
 return "Uau! Nvel 3 desbloqueado. Prepare-se para desafios mais avanados!";
 default:
 return "Continue explorando! Seu conhecimento est crescendo.";
 }
}