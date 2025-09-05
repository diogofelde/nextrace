// /NexTrace/services/api/src/middleware/audit.ts
import crypto from "crypto";
import { db } from "../lib/firebase.js";
import fetch from "node-fetch";

const hmacSecret = process.env.AUDIT_HMAC_SECRET || "dev-secret";

export async function audit(req, res, next) {
  const start = Date.now();
  const bodyClone = { ...req.body };
  const user = req.user?.id || "anonymous";
  const action = `${req.method} ${req.path}`;

  res.on("finish", async () => {
    try {
      const payload = {
        ts: new Date().toISOString(),
        duration_ms: Date.now() - start,
        user,
        action,
        status: res.statusCode,
        ip: req.ip,
        body: bodyClone
      };

      // Gera assinatura HMAC
      const canonical = JSON.stringify(payload);
      const hmac = crypto.createHmac("sha256", hmacSecret).update(canonical).digest("hex");

      // Carimbo de tempo (TSA) opcional
      let tsaToken: string | null = null;
      if (process.env.TSA_ENDPOINT && process.env.TSA_API_KEY) {
        const r = await fetch(process.env.TSA_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.TSA_API_KEY}` },
          body: JSON.stringify({ digest: hmac })
        }).catch(() => null);
        if (r?.ok) {
          const j = await r.json();
          tsaToken = j?.tsaToken || null;
        }
      }

      // Salva no Firestore
      await db.collection("audit_logs").add({
        ...payload,
        hmac,
        tsaToken
      });
    } catch (e) {
      console.error("audit_error", e);
    }
  });

  next();
}