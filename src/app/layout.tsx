import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

import './globals.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 곳입니다',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head></head>
      <body>
        <header className={styles.header}>
          <h1>
            <Link href='/'>Demo Note</Link>
          </h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
