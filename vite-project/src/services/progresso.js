import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function salvarProgresso(uid, dados) {
 try {
 await setDoc(doc(db, "usuarios", uid), dados, { merge: true });
 } catch (error) {
 console.error("Erro ao salvar progresso:", error);
 }
}