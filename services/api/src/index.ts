// /NexTrace/services/api/src/index.ts
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { audit } from "./middleware/audit.js";
import monitoring from "./routes/monitoring.js";
import redteam from "./routes/redteam.js";
import blueteam from "./routes/blueteam.js";
import forensics from "./routes/forensics.js";
import osint from "./routes/osint.js";

const app = express();

// Segurança e parsing
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "2mb" }));

// Middleware de auditoria (tudo que passar aqui será registrado)
app.use(audit);

// Rotas dos módulos
app.use("/monitoring", monitoring);
app.use("/redteam", redteam);
app.use("/blueteam", blueteam);
app.use("/forensics", forensics);
app.use("/osint", osint);

// Endpoint de status para saber se a API está viva
app.get("/status", (req, res) => {
  res.json({
    service: "NexTrace API",
    status: "online",
    timestamp: new Date().toISOString()
  });
});

// Inicialização
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`[NexTrace API] rodando na porta ${port}`);
});