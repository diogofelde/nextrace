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

// The following code seems to be React JSX and should not be in a service file.
// Move this block to your React component file if needed.
// import { salvarAlerta } from "../services/alertService";
//
// <button
//  onClick={() => salvarAlerta(alert.cve)}
//  className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
// >
//  Salvar alerta
// </button>;

export async function marcarComoResolvido(id) {
 try {
   const alertaRef = doc(db, "alertas", id);
   await updateDoc(alertaRef, { resolvido: true });
   console.log("Alerta marcado como resolvido.");
 } catch (error) {
   console.error("Erro ao atualizar alerta:", error);
 }
}