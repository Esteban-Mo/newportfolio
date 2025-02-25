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
        <span>Retour à l&apos;accueil</span>
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
            L&apos;architecture logicielle est l&apos;art de concevoir des systèmes informatiques robustes, évolutifs et maintenables. Elle définit la structure fondamentale d&apos;un logiciel, ses composants, leurs relations et les principes qui guident sa conception et son évolution.
          </p>
          <p style={textStyle}>
            Une bonne architecture logicielle repose sur plusieurs principes fondamentaux. Les principes SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) constituent une base solide pour créer des systèmes modulaires et flexibles. La séparation des préoccupations permet d&apos;isoler les différentes responsabilités du système, facilitant ainsi sa maintenance et son évolution. L&apos;abstraction et l&apos;encapsulation masquent les détails d&apos;implémentation, offrant des interfaces claires et cohérentes. Enfin, la gestion des dépendances assure que les composants interagissent de manière contrôlée et prévisible.
          </p>
          <p style={textStyle}>
            Les patterns de conception sont des solutions éprouvées à des problèmes récurrents en architecture logicielle. Ils se divisent en trois catégories principales : les patterns créationnels (Factory, Singleton, Builder), qui concernent la création d&apos;objets ; les patterns structurels (Adapter, Composite, Decorator), qui définissent les relations entre les objets ; et les patterns comportementaux (Observer, Strategy, Command), qui gèrent les interactions et les responsabilités entre les objets.
          </p>
          <p style={textStyle}>
            L&apos;architecture logicielle n&apos;est pas figée mais évolue constamment pour répondre aux besoins changeants des utilisateurs et aux avancées technologiques. Des approches comme l&apos;architecture hexagonale, l&apos;architecture en microservices ou l&apos;architecture événementielle offrent des solutions adaptées à différents contextes et contraintes. Le choix d&apos;une architecture dépend de nombreux facteurs, tels que la taille du projet, les exigences de performance, la scalabilité nécessaire et les compétences de l&apos;équipe.
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
            Ma formation en architecture logicielle a débuté lors de mes études d&apos;ingénieur, où j&apos;ai appris les fondamentaux de la conception orientée objet et les patterns de conception. J&apos;ai approfondi ces connaissances en lisant des ouvrages de référence tels que &quot;Clean Architecture&quot; de Robert C. Martin et &quot;Design Patterns&quot; de Gamma, Helm, Johnson et Vlissides. Ces lectures m&apos;ont permis de comprendre les principes sous-jacents à une bonne architecture et de les appliquer dans mes projets.
          </p>
          <p style={textStyle}>
            J&apos;ai eu l&apos;occasion de mettre en pratique ces connaissances lors de plusieurs projets professionnels. Par exemple, dans le cadre du développement d&apos;une application de gestion de données sensibles, j&apos;ai implémenté une architecture hexagonale (ou architecture en ports et adaptateurs) pour isoler le domaine métier des détails techniques. Cette approche a permis de créer un système modulaire, facile à tester et à faire évoluer. Les adaptateurs primaires (API REST, interface utilisateur) et secondaires (base de données, services externes) communiquaient avec le domaine via des ports clairement définis, assurant ainsi une séparation nette des préoccupations.
          </p>
          <p style={textStyle}>
            Un autre projet significatif a été la refactorisation d&apos;une application monolithique vers une architecture en microservices. Face à des problèmes de scalabilité et de déploiement, j&apos;ai dirigé l&apos;équipe dans l&apos;identification des domaines fonctionnels et leur découpage en services autonomes. Nous avons mis en place une communication asynchrone entre les services via un bus d&apos;événements, permettant un couplage faible et une meilleure résilience. Cette transformation a considérablement amélioré la maintenabilité du système et a permis des déploiements plus fréquents et moins risqués.
          </p>
          <p style={textStyle}>
            Dans le cadre de mes activités de mentorat, j&apos;ai également organisé des sessions de formation sur les principes SOLID et les patterns de conception pour les développeurs juniors de mon équipe. Ces sessions combinaient théorie et exercices pratiques, permettant aux participants de comprendre concrètement comment appliquer ces principes dans leur travail quotidien. Le feedback positif et l&apos;amélioration visible de la qualité du code produit par l&apos;équipe ont confirmé l&apos;efficacité de cette approche pédagogique.
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
            Grâce à ma formation et à mon expérience professionnelle, je possède une solide compréhension des principes d&apos;architecture logicielle et des patterns de conception. Je suis capable de concevoir des systèmes modulaires, évolutifs et maintenables, en appliquant les principes SOLID et en utilisant les patterns appropriés selon le contexte. Ma connaissance des différentes approches architecturales (monolithique, microservices, hexagonale, etc.) me permet de faire des choix éclairés en fonction des besoins spécifiques de chaque projet.
          </p>
          <p style={textStyle}>
            Cependant, je reconnais que l&apos;architecture logicielle est un domaine vaste et en constante évolution. Bien que je maîtrise les fondamentaux, certaines approches plus récentes ou spécialisées, comme l&apos;architecture basée sur les événements (Event Sourcing) ou les systèmes réactifs, représentent des domaines où je pourrais approfondir mes connaissances. De plus, l&apos;application pratique de ces concepts dans des environnements très distribués ou à très grande échelle reste un défi que je souhaite relever.
          </p>
          <p style={textStyle}>
            Une autre piste d&apos;amélioration concerne la communication des décisions architecturales. Bien que je sois capable de concevoir des architectures solides, je pourrais améliorer ma capacité à documenter et à expliquer ces choix de manière claire et accessible pour tous les membres de l&apos;équipe, y compris les non-techniciens. La création de diagrammes d&apos;architecture plus expressifs et la rédaction de documents de décision d&apos;architecture (ADR - Architecture Decision Records) sont des pratiques que je souhaite renforcer.
          </p>
          <p style={textStyle}>
            Enfin, je suis conscient que la théorie et la pratique peuvent parfois diverger. Les contraintes réelles des projets (délais, budget, compétences disponibles) peuvent nécessiter des compromis architecturaux. J&apos;ai appris à trouver un équilibre entre l&apos;idéal théorique et les réalités pratiques, mais c&apos;est un exercice qui demande une vigilance constante et une remise en question régulière de mes approches.
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
            Pour continuer à progresser dans le domaine de l&apos;architecture logicielle, j&apos;ai défini plusieurs axes de développement. À court terme, je prévois d&apos;approfondir mes connaissances sur les architectures événementielles et réactives, qui sont particulièrement pertinentes pour les systèmes distribués modernes. Je compte suivre des formations spécialisées et participer à des projets impliquant ces approches pour acquérir une expérience pratique.
          </p>
          <p style={textStyle}>
            À moyen terme, je souhaite me familiariser davantage avec les aspects opérationnels de l&apos;architecture, notamment les pratiques DevOps et l&apos;architecture cloud-native. L&apos;intégration de ces considérations dès la phase de conception architecturale est essentielle pour créer des systèmes réellement opérables et résilients. Je prévois de passer des certifications dans ce domaine et de collaborer plus étroitement avec les équipes d&apos;exploitation.
          </p>
          <p style={textStyle}>
            À plus long terme, mon objectif est de développer une expertise en architecture d&apos;entreprise, en élargissant ma perspective au-delà des applications individuelles pour considérer l&apos;écosystème informatique global d&apos;une organisation. Cette vision plus large me permettra de concevoir des solutions qui s&apos;intègrent harmonieusement dans le paysage existant et qui soutiennent efficacement les objectifs stratégiques de l&apos;entreprise.
          </p>
          <p style={textStyle}>
            Enfin, je souhaite contribuer davantage à la communauté professionnelle en partageant mes connaissances et mon expérience. Cela pourrait prendre la forme d&apos;articles de blog, de présentations lors de conférences ou de contributions à des projets open source. Cette démarche me permettra non seulement de consolider mes propres connaissances, mais aussi de bénéficier des retours et des perspectives d&apos;autres professionnels du domaine.
          </p>
        </div>
      </section>
    </div>
  );
}