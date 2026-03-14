import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "CONCRETE — Коммерческий клининг | Точность определяет стандарт",
  description: "Промышленная уборка для бизнеса. Офисы, склады, торговые центры. Скорость. Масштаб. Контроль. Стандартизированные процессы, измеримый результат.",
  keywords: ["коммерческий клининг", "уборка офисов", "уборка складов", "клининг Москва", "промышленная уборка", "уборка торговых центров"],
  authors: [{ name: "CONCRETE" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "CONCRETE — Коммерческий клининг",
    description: "Промышленная уборка для бизнеса. Точность определяет стандарт.",
    url: "https://concrete-clean.ru",
    siteName: "CONCRETE",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "CONCRETE - Коммерческий клининг",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CONCRETE — Коммерческий клининг",
    description: "Промышленная уборка для бизнеса. Точность определяет стандарт.",
    images: ["/images/hero.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/hero.jpg" fetchPriority="high" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
