import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import AosInit from "@/app/components/animations/AosInit";

const nexa = localFont({
  src: [
    { path: "../../public/fonts/NexaPro_Trial-Book.woff2", weight: "350", style: "normal" },
    { path: "../../public/fonts/NexaPro_Trial-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/NexaPro_Trial-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/NexaPro_Trial-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-nexa",
  display: "swap",
});

export const metadata = {
  title: "Establisher | Global Business Consultancy",
  description: "Guiding you to success with 100+ investors served.",
};

export default async function RootLayout({ children }) {
  // 1. Get current locale and all messages
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={nexa.variable} suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased font-sans">
        {/* 2. Wrap the entire app in the Intl Provider */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AosInit />
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}