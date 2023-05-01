// loading.tsx 자체가 next에서 로딩 UI로 제공. 내부적으로는 React Suspense를 사용
// layout.tsx의 children 부분의 로딩 UI로 제공
// SSG인 경우는 적용되지 않음. 서버에서 pre-rendering 되기 때문
import React from 'react';

export default function ProductsLoading() {
  return (
    <>
      <p>Loading..😊</p>
    </>
  );
}
