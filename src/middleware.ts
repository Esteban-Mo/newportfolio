import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Récupérer le chemin de l'URL
  const path = request.nextUrl.pathname;

  // Vérifier si le chemin commence par /realisations
  if (path.startsWith('/realisations')) {
    // Rediriger vers la page d'accueil
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Continuer la requête normalement pour les autres chemins
  return NextResponse.next();
}

// Configurer les chemins sur lesquels le middleware doit s'exécuter
export const config = {
  matcher: '/realisations/:path*',
}; 