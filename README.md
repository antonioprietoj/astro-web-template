# Astro Web Template

Plantilla base profesional para crear webs corporativas de clientes.  
Stack: **Astro 4 · CSS puro · TypeScript · DDEV**

**Repositorio:** [github.com/antonioprietoj/astro-web-template](https://github.com/antonioprietoj/astro-web-template)

---

## Inicio rápido

### Requisitos
- [DDEV](https://ddev.readthedocs.io/) v1.25+ instalado
- Node.js 20+ (gestionado por DDEV)

### Instalación

```bash
git clone https://github.com/antonioprietoj/astro-web-template.git mi-cliente
cd mi-cliente
ddev start
ddev npm install
```

### Desarrollo

```bash
ddev start
```

Abre **`https://<nombre-proyecto>.ddev.site`**. El dev server arranca automáticamente.

Si tras un cambio no ves actualizaciones:

```bash
ddev restart-dev
```

### Build estático

```bash
ddev npm run build
```

El resultado queda en `dist/`. Sube ese directorio al hosting del cliente.

---

## Estructura del proyecto

```
astro-web-template/
├── .cursor/rules/         → Reglas de Cursor para este proyecto
├── .ddev/                 → Configuración DDEV
├── public/
│   ├── favicon.svg        → Reemplaza por el logo del cliente
│   ├── images/            → Imágenes estáticas del cliente
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── common/        → Header, Footer
│   │   ├── forms/         → ContactForm
│   │   ├── sections/      → Hero, Services, AboutPreview, Testimonials, FAQ, CTA
│   │   └── ui/            → Button, SectionTitle, Container
│   ├── content-library/   → Componentes reutilizables entre proyectos
│   ├── data/
│   │   └── site.ts        → ← EDITA ESTE ARCHIVO para cada cliente
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── LegalLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── servicios.astro
│   │   ├── sobre-nosotros.astro
│   │   ├── contacto.astro
│   │   ├── aviso-legal.astro
│   │   └── politica-de-privacidad.astro
│   ├── styles/
│   │   └── global.css     → Variables CSS globales
│   └── utils/
│       └── seo.ts         → Helpers de SEO, URLs de contacto
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Crear una web nueva para un cliente

### Opción rápida: `new-client.sh`

```bash
bash new-client.sh web-cliente-nombre --sector=clinica
```

Clona la plantilla, renombra el proyecto DDEV, desvincula el remote y arranca el servidor.  
Sectores disponibles: `reformas` · `clinica` · `abogados` · `restaurante` · `academia` · `consultor`

Ver presets en `src/data/presets/` y su `README.md`.

---

### Opción manual

### 1. Clonar la plantilla

```bash
git clone https://github.com/antonioprietoj/astro-web-template.git web-cliente-nombre
cd web-cliente-nombre

# Desconectar del repo plantilla y crear repo nuevo
git remote remove origin
git remote add origin git@github.com:tu-usuario/web-cliente-nombre.git
git push -u origin main
```

### 2. Configurar los datos del cliente

Edita **`src/data/site.ts`** — es el único archivo que toca el 90% del trabajo:

- Nombre, sector, ciudad
- Teléfono, email, WhatsApp, dirección, horario
- Redes sociales
- Descripción corta y larga
- Servicios (título, resumen, descripción, icono)
- Testimonios
- FAQ
- Textos de los CTAs
- Estadísticas de "sobre nosotros"
- Datos legales (razón social, CIF…)

### 3. Actualizar la URL de producción

En `astro.config.mjs` (robots.txt y sitemap se generan solos desde `site:`):

```js
site: 'https://www.dominio-real-del-cliente.com',
```

### 4. Cambiar el favicon

Edita `public/favicon.svg` con el logo del cliente.  
Para ICO de compatibilidad, convierte el SVG y colócalo como `public/favicon.ico`.

### 5. Añadir imágenes

Coloca las imágenes en `public/images/`. Para usarlas en el Hero:
```astro
<Hero image="/images/hero.jpg" imageAlt="Texto descriptivo" />
```

### 6. Ajustar colores de marca

Si el cliente tiene colores de marca, edita las variables en `src/styles/global.css`:
```css
:root {
  --color-primary: #tu-color;
  --color-accent:  #tu-acento;
  /* ... */
}
```

### 7. Configurar formulario de contacto

En `src/data/site.ts`, sección `form`:

```ts
form: {
  mode: 'formspree',      // 'demo' | 'formspree' | 'endpoint'
  formspreeId: 'tu-id',
  customEndpoint: '',
  subject: 'Nueva solicitud desde la web',
},
```

### 8. Configurar cookies y analytics

En `src/data/site.ts`, sección `cookies`:

```ts
cookies: {
  enabled: true,
  privacyPolicyUrl: '/politica-de-privacidad',
  contactUrl: '/contacto',
  gtmId: '',           // GTM-XXXXXXX (opcional)
  gaMeasurementId: '', // G-XXXXXXXXXX (opcional)
},
```

- `enabled: false` desactiva el banner
- Enlace "Configuración de cookies" en el footer reabre preferencias
- Adaptado de `vanilla-cookieconsent` (mismo sistema que quemevistanlobailao)

### 9. Levantar y revisar

```bash
ddev start
ddev npm install
ddev npm run dev
```

---

## Subir al hosting

```bash
ddev npm run build
```

Sube el contenido de `dist/` al hosting (FTP, rsync, panel de control…).

```bash
# Manual con rsync
rsync -avz --delete dist/ usuario@servidor:/public_html/
```

Para Netlify/Vercel, apunta el directorio de publicación a `dist/`.

### Deploy automático (GitHub Actions)

El workflow `.github/workflows/deploy.yml` hace build y despliega por SFTP al hacer push a `main`.

Añade estos secrets en GitHub → Settings → Secrets del repositorio del cliente:

| Secret | Ejemplo |
|--------|---------|
| `SFTP_HOST` | `ftp.cliente.com` |
| `SFTP_USER` | `cliente` |
| `SFTP_PASSWORD` | `••••••••` |
| `SFTP_PORT` | `22` |
| `SFTP_PATH` | `/public_html` |

Para hosting con SSH, descomenta la sección `rsync` del workflow y usa `SFTP_KEY` (clave privada SSH).

---

## Guardar nuevos componentes reutilizables

Cuando en un proyecto cliente crees algo útil para futuros proyectos, súbelo a la plantilla padre con:

```bash
bash push-to-template.sh <origen> <destino-en-plantilla> [mensaje]
```

**Ejemplos:**

```bash
# Nuevo bloque de content-library
bash push-to-template.sh \
  src/content-library/sections/hero-video/ \
  src/content-library/sections/hero-video/

# Utilidad genérica
bash push-to-template.sh \
  src/utils/format-date.ts \
  src/utils/format-date.ts \
  "feat(utils): add formatDate helper"

# Actualizar un preset de sector
bash push-to-template.sh \
  src/data/presets/index.ts \
  src/data/presets/index.ts \
  "feat(presets): add farmacia sector"
```

El script clona/actualiza la plantilla en `~/.cache/astro-web-template-push`, copia los ficheros y hace commit + push automáticamente.

**Qué tiene sentido subir:**
- Componentes o secciones no específicos del cliente
- Helpers genéricos (`src/utils/`)
- Nuevos presets de sector (`src/data/presets/`)
- Mejoras a componentes base (Header, Footer, Button…)
- Patrones de configuración DDEV/Astro útiles

Cursor también lo propone automáticamente cuando detecta que has creado algo reutilizable.

Consulta [`src/content-library/README.md`](src/content-library/README.md) para la estructura de documentación.

---

## Trabajar con Cursor en esta plantilla

Las reglas de Cursor están en `.cursor/rules/project.mdc` y se aplican automáticamente.

Principios clave que sigue el agente:
- Todos los datos del cliente van en `src/data/site.ts`.
- Reutiliza componentes existentes antes de crear uno nuevo.
- Sin dependencias nuevas sin justificación.
- Guarda componentes útiles en `src/content-library/`.
- Mantén CSS con variables, sin frameworks externos.
- Diseño responsive siempre.

---

## Páginas incluidas

| Ruta                        | Descripción                     |
|-----------------------------|---------------------------------|
| `/`                         | Inicio con todas las secciones  |
| `/servicios`                | Lista detallada de servicios    |
| `/sobre-nosotros`           | Historia, equipo, estadísticas  |
| `/contacto`                 | Formulario + datos de contacto  |
| `/aviso-legal`              | Aviso legal LSSICE              |
| `/politica-de-privacidad`   | Política RGPD                   |

---

## Componentes disponibles

### Secciones
| Componente     | Props destacadas                              |
|----------------|-----------------------------------------------|
| `Hero`         | `title`, `subtitle`, `image`, `showWhatsapp`  |
| `Services`     | `featuredOnly`, `showCta`                     |
| `AboutPreview` | Sin props — consume `site.about`              |
| `Testimonials` | `title`, `subtitle`                           |
| `FAQ`          | `items` (array personalizable)                |
| `CTA`          | `title`, `subtitle`, `variant`                |

### UI
| Componente     | Props destacadas                              |
|----------------|-----------------------------------------------|
| `Button`       | `href`, `variant`, `size`, `external`         |
| `SectionTitle` | `title`, `subtitle`, `align`, `tag`           |
| `Container`    | `as`, `narrow`                                |

### Forms
| Componente     | Props destacadas                              |
|----------------|-----------------------------------------------|
| `ContactForm`  | `showServices`, `formAction`                  |

---

## Scripts disponibles

```bash
ddev npm run dev      # Servidor de desarrollo (puerto 4321)
ddev npm run build    # Build estático en dist/
ddev npm run preview  # Preview del build estático
```
