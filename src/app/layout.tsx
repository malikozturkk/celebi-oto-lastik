import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import Header from "@/components/Header";
import { GoogleAnalytics, GoogleTagManagerNoScript } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6f6f6]`}
      >
        <GoogleTagManagerNoScript />
        <Header />
        <Navbar />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
