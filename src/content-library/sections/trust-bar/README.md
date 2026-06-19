# TrustBar

**Tipo:** Barra de confianza  
**Cuándo usarlo:** Mostrar logos de clientes, certificaciones, seguros, asociaciones. Justo debajo del hero o antes del CTA.

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `items` | `TrustItem[]` | **requerido** |
| `title` | `string?` | Texto sobre la barra ("Trabajan con nosotros") |

### TrustItem

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `label` | `string` | Texto accesible del ítem |
| `image` | `string?` | Ruta al logo |
| `icon` | `string?` | Emoji fallback si no hay logo |
| `url` | `string?` | Link externo |

## Ejemplo

```astro
---
import TrustBar from '@/content-library/sections/trust-bar/TrustBar.astro';
---
<TrustBar
  title="Contamos con el aval de"
  items={[
    { label: 'ISO 9001', icon: '✅' },
    { label: 'Gremio de Constructores', image: '/images/logos/gremio.svg' },
    { label: 'Seguro RC', icon: '🛡️' },
  ]}
/>
```

## Notas

- Los logos se muestran en gris y recuperan color al hacer hover.
- Si no hay `image`, muestra un badge con icono y texto.
- Creado: 2026-06
