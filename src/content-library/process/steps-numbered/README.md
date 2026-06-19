# ProcessSteps

**Tipo:** sección  
**Creado:** 2025-06-19  

## Cuándo usarlo

Explicar un proceso en pasos numerados. Ideal para reformas, consultoría, clínicas, academias.

## Props

| Prop       | Tipo            | Default              | Descripción    |
|------------|-----------------|----------------------|----------------|
| `title`    | `string`        | `Cómo trabajamos`    | Título         |
| `subtitle` | `string`        | —                    | Subtítulo      |
| `steps`    | `ProcessStep[]` | —                    | Pasos          |

### ProcessStep

| Campo         | Tipo     | Descripción        |
|---------------|----------|--------------------|
| `number`      | `number` | Número del paso    |
| `title`       | `string` | Título del paso    |
| `description` | `string` | Descripción        |

## Ejemplo de uso

```astro
---
import ProcessSteps from '@/content-library/process/steps-numbered/ProcessSteps.astro';

const steps = [
  { number: 1, title: 'Contacto', description: 'Nos cuentas qué necesitas.' },
  { number: 2, title: 'Visita', description: 'Visitamos la obra sin compromiso.' },
  { number: 3, title: 'Presupuesto', description: 'Te entregamos presupuesto detallado en 48h.' },
  { number: 4, title: 'Obra', description: 'Ejecutamos con seguimiento diario.' },
];
---

<ProcessSteps steps={steps} />
```

## Dependencias

- `@/components/ui/Container`
- `@/components/ui/SectionTitle`

## Notas de diseño

- Lista ordenada semántica (`<ol>`)
- Máximo recomendado: 5–6 pasos
- Centrado en desktop, full-width en móvil
