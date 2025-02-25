'use client';

import { useRouter } from 'next/navigation';

export default function ArchitectureLogicielle() {
  const router = useRouter();

  const handleRetour = () => {
    router.push('/#competences');
  };

  const textStyle = {
    textAlign: 'justify' as const,
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '1rem'
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
        Architecture Logicielle
      </h1>

      <section style={{
        marginBottom: '3rem',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#60A5FA',
        }}>
          Ma définition
        </h2>
        <div>
          <p style={textStyle}>
            L'architecture logicielle est l'art de concevoir des systèmes informatiques robustes, évolutifs et maintenables. Elle définit la structure fondamentale d'un logiciel, ses composants, leurs relations et les principes qui guident sa conception et son évolution.
          </p>
          <p style={textStyle}>
            Une bonne architecture logicielle repose sur plusieurs principes fondamentaux. Les principes SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) constituent une base solide pour créer des systèmes modulaires et flexibles. La séparation des préoccupations permet d'isoler les différentes responsabilités du système, facilitant ainsi sa maintenance et son évolution. L'abstraction et l'encapsulation masquent les détails d'implémentation, offrant des interfaces claires et cohérentes. Enfin, la gestion des dépendances assure que les composants interagissent de manière contrôlée et prévisible.
          </p>
          <p style={textStyle}>
            Les patterns de conception sont des solutions éprouvées à des problèmes récurrents en architecture logicielle. Ils se divisent en trois catégories principales : les patterns créationnels (Factory, Singleton, Builder), qui concernent la création d'objets ; les patterns structurels (Adapter, Composite, Decorator), qui définissent les relations entre les objets ; et les patterns comportementaux (Observer, Strategy, Command), qui gèrent les interactions et les responsabilités entre les objets.
          </p>
          <p style={textStyle}>
            L'architecture logicielle n'est pas figée mais évolue constamment pour répondre aux besoins changeants des utilisateurs et aux avancées technologiques. Des approches comme l'architecture hexagonale, l'architecture en microservices ou l'architecture événementielle offrent des solutions adaptées à différents contextes et contraintes. Le choix d'une architecture dépend de nombreux facteurs, tels que la taille du projet, les exigences de performance, la scalabilité nécessaire et les compétences de l'équipe.
          </p>
        </div>
      </section>

      <section style={{
        marginBottom: '3rem',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#60A5FA',
        }}>
          Mes éléments de preuve
        </h2>
        <div>
          <p style={textStyle}>
            Ma formation en architecture logicielle a débuté lors de mes études d'ingénieur, où j'ai appris les fondamentaux de la conception orientée objet et les patterns de conception. J'ai approfondi ces connaissances en lisant des ouvrages de référence tels que "Clean Architecture" de Robert C. Martin et "Design Patterns" de Gamma, Helm, Johnson et Vlissides. Ces lectures m'ont permis de comprendre les principes sous-jacents à une bonne architecture et de les appliquer dans mes projets.
          </p>
          <p style={textStyle}>
            J'ai eu l'occasion de mettre en pratique ces connaissances lors de plusieurs projets professionnels. Par exemple, dans le cadre du développement d'une application de gestion de données sensibles, j'ai implémenté une architecture hexagonale (ou architecture en ports et adaptateurs) pour isoler le domaine métier des détails techniques. Cette approche a permis de créer un système modulaire, facile à tester et à faire évoluer. Les adaptateurs primaires (API REST, interface utilisateur) et secondaires (base de données, services externes) communiquaient avec le domaine via des ports clairement définis, assurant ainsi une séparation nette des préoccupations.
          </p>
          <p style={textStyle}>
            Un autre projet significatif a été la refactorisation d'une application monolithique vers une architecture en microservices. Face à des problèmes de scalabilité et de déploiement, j'ai dirigé l'équipe dans l'identification des domaines fonctionnels et leur découpage en services autonomes. Nous avons mis en place une communication asynchrone entre les services via un bus d'événements, permettant un couplage faible et une meilleure résilience. Cette transformation a considérablement amélioré la maintenabilité du système et a permis des déploiements plus fréquents et moins risqués.
          </p>
          <p style={textStyle}>
            Dans le cadre de mes activités de mentorat, j'ai également organisé des sessions de formation sur les principes SOLID et les patterns de conception pour les développeurs juniors de mon équipe. Ces sessions combinaient théorie et exercices pratiques, permettant aux participants de comprendre concrètement comment appliquer ces principes dans leur travail quotidien. Le feedback positif et l'amélioration visible de la qualité du code produit par l'équipe ont confirmé l'efficacité de cette approche pédagogique.
          </p>
        </div>
      </section>

      <section style={{
        marginBottom: '3rem',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#60A5FA',
        }}>
          Mon autocritique
        </h2>
        <div>
          <p style={textStyle}>
            Grâce à ma formation et à mon expérience professionnelle, je possède une solide compréhension des principes d'architecture logicielle et des patterns de conception. Je suis capable de concevoir des systèmes modulaires, évolutifs et maintenables, en appliquant les principes SOLID et en utilisant les patterns appropriés selon le contexte. Ma connaissance des différentes approches architecturales (monolithique, microservices, hexagonale, etc.) me permet de faire des choix éclairés en fonction des besoins spécifiques de chaque projet.
          </p>
          <p style={textStyle}>
            Cependant, je reconnais que l'architecture logicielle est un domaine vaste et en constante évolution. Bien que je maîtrise les fondamentaux, certaines approches plus récentes ou spécialisées, comme l'architecture basée sur les événements (Event Sourcing) ou les systèmes réactifs, représentent des domaines où je pourrais approfondir mes connaissances. De plus, l'application pratique de ces concepts dans des environnements très distribués ou à très grande échelle reste un défi que je souhaite relever.
          </p>
          <p style={textStyle}>
            Une autre piste d'amélioration concerne la communication des décisions architecturales. Bien que je sois capable de concevoir des architectures solides, je pourrais améliorer ma capacité à documenter et à expliquer ces choix de manière claire et accessible pour tous les membres de l'équipe, y compris les non-techniciens. La création de diagrammes d'architecture plus expressifs et la rédaction de documents de décision d'architecture (ADR - Architecture Decision Records) sont des pratiques que je souhaite renforcer.
          </p>
          <p style={textStyle}>
            Enfin, je suis conscient que la théorie et la pratique peuvent parfois diverger. Les contraintes réelles des projets (délais, budget, compétences disponibles) peuvent nécessiter des compromis architecturaux. J'ai appris à trouver un équilibre entre l'idéal théorique et les réalités pratiques, mais c'est un exercice qui demande une vigilance constante et une remise en question régulière de mes approches.
          </p>
        </div>
      </section>

      <section style={{
        marginBottom: '3rem',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#60A5FA',
        }}>
          Mon évolution dans cette compétence
        </h2>
        <div>
          <p style={textStyle}>
            Pour continuer à progresser dans le domaine de l'architecture logicielle, j'ai défini plusieurs axes de développement. À court terme, je prévois d'approfondir mes connaissances sur les architectures événementielles et réactives, qui sont particulièrement pertinentes pour les systèmes distribués modernes. Je compte suivre des formations spécialisées et participer à des projets impliquant ces approches pour acquérir une expérience pratique.
          </p>
          <p style={textStyle}>
            À moyen terme, je souhaite me familiariser davantage avec les aspects opérationnels de l'architecture, notamment les pratiques DevOps et l'architecture cloud-native. L'intégration de ces considérations dès la phase de conception architecturale est essentielle pour créer des systèmes réellement opérables et résilients. Je prévois de passer des certifications dans ce domaine et de collaborer plus étroitement avec les équipes d'exploitation.
          </p>
          <p style={textStyle}>
            À plus long terme, mon objectif est de développer une expertise en architecture d'entreprise, en élargissant ma perspective au-delà des applications individuelles pour considérer l'écosystème informatique global d'une organisation. Cette vision plus large me permettra de concevoir des solutions qui s'intègrent harmonieusement dans le paysage existant et qui soutiennent efficacement les objectifs stratégiques de l'entreprise.
          </p>
          <p style={textStyle}>
            Enfin, je souhaite contribuer davantage à la communauté professionnelle en partageant mes connaissances et mon expérience. Cela pourrait prendre la forme d'articles de blog, de présentations lors de conférences ou de contributions à des projets open source. Cette démarche me permettra non seulement de consolider mes propres connaissances, mais aussi de bénéficier des retours et des perspectives d'autres professionnels du domaine.
          </p>
        </div>
      </section>
    </div>
  );
}