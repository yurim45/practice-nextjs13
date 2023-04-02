import React from 'react';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

const DtailPage = ({ params }: Props) => {
  if (params.slug === 'nothing') {
    notFound();
  }

  return (
    <>
      <h1>{params.slug} 제품 상세 페이지</h1>
    </>
  );
};

export default DtailPage;

// dynamic route page 에서 특정한 경로에 한해서 미리 페이지를 만들어 두고 싶다면
// next가 정해준 generateStaticParams 이름의 함수로 처리할 수 있다
export const generateStaticParams = () => {
  // 미리 만들어 두고 싶은 페이지의 slug를 지정
  const products = ['shirt', 'pants', 'skirt', 'shoes'];

  return products.map((product) => ({
    slug: product,
  }));
};
