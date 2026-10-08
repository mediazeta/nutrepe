const path = require("path");
const express = require("express");
const { addWaitlistEntry, listWaitlistEntries } = require("./waitlist-store");
const { isRateLimited } = require("./rate-limit");

const PORT = process.env.PORT || 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BROWSER_DIST = path.join(__dirname, "..", "dist", "nutrepe", "browser");

const app = express();
app.disable("x-powered-by");
app.use(express.json());

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket.remoteAddress ?? "unknown";
}

app.post("/api/waitlist", async (req, res) => {
  const ip = getClientIp(req);
  if (isRateLimited(`waitlist:${ip}`)) {
    return res
      .status(429)
      .json({ error: "Demasiadas solicitudes. Inténtalo de nuevo en unos minutos." });
  }

  const { name, email, company } = req.body ?? {};

  // Honeypot: campo oculto que solo rellenan los bots. Si llega relleno, se acepta en
  // silencio sin persistir nada, para no dar pistas al emisor automatizado.
  if (typeof company === "string" && company.trim().length > 0) {
    return res.json({ ok: true });
  }

  const errors = {};
  if (typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Indica tu nombre.";
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    errors.email = "Introduce un correo electrónico válido.";
  }
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ errors });
  }

  const { duplicate } = await addWaitlistEntry(name, email);
  return res.status(201).json({ ok: true, duplicate });
});

// Listado protegido para uso interno (p. ej. consultar quién se ha apuntado).
// Deshabilitado por defecto: requiere definir WAITLIST_ADMIN_TOKEN en el entorno.
// Uso: curl -H "Authorization: Bearer <token>" https://tu-dominio/api/waitlist
app.get("/api/waitlist", async (req, res) => {
  const token = process.env.WAITLIST_ADMIN_TOKEN;
  if (!token) {
    return res.status(501).json({
      error:
        "Panel de administración no configurado. Define WAITLIST_ADMIN_TOKEN en el entorno para habilitarlo.",
    });
  }

  if (req.headers.authorization !== `Bearer ${token}`) {
    return res.status(401).json({ error: "No autorizado." });
  }

  const entries = await listWaitlistEntries();
  return res.json({ count: entries.length, entries });
});

// Sirve el build de producción de Angular (ng build) y deja que el router de Angular
// gestione cualquier ruta que no sea de la API (modo historial del navegador).
app.use(express.static(BROWSER_DIST));
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(BROWSER_DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Nutrepe escuchando en http://localhost:${PORT}`);
});
