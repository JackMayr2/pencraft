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
  title: "PenCraft Email Architects | Expert Email Copywriting Services",
  description: "PenCraft Email Architects helps businesses create high-converting email campaigns that engage your audience and drive results. Led by Jack Mayr and JP Jeanes.",
  keywords: "email copywriting, email marketing, email campaigns, conversion optimization, Jack Mayr, JP Jeanes, PenCraft, email strategy",
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
