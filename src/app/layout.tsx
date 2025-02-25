import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StarryBackground from "@/components/ui/StarryBackground/StarryBackground";
import Header from "@/components/ui/Header/Header";
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Esteban Mortier - Portfolio",
  description: "Portfolio d'Esteban Mortier, Expert en Ingénierie Logicielle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} layout-body`}>
        <StarryBackground />
        <Header />
        <main className="layout-main">
          {children}
        </main>
      </body>
    </html>
  );
}
