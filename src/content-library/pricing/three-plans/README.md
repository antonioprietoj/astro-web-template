# PricingThreePlans

**Tipo:** sección  
**Creado:** 2025-06-19  

## Cuándo usarlo

Tabla de precios con 2–4 planes. Ideal para academias, consultores, SaaS simple o servicios con paquetes (básico / estándar / premium).

## Props

| Prop       | Tipo            | Default              | Descripción              |
|------------|-----------------|----------------------|--------------------------|
| `title`    | `string`        | `Nuestros planes`    | Título de sección        |
| `subtitle` | `string`        | —                    | Subtítulo                |
| `plans`    | `PricingPlan[]` | —                    | Array de planes          |

### PricingPlan

| Campo          | Tipo       | Descripción                    |
|----------------|------------|--------------------------------|
| `name`         | `string`   | Nombre del plan                |
| `price`        | `string`   | Precio (ej. `Desde 2.500€`)    |
| `period`       | `string?`  | Periodo (ej. `/ proyecto`)      |
| `description`  | `string`   | Texto breve                    |
| `features`     | `string[]` | Lista de características       |
| `highlighted`  | `boolean?` | Destaca un plan                |
| `ctaText`      | `string?`  | Texto del botón                |
| `ctaHref`      | `string?`  | URL del botón                  |

## Ejemplo de uso

```astro
---
import PricingThreePlans from '@/content-library/pricing/three-plans/PricingThreePlans.astro';

const plans = [
  {
    name: 'Básico',
    price: 'Desde 1.500€',
    period: '/ proyecto',
    description: 'Reformas puntuales',
    features: ['Presupuesto gratuito', 'Garantía 1 año'],
  },
  {
    name: 'Integral',
    price: 'Desde 8.000€',
    period: '/ proyecto',
    description: 'Reforma completa',
    features: ['Diseño incluido', 'Garantía 2 años', 'Seguimiento personalizado'],
    highlighted: true,
  },
];
---

<PricingThreePlans plans={plans} />
```

## Dependencias

- `@/components/ui/Container`
- `@/components/ui/SectionTitle`
- `@/components/ui/Button`

## Notas de diseño

- Responsive con `auto-fit` grid
- Plan destacado escala ligeramente en desktop
- Colores via variables CSS globales
