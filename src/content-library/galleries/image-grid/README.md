# GalleryGrid

**Tipo:** sección  
**Creado:** 2025-06-19  

## Cuándo usarlo

Galería de imágenes en grid responsive. Reformas, clínicas, restaurantes, portfolios.

## Props

| Prop       | Tipo            | Default                | Descripción           |
|------------|-----------------|------------------------|-----------------------|
| `title`    | `string`        | `Galería de trabajos`  | Título                |
| `subtitle` | `string`        | —                      | Subtítulo             |
| `items`    | `GalleryItem[]` | —                      | Imágenes              |
| `columns`  | `2 \| 3 \| 4`   | `3`                    | Columnas objetivo     |

### GalleryItem

| Campo     | Tipo      | Descripción        |
|-----------|-----------|--------------------|
| `src`     | `string`  | Ruta imagen        |
| `alt`     | `string`  | Texto alternativo  |
| `caption` | `string?` | Pie de foto        |

## Ejemplo de uso

```astro
---
import GalleryGrid from '@/content-library/galleries/image-grid/GalleryGrid.astro';

const items = [
  { src: '/images/proyecto-1.jpg', alt: 'Reforma cocina', caption: 'Cocina en Vallecas' },
  { src: '/images/proyecto-2.jpg', alt: 'Reforma baño', caption: 'Baño en Getafe' },
];
---

<GalleryGrid items={items} columns={3} />
```

## Dependencias

- `@/components/ui/Container`
- `@/components/ui/SectionTitle`

## Notas de diseño

- Imágenes con `aspect-ratio: 4/3` y `object-fit: cover`
- Hover con zoom suave
- Siempre incluir `alt` descriptivo
