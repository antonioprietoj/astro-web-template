# CookieConsent (vanilla-cookieconsent)

**Tipo:** componente global  
**Creado:** 2025-06-19  
**Origen:** Adaptado de `quemevistanlobailao`  

## Cuándo usarlo

Webs corporativas que necesitan banner RGPD/LOPDGDD con categorías de cookies, Google Consent Mode v2 y panel de preferencias.

## Configuración

Todo en `src/data/site.ts` → sección `cookies`:

```ts
cookies: {
  enabled: true,
  privacyPolicyUrl: '/politica-de-privacidad',
  contactUrl: '/contacto',
  gtmId: '',              // G-XXXXXXX o GTM-XXXXXXX
  gaMeasurementId: '',    // G-XXXXXXXXXX
},
```

- `enabled: false` → desactiva el banner por completo
- Deja `gtmId` y `gaMeasurementId` vacíos si no usas Google Analytics/Tag Manager

## Archivos

| Archivo | Rol |
|---------|-----|
| `src/components/common/CookieConsent.astro` | Integración en layout |
| `src/scripts/cookie-consent.ts` | Lógica y traducciones ES |
| `src/styles/cookie-consent.css` | Tema (colores via variables CSS) |

## Categorías incluidas

- Necesarias (siempre activas)
- Análisis (Google Analytics)
- Publicidad
- Funcionalidad
- Seguridad

## Reabrir preferencias

Botón en footer con `data-cc="show-preferences"`, o en consola:

```js
window.showCookiePreferences()
```

## Dependencias

- `vanilla-cookieconsent` ^3.1.0

## Notas de diseño

- Tema claro alineado con `--color-primary` del template
- Para tema oscuro: copia variables de `#cc-main` de quemevistanlobailao y adapta en `cookie-consent.css`
- Sin backend: el consentimiento se guarda en localStorage del navegador (comportamiento estándar de la librería)

## Ejemplo de uso

Ya integrado en `BaseLayout.astro`. No requiere import adicional en páginas.

Para desactivar en un cliente concreto:

```ts
cookies: { enabled: false, ... }
```
