// Tras `ng build ... --configuration=github-pages`, deja docs/ listo para GitHub Pages:
// - .nojekyll para que no se procese con Jekyll.
// - 404.html = copia de index.html, truco estándar para que el router de Angular
//   (URLs limpias, sin hash) funcione también en recargas directas de página.
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const indexPath = path.join(docsDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('docs/index.html no existe. Ejecuta antes: ng build --configuration=production,github-pages');
  process.exit(1);
}

fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
fs.copyFileSync(indexPath, path.join(docsDir, '404.html'));

console.log('docs/ listo para GitHub Pages (.nojekyll + 404.html añadidos).');
