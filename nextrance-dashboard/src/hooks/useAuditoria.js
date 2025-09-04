// src/hooks/useAuditoria.js
import { useState, useEffect } from "react";

export function useAuditoria(usuarioAtual) {
 const [logAuditoria, setLogAuditoria] = useState([]);

 useEffect(() => {
 const log = localStorage.getItem("logAuditoria");
 if (log) setLogAuditoria(JSON.parse(log));
 }, []);

 const registrar = (acao) => {
 const novaEntrada = {
 acao,
 usuario: usuarioAtual,
 data: new Date().toISOString(),
 };
 const atualizado = [...logAuditoria, novaEntrada];
 localStorage.setItem("logAuditoria", JSON.stringify(atualizado));
 setLogAuditoria(atualizado);
 };

 return { logAuditoria, registrar };
}