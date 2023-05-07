'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const GoProductsButton = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push('/products')}>
        제품 페이지로 이동
      </button>
    </>
  );
};

export default GoProductsButton;
