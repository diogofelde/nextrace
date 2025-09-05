import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function salvarAlerta(alerta) {
  try {
    await addDoc(collection(db, "alertas"), alerta);
    console.log("Alerta salvo com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar alerta:", error);
  }
}

export async function marcarComoResolvido(id) {
  try {
    const alertaRef = doc(db, "alertas", id);
    await updateDoc(alertaRef, { resolvido: true });
    console.log("Alerta marcado como resolvido.");
  } catch (error) {
    console.error("Erro ao atualizar alerta:", error);
  }
}