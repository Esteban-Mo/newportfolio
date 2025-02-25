'use client';

import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Chip } from '@mui/material';

export default function Home() {
  // Style commun pour toutes les cartes
  const cardStyle = {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '1rem',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '2rem',
    paddingBottom: '4rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
    position: 'relative' as const,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxSizing: 'border-box' as const,
    overflow: 'hidden' as const,
    minHeight: '200px', // Assure une hauteur minimale pour le positionnement
  };

  // Indicateur "En savoir plus"
  const moreInfoIndicator = (
    <div style={{
      position: 'absolute',
      bottom: '1.5rem',
      left: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      color: '#60A5FA',
      opacity: 0.8,
      transition: 'all 0.3s ease',
    }}>
      <span>En savoir plus</span>
      <span style={{ 
        fontSize: '1.2rem',
        transition: 'transform 0.3s ease'
      }}>→</span>
    </div>
  );

  const copyEmail = () => {
    navigator.clipboard.writeText('e.mortier@proton.me');
    toast.success('Email copié !', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden'
    }}>
      {/* Section Hero */}
      <section id="home" style={{
        width: '100%',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        <h1 style={{
          color: '#fff',
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '500',
          letterSpacing: '0.2em',
          textAlign: 'center',
          margin: 0
        }}>
          ESTEBAN MORTIER
        </h1>
        
        <div style={{
          width: '150px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #fff, transparent)',
          margin: '1.5rem 0'
        }} />
        
        <h2 style={{
          color: '#60A5FA',
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          fontWeight: '700',
          letterSpacing: '0.1em',
          textAlign: 'center',
          margin: 0
        }}>
          EXPERT EN INGÉNIERIE LOGICIELLE
        </h2>

        {/* Indicateur de scroll avec chevrons améliorés */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px'
          }}>
            <div className="scroll-chevron scroll-chevron-1" />
            <div className="scroll-chevron scroll-chevron-2" />
            <div className="scroll-chevron scroll-chevron-3" />
          </div>
        </div>
      </section>

      {/* Section Compétences Techniques */}
      <section id="competences" style={{
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '4rem 1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem'
        }}>
          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: '700',
            textAlign: 'center',
            position: 'relative',
            paddingBottom: '1rem',
            margin: 0
          }}>
            Compétences Techniques
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: '#60A5FA',
              borderRadius: '2px'
            }}/>
          </h2>

          <div style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            boxSizing: 'border-box'
          }}>
            {/* Architecture Logicielle */}
            <div 
              id="architecture-logicielle"
              style={cardStyle}
              onClick={() => window.location.href = '/competences/architecture-logicielle'}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🏗️
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Architecture Logicielle
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Conception d'architectures évolutives et maintenables en appliquant les principes SOLID et les patterns de conception.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Chip 
                  label="Design Patterns" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#34D399', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="SOLID" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#34D399', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="Clean Architecture" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#34D399', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
              </div>
            </div>

            {/* Développement Frontend */}
            <div 
              id="developpement-frontend"
              style={cardStyle}
              onClick={() => window.location.href = '/competences/developpement-frontend'}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🎨
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Développement Frontend
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Maîtrise des frameworks modernes et création d'interfaces utilisateur performantes et responsives.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Chip 
                  label="React" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#61DAFB', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="Next.js" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#fff', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="TypeScript" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#3178C6', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="JavaScript" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#F7DF1E', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
              </div>
            </div>

            {/* Développement Backend */}
            <div 
              id="developpement-backend"
              style={cardStyle}
              onClick={() => window.location.href = '/competences/developpement-backend'}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                ⚙️
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Développement Backend
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Création d'APIs RESTful robustes et évolutives, gestion efficace des bases de données et des services web.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Chip 
                  label="Node.js" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#68A063', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="Next.js API" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#fff', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
              </div>
            </div>

            {/* Tests & Qualité */}
            <div 
              id="tests-qualite"
              style={cardStyle}
              onClick={() => window.location.href = '/competences/tests-qualite'}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🧪
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Tests & Qualité
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Mise en place de stratégies de test et d'assurance qualité pour garantir la fiabilité des applications.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Chip 
                  label="Tests Unitaires" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                  }} 
                />
                <Chip 
                  label="Tests E2E" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                  }} 
                />
                <Chip 
                  label="CI/CD" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                  }} 
                />
              </div>
            </div>

            {/* Base de données */}
            <div 
              id="base-de-donnees"
              style={cardStyle}
              onClick={() => window.location.href = '/competences/base-de-donnees'}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                💾
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Base de Données
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Conception et optimisation de bases de données relationnelles et NoSQL pour des applications performantes et scalables.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Chip 
                  label="PostgreSQL" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                  }} 
                />
                <Chip 
                  label="MongoDB" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                  }} 
                />
                <Chip 
                  label="Redis" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                  }} 
                />
              </div>
            </div>

            {/* DevOps */}
            <div 
              id="devops"
              style={cardStyle}
              onClick={() => window.location.href = '/competences/devops'}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🔄
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                DevOps
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Mise en place de CI/CD, automatisation des déploiements et monitoring des applications en production.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Chip 
                  label="Docker" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#2188FF', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="GitHub Enterprise" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#2F81F7', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="Azure DevOps" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#0078D7', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
              </div>
            </div>

            {/* Sécurité */}
            <div 
              id="securite"
              style={cardStyle}
              onClick={() => window.location.href = '/competences/securite'}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🔒
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Sécurité
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Implémentation des meilleures pratiques de sécurité et protection des données sensibles.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Chip 
                  label="Auth0" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#EB4432', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="JWT" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#D73A49', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
                <Chip 
                  label="BCRYPT" 
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: '#fff', 
                    borderColor: '#8B4513', 
                    border: '1px solid',
                    borderRadius: '5px'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences Humaines */}
      <section style={{
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '4rem 1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem'
        }}>
          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: '700',
            textAlign: 'center',
            position: 'relative',
            paddingBottom: '1rem',
            margin: 0
          }}>
            Compétences Humaines
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: '#60A5FA',
              borderRadius: '2px'
            }}/>
          </h2>

          <div style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            boxSizing: 'border-box'
          }}>
            {/* Communication */}
            <div 
              id="communication"
              style={cardStyle}
              onClick={() => window.location.href = '/competences/communication'}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                💬
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Communication
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Excellentes capacités de communication écrite et orale, facilitant la collaboration avec les équipes et les clients.
              </p>
            </div>

            {/* Leadership */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                👥
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Leadership
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Capacité à guider et motiver les équipes, à prendre des initiatives et à gérer des projets.
              </p>
            </div>

            {/* Adaptabilité */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🔄
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Adaptabilité
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Grande capacité d'adaptation aux changements et aux nouvelles technologies.
              </p>
            </div>

            {/* Résolution de problèmes */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🔍
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Résolution de problèmes
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Approche analytique et créative dans la résolution de problèmes complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Réalisations */}
      <section id="realisations" style={{
        width: '100%',
        backdropFilter: 'blur(2px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '4rem 1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem'
        }}>
          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: '700',
            textAlign: 'center',
            position: 'relative',
            paddingBottom: '1rem',
            margin: 0
          }}>
            Panorama de mes réalisations
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: '#60A5FA',
              borderRadius: '2px'
            }}/>
          </h2>

          <div style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            boxSizing: 'border-box'
          }}>
            {/* Projet GSB */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🏢
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Projet GSB
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                GSB est une infrastructure réseau que nous devions intégralement créer grâce à un cahier des charges. Ce projet nous a permis principalement de comprendre correctement le fonctionnement d'un datacenter.
              </p>
            </div>

            {/* Projet E-Lawvation */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                ⚖️
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Projet E-Lawvation
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Rédaction d'une étude visant à proposer différentes solutions technique pour répondre au besoin de notre client.
              </p>
            </div>

            {/* Projet CMDB */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🗄️
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Projet CMDB
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Rédaction d'une expression de besoin pour déployer et maintenir une base de données de gestion de configuration (CMDB en anglais).
              </p>
            </div>

            {/* Devops & Run MCO */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🔄
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Devops & Run MCO
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                J'ai réalisé différents travaux de DevOps pour le logiciel Reveelium et je l'ai maintenu en conditions opérationnelles.
              </p>
            </div>

            {/* Gestion des incidents Google Cloud */}
            <div 
              id="cloud-computing"
              style={cardStyle}
              onClick={() => window.location.href = '/competences/cloud-computing'}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#93C5FD';
                  moreInfo.style.opacity = '1';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
                
                const moreInfo = target.querySelector('[data-more-info]') as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = '#60A5FA';
                  moreInfo.style.opacity = '0.8';
                  const arrow = moreInfo.querySelector('span:last-child') as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                ☁️
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Gestion des incidents Google Cloud
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Depuis 2021, je suis passionné par le Cloud et plus précisément Google Cloud. J'interviens bénévolement sur des incidents Google Cloud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" style={{
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '4rem 1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem'
        }}>
          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: '700',
            textAlign: 'center',
            position: 'relative',
            paddingBottom: '1rem',
            margin: 0
          }}>
            Contact
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: '#60A5FA',
              borderRadius: '2px'
            }}/>
          </h2>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Email */}
            <div 
              onClick={copyEmail}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-5px)';
                target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                target.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '2rem' }}>📧</span>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>Email</span>
                <span style={{
                  color: '#60A5FA',
                  fontSize: '1rem'
                }}>e.mortier@proton.me</span>
              </div>
            </div>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/esteban-mortier/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none'
              }}
            >
              <div 
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(-5px)';
                  target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                  target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(0)';
                  target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  target.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '2rem' }}>💼</span>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>LinkedIn</span>
                  <span style={{
                    color: '#60A5FA',
                    fontSize: '1rem'
                  }}>Esteban mortier</span>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Esteban-Mo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none'
              }}
            >
              <div 
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(-5px)';
                  target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                  target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(0)';
                  target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  target.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '2rem' }}>🐱</span>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>GitHub</span>
                  <span style={{
                    color: '#60A5FA',
                    fontSize: '1rem'
                  }}>@Esteban-Mo</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem 1rem',
        boxSizing: 'border-box',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          fontWeight: '400'
        }}>
          © 2025 Esteban Mortier - Portfolio.
        </div>
      </footer>

      <ToastContainer 
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
