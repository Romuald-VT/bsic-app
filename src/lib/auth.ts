import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.JWT_SECRET!;
const key = new TextEncoder().encode(secretKey);

export interface SessionData {
  username:string;
  isAdmin:string;
  [key:string]:string|undefined
}

// Durée de session : 7 jours
const SESSION_DURATION = 3 * 60 * 60 * 1000;

// Créer une session
export async function createSession(data: SessionData): Promise<void> {
  const expiresAt = new Date(Date.now() + SESSION_DURATION);
  
  const token = await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(key);

  const cookieStore = await cookies();
  cookieStore.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

// Récupérer la session
export async function getSession(): Promise<SessionData | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, key);
    return payload as SessionData;
  } catch (error) {
    return null;
  }
}

// Supprimer la session
export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

// Vérifier l'authentification
export async function verifySession(): Promise<SessionData> {
  const session = await getSession();
  
  if (!session) {
    throw new Error('Non authentifié');
  }
  
  return session;
}