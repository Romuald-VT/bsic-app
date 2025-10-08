import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import serverStore from './lib/utils/serverStore';
import { getProfileSession, getSession } from './lib/auth';

// Routes réservées à l'admin
const adminProtectedRoutes = '/dashboard';
// Routes réservées au client
const customerProtectedRoutes = '/memberinfo';

// Pages d'authentification
const adminAuthRoutes = '/admin';
const customerAuthRoutes = '/memberlogin';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await getSession(); // session admin
  const customerSession = await getProfileSession()


  // --- ADMIN ---

  // Si admin déjà connecté → rediriger vers dashboard
  if (pathname.startsWith(adminAuthRoutes) && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Si route admin protégée sans session → rediriger vers /admin
  if (pathname.startsWith(adminProtectedRoutes) && !session) {
    const url = new URL('/admin', request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  if(pathname.startsWith(customerAuthRoutes) && customerSession) {
    const url = new URL('/memberinfo', request.url);
    console.log(url)
    return NextResponse.redirect(url);
  }

  if(pathname.startsWith(customerProtectedRoutes) && !customerSession) {
    const url = new URL('/memberlogin', request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
