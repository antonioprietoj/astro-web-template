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
ddev npm run dev
```

Abre **`https://<nombre-proyecto>.ddev.site`** (ej. `https://astro-web-template.ddev.site`).

> DDEV hace proxy nginx → Astro dev server (puerto 4321).  
> Deja `ddev npm run dev` corriendo mientras desarrollas.

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
# Ejemplo con rsync
rsync -avz --delete dist/ usuario@servidor:/public_html/
```

Para Netlify/Vercel, apunta el directorio de publicación a `dist/`.

---

## Guardar nuevos componentes reutilizables

Cuando en un proyecto crees un componente útil para futuros clientes:

1. Cópialo a `src/content-library/<categoría>/<nombre>/`
2. Crea un `README.md` dentro siguiendo la plantilla de `src/content-library/README.md`
3. Haz commit: `docs(content-library): add <nombre>`

Consulta [`src/content-library/README.md`](src/content-library/README.md) para la guía completa.

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
