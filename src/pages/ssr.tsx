import React from 'react';
import Link from 'next/link';
import { Product, getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';

type Props = {
  products: Product[];
};

export default function SSRPage({ products }: Props) {
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
      <MeowArticle />
    </>
  );
}

// next12에서의 SSR
export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: { products },
  };
}
