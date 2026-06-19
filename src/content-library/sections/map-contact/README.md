# MapContact — Mapa + Contacto

**Tipo:** Sección de ubicación y datos de contacto  
**Cuándo usarlo:** Página de contacto, negocios locales. Combina iframe de Google Maps con datos de `site.ts`.

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `mapEmbedUrl` | `string?` | URL de embed de Google Maps. Si no se pasa, se genera automáticamente desde `site.address` |
| `title` | `string` | Título de la columna del mapa. Defecto: `'Cómo llegar'` |

## Cómo obtener la URL de embed de Google Maps

1. Busca la dirección en [maps.google.com](https://maps.google.com)
2. Clic en "Compartir" → "Insertar un mapa"
3. Copia la URL del `src` del iframe

## Ejemplo

```astro
---
import MapContact from '@/content-library/sections/map-contact/MapContact.astro';
---
<MapContact
  mapEmbedUrl="https://www.google.com/maps/embed?pb=..."
  title="Dónde encontrarnos"
/>
```

## Notas

- Consume `site.ts` para dirección, teléfono, email y horario automáticamente.
- Incluye botón de WhatsApp.
- El iframe lleva `loading="lazy"` para no penalizar el FCP.
- Creado: 2026-06
