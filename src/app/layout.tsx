import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-avant-garde',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ZappaFly - Buzzworthy emails, every time.',
  description: 'We transform boring emails into high-converting messages that your customers will love.',
  openGraph: {
    title: 'ZappaFly - Buzzworthy emails, every time.',
    description: 'We transform boring emails into high-converting messages that your customers will love.',
    images: [
      {
        url: '/images/green_fly_icon.png',
        width: 800,
        height: 800,
        alt: 'ZappaFly Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZappaFly - Buzzworthy emails, every time.',
    description: 'We transform boring emails into high-converting messages that your customers will love.',
    images: ['/images/green_fly_icon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
