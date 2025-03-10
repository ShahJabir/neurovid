import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import React from 'react';

import { ClerkProvider } from '@clerk/nextjs';

import { ThemeProvider } from '@/components/theme';

import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NeuroVid',
  description: 'NeuroVid is a platform for creating and sharing videos with AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${manrope.className} bg-[#171717]`}>
          <header></header>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
