
document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
  el.addEventListener('click', () => {
    if (window.gtag) {
      const label = el.dataset?.label || 'tel_link';
      window.gtag('event', 'click_to_call', { event_category: 'engagement', event_label: label });
    }
  });
});
