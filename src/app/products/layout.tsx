import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

import styles from './layout.module.css';

export const metadata: Metadata = {
  title: '전체 제품 확인 | 멋진 제품 사이트',
  description: '멋진 제품을 확인해보세요!',
};

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>여성옷</Link>
        <Link href='/products/man'>남성옷</Link>
        <Link href='/products/puppy'>강아지옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
};

export default ProductsLayout;
