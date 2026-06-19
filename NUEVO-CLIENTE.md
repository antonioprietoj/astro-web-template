# Prompt — Nueva web de cliente

Copia este bloque y pégalo en Cursor para arrancar un nuevo proyecto.

---

```
Adapta esta plantilla Astro para una nueva web de cliente.

Cliente:

Nombre:
Sector:
Ciudad:
Servicios:
Teléfono:
Email:
WhatsApp:
Dirección:
Estilo visual deseado:
Público objetivo:
Objetivo principal de la web:

Instrucciones:

Trabaja sobre la plantilla existente.
Reutiliza componentes actuales siempre que sea posible.
Modifica principalmente src/data/site.ts.
No cambies la arquitectura del proyecto si no es necesario.
No instales librerías nuevas salvo que sea imprescindible.
Mantén compatibilidad con Astro y DDEV.
Mantén diseño responsive, limpio y profesional.
Ajusta SEO, textos, llamadas a la acción y datos de contacto.
Si necesitas crear un componente nuevo que pueda servir para futuras webs, guárdalo también en src/content-library/ y documenta su uso.
```

---

# Prompt — Guardar componente en la biblioteca

```
Hemos creado un nuevo componente o patrón que puede servir para futuros proyectos.

Quiero que lo conviertas en un recurso reutilizable dentro de la biblioteca interna del proyecto.

Instrucciones:

Revisa el componente o sección que acabamos de crear.
Limpia el código si es necesario.
Hazlo reutilizable mediante props o datos configurables.
Guárdalo en la carpeta correcta dentro de src/content-library/.
Si corresponde, crea una versión lista para usar en src/components/.
Documenta el recurso con:

  Nombre
  Tipo de bloque
  Cuándo usarlo
  Datos o props que necesita
  Ejemplo de uso
  Dependencias
  Notas de diseño
  Fecha de creación o actualización

No rompas la estructura actual del proyecto.
No instales dependencias nuevas salvo que sea necesario.
Mantén compatibilidad con Astro y DDEV.

Ejemplo: si el componente es un nuevo acordeón, guárdalo en:

  src/content-library/accordions/

Y documenta cómo reutilizarlo en futuras webs.
```

---

## Checklist al crear una web nueva

- [ ] Clonar el repo plantilla: `git clone <repo> <nombre-cliente> && cd <nombre-cliente>`
- [ ] Desvincular origen: `git remote remove origin`
- [ ] Editar `src/data/site.ts` con todos los datos del cliente
- [ ] Actualizar `site:` en `astro.config.mjs` con la URL de producción real
- [ ] Actualizar URL del sitemap en `public/robots.txt`
- [ ] Cambiar `public/favicon.svg` con el icono/logo del cliente
- [ ] Añadir imágenes del cliente en `public/images/`
- [ ] Ajustar colores de marca en `src/styles/global.css` si el cliente tiene identidad visual
- [ ] `ddev start && ddev npm install && ddev npm run dev`
- [ ] Revisar todas las páginas en el navegador
- [ ] `ddev npm run build` → verificar que `dist/` se genera sin errores
- [ ] Subir `dist/` al hosting
