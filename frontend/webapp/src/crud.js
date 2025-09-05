import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const collectionName = "posts";

// Criar
export const createPost = async (data) => {
 return await addDoc(collection(db, collectionName), data);
};

// Ler
export const getPosts = async () => {
 const snapshot = await getDocs(collection(db, collectionName));
 return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Atualizar
export const updatePost = async (id, data) => {
 const ref = doc(db, collectionName, id);
 return await updateDoc(ref, data);
};

// Deletar
export const deletePost = async (id) => {
 const ref = doc(db, collectionName, id);
 return await deleteDoc(ref);
};