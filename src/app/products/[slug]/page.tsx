import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import GoProductsButton from '@/components/GoProductsButton';

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
    redirect('/products'); // product 이 없다면 이 경로로 이동
    // notFound();
  }
  return (
    <>
      <h1>{product.name} 제품 상세 페이지</h1>
      <Image
        alt={product.name}
        src={`/images${product.image}`}
        width={300}
        height={300}
      />
      {/* SSR이므로 버튼 작동이 안된다. 그러므로 clinet component로 만들어야 함 */}
      <GoProductsButton />
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
