import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/products';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h2>제품 소개 페이지</h2>
      <ul>
        {products.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={`/products/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
