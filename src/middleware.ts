import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/dasboard', '/memberInfo'];
const authRoutes = ['/admin', '/uiddRoute'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;

  // Rediriger vers dashboard si déjà connecté
  if (authRoutes.some(route => pathname.startsWith(route)) && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Protéger les routes privées
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !session) {
    const url = new URL('/admin', request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};