import React, { ReactNode } from 'react';

import styles from './layout.module.css';

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav>
        <ul className={styles.list}>
          <li>여성복</li>
          <li>남성복</li>
          <li>강아지옷</li>
        </ul>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default ProductsLayout;
