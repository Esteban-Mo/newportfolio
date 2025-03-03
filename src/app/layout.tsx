import type { Metadata } from "next";
import StarryBackground from "@/components/ui/StarryBackground/StarryBackground";
import Header from "@/components/ui/Header/Header";
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Esteban Mortier - Portfolio",
  description: "Portfolio d'Esteban Mortier, Expert en Ingénierie Logicielle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Empêcher le défilement automatique lors du rafraîchissement
  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
  }

  return (
    <html lang="fr" style={{ scrollBehavior: 'auto' }}>
      <body style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        fontFamily: 'var(--font-montserrat)',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflowX: 'hidden',
        scrollBehavior: 'auto'
      }}>
        <StarryBackground />
        <Header />
        <main style={{
          paddingTop: '70px',
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '100%',
          overflowX: 'hidden'
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}
