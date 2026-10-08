# Nutrepe — web comercial

Landing page comercial de Nutrepe, la plataforma de nutrición personalizada de Pablo Egüen
(dietista-nutricionista, colegiado nº AS00041) que combina planes elaborados por un profesional
con un asistente de inteligencia artificial.

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

## Marca

- `public/favicon.png` — favicon (recorte cuadrado del isotipo).
- `public/brand/og-image.png` — imagen para compartir en redes (Open Graph/Twitter, enlazada en
  `src/index.html`).
- `public/brand/nutrepe-mark.png` — isotipo con fondo transparente, usado en `app-logo`
  (`src/app/ui/logo.component.ts`), dentro del Header y el Footer.
- `public/brand/nutrepe-logo.jpg` — logotipo original completo (fuente de los anteriores).

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
- Precios definitivos de los planes mensual (49,90 €) y trimestral (129,90 €).
- Si se aplica la cuota inicial de 59,90 € y en qué condiciones.
- Condiciones de permanencia y cancelación.
- Alcance exacto de la "supervisión profesional" incluida en cada plan.
- Medio de pago / pasarela a integrar (actualmente no se procesan cobros).

**Producto**
- Las pantallas de la app (menú, chat IA, evolución, recetas) son mockups ilustrativos propios,
  no capturas reales. Sustituir por capturas definitivas cuando el producto esté desarrollado.
- El asistente de IA descrito es una propuesta de producto; confirmar su alcance real antes de
  prometerlo tal cual en la web.

**Pablo Egüen**
- Fotografía profesional: no se ha incorporado ninguna imagen real (se usa un placeholder con
  iniciales). Añadir una fotografía con los derechos correspondientes.
- Los datos de formación, colegiación y trayectoria están verificados contra
  pabloeguennutricion.com (equipo, servicios, metodología y tarifas) a fecha de redacción de esta
  web. Revisar que sigan vigentes antes de publicar.

**Testimonios**
- Los dos testimonios mostrados son opiniones reales sobre Pablo Egüen como profesional
  (publicadas en su web), no sobre la app Nutrepe. Falta validar el permiso explícito de uso en
  este nuevo contexto comercial.
- La sección está preparada para incorporar resultados del piloto cuando existan; no inventar
  cifras mientras tanto.

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
