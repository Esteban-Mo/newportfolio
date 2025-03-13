'use client';

import { useRouter } from 'next/navigation';
import { Chip } from '@mui/material';

interface Competence {
  nom: string;
  lien: string;
}

interface RealisationPageProps {
  titre: string;
  resume: string;
  competences: Competence[];
  description?: string[];
  defis?: string[];
  solutions?: string[];
  resultats?: string[];
}

export default function RealisationPage({ 
  titre, 
  resume, 
  competences, 
  description = [], 
  defis = [], 
  solutions = [], 
  resultats = [] 
}: RealisationPageProps) {
  const router = useRouter();

  const handleRetour = () => {
    router.push(`/#realisations`);
  };

  const naviguerVersCompetence = (lien: string) => {
    router.push(lien);
  };

  return (
    <div style={{
      maxWidth: `1000px`,
      margin: `0 auto`,
      padding: `2rem 1rem`,
      color: `#fff`,
      fontFamily: `system-ui, -apple-system, sans-serif`,
    }}>
      <button 
        onClick={handleRetour}
        style={{
          display: `flex`,
          alignItems: `center`,
          gap: `0.5rem`,
          background: `none`,
          border: `none`,
          color: `#60A5FA`,
          fontSize: `1rem`,
          cursor: `pointer`,
          marginBottom: `2rem`,
          padding: `0.5rem 0`,
        }}
      >
        <span style={{ fontSize: `1.2rem` }}>←</span>
        <span>Retour à l'accueil</span>
      </button>

      <h1 style={{
        fontSize: `clamp(2rem, 5vw, 2.5rem)`,
        fontWeight: `700`,
        color: `#60A5FA`,
        marginBottom: `1.5rem`,
      }}>
        {titre}
      </h1>

      <div style={{
        fontSize: `1.2rem`,
        lineHeight: `1.8`,
        color: `rgba(255,255,255,0.9)`,
        marginBottom: `2rem`,
        textAlign: `justify`,
      }}>
        {resume}
      </div>

      <div style={{
        marginBottom: `3rem`,
      }}>
        <h2 style={{
          fontSize: `1.3rem`,
          fontWeight: `600`,
          marginBottom: `1rem`,
          color: `#60A5FA`,
        }}>
          Compétences associées
        </h2>
        <div style={{
          display: `flex`,
          flexWrap: `wrap`,
          gap: `0.8rem`,
        }}>
          {competences.map((competence, index) => (
            <Chip 
              key={index}
              label={competence.nom} 
              onClick={() => naviguerVersCompetence(competence.lien)}
              sx={{ 
                bgcolor: `rgba(255, 255, 255, 0.05)`, 
                color: `#fff`, 
                borderColor: `#60A5FA`, 
                border: `1px solid`,
                borderRadius: `5px`,
                cursor: `pointer`,
                transition: `all 0.3s ease`,
                '&:hover': {
                  bgcolor: `rgba(255, 255, 255, 0.1)`,
                  transform: `translateY(-2px)`,
                }
              }} 
            />
          ))}
        </div>
      </div>

      {description.length > 0 && (
        <section style={{
          marginBottom: `3rem`,
          backgroundColor: `rgba(255,255,255,0.05)`,
          borderRadius: `1rem`,
          border: `1px solid rgba(255,255,255,0.1)`,
          padding: `2rem`,
        }}>
          <h2 style={{
            fontSize: `1.5rem`,
            fontWeight: `600`,
            marginBottom: `1.5rem`,
            color: `#60A5FA`,
          }}>
            Description du projet
          </h2>
          <div style={{
            fontSize: `1.1rem`,
            lineHeight: `1.8`,
            color: `rgba(255,255,255,0.9)`,
          }}>
            {description.map((paragraph, index) => (
              <p key={index} style={{ textAlign: `justify`, marginBottom: `1rem` }}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {defis.length > 0 && (
        <section style={{
          marginBottom: `3rem`,
          backgroundColor: `rgba(255,255,255,0.05)`,
          borderRadius: `1rem`,
          border: `1px solid rgba(255,255,255,0.1)`,
          padding: `2rem`,
        }}>
          <h2 style={{
            fontSize: `1.5rem`,
            fontWeight: `600`,
            marginBottom: `1.5rem`,
            color: `#60A5FA`,
          }}>
            Défis rencontrés
          </h2>
          <div style={{
            fontSize: `1.1rem`,
            lineHeight: `1.8`,
            color: `rgba(255,255,255,0.9)`,
          }}>
            {defis.map((paragraph, index) => (
              <p key={index} style={{ textAlign: `justify`, marginBottom: `1rem` }}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {solutions.length > 0 && (
        <section style={{
          marginBottom: `3rem`,
          backgroundColor: `rgba(255,255,255,0.05)`,
          borderRadius: `1rem`,
          border: `1px solid rgba(255,255,255,0.1)`,
          padding: `2rem`,
        }}>
          <h2 style={{
            fontSize: `1.5rem`,
            fontWeight: `600`,
            marginBottom: `1.5rem`,
            color: `#60A5FA`,
          }}>
            Solutions mises en œuvre
          </h2>
          <div style={{
            fontSize: `1.1rem`,
            lineHeight: `1.8`,
            color: `rgba(255,255,255,0.9)`,
          }}>
            {solutions.map((paragraph, index) => (
              <p key={index} style={{ textAlign: `justify`, marginBottom: `1rem` }}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {resultats.length > 0 && (
        <section style={{
          marginBottom: `3rem`,
          backgroundColor: `rgba(255,255,255,0.05)`,
          borderRadius: `1rem`,
          border: `1px solid rgba(255,255,255,0.1)`,
          padding: `2rem`,
        }}>
          <h2 style={{
            fontSize: `1.5rem`,
            fontWeight: `600`,
            marginBottom: `1.5rem`,
            color: `#60A5FA`,
          }}>
            Résultats et impact
          </h2>
          <div style={{
            fontSize: `1.1rem`,
            lineHeight: `1.8`,
            color: `rgba(255,255,255,0.9)`,
          }}>
            {resultats.map((paragraph, index) => (
              <p key={index} style={{ textAlign: `justify`, marginBottom: `1rem` }}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}
    </div>
  );
} 