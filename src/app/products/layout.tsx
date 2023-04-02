import React, { ReactNode } from 'react';

import styles from './layout.module.css';

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <a href=''>여성옷</a>
        <a href=''>남성옷</a>
        <a href=''>여성옷</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
};

export default ProductsLayout;
