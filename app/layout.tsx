import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wanderlust Travel Agency',
  description: 'Explore the world with our curated travel packages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}