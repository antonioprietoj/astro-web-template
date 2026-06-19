# TeamGrid

**Tipo:** Sección / Grid de equipo  
**Cuándo usarlo:** Presentar al equipo humano. Clínicas, despachos, consultoras, academias.

## Props

| Prop | Tipo | Defecto | Descripción |
|------|------|---------|-------------|
| `title` | `string` | `'Nuestro equipo'` | Título |
| `subtitle` | `string` | — | Subtítulo |
| `members` | `TeamMember[]` | **requerido** | Lista de personas |

### TeamMember

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `name` | `string` | Nombre completo |
| `role` | `string` | Cargo o especialidad |
| `bio` | `string?` | Breve descripción |
| `image` | `string?` | Ruta a foto (200×200). Si no hay, muestra inicial |
| `linkedin` | `string?` | URL LinkedIn |

## Ejemplo

```astro
---
import TeamGrid from '@/content-library/sections/team-grid/TeamGrid.astro';

const members = [
  { name: 'Ana García', role: 'Directora', bio: '20 años de experiencia.', image: '/images/team/ana.jpg' },
  { name: 'Luis Pérez', role: 'Técnico', linkedin: 'https://linkedin.com/in/luisperez' },
];
---
<TeamGrid title="El equipo" {members} />
```

## Notas

- Si `image` está vacía, muestra la inicial del nombre en un círculo con color primario.
- Grid responsive: auto-fill con mínimo 220px por tarjeta.
- Creado: 2026-06
