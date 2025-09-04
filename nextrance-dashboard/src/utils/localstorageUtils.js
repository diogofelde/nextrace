// src/utils/localStorageUtils.js
export const salvarLocal = (chave, valor) => {
 localStorage.setItem(chave, JSON.stringify(valor));
};

export const carregarLocal = (chave) => {
 const dados = localStorage.getItem(chave);
 return dados ? JSON.parse(dados) : null;
};