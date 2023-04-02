import React, { ReactNode } from 'react';
import './globals.css';
import styles from './layout.module.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head></head>
      <body>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <a href=''>Contact</a>
            <a href=''>About</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
