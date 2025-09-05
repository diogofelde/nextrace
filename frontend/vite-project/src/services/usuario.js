import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function buscarDados(uid) {
 try {
 const docRef = doc(db, "usuarios", uid);
 const docSnap = await getDoc(docRef);
 return docSnap.exists() ? docSnap.data() : null;
 } catch (error) {
 console.error("Erro ao buscar dados:", error);
 return null;
 }
}