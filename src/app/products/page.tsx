import Link from 'next/link';
import React from 'react';

const ProductsPage = () => {
  return (
    <>
      <h2>제품 소개 페이지</h2>
      <ul>
        {ITEM_LIST.map((item) => {
          return (
            <li key={item}>
              <Link href={`/products/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;

const ITEM_LIST = ['shirt', 'pants', 'skirt', 'shoes'];
