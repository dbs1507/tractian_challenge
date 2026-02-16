import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const messages = (await getMessages()) as {
    meta?: { title?: string; description?: string };
  };
  return {
    title: messages.meta?.title ?? "Tractian Challenge",
    description: messages.meta?.description ?? "Tractian Frontend Challenge",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${interTight.variable}`}>
        {children}
      </body>
    </html>
  );
}
