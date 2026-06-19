/**
 * Cookie consent — adapted from vanilla-cookieconsent setup.
 * Config comes from site.cookies (injected via CookieConsent.astro).
 */
import * as CookieConsent from 'vanilla-cookieconsent';

export interface CookieConfig {
  enabled: boolean;
  privacyPolicyUrl: string;
  contactUrl: string;
  gtmId: string;
  gaMeasurementId: string;
}

const CAT_NECESSARY = 'necessary';
const CAT_ANALYTICS = 'analytics';
const CAT_ADVERTISEMENT = 'advertisement';
const CAT_FUNCTIONALITY = 'functionality';
const CAT_SECURITY = 'security';

const SERVICE_AD_STORAGE = 'ad_storage';
const SERVICE_AD_USER_DATA = 'ad_user_data';
const SERVICE_AD_PERSONALIZATION = 'ad_personalization';
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage';
const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage';
const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage';
const SERVICE_SECURITY_STORAGE = 'security_storage';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    showCookiePreferences?: () => void;
    __COOKIE_CONFIG__?: CookieConfig;
  }
}

function setupGtag(config: CookieConfig) {
  if (!config.gtmId && !config.gaMeasurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };

  window.gtag('consent', 'default', {
    [SERVICE_AD_STORAGE]: 'denied',
    [SERVICE_AD_USER_DATA]: 'denied',
    [SERVICE_AD_PERSONALIZATION]: 'denied',
    [SERVICE_ANALYTICS_STORAGE]: 'denied',
    [SERVICE_FUNCTIONALITY_STORAGE]: 'denied',
    [SERVICE_PERSONALIZATION_STORAGE]: 'denied',
    [SERVICE_SECURITY_STORAGE]: 'denied',
  });

  if (config.gtmId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${config.gtmId}`;
    document.head.appendChild(script);
  }

  if (config.gaMeasurementId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.gaMeasurementId}`;
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', config.gaMeasurementId, { anonymize_ip: true });
  }
}

