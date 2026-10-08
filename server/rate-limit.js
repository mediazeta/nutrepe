// Límite de tasa en memoria, por proceso. Suficiente para disuadir envíos automatizados básicos
// en un despliegue de instancia única (la EC2 prevista); no sustituye un límite a nivel de
// edge/CDN si en el futuro hay varias instancias detrás de un load balancer.

const hits = new Map();

function isRateLimited(key, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > limit;
}

module.exports = { isRateLimited };
