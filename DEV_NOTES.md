# Nutrepe — notas internas de desarrollo

Este archivo es solo para uso interno (está en `.gitignore`, no se sube al repositorio). Contiene
el detalle técnico, las decisiones de despliegue y la lista de pendientes de validación antes de
un lanzamiento real.

## Stack

- **Angular 19** (standalone components, signals, control flow `@if`/`@for`) + TypeScript
- **Tailwind CSS v4** vía PostCSS (`.postcssrc.json`), tokens de marca en `src/styles.css`
  (paleta azul/rojo extraída del logotipo)
- **lucide-angular** para iconografía
- **Express** como backend del formulario de lista de espera (`server/`), pensado para correr
  en la misma EC2 que sirve la aplicación

Angular es solo frontend: no tiene "API routes" como Next.js, así que el backend vive en un
proceso Express independiente que en producción también sirve los estáticos del build de Angular.

## Desarrollo

```bash
npm install
npm run dev        # Angular (ng serve, puerto 4200) + API Express (puerto 3000) en paralelo,
                    # con proxy de /api hacia el 3000. Abre http://localhost:4200
```

Scripts individuales, por si hace falta lanzarlos por separado:

```bash
npm start           # solo Angular (ng serve con proxy a /api)
npm run api         # solo la API Express (puerto 3000)
npm run build       # build de producción de Angular -> dist/nutrepe/browser
npm run serve:prod  # sirve el build + la API desde un único proceso Express (lo que corre en EC2)
```

## Despliegue en EC2

La app está pensada para una EC2 de instancia única:

```bash
npm install
npm run build
npm run serve:prod   # o: pm2 start server/index.js --name nutrepe
```

Un único proceso Express en el puerto 3000 (configurable con `PORT`) sirve el build de Angular
(`dist/nutrepe/browser`) y la API bajo `/api/*`, con fallback a `index.html` para que el router de
Angular gestione las rutas en el cliente. En producción real, poner nginx delante como proxy
inverso con TLS, y un gestor de procesos (PM2 o systemd) para que el proceso se reinicie solo.

## Demo en GitHub Pages

La web es visible como demo en `https://mediazeta.github.io/nutrepe/`, sirviendo el contenido de
`docs/` (rama `main`, carpeta `/docs`, configurado en Settings → Pages del repositorio). Es solo un
escaparate estático: el formulario de lista de espera no tiene backend ahí (GitHub Pages no corre
Node), así que al enviarlo se verá el error de conexión manejado por el propio formulario. El
despliegue real con backend funcional es la EC2 (ver más arriba).

Para regenerar `docs/` tras hacer cambios:

```bash
npm run build:pages   # build con --base-href /nutrepe/ + salida directa en docs/ + .nojekyll + 404.html
git add docs
git commit -m "Actualiza demo de GitHub Pages"
git push
```

Dos detalles no obvios de este build:
- `--base-href /nutrepe/`: el sitio vive bajo un subpath (`usuario.github.io/nutrepe/`), no en la
  raíz del dominio, así que todas las rutas relativas tienen que resolverse contra ese prefijo.
- `docs/404.html` es una copia de `docs/index.html`: es el truco estándar para que el router de
  Angular (URLs limpias, sin `#`) funcione también cuando alguien recarga una página interna
  (p. ej. `/nutrepe/legal/privacidad`) — GitHub Pages no sabe nada del router de Angular, así que
  cualquier ruta que no sea un fichero real le devuelve su `404.html`, que carga la app igualmente
  y deja que Angular resuelva la URL en el cliente.

La configuración de build vive en `angular.json` → `architect.build.configurations["github-pages"]`.

## Marca

- `public/favicon.png` — favicon (recorte cuadrado del isotipo).
- `public/brand/og-image.png` — imagen para compartir en redes (Open Graph/Twitter, enlazada en
  `src/index.html`).
- `public/brand/nutrepe-mark.png` — isotipo con fondo transparente, usado en `app-logo`
  (`src/app/ui/logo.component.ts`), dentro del Header y el Footer.
- `public/brand/nutrepe-logo.jpg` — logotipo original completo (fuente de los anteriores).
- `public/app/*.png` — capturas reales de la aplicación Nutrepe (pantallas Plan, Evolución, Chat,
  Documentos y Citas), usadas en el Hero, en "Conoce la aplicación Nutrepe" y en la sección de IA.
  **Importante:** estas capturas muestran la app con su propia paleta (verde/teal), distinta del
  azul/rojo de esta web comercial — ver nota en "Pendiente de validar".

## Backend del formulario de lista de espera

El formulario de la CTA final (`app-waitlist-form`) llama a `server/index.js`:

- **`POST /api/waitlist`** — valida nombre y correo en servidor, descarta envíos de bots mediante
  un campo honeypot oculto, aplica un límite de 5 solicitudes / 10 min por IP, evita duplicados por
  correo y persiste cada alta en `data/waitlist.json`.
- **`GET /api/waitlist`** — listado protegido para uso interno. Desactivado por defecto; se activa
  definiendo la variable de entorno `WAITLIST_ADMIN_TOKEN` y se consulta así:
  ```bash
  curl -H "Authorization: Bearer <WAITLIST_ADMIN_TOKEN>" https://tu-dominio/api/waitlist
  ```

**Sobre el almacenamiento:** se usa un fichero JSON local en vez de una base de datos porque es la
opción más simple que sigue siendo honesta: no se simula nada, los datos se guardan de verdad. Esto
encaja bien con una EC2 de instancia única (disco persistente, proceso de Node continuo), a
diferencia de un entorno serverless donde el sistema de ficheros es efímero.

