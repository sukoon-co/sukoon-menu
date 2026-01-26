import React from "react"
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUKOON | Digital Menu",
  description: "Calm in Every Sip - Explore our handcrafted beverages",
  generator: "Sukoon",
  icons: {
    icon: [
      {
        url: "/fav.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/fav.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/fav.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/fav.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#66489C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        <LocaleProvider>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
