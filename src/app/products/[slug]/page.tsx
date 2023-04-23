import React from 'react';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';

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

const DtailPage = ({ params: { slug } }: Props) => {
  // slug가 아니라, 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <h1>{product} 제품 상세 페이지</h1>
    </>
  );
};

export default DtailPage;

export const generateStaticParams = () => {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
  const products = getProducts();

  return products.map((product) => ({
    slug: product,
  }));
};
