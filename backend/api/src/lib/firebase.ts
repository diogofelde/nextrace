import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

// recria __dirname no modo ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// caminho para o arquivo existente
const serviceAccountPath = path.resolve(__dirname, "../../config/serviceAccount.json");

// lê o JSON da chave privada
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf-8"));

// inicializa o Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log("✅ Firebase Admin inicializado com sucesso!");
}

export const db = admin.firestore();