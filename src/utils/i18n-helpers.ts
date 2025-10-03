// Helper function to get localized value
export function getLocalizedValue(value: any, lang: 'en' | 'zh' = 'en'): any {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return value[lang] || value.en || '';
  }
  return value || '';
}

// Get current language from localStorage or default to 'en'
export function getCurrentLang(): 'en' | 'zh' {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('language') as 'en' | 'zh') || 'en';
  }
  return 'en';
}
