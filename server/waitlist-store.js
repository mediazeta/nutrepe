const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

// Almacenamiento en un fichero JSON local. Suficiente para una lista de espera de bajo volumen
// en un despliegue de proceso único (la EC2 prevista para este proyecto). No es apto para
// despliegues multi-instancia: antes de escalar, migrar a una base de datos compartida.

const DATA_DIR = path.join(__dirname, "..", "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

// Serializa lecturas/escrituras dentro de este proceso para evitar condiciones de carrera
// entre solicitudes concurrentes (no protege frente a múltiples instancias del proceso).
let queue = Promise.resolve();

function enqueue(task) {
  const result = queue.then(task, task);
  queue = result.then(
    () => undefined,
    () => undefined
  );
  return result;
}

async function readEntries() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

async function writeEntries(entries) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

function addWaitlistEntry(name, email) {
  return enqueue(async () => {
    const entries = await readEntries();
    const normalizedEmail = email.trim().toLowerCase();
    const existing = entries.find((e) => e.email === normalizedEmail);
    if (existing) {
      return { entry: existing, duplicate: true };
    }

    const entry = {
      id: randomUUID(),
      name: name.trim(),
      email: normalizedEmail,
      createdAt: new Date().toISOString(),
    };
    entries.push(entry);
    await writeEntries(entries);
    return { entry, duplicate: false };
  });
}

function listWaitlistEntries() {
  return enqueue(() => readEntries());
}

module.exports = { addWaitlistEntry, listWaitlistEntries };
