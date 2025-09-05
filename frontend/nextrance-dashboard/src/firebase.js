import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "SUA_API_KEY",
 authDomain: "SEU_DOMINIO.firebaseapp.com",
 projectId: "SEU_ID",
 // ...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);