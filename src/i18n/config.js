export const locales = ['en', 'fr'];
export const defaultLocale = 'en';

export function isValidLocale(locale) {
  return locales.includes(locale);
}