import type { Metadata } from "next";
import StarryBackground from "@/components/ui/StarryBackground/StarryBackground";
import Header from "@/components/ui/Header/Header";
import TextEnhancer from "@/components/NoCopy";
import UXEnhancer from "@/components/AntiDevTools";
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
  // Configuration des améliorations d'interface
  const enhanceUI = true; // Changer à false pour désactiver les améliorations

  // Empêcher le défilement automatique lors du rafraîchissement
  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
  }

  return (
    <html lang="fr" style={{ scrollBehavior: 'auto' }}>
      <body className={enhanceUI ? 'enhanced-ui' : ''} style={{
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
        <TextEnhancer isEnabled={enhanceUI} />
        <UXEnhancer isEnabled={enhanceUI} />
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
