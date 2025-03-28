import React from 'react';
import type { Metadata } from "next";
import { Space_Mono, Poppins } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
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
    <html lang="en" className={`scroll-smooth ${spaceMono.variable} ${poppins.variable}`}>
      <body className="antialiased bg-light text-dark font-body">
        {children}
      </body>
    </html>
  );
}
