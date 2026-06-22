import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WTU Dota — Мета-трекер",
  description: "Анализ меты Dota 2: винрейт, билды, прокачка скиллов и матчи про игроков. Divine+Immortal, 14-дневные данные.",
  keywords: ["dota 2", "meta", "winrate", "tier list", "pro tracker"],
  openGraph: {
    title: "WTU Dota — Мета-трекер",
    description: "Анализ меты, тир-лист и матчи про игроков для Dota 2",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0D0F14] text-[#E8EAF2]">
        {children}
      </body>
    </html>
  );
}
