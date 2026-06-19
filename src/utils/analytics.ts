/**
 * Analytics helpers — use these to check consent before loading
 * any third-party script that tracks the user.
 *
 * Works alongside cookie-consent.ts (vanilla-cookieconsent).
 * All functions are no-ops when cookies are disabled in site.ts.
 */
import * as CookieConsent from 'vanilla-cookieconsent';

/** True if the user has accepted the analytics category. */
export function analyticsConsented(): boolean {
  return CookieConsent.acceptedCategory('analytics');
}

/** True if the user has accepted the advertisement category. */
export function adsConsented(): boolean {
  return CookieConsent.acceptedCategory('advertisement');
}

/**
 * Run `callback` immediately if analytics are already accepted,
 * or schedule it to run when the user accepts them later.
 *
 * Use this for lazy-loading third-party analytics scripts:
 *   onAnalyticsConsent(() => loadHotjar());
 *   onAnalyticsConsent(() => loadMixpanel());
 */
export function onAnalyticsConsent(callback: () => void): void {
  if (analyticsConsented()) {
    callback();
    return;
  }
  document.addEventListener('cc:onChange', () => {
    if (analyticsConsented()) callback();
  }, { once: true });
}

/**
 * Push an event to GTM dataLayer (if available).
 * Silently ignored if GTM is not loaded.
 *
 * Usage: pushEvent('form_submit', { form_id: 'contact' });
 */
export function pushEvent(event: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
