import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aneej R Suku | React & Next.js Frontend Developer Portfolio',
  description: 'Portfolio of Aneej R Suku - Frontend Developer based in Kerala, specializing in React.js, Next.js, and modern web applications.',
  icons: {
    icon: '/icon.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}