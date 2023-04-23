'use client';

import { useState } from 'react';

export default function Counter() {
  console.log('안녕! - 클라이언트');
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        숫자 증가 시키기!
      </button>
    </>
  );
}
