import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/products';
import styles from './page.module.css';

// SSG로 렌더링하면 빌드 시점에 생성된 HTML페이지가 전송되므로 데이터가 변경되어도 반영되지 않는다
// 이때 ISR 렌더링 기법을 사용하면 변경되는 시점을 지정하여 렌더링 할 수 있다
// 아래는 3초마다 데이터 반영해서 서버상에 HTML 만들어 두도록, ISR 렌더링을 적용한 코드

// ISR 렌더링
// false | 'force-cache' | 0 | number
// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  // fetch를 사용한 SSG, ISR, SSR
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // revalidate를 지정하지 않으면
    // SSR할 때 pre-rendering된 html를 보내주고 더이상 fetch하지 않으므로 변화없음
    next: { revalidate: 3 }, // 3초마다 ISR로 렌더링되도록 지정. 0으로 지정하면 요청이 올때마다 SSR 렌더링
    // cache: 'force-cache' // SSG로 렌더링
    // cache: 'no-store', // SSR로 렌더링
  });
  const data = await res.json();
  const factText = data.data[0];

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
      <article className={styles.article}>{factText}</article>
    </>
  );
}
