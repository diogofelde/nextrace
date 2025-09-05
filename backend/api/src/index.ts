import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { audit } from "./middleware/audit.ts";
import { db } from "./lib/firebase.ts";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "2mb" }));

console.log("[BOOT] Inicializando NexTrace API...");
app.use(audit);

app.get("/status", (req, res) => {
  console.log("[STATUS] Endpoint /status acessado");
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
    console.log("[FIRESTORE] Documento criado com ID:", ref.id);
    res.json({ ok: true, id: ref.id });
  } catch (err: any) {
    console.error("[FIRESTORE ERROR]", {
      code: err.code,
      message: err.message,
      stack: err.stack
    });
    res.status(500).json({ ok: false, error: err.message || "Erro ao escrever no Firestore" });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`[NexTrace API] rodando na porta ${port}`);
});