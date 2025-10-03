// Global i18n utility
import { translations } from './translations.ts';

export function initI18n() {
  const currentLang = localStorage.getItem('language') || 'en';

  window.i18n = {
    currentLang,
    t: function(key) {
      return translations[this.currentLang]?.[key] || translations.en[key] || key;
    },
    setLang: function(lang) {
      this.currentLang = lang;
      localStorage.setItem('language', lang);
      updatePage();
    }
  };

  // Update all i18n elements
  function updatePage() {
    // Update navigation links
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = window.i18n.t(key);
    });

    // Dispatch event for components to update
    window.dispatchEvent(new CustomEvent('languageChange', {
      detail: { lang: window.i18n.currentLang }
    }));
  }

  // Listen for language change
  window.addEventListener('languageChange', (e) => {
    window.i18n.currentLang = e.detail.lang;
    updatePage();
  });

  // Initial update
  updatePage();
}

// Helper to get translated value from object or string
export function getLocalizedValue(value, lang) {
  if (typeof value === 'object' && value !== null) {
    return value[lang] || value.en || '';
  }
  return value || '';
}
