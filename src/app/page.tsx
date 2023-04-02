import React from 'react';
import { notFound } from 'next/navigation';

export default function Home() {
  notFound();
  return (
    <>
      <h1>홈페이지!</h1>
    </>
  );
}
