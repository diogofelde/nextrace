window.onload = () => {
 const nivelAtual = 2; // Exemplo: puxar do backend
 const mensagem = gerarMensagemPorNivel(nivelAtual);
 falarMascote(mensagem);
};