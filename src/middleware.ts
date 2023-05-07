import { NextRequest, NextResponse } from 'next/server';

// 모든 페이지에 접근하면 실행된다
export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음!! 체크중!!');

  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어가 경로를 리다이렉트 시킴!');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

// 모든 페이지에서 미들웨어가 실행되면 성능상 좋지 않으므로
// 특정 경로에서만 미들웨어가 실행될 수 있게 지정 가능
export const config = {
  matcher: ['/products/:path*'],
};
