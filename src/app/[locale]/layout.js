import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import AosInit from "@/app/[locale]/components/animations/AosInit";
import { routing } from '@/i18n/routing';

const nexa = localFont({
  src: [
    { path: "../../../public/fonts/NexaPro_Trial-Book.woff2", weight: "350", style: "normal" },
    { path: "../../../public/fonts/NexaPro_Trial-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../../public/fonts/NexaPro_Trial-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../../public/fonts/NexaPro_Trial-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-nexa",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Establisher | Global Business Consultancy",
  description: "Guiding you to success with 100+ investors served.",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className={`${nexa.className} ${nexa.variable} antialiased`}>
        <AosInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
