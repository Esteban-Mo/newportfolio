'use client';

import { useRouter } from 'next/navigation';

interface Section {
  title: string;
  content: string[];
}

interface CompetencePageProps {
  title: string;
  sections: Section[];
}

export default function CompetencePage({ title, sections }: CompetencePageProps) {
  const router = useRouter();

  const handleRetour = () => {
    // Rediriger vers la section des compétences sur la page d'accueil
    router.push('/#competences');
  };

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem 1rem',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <button 
        onClick={handleRetour}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'none',
          border: 'none',
          color: '#60A5FA',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '2rem',
          padding: '0.5rem 0',
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>←</span>
        <span>Retour à l'accueil</span>
      </button>

      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
        fontWeight: '700',
        color: '#60A5FA',
        marginBottom: '2rem',
      }}>
        {title}
      </h1>

      {sections.map((section, index) => (
        <section 
          key={index}
          style={{
            marginBottom: '3rem',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '1rem',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '2rem',
          }}
        >
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#60A5FA',
          }}>
            {section.title}
          </h2>
          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'rgba(255,255,255,0.9)',
          }}>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} style={{ textAlign: 'justify', marginBottom: '1rem' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 