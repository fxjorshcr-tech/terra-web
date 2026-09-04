import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { locales, getDict, esLocale, Locale } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  const dict = getDict(params.lang);
  return {
    metadataBase: new URL("https://www.orozrealestate.com"),
    title: dict.meta.titulo,
    description: dict.meta.descripcion,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: dict.meta.titulo,
      description: dict.meta.descripcion,
      siteName: "Oroz Real Estate",
      locale: params.lang,
      type: "website",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#1f2a35",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!esLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = getDict(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-white text-gray-800 font-sans antialiased">
        <Navbar lang={lang} dict={dict} />
        <main>{children}</main>
        <Footer lang={lang} dict={dict} />
        <WhatsAppButton dict={dict} />
      </body>
    </html>
  );
}
