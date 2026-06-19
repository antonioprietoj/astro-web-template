# BeforeAfter — Antes y después

**Tipo:** Galería comparativa  
**Cuándo usarlo:** Reformas, decoración, servicios estéticos, fisioterapia, pintura. Muy eficaz para mostrar resultados.

## Props

| Prop | Tipo | Defecto | Descripción |
|------|------|---------|-------------|
| `title` | `string` | `'Antes y después'` | Título |
| `subtitle` | `string` | — | Subtítulo |
| `items` | `BeforeAfterItem[]` | **requerido** | Pares de imágenes |

### BeforeAfterItem

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `before` | `string` | Ruta imagen "Antes" |
| `after` | `string` | Ruta imagen "Después" |
| `alt` | `string` | Texto alternativo base |
| `label` | `string?` | Etiqueta del par (ej. "Reforma cocina — Chamartín") |

## Ejemplo

```astro
---
import BeforeAfter from '@/content-library/galleries/before-after/BeforeAfter.astro';
---
<BeforeAfter
  items={[
    {
      before: '/images/ba/cocina-antes.jpg',
      after: '/images/ba/cocina-despues.jpg',
      alt: 'Reforma cocina Madrid',
      label: 'Cocina en Chamartín',
    },
  ]}
/>
```

## Notas

- Grid de 2 columnas (antes / después). En móvil, columna única.
- Badges "Antes" / "Después" superpuestos sobre la imagen.
- Imágenes con `aspect-ratio: 4/3`. Se recomienda mismo tamaño para ambas.
- Creado: 2026-06
