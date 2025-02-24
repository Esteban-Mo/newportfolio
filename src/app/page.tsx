'use client';

export default function Home() {
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
        boxSizing: 'border-box'
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
      </section>

      {/* Section Compétences */}
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
            Mes compétences
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
            {/* Organisation */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                📋
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Organisation
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Capacité à planifier et structurer les tâches de manière méthodique pour une exécution efficace des projets.
              </p>
            </div>

            {/* Flexibilité */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
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
                Flexibilité
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Adaptation rapide aux changements de priorités et capacité à gérer efficacement plusieurs projets en parallèle.
              </p>
            </div>

            {/* Communication */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
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
                Expression claire et précise, tant à l'oral qu'à l'écrit, facilitant la collaboration et le partage d'informations.
              </p>
            </div>

            {/* Travail d'équipe */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
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
                Travail d'équipe
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Collaboration active au sein d'équipes pluridisciplinaires pour atteindre des objectifs communs et partager les connaissances.
              </p>
            </div>

            {/* Autonomie */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
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
                Autonomie
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Capacité à prendre des initiatives et à mener des projets de manière indépendante tout en respectant les objectifs fixés.
              </p>
            </div>

            {/* Cloud Computing */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
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
                Cloud Computing
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Expert en solutions Cloud, spécialisé dans Google Cloud Platform avec trois ans d'expérience en conception et optimisation d'infrastructures.
              </p>
            </div>

            {/* Conception & Maintien des infrastructures */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🔧
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Infrastructure
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Expertise dans la création et la maintenance d'infrastructures réseau robustes, sécurisées et évolutives.
              </p>
            </div>

            {/* Gestion d'équipements réseaux */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🌐
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Réseaux
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Maîtrise approfondie de la configuration et du dépannage d'équipements réseau pour des infrastructures performantes.
              </p>
            </div>

            {/* Algorithmie */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2.5rem',
                opacity: 0.2
              }}>
                🧮
              </div>
              <h3 style={{
                color: '#60A5FA',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                margin: 0
              }}>
                Algorithmie
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Conception et optimisation de solutions algorithmiques efficaces pour résoudre des problèmes complexes.
              </p>
            </div>

            {/* Documentation */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
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
                Documentation
              </h3>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.9
              }}>
                Rédaction précise et structurée de documentations techniques facilitant la maintenance et le transfert de connaissances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
