import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from '../../../public/images/clothes.jpg';

// SSG로 렌더링하면 빌드 시점에 생성된 HTML페이지가 전송되므로 데이터가 변경되어도 반영되지 않는다
// 이때 ISR 렌더링 기법을 사용하면 변경되는 시점을 지정하여 렌더링 할 수 있다
// 아래는 3초마다 데이터 반영해서 서버상에 HTML 만들어 두도록, ISR 렌더링을 적용한 코드

// ISR 렌더링
// false | 'force-cache' | 0 | number
export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h2>제품 소개 페이지</h2>
      {/* priority 중요한 이미지니까 가장 먼저 보여줘야해! */}
      {/* local의 이미지는 별도 width와 height를 지정하지 않아도 됨 */}
      <Image alt='clothes' src={clothesImage} priority />
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
