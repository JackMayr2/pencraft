import React from 'react';
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Pigeon Pipeline | Expert Email Copywriting Services",
  description: "Pigeon Pipeline streamlines your email marketing with high-converting, strategic campaigns that flow smoothly from your business to your audience's inbox.",
  keywords: "email copywriting, email marketing, email campaigns, conversion optimization, Jack Mayr, JP Jeanes, Pigeon Pipeline, email strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${merriweather.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
