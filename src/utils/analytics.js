/**
 * Privacy-friendly, zero-dependency analytics & event dispatcher.
 * Compatible with Google Analytics (gtag), Plausible, Cloudflare Web Analytics, or custom beacons.
 */
export function trackEvent(eventName, properties = {}) {
  try {
    if (typeof window === 'undefined') return;

    // Plausible Analytics support
    if (typeof window.plausible === 'function') {
      window.plausible(eventName, { props: properties });
    }

    // Google Analytics / gtag support
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, properties);
    }

    // Cloudflare Web Analytics / custom beacon fallback
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event] ${eventName}:`, properties);
    }
  } catch (err) {
    // Non-blocking, fails silently
  }
}
