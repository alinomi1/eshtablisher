"use server";

import { cookies } from 'next/headers';
import { defaultLocale, isValidLocale } from '@/i18n/config';

export async function setUserLocale(locale) {
    const finalLocale = isValidLocale(locale) ? locale : defaultLocale;

    const cookieStore = await cookies();
    cookieStore.set('locale', finalLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
    });
}