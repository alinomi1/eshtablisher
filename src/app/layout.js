import localFont from "next/font/local";
import "./globals.css";
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
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial"],
});

export const metadata = {
  title: "Establisher | Global Business Consultancy",
  description: "Guiding you to success with 100+ investors served.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nexa.variable} suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased font-sans">
        <AosInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
