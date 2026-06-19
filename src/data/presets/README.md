# Presets de sector

Configs base por tipo de negocio. Ahorra ~1h por cliente nuevo.

## Sectores disponibles

| Preset       | Cuándo usarlo                              |
|--------------|--------------------------------------------|
| `clinica`    | Clínicas, centros médicos, fisioterapia    |
| `abogados`   | Despachos, asesorías jurídicas             |
| `restaurante`| Restaurantes, bares, catering              |
| `academia`   | Academias, autoescuelas, formación         |
| `consultor`  | Consultores, agencias, freelancers         |

## Cómo usar

En `src/data/site.ts`, importa el preset y extiéndelo:

```ts
import { clinica } from '@/data/presets';

export const site = {
  name: 'Clínica Salud Viva',
  city: 'Sevilla',
  phone: '+34 600 000 000',
  // ... resto de datos del cliente

  // Preset base — copia los campos que necesites:
  ...clinica,

  // Sobreescribe solo lo que cambia:
  tagline: 'Tu salud, nuestra prioridad',
} as const;
```

O copia manualmente los campos que necesites del preset a `site.ts`.

## Añadir nuevo preset

1. Añade un objeto al final de `src/data/presets/index.ts`
2. Inclúyelo en `export const presets`
3. Documenta aquí cuándo usarlo
