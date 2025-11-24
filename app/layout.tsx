import type { Metadata } from 'next';
import { Fragment_Mono } from 'next/font/google';
import localFont from 'next/font/local';

import '@/app/styles/globals.css';

const fragmentMono = Fragment_Mono({
  variable: '--font--fragment-mono',
  weight: '400',
});

const PPNeueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/PPNeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPNeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  fallback: ['Arial', 'sans-serif'],
  variable: '--font--pp-neue-montreal',
});

const fonts = `${fragmentMono.variable} ${PPNeueMontreal.variable}`;

export const metadata: Metadata = {
  title: 'Tina Vo | Creative Web Developer Melbourne',
  description:
    'Tina Vo is a frontend web developer based in Melbourne, creating modern, engaging, and accessible websites with a focus on user experience and creativity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${fonts}`}>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
