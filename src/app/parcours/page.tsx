`use client`;

import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./parcours.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School"; 
import StarIcon from "@mui/icons-material/Star";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SecurityIcon from "@mui/icons-material/Security";
import StoreIcon from "@mui/icons-material/Store";

export default function Parcours() {
  // Animation au scroll
  useEffect(() => {
    // Réinitialisation du scroll au chargement de la page
    window.scrollTo(0, 0);
  }, []);

  // Détection du support des animations
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      padding: `40px 20px`,
      maxWidth: `1200px`,
      margin: `0 auto`,
      borderRadius: `15px`,
      backdropFilter: `blur(4px)`,
    }}>
      <h1 style={{
        textAlign: `center`,
        fontSize: `3rem`,
        marginBottom: `50px`,
        WebkitBackgroundClip: `text`,
        fontWeight: `bold`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? `translateY(0)` : `translateY(20px)`,
        transition: `opacity 0.8s ease, transform 0.8s ease`,
      }}>
        Mon Parcours Professionnel
      </h1>

      <VerticalTimeline lineColor="#60A5FA" animate={true}>
        {/* Valeco - Alternance actuelle */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mars 2023 - Aujourd`hui (2 ans 1 mois)"
          iconStyle={{ background: `#60A5FA`, color: `#fff` }}
          icon={<WorkIcon />}
          contentStyle={{
            background: `rgba(96, 165, 250, 0.1)`,
            color: `#fff`,
            border: `1px solid #60A5FA`
          }}
          contentArrowStyle={{ borderRight: `7px solid #60A5FA` }}
        >
          <h3 style={{ color: `#60A5FA` }}>Ingénieur conception logiciels</h3>
          <h4 style={{ color: `#ccc` }}>Valeco · Contrat en alternance</h4>
          <p style={{ color: `#ddd` }}>Montpellier, Occitanie, France · Hybride</p>
          <div style={{ marginTop: `10px` }}>
            <p style={{ fontSize: `0.9rem`, color: `#aaa` }}>
              Compétences : PostgreSQL · TypeScript · React.js · Next.js · Prisma
            </p>
          </div>
        </VerticalTimelineElement>

        {/* Groupe AEN - Formation */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Septembre 2020 - Aujourd`hui (4 ans 7 mois)"
          iconStyle={{ background: `#8B5CF6`, color: `#fff` }}
          icon={<SchoolIcon />}
          contentStyle={{
            background: `rgba(139, 92, 246, 0.1)`,
            color: `#fff`,
            border: `1px solid #8B5CF6`
          }}
          contentArrowStyle={{ borderRight: `7px solid #8B5CF6` }}
        >
          <h3 style={{ color: `#8B5CF6` }}>Étudiant ingénieur (logiciels)</h3>
          <h4 style={{ color: `#ccc` }}>Groupe AEN</h4>
          <p style={{ color: `#ddd` }}>Nîmes, Occitanie, France</p>
        </VerticalTimelineElement>

        {/* Action environnementale */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mars 2022 - Juillet 2022 (5 mois)"
          iconStyle={{ background: `#10B981`, color: `#fff` }}
          icon={<VolunteerActivismIcon />}
          contentStyle={{
            background: `rgba(16, 185, 129, 0.1)`,
            color: `#fff`,
            border: `1px solid #10B981`
          }}
          contentArrowStyle={{ borderRight: `7px solid #10B981` }}
        >
          <h3 style={{ color: `#10B981` }}>Action environnementale</h3>
          <h4 style={{ color: `#ccc` }}>Indépendant</h4>
          <p style={{ color: `#ddd` }}>L`Escala, Catalogne, Espagne</p>
          <p>
            - Etablir le plan de réalisation d`un nettoyage de plage<br/>
            - Etablir une stratégie de récolte de fond<br/>
            - Gestion de budget<br/>
            - Communication et partage de l`action réalisée avec les partenaires (Yelloh! Village et Groupe AEN)
          </p>
          <div style={{ marginTop: `10px` }}>
            <p style={{ fontSize: `0.9rem`, color: `#aaa` }}>
              Compétences : Collecte de fonds · Gestion budgétaire · Sensibilisation à l`environnement · Gestion de projet · Communication stratégique
            </p>
          </div>
        </VerticalTimelineElement>

        {/* Yelloh Village */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mars 2022 - Juillet 2022 (5 mois)"
          iconStyle={{ background: `#60A5FA`, color: `#fff` }}
          icon={<WorkIcon />}
          contentStyle={{
            background: `rgba(96, 165, 250, 0.1)`,
            color: `#fff`,
            border: `1px solid #60A5FA`
          }}
          contentArrowStyle={{ borderRight: `7px solid #60A5FA` }}
        >
          <h3 style={{ color: `#60A5FA` }}>Développement web et API</h3>
          <h4 style={{ color: `#ccc` }}>Yelloh Village - Europe Plein Air SAS · Indépendant</h4>
          <p style={{ color: `#ddd` }}>Aigues-Mortes, Occitanie, France</p>
          <p>
            - Mise en place d`un cahier des charges<br/>
            - Mise en place et gestion de l`organisation du projet sur Github<br/>
            - Réalisation du site web et de l`api
          </p>
          <div style={{ marginTop: `10px` }}>
            <p style={{ fontSize: `0.9rem`, color: `#aaa` }}>
              Compétences : TypeScript · Scss · MySQL · AngularJS · Java
            </p>
          </div>
        </VerticalTimelineElement>

        {/* Vaunage Construction */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Septembre 2021 - Mars 2022 (7 mois)"
          iconStyle={{ background: `#60A5FA`, color: `#fff` }}
          icon={<WorkIcon />}
          contentStyle={{
            background: `rgba(96, 165, 250, 0.1)`,
            color: `#fff`,
            border: `1px solid #60A5FA`
          }}
          contentArrowStyle={{ borderRight: `7px solid #60A5FA` }}
        >
          <h3 style={{ color: `#60A5FA` }}>Développeur logiciels</h3>
          <h4 style={{ color: `#ccc` }}>Vaunage Construction · Indépendant</h4>
          <p style={{ color: `#ddd` }}>Nîmes, Occitanie, France</p>
          <p>
            - Mise en place d`un cahier des charges<br/>
            - Mise en place et gestion de l`organisation du projet sur Github<br/>
            - Application de la méthode agile en tant que Scrum master<br/>
            - Réalisation du logiciel
          </p>
          <div style={{ marginTop: `10px` }}>
            <p style={{ fontSize: `0.9rem`, color: `#aaa` }}>
              Compétences : C# · WPF · MySQL · Scrum Master · XAML · Méthodes agiles
            </p>
          </div>
        </VerticalTimelineElement>

        {/* George Roumier */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Décembre 2021 - Février 2022 (3 mois)"
          iconStyle={{ background: `#60A5FA`, color: `#fff` }}
          icon={<WorkIcon />}
          contentStyle={{
            background: `rgba(96, 165, 250, 0.1)`,
            color: `#fff`,
            border: `1px solid #60A5FA`
          }}
          contentArrowStyle={{ borderRight: `7px solid #60A5FA` }}
        >
          <h3 style={{ color: `#60A5FA` }}>Développeur Full Stack</h3>
          <h4 style={{ color: `#ccc` }}>George Roumier · Freelance</h4>
          <p style={{ color: `#ddd` }}>Nîmes, Occitanie, France</p>
          <p>
            Réalisation d`un site web sur mesure pour le Domaine George Roumier.
          </p>
          <div style={{ marginTop: `10px` }}>
            <p style={{ fontSize: `0.9rem`, color: `#aaa` }}>
              Compétences : TypeScript · Scss · Linux · MongoDB · AngularJS · Déploiement de projet · Node.js
            </p>
          </div>
        </VerticalTimelineElement>

        {/* Axians */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mars 2021 - Juillet 2021 (5 mois)"
          iconStyle={{ background: `#60A5FA`, color: `#fff` }}
          icon={<WorkIcon />}
          contentStyle={{
            background: `rgba(96, 165, 250, 0.1)`,
            color: `#fff`,
            border: `1px solid #60A5FA`
          }}
          contentArrowStyle={{ borderRight: `7px solid #60A5FA` }}
        >
          <h3 style={{ color: `#60A5FA` }}>Développeur Full Stack</h3>
          <h4 style={{ color: `#ccc` }}>Axians · Indépendant</h4>
          <p style={{ color: `#ddd` }}>Nîmes, Occitanie, France</p>
          <p>
            - Mise en place d`un cahier des charges<br/>
            - Mise en place et gestion de l`organisation du projet sur Github<br/>
            - Réalisation du site web
          </p>
          <div style={{ marginTop: `10px` }}>
            <p style={{ fontSize: `0.9rem`, color: `#aaa` }}>
              Compétences : PostgreSQL · HTML5 · PHP · Feuilles de style en cascade (CSS)
            </p>
          </div>
        </VerticalTimelineElement>

        {/* Strand cosmétic */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019 (1 an)"
          iconStyle={{ background: `#F59E0B`, color: `#fff` }}
          icon={<WorkIcon />}
          contentStyle={{
            background: `rgba(245, 158, 11, 0.1)`,
            color: `#fff`,
            border: `1px solid #F59E0B`
          }}
          contentArrowStyle={{ borderRight: `7px solid #F59E0B` }}
        >
          <h3 style={{ color: `#F59E0B` }}>Responsable stocks</h3>
          <h4 style={{ color: `#ccc` }}>Strand cosmétic · Intérimaire</h4>
          <p style={{ color: `#ddd` }}>Lentilly, Auvergne-Rhône-Alpes, France</p>
          <div style={{ marginTop: `10px` }}>
            <p style={{ fontSize: `0.9rem`, color: `#aaa` }}>
              Compétences : Gestion des stocks · Gestion collaborative de la planification, de la prévision et des réapprovisionnements (CPFR)
            </p>
          </div>
        </VerticalTimelineElement>

        {/* Manpower */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2018 (3 ans)"
          iconStyle={{ background: `#F59E0B`, color: `#fff` }}
          icon={<WorkIcon />}
          contentStyle={{
            background: `rgba(245, 158, 11, 0.1)`,
            color: `#fff`,
            border: `1px solid #F59E0B`
          }}
          contentArrowStyle={{ borderRight: `7px solid #F59E0B` }}
        >
          <h3 style={{ color: `#F59E0B` }}>Intérimaire</h3>
          <h4 style={{ color: `#ccc` }}>Manpower · Intérimaire</h4>
          <p style={{ color: `#ddd` }}>L`Arbresle, Auvergne-Rhône-Alpes, France</p>
        </VerticalTimelineElement>

        {/* ONET Sécurité */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 (Moins d`un an)"
          iconStyle={{ background: `#F59E0B`, color: `#fff` }}
          icon={<SecurityIcon />}
          contentStyle={{
            background: `rgba(245, 158, 11, 0.1)`,
            color: `#fff`,
            border: `1px solid #F59E0B`
          }}
          contentArrowStyle={{ borderRight: `7px solid #F59E0B` }}
        >
          <h3 style={{ color: `#F59E0B` }}>Agent de sécurité privé</h3>
          <h4 style={{ color: `#ccc` }}>ONET Sécurité · CDD</h4>
          <p style={{ color: `#ddd` }}>Lyon, Auvergne-Rhône-Alpes, France</p>
        </VerticalTimelineElement>

        {/* GiFi */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2014 (4 ans)"
          iconStyle={{ background: `#F59E0B`, color: `#fff` }}
          icon={<StoreIcon />}
          contentStyle={{
            background: `rgba(245, 158, 11, 0.1)`,
            color: `#fff`,
            border: `1px solid #F59E0B`
          }}
          contentArrowStyle={{ borderRight: `7px solid #F59E0B` }}
        >
          <h3 style={{ color: `#F59E0B` }}>Commercial de détail</h3>
          <h4 style={{ color: `#ccc` }}>GiFi · CDI</h4>
          <p style={{ color: `#ddd` }}>L`Arbresle, Auvergne-Rhône-Alpes, France</p>
          <div style={{ marginTop: `10px` }}>
            <p style={{ fontSize: `0.9rem`, color: `#aaa` }}>
              Compétences : Gestion des stocks · Vente · Gestion du stockage · Prévisions
            </p>
          </div>
        </VerticalTimelineElement>

        {/* Point de départ */}
        <VerticalTimelineElement
          iconStyle={{ background: `#10B981`, color: `#fff` }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
      
      <div style={{
        marginTop: `60px`,
        display: `flex`,
        justifyContent: `center`,
        gap: `20px`
      }}>
        <a href="/" style={{
          padding: `12px 24px`,
          backgroundColor: `rgba(96, 165, 250, 0.2)`,
          borderRadius: `8px`,
          color: `#60A5FA`,
          textDecoration: `none`,
          fontWeight: `bold`,
          border: `1px solid #60A5FA`,
          transition: `all 0.3s ease`
        }}>
          Retour à l`accueil
        </a>
      </div>
    </div>
  );
} 