Antes de escalar a varias instancias EC2 detrás de un load balancer:
- El almacenamiento en fichero (`server/waitlist-store.js`) y el límite de tasa en memoria
  (`server/rate-limit.js`) dejan de ser consistentes entre instancias — migrar a una base de datos
  compartida (p. ej. RDS/Postgres) y a un límite de tasa centralizado (p. ej. Redis).
- Asegurar que `data/` esté en un volumen con backup (snapshot de EBS periódico): hoy es la única
  copia de los correos captados. `data/` está en `.gitignore` a propósito para no subir PII al
  repositorio.

## Estructura de contenido

Todo el contenido editable vive en `src/app/data/*.ts` para que textos, planes, precios y FAQ se
puedan actualizar sin tocar los componentes:

- `site.ts` — datos generales, contacto, redes.
- `pablo.ts` — biografía y formación de Pablo Egüen (verificado en su web personal).
- `plans.ts` — planes y precios (propuesta comercial, no definitiva).
- `faq.ts`, `steps.ts`, `problems.ts`, `features.ts`, `testimonials.ts`, `nav.ts`.

Las secciones de la landing están en `src/app/sections/`, los componentes de UI reutilizables en
`src/app/ui/`, y las páginas legales en `src/app/pages/legal/`.

## Nota técnica: `display: contents` en los componentes

Los elementos custom de Angular son `display: inline` por defecto. Envolver contenido de bloque
dentro de un elemento inline puede generar fragmentos de caja que interceptan clics (nos pasó con
el botón de envío del formulario, cuyo alto cambia al mostrar errores de validación). Por eso
`src/styles.css` fuerza `display: contents` en todos los selectores `app-*`, haciéndolos
transparentes al layout. Si se añade un componente nuevo, conviene añadir su selector a esa misma
lista.

## ⚠️ Pendiente de validar antes de publicar

**Comercial / precios**
- Precios confirmados por el cliente: mensual 40 €/mes, semestral 200 € (33,33 €/mes). Ya no se
  muestra la nota de cuota inicial ni el disclaimer de "importes orientativos" en la sección de
  planes — confirmar que esto significa que los precios ya son definitivos y no una propuesta.
- Condiciones de permanencia y cancelación.
- Alcance exacto de la "supervisión profesional" incluida en cada plan.
- Medio de pago / pasarela a integrar (actualmente no se procesan cobros).

**Producto**
- El Hero, "Conoce la aplicación Nutrepe" y la sección de IA ya usan capturas **reales** de la app
  (`public/app/*.png`), no mockups. Sustituirlas cuando cambie el diseño de esas pantallas.
- **Discrepancia de color de marca:** la app real usa verde/teal como color principal, mientras que
  esta web comercial usa el azul/rojo del logotipo. Decidir si se unifica la paleta de la app a
  azul/rojo, o si esta web adopta el verde/teal de la app — hoy conviven dos identidades visuales
  distintas para el mismo producto.
- Dos pestañas de "Conoce la aplicación Nutrepe" (Documentos y Citas) sustituyeron a los conceptos
  originales "Recetas" y "Seguimiento profesional" porque son las pantallas de las que sí hay
  captura real; confirmar que esos dos nombres y esa descripción reflejan bien el producto.

**Pablo Egüen**
- Fotografía profesional añadida (`public/brand/pablo.png`, facilitada directamente por el
  cliente). Confirmar que es la versión definitiva que quiere mostrar públicamente.
- Los datos de formación, colegiación y trayectoria están verificados contra
  pabloeguennutricion.com (equipo, servicios, metodología y tarifas) a fecha de redacción de esta
  web. Revisar que sigan vigentes antes de publicar.

**Testimonios**
- Los tres testimonios mostrados (Idaira Prieto, Laura Gión, Juan José Fernández Tebar) fueron
  facilitados directamente por el cliente para usarse en esta web — no hace falta validar permiso
  de uso por separado, pero conviene guardar constancia de que los pacientes/deportistas autorizan
  la publicación de su nombre y opinión.
- Ahora rotan en un carrusel con auto-avance (`src/app/sections/testimonials/`); si se añaden más
  testimonios en el futuro, solo hay que ampliar `src/app/data/testimonials.ts`.
- Se quitó la nota sobre el piloto ("Nutrepe se encuentra en fase de desarrollo...") a petición del
  cliente.

**Legal / RGPD**
- Las páginas en `/legal/*` son borradores orientativos, marcados como tales en la propia página.
  Requieren revisión por asesoría legal antes de publicarse como definitivos.
- Definir el responsable del tratamiento, plazos de conservación y base jurídica completa antes
  del lanzamiento.
- Decidir plazo de conservación de `data/waitlist.json` y, si se usa para email marketing más
  adelante, recoger el consentimiento específico correspondiente.

**Marca**
- Dominio definitivo (`site.ts` usa `nutrepe.com` como marcador).
- Cuenta de redes sociales propia de Nutrepe (hoy el footer enlaza a las cuentas personales de
  Pablo como referencia).
- La paleta azul/rojo está tomada directamente del logotipo proporcionado; confirmar que ese
  logotipo es la versión definitiva (no hay registro de marca ni manual de identidad formal).

**Infraestructura**
- Backend del formulario en fichero local: válido para la EC2 de instancia única prevista, pero
  revisar la estrategia de backup del volumen y el plan de migración a base de datos si el
  proyecto escala a varias instancias (ver sección "Backend" arriba).
