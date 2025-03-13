"use client";

import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Chip } from "@mui/material";
import { useRouter } from "next/navigation";

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
          gap: `8px`,
          pointerEvents: `none`
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

      {/* Section Présentation Générale */}
      <section 
        style={{
          width: `100%`,
          backgroundColor: `rgba(0, 0, 0, 0.1)`,
          backdropFilter: `blur(10px)`,
          borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
          padding: `4rem 1rem`,
          boxSizing: `border-box`,
          cursor: `pointer`,
          transition: `all 0.3s ease`
        }}
        onClick={() => router.push(`/presentation`)}
        onMouseEnter={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.backgroundColor = `rgba(0, 0, 0, 0.2)`;
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
        }}
      >
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
            Présentation Générale
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
            maxWidth: `800px`,
            margin: `0 auto`,
            color: `#fff`,
            fontSize: `clamp(1rem, 2vw, 1.1rem)`,
            lineHeight: `1.8`,
            textAlign: `justify`,
            position: `relative`
          }}>
            <p style={{ marginBottom: `2rem` }}>
              Curieux et motivé, j`aime me lancer dans des projets techniques et apprendre en avançant. Mes études d`ingénieur m`ont donné les bases, mon alternance m`a fait travailler sur Next.js et Prisma, et mes projets perso en Node.js m`ont permis d`essayer des choses. J`ai aussi créé un site pour des vignerons en auto-entrepreneur, et les bons retours m`ont confirmé que ce métier est fait pour moi.
            </p>
            <p>
              En full stack, j`aime tout prendre en charge : discuter avec le client pour comprendre ses besoins, concevoir le projet, coder – souvent avec SQL ou TypeScript – et le déployer. Résoudre des problèmes et améliorer le code, c`est ce qui me plaît. Je me tiens à jour avec de la veille et des petits projets perso, et à terme, je me vois tech lead tout en gardant un pied dans le développement.
            </p>
            <div style={{
              position: `absolute`,
              bottom: `-2rem`,
              right: 0,
              color: `#60A5FA`,
              fontSize: `0.9rem`,
              display: `flex`,
              alignItems: `center`,
              gap: `0.5rem`,
              opacity: 0.8
            }}>
              <span>En savoir plus</span>
              <span style={{ fontSize: `1.2rem` }}>→</span>
            </div>
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
            {/* Framework & Librairies */}
            <div 
              id="frameworks-libraries"
              style={cardStyle}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                🛠️
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Framework & Librairies
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Maîtrise des frameworks et librairies modernes pour le développement d`applications web performantes.
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
                  label="Prisma" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#2D3748`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
              </div>
            </div>

            {/* Langages de Programmation */}
            <div 
              id="langages"
              style={cardStyle}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                💻
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Langages de Programmation
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Expertise dans les langages de programmation modernes pour le développement web.
              </p>
              <div style={{ display: `flex`, gap: `0.5rem`, flexWrap: `wrap`, marginTop: `0.5rem` }}>
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
                  label="Python" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#3776AB`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
              </div>
            </div>

            {/* Systèmes Géographiques */}
            <div 
              id="geo-systems"
              style={cardStyle}
            >
              {moreInfoIndicator}
              <div style={{
                position: `absolute`,
                top: `1rem`,
                right: `1rem`,
                fontSize: `2.5rem`,
                opacity: 0.2
              }}>
                🗺️
              </div>
              <h3 style={{
                color: `#60A5FA`,
                fontSize: `clamp(1.2rem, 3vw, 1.5rem)`,
                fontWeight: `600`,
                margin: 0
              }}>
                Systèmes Géographiques
              </h3>
              <p style={{
                color: `#fff`,
                fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
                lineHeight: `1.6`,
                margin: 0,
                opacity: 0.9
              }}>
                Expertise dans les outils et technologies de cartographie et de données géospatiales.
              </p>
              <div style={{ display: `flex`, gap: `0.5rem`, flexWrap: `wrap`, marginTop: `0.5rem` }}>
                <Chip 
                  label="Geoserver" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#4B9E4B`, 
                    border: `1px solid`,
                    borderRadius: `5px`
                  }} 
                />
                <Chip 
                  label="Leaflet" 
                  sx={{ 
                    bgcolor: `rgba(255, 255, 255, 0.05)`, 
                    color: `#fff`, 
                    borderColor: `#199900`, 
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
                Maîtrise des systèmes de gestion de bases de données relationnelles et NoSQL.
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

      {/* Section Réalisations - Temporairement indisponible */}
      {/* 
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
      */}

      {/* Message temporaire indiquant que la section est indisponible */}
      <section style={{
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
            Réalisations
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
            backgroundColor: `rgba(255,255,255,0.05)`,
            borderRadius: `1rem`,
            border: `1px solid rgba(255,255,255,0.1)`,
            padding: `2rem`,
            textAlign: `center`,
            maxWidth: `600px`,
            margin: `0 auto`
          }}>
            <p style={{
              color: `#fff`,
              fontSize: `clamp(1rem, 2vw, 1.2rem)`,
              lineHeight: `1.6`,
              margin: 0,
              opacity: 0.9
            }}>
              La section des réalisations est temporairement indisponible. Elle sera de retour très prochainement avec de nouveaux projets.
            </p>
          </div>
        </div>
      </section>

      {/* Commentaire de la fin de la section des réalisations originale */}
      {/*
          </div>
        </div>
      </section>
      */}

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
