import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { audit } from "./middleware/audit";
import { db } from "./lib/firebase";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(audit);

app.get("/status", (req, res) => {
  res.json({
    service: "NexTrace API",
    status: "online",
    timestamp: new Date().toISOString()
  });
});

app.post("/test-firestore", async (req, res) => {
  try {
    const ref = await db.collection("test_collection").add({
      message: "Teste de escrita",
      ts: new Date().toISOString()
    });
    res.json({ ok: true, id: ref.id });
  } catch (error) {
    console.error("Erro ao escrever no Firestore:", error);
    res.status(500).json({ ok: false, error: "Erro interno" });
  }
});

export const api = functions.https.onRequest(app);