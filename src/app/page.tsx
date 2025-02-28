'use client';

import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Chip } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  // Style commun pour toutes les cartes
  const cardStyle = {
    backgroundColor: `rgba(255,255,255,0.05)`,
    borderRadius: `1rem`,
    border: `1px solid rgba(255,255,255,0.1)`,
    padding: `2rem`,
    paddingBottom: `4rem`,
    display: `flex`,
    flexDirection: `column` as const,
    gap: `1.5rem`,
    position: `relative` as const,
    transition: `all 0.3s ease`,
    cursor: `pointer`,
    boxSizing: `border-box` as const,
    overflow: `hidden` as const,
    minHeight: `200px`,
  };

  // Indicateur "En savoir plus"
  const moreInfoIndicator = (
    <div 
      data-more-info
      style={{
        position: `absolute`,
        bottom: `1.5rem`,
        left: `2rem`,
        display: `flex`,
        alignItems: `center`,
        gap: `0.5rem`,
        fontSize: `0.9rem`,
        color: `#60A5FA`,
        opacity: 0.8,
        transition: `all 0.3s ease`,
      }}
    >
      <span>En savoir plus</span>
      <span style={{ 
        fontSize: `1.2rem`,
        transition: `transform 0.3s ease`
      }}>→</span>
    </div>
  );

  const copyEmail = () => {
    navigator.clipboard.writeText(`e.mortier@proton.me`);
    toast.success(`Email copié !`, {
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

  const router = useRouter();

  return (
    <div style={{
      width: `100%`,
      maxWidth: `100vw`,
      overflow: `hidden`
    }}>
      {/* Section Hero */}
      <section id="home" style={{
        width: `100%`,
        minHeight: `calc(100vh - 70px)`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        padding: `2rem 1rem`,
        boxSizing: `border-box`,
        position: `relative`
      }}>
        <h1 style={{
          color: `#fff`,
          fontSize: `clamp(1.5rem, 4vw, 2rem)`,
          fontWeight: `500`,
          letterSpacing: `0.2em`,
          textAlign: `center`,
          margin: 0
        }}>
          ESTEBAN MORTIER
        </h1>
        
        <div style={{
          width: `150px`,
          height: `2px`,
          background: `linear-gradient(90deg, transparent, #fff, transparent)`,
          margin: `1.5rem 0`
        }} />
        
        <h2 style={{
          color: `#60A5FA`,
          fontSize: `clamp(1.8rem, 5vw, 2.5rem)`,
          fontWeight: `700`,
          letterSpacing: `0.1em`,
          textAlign: `center`,
          margin: 0
        }}>
          EXPERT EN INGÉNIERIE LOGICIELLE
        </h2>

        {/* Indicateur de scroll avec chevrons améliorés */}
        <div style={{
          position: `absolute`,
          bottom: `2rem`,
          left: `50%`,
          transform: `translateX(-50%)`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          gap: `8px`
        }}>
          <div style={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            gap: `4px`
          }}>
            <div className="scroll-chevron scroll-chevron-1" />
            <div className="scroll-chevron scroll-chevron-2" />
            <div className="scroll-chevron scroll-chevron-3" />
          </div>
        </div>
      </section>

      {/* Section Compétences Techniques */}
      <section id="competences" style={{
        width: `100%`,
        backgroundColor: `rgba(0, 0, 0, 0.1)`,
        backdropFilter: `blur(10px)`,
        borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
        padding: `4rem 1rem`,
        boxSizing: `border-box`
      }}>
        <div style={{
          maxWidth: `1400px`,
          margin: `0 auto`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          gap: `3rem`
        }}>
          <h2 style={{
            color: `#fff`,
            fontSize: `clamp(2rem, 5vw, 2.5rem)`,
            fontWeight: `700`,
            textAlign: `center`,
            position: `relative`,
            paddingBottom: `1rem`,
            margin: 0
          }}>
            Compétences Techniques
            <div style={{
              position: `absolute`,
              bottom: 0,
              left: `50%`,
              transform: `translateX(-50%)`,
              width: `60px`,
              height: `4px`,
              background: `#60A5FA`,
              borderRadius: `2px`
            }}/>
          </h2>

          <div style={{
            width: `100%`,
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
            gap: `2rem`,
            boxSizing: `border-box`
          }}>
            {/* Architecture Logicielle */}
            <div 
              id="architecture-logicielle"
              style={cardStyle}
              onClick={() => router.push(`/competences/architecture-logicielle`)}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                🏗️
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Architecture Logicielle
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Conception d`architectures évolutives et maintenables en appliquant les principes SOLID et les patterns de conception.
              </p>
              <div style={{ display: `flex`, gap: `0.5rem`, flexWrap: `wrap`, marginTop: `0.5rem` }}>
                <Chip 
                  label="Design Patterns" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#34D399`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
                <Chip 
                  label="SOLID" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#34D399`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
                <Chip 
                  label="Clean Architecture" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#34D399`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
              </div>
            </div>

            {/* Développement Frontend */}
            <div 
              id="developpement-frontend"
              style={cardStyle}
              onClick={() => router.push(`/competences/developpement-frontend`)}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                🎨
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Développement Frontend
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Maîtrise des frameworks modernes et création d`interfaces utilisateur performantes et responsives.
              </p>
              <div style={{ display: `flex`, gap: `0.5rem`, flexWrap: `wrap`, marginTop: `0.5rem` }}>
                <Chip 
                  label="React" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#61DAFB`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
                <Chip 
                  label="Next.js" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#fff`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
                <Chip 
                  label="TypeScript" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#3178C6`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
                <Chip 
                  label="JavaScript" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#F7DF1E`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
              </div>
            </div>

            {/* Développement Backend */}
            <div 
              id="developpement-backend"
              style={cardStyle}
              onClick={() => router.push(`/competences/developpement-backend`)}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                ⚙️
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Développement Backend
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Création d`APIs RESTful robustes et évolutives, gestion efficace des bases de données et des services web.
              </p>
              <div style={{ display: `flex`, gap: `0.5rem`, flexWrap: `wrap`, marginTop: `0.5rem` }}>
                <Chip 
                  label="Node.js" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#68A063`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
                <Chip 
                  label="Next.js API" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#fff`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
              </div>
            </div>

            {/* Base de données */}
            <div 
              id="base-de-donnees"
              style={cardStyle}
              onClick={() => router.push(`/competences/base-de-donnees`)}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                💾
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Base de Données
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Conception et optimisation de bases de données relationnelles et NoSQL pour des applications performantes et scalables.
              </p>
              <div style={{ display: `flex`, gap: `0.5rem`, flexWrap: `wrap`, marginTop: `0.5rem` }}>
                <Chip 
                  label="PostgreSQL" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`,
                    borderColor: `#336791`,
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
                <Chip 
                  label="MongoDB" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`,
                    borderColor: `#4DB33D`,
                    border: `1px solid`, 
                    borderRadius: `5px`
                  }} 
                />
                <Chip 
                  label="Redis" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`,
                    borderColor: `#DC382D`,
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences Humaines */}
      <section style={{
        width: `100%`,
        backgroundColor: `rgba(0, 0, 0, 0.2)`,
        backdropFilter: `blur(10px)`,
        borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
        padding: `4rem 1rem`,
        boxSizing: `border-box`
      }}>
        <div style={{
          maxWidth: `1400px`,
          margin: `0 auto`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          gap: `3rem`
        }}>
          <h2 style={{
            color: `#fff`,
            fontSize: `clamp(2rem, 5vw, 2.5rem)`,
            fontWeight: `700`,
            textAlign: `center`,
            position: `relative`,
            paddingBottom: `1rem`,
            margin: 0
          }}>
            Compétences Humaines
            <div style={{
              position: `absolute`,
              bottom: 0,
              left: `50%`,
              transform: `translateX(-50%)`,
              width: `60px`,
              height: `4px`,
              background: `#60A5FA`,
              borderRadius: `2px`
            }}/>
          </h2>

          <div style={{
            width: `100%`,
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
            gap: `2rem`,
            boxSizing: `border-box`
          }}>
            {/* Communication */}
            <div 
              id="communication"
              style={cardStyle}
              onClick={() => window.location.href = `/competences/communication`}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                💬
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Communication
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Excellentes capacités de communication écrite et orale, facilitant la collaboration avec les équipes et les clients.
              </p>
            </div>

            {/* Leadership */}
            <div 
              id="leadership"
              style={cardStyle}
              onClick={() => window.location.href = `/competences/leadership`}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                👥
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Leadership
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Capacité à guider, inspirer et mobiliser les équipes vers des objectifs communs tout en favorisant l`innovation et l`excellence technique.
              </p>
            </div>

            {/* Adaptabilité */}
            <div 
              id="adaptabilite"
              style={cardStyle}
              onClick={() => window.location.href = `/competences/adaptabilite`}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                🔄
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Adaptabilité
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Grande capacité d`adaptation aux changements et aux nouvelles technologies.
              </p>
            </div>

            {/* Résolution de problèmes */}
            <div 
              id="resolution-de-problemes"
              style={cardStyle}
              onClick={() => window.location.href = `/competences/resolution-de-problemes`}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                🔍
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Résolution de problèmes
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
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
        width: `100%`,
        backdropFilter: `blur(2px)`,
        borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
        padding: `4rem 1rem`,
        boxSizing: `border-box`
      }}>
        <div style={{
          maxWidth: `1400px`,
          margin: `0 auto`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          gap: `3rem`
        }}>
          <h2 style={{
            color: `#fff`,
            fontSize: `clamp(2rem, 5vw, 2.5rem)`,
            fontWeight: `700`,
            textAlign: `center`,
            position: `relative`,
            paddingBottom: `1rem`,
            margin: 0
          }}>
            Panorama de mes réalisations
            <div style={{
              position: `absolute`,
              bottom: 0,
              left: `50%`,
              transform: `translateX(-50%)`,
              width: `60px`,
              height: `4px`,
              background: `#60A5FA`,
              borderRadius: `2px`
            }}/>
          </h2>

          <div style={{
            width: `100%`,
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
            gap: `2rem`,
            boxSizing: `border-box`
          }}>
            {/* BDD Turbine */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                💾
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                BDD Turbine
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Application web innovante de gestion de turbines industrielles avec une interface intuitive pour la création et l`administration des données. API RESTful sécurisée permettant l`exportation des données au format CSV pour une intégration transparente avec d`autres systèmes.
              </p>
            </div>

            {/* Atlas Eolien */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                🌪️
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Atlas Eolien
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Solution cartographique interactive visualisant en temps réel les données éoliennes en France. Interface moderne intégrant les données météorologiques et techniques des installations publiques et privées pour une prise de décision optimale.
              </p>
            </div>

            {/* Module Foncier */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                🏢
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Module Foncier
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Plateforme complète de gestion immobilière d`entreprise avec suivi des baux, optimisation des espaces et reporting avancé. Solution sur mesure permettant une gestion efficace et centralisée du patrimoine immobilier.
              </p>
            </div>

            {/* Agence Walker */}
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#93C5FD`;
                  moreInfo.style.opacity = `1`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(5px)`;
                  }
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
                
                const moreInfo = target.querySelector(`[data-more-info]`) as HTMLDivElement;
                if (moreInfo) {
                  moreInfo.style.color = `#60A5FA`;
                  moreInfo.style.opacity = `0.8`;
                  const arrow = moreInfo.querySelector(`span:last-child`) as HTMLSpanElement;
                  if (arrow) {
                    arrow.style.transform = `translateX(0)`;
                  }
                }
              }}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                🏠
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Agence Walker
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Application immobilière nouvelle génération avec cartographie interactive des biens. Interface élégante offrant une visualisation en temps réel des propriétés disponibles et louées, enrichie de fonctionnalités avancées de gestion locative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" style={{
        width: `100%`,
        backgroundColor: `rgba(0, 0, 0, 0.1)`,
        backdropFilter: `blur(10px)`,
        borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
        padding: `4rem 1rem`,
        boxSizing: `border-box`
      }}>
        <div style={{
          maxWidth: `1400px`,
          margin: `0 auto`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          gap: `3rem`
        }}>
          <h2 style={{
            color: `#fff`,
            fontSize: `clamp(2rem, 5vw, 2.5rem)`,
            fontWeight: `700`,
            textAlign: `center`,
            position: `relative`,
            paddingBottom: `1rem`,
            margin: 0
          }}>
            Contact
            <div style={{
              position: `absolute`,
              bottom: 0,
              left: `50%`,
              transform: `translateX(-50%)`,
              width: `60px`,
              height: `4px`,
              background: `#60A5FA`,
              borderRadius: `2px`
            }}/>
          </h2>

          <div style={{
            display: `flex`,
            justifyContent: `center`,
            gap: `2rem`,
            flexWrap: `wrap`
          }}>
            {/* Email */}
            <div 
              onClick={copyEmail}
              style={{
                backgroundColor: `rgba(255,255,255,0.05)`,
                borderRadius: `1rem`,
                border: `1px solid rgba(255,255,255,0.1)`,
                padding: `2rem`,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                gap: `1rem`,
                cursor: `pointer`,
                transition: `all 0.3s ease`
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(-5px)`;
                target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = `translateY(0)`;
                target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                target.style.boxShadow = `none`;
              }}
            >
              <span style={{ fontSize: `2rem` }}>📧</span>
              <div style={{
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                gap: `0.5rem`
              }}>
                <span style={{
                  color: `#fff`,
                  fontSize: `1.2rem`,
                  fontWeight: `600`
                }}>Email</span>
                <span style={{
                  color: `#60A5FA`,
                  fontSize: `1rem`
                }}>e.mortier@proton.me</span>
              </div>
            </div>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/esteban-mortier/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: `none`
              }}
            >
              <div 
                style={{
                  backgroundColor: `rgba(255,255,255,0.05)`,
                  borderRadius: `1rem`,
                  border: `1px solid rgba(255,255,255,0.1)`,
                  padding: `2rem`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  gap: `1rem`,
                  cursor: `pointer`,
                  transition: `all 0.3s ease`
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = `translateY(-5px)`;
                  target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                  target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = `translateY(0)`;
                  target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                  target.style.boxShadow = `none`;
                }}
              >
                <span style={{ fontSize: `2rem` }}>💼</span>
                <div style={{
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  gap: `0.5rem`
                }}>
                  <span style={{
                    color: `#fff`,
                    fontSize: `1.2rem`,
                    fontWeight: `600`
                  }}>LinkedIn</span>
                  <span style={{
                    color: `#60A5FA`,
                    fontSize: `1rem`
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
                textDecoration: `none`
              }}
            >
              <div 
                style={{
                  backgroundColor: `rgba(255,255,255,0.05)`,
                  borderRadius: `1rem`,
                  border: `1px solid rgba(255,255,255,0.1)`,
                  padding: `2rem`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  gap: `1rem`,
                  cursor: `pointer`,
                  transition: `all 0.3s ease`
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = `translateY(-5px)`;
                  target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                  target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = `translateY(0)`;
                  target.style.backgroundColor = `rgba(255,255,255,0.05)`;
                  target.style.boxShadow = `none`;
                }}
              >
                <span style={{ fontSize: `2rem` }}>🐱</span>
                <div style={{
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  gap: `0.5rem`
                }}>
                  <span style={{
                    color: `#fff`,
                    fontSize: `1.2rem`,
                    fontWeight: `600`
                  }}>GitHub</span>
                  <span style={{
                    color: `#60A5FA`,
                    fontSize: `1rem`
                  }}>@Esteban-Mo</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        width: `100%`,
        backgroundColor: `rgba(0, 0, 0, 0.2)`,
        backdropFilter: `blur(10px)`,
        borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
        padding: `2rem 1rem`,
        boxSizing: `border-box`,
        marginTop: `auto`
      }}>
        <div style={{
          maxWidth: `1400px`,
          margin: `0 auto`,
          textAlign: `center`,
          color: `rgba(255, 255, 255, 0.7)`,
          fontSize: `clamp(0.9rem, 2vw, 1rem)`,
          fontWeight: `400`
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
