import React from 'react';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params: { slug } }: Props) => {
  return {
    title: `제품의 이름: ${slug}`,
    description: `${slug}을 소개합니다`,
  };
};

export default async function DtailPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <h1>{product.name} 제품 상세 페이지</h1>
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