function updateGtagConsent() {
  if (!window.gtag) return;

  window.gtag('consent', 'update', {
    [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(
      SERVICE_ANALYTICS_STORAGE,
      CAT_ANALYTICS,
    )
      ? 'granted'
      : 'denied',
    [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_ADVERTISEMENT)
      ? 'granted'
      : 'denied',
    [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService(
      SERVICE_AD_USER_DATA,
      CAT_ADVERTISEMENT,
    )
      ? 'granted'
      : 'denied',
    [SERVICE_AD_PERSONALIZATION]: CookieConsent.acceptedService(
      SERVICE_AD_PERSONALIZATION,
      CAT_ADVERTISEMENT,
    )
      ? 'granted'
      : 'denied',
    [SERVICE_FUNCTIONALITY_STORAGE]: CookieConsent.acceptedService(
      SERVICE_FUNCTIONALITY_STORAGE,
      CAT_FUNCTIONALITY,
    )
      ? 'granted'
      : 'denied',
    [SERVICE_PERSONALIZATION_STORAGE]: CookieConsent.acceptedService(
      SERVICE_PERSONALIZATION_STORAGE,
      CAT_FUNCTIONALITY,
    )
      ? 'granted'
      : 'denied',
    [SERVICE_SECURITY_STORAGE]: CookieConsent.acceptedService(
      SERVICE_SECURITY_STORAGE,
      CAT_SECURITY,
    )
      ? 'granted'
      : 'denied',
  });
}

function buildTranslations(contactUrl: string, privacyPolicyUrl: string) {
  return {
    es: {
      consentModal: {
        title: 'Utilizamos cookies',
        description:
          'Este sitio web utiliza cookies esenciales para garantizar su correcto funcionamiento y cookies de seguimiento para entender cómo interactúas con él. Estas últimas solo se establecerán después del consentimiento.',
        acceptAllBtn: 'Aceptar todas',
        acceptNecessaryBtn: 'Rechazar todas',
        showPreferencesBtn: 'Gestionar preferencias',
        footer: `<a href="${privacyPolicyUrl}">Política de privacidad</a>`,
      },
      preferencesModal: {
        title: 'Gestionar preferencias de cookies',
        acceptAllBtn: 'Aceptar todas',
        acceptNecessaryBtn: 'Rechazar todas',
        savePreferencesBtn: 'Guardar preferencias',
        closeIconLabel: 'Cerrar',
        sections: [
          {
            title: 'Uso de cookies',
            description:
              'Utilizamos cookies para garantizar las funcionalidades básicas del sitio web y mejorar tu experiencia en línea.',
          },
          {
            title: 'Cookies estrictamente necesarias',
            description:
              'Estas cookies son esenciales para el correcto funcionamiento del sitio web.',
            linkedCategory: CAT_NECESSARY,
          },
          {
            title: 'Análisis',
            description:
              'Habilita el almacenamiento relacionado con estadísticas (por ejemplo, duración de visitas).',
            linkedCategory: CAT_ANALYTICS,
            cookieTable: {
              headers: {
                name: 'Nombre',
                domain: 'Servicio',
                description: 'Descripción',
                expiration: 'Expiración',
              },
              body: [
                {
                  name: '_ga',
                  domain: 'Google Analytics',
                  description:
                    'Cookie establecida por Google Analytics para distinguir usuarios.',
                  expiration: '2 años',
                },
                {
                  name: '_gid',
                  domain: 'Google Analytics',
                  description: 'Cookie establecida por Google Analytics.',
                  expiration: '24 horas',
                },
              ],
            },
          },
          {
            title: 'Publicidad',
            description:
              'Habilita el almacenamiento relacionado con publicidad.',
            linkedCategory: CAT_ADVERTISEMENT,
          },
          {
            title: 'Funcionalidad',
            description:
              'Habilita el almacenamiento que permite el correcto funcionamiento del sitio, como preferencias de idioma.',
            linkedCategory: CAT_FUNCTIONALITY,
          },
          {
            title: 'Seguridad',
            description:
              'Habilita el almacenamiento relacionado con seguridad y prevención de fraude.',
            linkedCategory: CAT_SECURITY,
          },
          {
            title: 'Más información',
            description: `Para consultas sobre cookies, <a href="${contactUrl}">contáctanos</a> o consulta nuestra <a href="${privacyPolicyUrl}">política de privacidad</a>.`,
          },
        ],
      },
    },
  };
}

export function initCookieConsent(config: CookieConfig) {
  if (!config.enabled) return;

  setupGtag(config);

  CookieConsent.run({
    onFirstConsent: () => updateGtagConsent(),
    onConsent: () => updateGtagConsent(),
    onChange: () => updateGtagConsent(),

    categories: {
      [CAT_NECESSARY]: { enabled: true, readOnly: true },
      [CAT_ANALYTICS]: {
        autoClear: {
          cookies: [{ name: /^(_ga|_gid)/ }],
        },
        services: {
          [SERVICE_ANALYTICS_STORAGE]: {
            label:
              'Permite el almacenamiento relacionado con análisis web.',
          },
        },
      },
      [CAT_ADVERTISEMENT]: {
        services: {
          [SERVICE_AD_STORAGE]: {
            label: 'Permite el almacenamiento relacionado con publicidad.',
          },
          [SERVICE_AD_USER_DATA]: {
            label: 'Permite enviar datos de usuario relacionados con publicidad.',
          },
          [SERVICE_AD_PERSONALIZATION]: {
            label: 'Permite publicidad personalizada.',
          },
        },
      },
      [CAT_FUNCTIONALITY]: {
        services: {
          [SERVICE_FUNCTIONALITY_STORAGE]: {
            label: 'Permite almacenamiento de preferencias del sitio.',
          },
          [SERVICE_PERSONALIZATION_STORAGE]: {
            label: 'Permite almacenamiento de personalización.',
          },
        },
      },
      [CAT_SECURITY]: {
        services: {
          [SERVICE_SECURITY_STORAGE]: {
            label: 'Permite almacenamiento relacionado con seguridad.',
          },
        },
      },
    },

    language: {
      default: 'es',
      translations: buildTranslations(config.contactUrl, config.privacyPolicyUrl),
    },
  });

  window.showCookiePreferences = () => CookieConsent.showPreferences();

  document.querySelectorAll('[data-cc="show-preferences"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      CookieConsent.showPreferences();
    });
  });
}
