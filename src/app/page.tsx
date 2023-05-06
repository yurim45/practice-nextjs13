import React from 'react';
import os from 'os'; // 노드 APIs
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Counter from '@/components/Counter';

// 폰트 적용
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('안녕! - 서버'); // 서버 컴포넌트로 동작하므로 브라우저가 아닌 터미널에서 확인 가능
  console.log(os.hostname());

  return (
    <>
      <h1 className={inter.className}>홈페이지!</h1>
      <Counter />
      {/* 외부 이미지를 사용하려면 next.config에 등록하고 width, height를 지정해야 함 */}
      <Image
        alt='shop'
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        width={400}
        height={400}
      />
    </>
  );
}
