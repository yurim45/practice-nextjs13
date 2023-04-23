import React, { useState } from 'react';
import os from 'os'; // 노드 APIs

export default function Home() {
  console.log('안녕!'); // 서버 컴포넌트로 동작하므로 브라우저가 아닌 터미널에서 확인 가능
  console.log(os.hostname());

  const [name, setName] = useState();

  return (
    <>
      <h1>홈페이지!</h1>
    </>
  );
}
