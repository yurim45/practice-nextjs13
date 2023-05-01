// React ErrorBoundary를 사용함
// 폴더에 Error 페이지가 없다면 상위의 근접한 Error 페이지가 작동함
'use client'; // error 페이지는 무조건 cilent component로 구현할 것! useEffect 등을 사용할 수 있으므로

import React, { useEffect } from 'react';

type Props = {
  error: Error;
  reset: () => void; //  재 렌더링
};

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Error</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
