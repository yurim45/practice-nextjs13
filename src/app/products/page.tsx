import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/products';

const ProductsPage = () => {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = getProducts();

  return (
    <>
      <h2>제품 소개 페이지</h2>
      <ul>
        {products.map((item) => {
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
