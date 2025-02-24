'use client';

import './style.css';
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

  return (
    <div style={{
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden'
    }}>
      {/* Section Hero */}
      <section style={{
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
      <section style={{
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
            </div>

            {/* Développement Frontend */}
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
                Maîtrise des frameworks modernes (React, Next.js) et création d'interfaces utilisateur performantes et responsives.
              </p>
            </div>

            {/* Développement Backend */}
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
            </div>

            {/* Tests & Qualité */}
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
                🎯
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
                Implémentation de tests unitaires, d'intégration et E2E pour garantir la fiabilité et la maintenabilité du code.
              </p>
            </div>

            {/* DevOps */}
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
            </div>

            {/* Clean Code */}
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
                ✨
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Clean Code
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Écriture de code maintenable, lisible et efficace en suivant les meilleures pratiques de développement.
              </p>
            </div>

            {/* Base de données */}
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
                Base de données
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Conception de schémas optimisés et gestion efficace des données avec SQL et NoSQL.
              </p>
            </div>

            {/* Sécurité */}
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
                Implémentation des meilleures pratiques de sécurité et protection des données sensibles dans les applications.
              </p>
            </div>

            {/* Agilité */}
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
                Agilité
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Expérience en méthodologies agiles, participation active aux cérémonies Scrum et amélioration continue des processus.
              </p>
            </div>

            {/* Veille Technologique */}
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
                📚
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Veille Technologique
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Suivi constant des nouvelles technologies et des bonnes pratiques pour maintenir une expertise à jour.
              </p>
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
      <section style={{
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
    </div>
  );
}
