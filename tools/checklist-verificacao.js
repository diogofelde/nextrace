// E:\Projeto\NexTraceFinal\tools\checklist-verificacao.js
import fs from "fs";
import path from "path";

const baseDir = process.cwd();

const checks = [
  { name: "Pasta modules existe", path: "modules" },
  { name: "Módulo monitoramento existe", path: "modules/monitoramento" },
  { name: "Módulo redteam existe", path: "modules/redteam" },
  { name: "Módulo blueteam existe", path: "modules/blueteam" },
  { name: "Módulo forense existe", path: "modules/forense" },
  { name: "Módulo rastreamento existe", path: "modules/rastreamento" },
  { name: "Módulo auditoria existe", path: "modules/auditoria" },
  { name: "Backend API existe", path: "backend/api" },
  { name: "Backend Workers existe", path: "backend/workers" },
  { name: "Frontend Dashboard existe", path: "frontend/dashboard" },
  { name: "Infra Firebase existe", path: "infra/firebase" },
  { name: "Infra GCP existe", path: "infra/gcp" },
  { name: "Infra Docker existe", path: "infra/docker" },
  { name: "Shared Lib existe", path: "shared/lib" },
  { name: "Shared Utils existe", path: "shared/utils" },
  { name: ".env existe na API", path: "backend/api/.env" },
  { name: "package.json existe na API", path: "backend/api/package.json" }
];

console.log("=== Verificação Pós-Migração NexTrace ===\n");

let falhas = 0;

for (const check of checks) {
  const fullPath = path.join(baseDir, check.path);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ OK - ${check.name}`);
  } else {
    console.log(`❌ FALHA - ${check.name} (não encontrado em ${check.path})`);
    falhas++;
  }
}

console.log("\n=========================================");
if (falhas === 0) {
  console.log("🎯 Tudo certo! Estrutura básica encontrada.");
} else {
  console.log(`⚠️ ${falhas} item(ns) não encontrados. Revise antes de prosseguir.`);
}
console.log("=========================================\n");