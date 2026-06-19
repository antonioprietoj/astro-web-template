# Content Library — Biblioteca de componentes reutilizables

Este directorio almacena bloques, secciones y patrones que se crean durante proyectos
reales y que pueden reutilizarse en futuros clientes.

**Regla de oro:** si creas algo nuevo útil para otra web, guárdalo aquí antes de olvidarlo.

---

## Estructura de carpetas

```
src/content-library/
├── accordions/      → FAQs, acordeones de información
├── galleries/       → galerías de imágenes, portafolios, antes/después
├── pricing/         → tablas de precios, planes
├── process/         → pasos de proceso, timelines, how-it-works
├── heroes/          → variaciones de hero (con imagen, sin imagen, video, split…)
├── testimonials/    → variaciones de testimonios (carrusel, tarjetas, lista…)
├── forms/           → formularios especiales (newsletter, cita, presupuesto avanzado…)
└── sections/        → cualquier sección que no encaje en las anteriores
```

---

## Cómo guardar un nuevo componente reutilizable

1. Identifica la categoría correcta (usa `sections/` si dudas).
2. Crea una carpeta con el nombre del componente en `kebab-case`.
3. Dentro añade al menos:
   - `ComponentName.astro` — el componente listo para copiar/usar
   - `README.md` — documentación (usa la plantilla de abajo)
4. Si el componente tiene variantes, crea sub-archivos: `ComponentName--dark.astro`, etc.
5. Haz commit con `docs(content-library): add <nombre>`.

---

## Plantilla de README por componente

```markdown
# NombreDelComponente

**Tipo:** sección | bloque | ui | form  
**Creado:** YYYY-MM-DD  
**Actualizado:** YYYY-MM-DD  

## Cuándo usarlo

Describe en 1-2 frases en qué contexto encaja este componente.

## Props

| Prop       | Tipo     | Default | Descripción                    |
|------------|----------|---------|-------------------------------|
| `title`    | `string` | —       | Título principal              |
| `items`    | `array`  | —       | Array de elementos            |

## Ejemplo de uso

```astro
---
import MiComponente from '@/content-library/sections/mi-componente/MiComponente.astro';
---

<MiComponente title="Mi título" items={[...]} />
```

## Dependencias

- Ninguna / lista de imports necesarios

## Notas de diseño

Cualquier consideración visual, responsiva o de accesibilidad importante.
```

---

## Componentes incluidos en la plantilla base

Estos ya existen en `src/components/` y NO es necesario copiarlos aquí:

| Componente       | Ruta                                     |
|-----------------|------------------------------------------|
| Hero             | `src/components/sections/Hero.astro`     |
| Services         | `src/components/sections/Services.astro` |
| AboutPreview     | `src/components/sections/AboutPreview.astro` |
| Testimonials     | `src/components/sections/Testimonials.astro` |
| FAQ              | `src/components/sections/FAQ.astro`      |
| CTA              | `src/components/sections/CTA.astro`      |
| ContactForm      | `src/components/forms/ContactForm.astro` |
| Header           | `src/components/common/Header.astro`     |
| Footer           | `src/components/common/Footer.astro`     |
| Button           | `src/components/ui/Button.astro`         |
| SectionTitle     | `src/components/ui/SectionTitle.astro`   |
| Container        | `src/components/ui/Container.astro`      |

---

## Ideas para próximos bloques

- `galleries/before-after/` — sección "Antes y después" con slider
- `pricing/three-plans/` — tabla de precios con 3 columnas
- `process/steps-numbered/` — proceso en 4-5 pasos numerados
- `heroes/with-video/` — hero con fondo de vídeo
- `testimonials/carousel/` — carrusel automático de opiniones
- `forms/booking/` — formulario de reserva de cita con fecha/hora
- `sections/map-contact/` — mapa de Google incrustado + info de contacto
- `sections/team-grid/` — grid del equipo con foto, nombre y rol
