# WhyUs — Por qué elegirnos

**Tipo:** Sección diferenciadora  
**Cuándo usarlo:** Destacar ventajas competitivas. Útil en Home y página de Servicios.

## Props

| Prop | Tipo | Defecto | Descripción |
|------|------|---------|-------------|
| `title` | `string` | `'¿Por qué elegirnos?'` | Título |
| `subtitle` | `string?` | — | Subtítulo |
| `items` | `WhyUsItem[]` | **requerido** | Lista de ventajas |
| `ctaText` | `string?` | — | Texto del botón CTA (opcional) |
| `ctaHref` | `string` | `'/contacto'` | Destino del CTA |

### WhyUsItem

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `icon` | `string` | Emoji |
| `title` | `string` | Título de la ventaja |
| `description` | `string` | Descripción breve |

## Ejemplo

```astro
---
import WhyUs from '@/content-library/sections/why-us/WhyUs.astro';
---
<WhyUs
  items={[
    { icon: '🏆', title: '+15 años de experiencia', description: 'Cientos de proyectos completados con éxito.' },
    { icon: '🛡️', title: 'Garantía incluida', description: '2 años de garantía en mano de obra.' },
    { icon: '📋', title: 'Presupuesto sin sorpresas', description: 'Precio cerrado antes de empezar.' },
  ]}
  ctaText="Pedir presupuesto"
/>
```

## Notas

- Cada ítem tiene borde izquierdo en color primario.
- CTA centrado debajo del grid.
- Creado: 2026-06
