import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Donitas Keidy - Donas Chorreadas en Cali",
  description: "Deliciosas donas chorreadas en Cali. Domicilio gratis a toda la ciudad. WhatsApp: 315 785199. Paquetes desde $6.000.",
  keywords: "donas, donitas, Cali, domicilio, chorreadas, postres, dulces",
  authors: [{ name: "Donitas Keidy" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Donitas Keidy - Donas Chorreadas",
    description: "Deliciosas donas chorreadas con domicilio gratis en Cali",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
