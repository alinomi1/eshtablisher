import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, isValidLocale } from './config';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const storedLocale = cookieStore.get('locale')?.value;
  const locale = isValidLocale(storedLocale) ? storedLocale : defaultLocale;

  return {
    locale,
    messages: {
      common: (await import(`../messages/${locale}/common.json`)).default,
      home: (await import(`../messages/${locale}/home.json`)).default,
      contact: (await import(`../messages/${locale}/contact.json`)).default,
      about: (await import(`../messages/${locale}/about.json`)).default,
      services: (await import(`../messages/${locale}/services.json`)).default,
    }
  };
});