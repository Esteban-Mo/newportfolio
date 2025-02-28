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
            L&apos;architecture logicielle, c&apos;est une sorte d&apos;art qui consiste à construire des systèmes informatiques solides, capables de s&apos;adapter et faciles à maintenir. Elle fixe les bases d&apos;un logiciel : sa structure, ses principaux éléments, la façon dont ils s&apos;articulent et les grandes règles qui guident son développement au fil du temps.
          </p>
          <p style={textStyle}>
            Pour qu&apos;une architecture tienne vraiment la route, elle doit s&apos;appuyer sur des idées clés. Les principes SOLID – responsabilité unique, ouverture/fermeture, substitution de Liskov, ségrégation des interfaces et inversion des dépendances – sont un bon point de départ pour obtenir un système clair et flexible. La séparation des préoccupations aide à bien répartir les tâches du logiciel, ce qui simplifie les mises à jour ou les corrections plus tard. Avec l&apos;abstraction et l&apos;encapsulation, on met de côté les détails techniques pour proposer des interfaces nettes et pratiques. Et puis, bien gérer les dépendances, ça permet aux différentes parties de travailler ensemble sans trop de surprises.
          </p>
          <p style={textStyle}>
            Les patrons de conception, eux, sont des solutions toutes prêtes pour des problèmes qu&apos;on croise souvent. Il y en a trois types principaux : les créationnels, comme Factory, Singleton ou Builder, qui s&apos;occupent de créer des objets ; les structurels, comme Adapter, Composite ou Decorator, qui définissent comment ces objets s&apos;organisent ; et les comportementaux, comme Observer, Strategy ou Command, qui règlent leurs interactions.
          </p>
          <p style={textStyle}>
            Mais une architecture, ça ne reste pas figé. Elle bouge avec le temps, en fonction de ce que veulent les utilisateurs ou des nouveautés technologiques. Des approches comme l&apos;architecture hexagonale, les microservices ou l&apos;architecture événementielle répondent à des besoins précis, selon le contexte. Pour choisir la bonne, il faut regarder plusieurs choses : la taille du projet, les attentes en performance, l&apos;évolutivité ou encore ce que l&apos;équipe sait faire.
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
            Mon intérêt pour l'architecture logicielle s'est construit au fil de mes études, de mon alternance et de mes projets perso, qui m'ont tous appris des choses différentes. Pendant mes études d'ingénieur, j'ai découvert les bases de la conception orientée objet et les patrons de conception. C'était parfois un peu théorique, mais ça m'a donné une première idée de comment structurer un système. Pour aller plus loin, j'ai lu des bouquins comme Clean Architecture de Robert C. Martin et Design Patterns de Gamma et ses coauteurs. Ces lectures m'ont fait comprendre ce qui rend une architecture efficace, et ça m'a donné envie de me lancer dans des projets concrets.
          </p>
          <p style={textStyle}>
            En alternance, j'ai vraiment plongé dans le vif du sujet, notamment sur des projets pro avec Next.js et Prisma. Par exemple, j'ai travaillé sur une appli de gestion de données sensibles où j'ai utilisé Prisma pour gérer une base SQL de manière fluide et sécurisée – requêtes optimisées, migrations bien gérées, le tout intégré à un front Next.js pour une interface réactive. J'ai opté pour une architecture hexagonale afin de séparer la logique métier des détails techniques, comme l'accès à la base ou l'API REST qu'on exposait. Ça rendait le système clair, testable, et prêt à évoluer sans trop de complications.
          </p>
          <p style={textStyle}>
            Mes projets perso, eux, je les ai surtout orientés autour de Node.js. Un qui m'a bien marqué, c'était une appli que j'avais codée à l'époque, un monolithe un peu poussif que j'ai repris pour le découper en microservices. Avec Node.js, j'ai monté des services légers, connectés à une base SQL pour stocker les données, et j'ai mis en place un système d'événements pour qu'ils communiquent sans se marcher dessus. Le résultat était plus robuste, plus facile à mettre à jour, et ça m'a fait réfléchir à la scalabilité et à la gestion des dépendances.
          </p>
          <p style={textStyle}>
            En alternance, j'ai aussi pris le temps de partager ce que j'avais appris avec l'équipe. J'ai organisé des petites sessions pour les devs juniors, sur des trucs comme les principes SOLID ou l'utilisation de Prisma avec SQL. On passait de la théorie à la pratique, avec des exemples concrets – optimiser une requête ou structurer un composant Next.js. Les retours étaient positifs, et voir le code gagner en lisibilité, ça confirmait que ça valait le coup d'insister là-dessus.
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
            Entre mes études, mon alternance et mes projets perso, j'ai bâti une bonne maîtrise des principes d'architecture logicielle et des patrons de conception. Que ce soit en bossant sur Node.js dans mes expérimentations perso ou en utilisant Next.js et Prisma sur des projets pro, j'ai appris à concevoir des systèmes modulaires, qui peuvent évoluer et qu'on peut maintenir sans trop de prise de tête. Les principes SOLID, je les applique presque naturellement maintenant, et je choisis les patrons qui collent au contexte – un peu comme un réflexe qui se peaufine avec le temps.
          </p>
          <p style={textStyle}>
            Cela dit, je sais que l'architecture logicielle, c'est un univers immense qui bouge sans arrêt. J'ai une base solide, mais des trucs plus pointus, comme l'Event Sourcing ou les systèmes réactifs, ça reste des terrains où je pourrais creuser davantage. Pareil pour les environnements ultra-distribués ou à très grande échelle : j'ai les concepts en tête, mais les mettre en pratique dans des cas concrets, c'est un challenge que j'ai envie de relever. Mon alternance m'a donné un bon aperçu avec Prisma et SQL, mais il y a encore du chemin.
          </p>
          <p style={textStyle}>
            Un point où je pourrais m'améliorer, c'est dans la manière de faire passer mes idées. Je sais concevoir des architectures qui tiennent la route – par exemple, une API bien découpée en Next.js ou un service Node.js léger –, mais les expliquer clairement à tout le monde, surtout aux non-devs, c'est pas toujours évident. J'aimerais bosser sur des diagrammes plus parlants et me mettre aux ADR (ces petits docs qui justifient les choix d'architecture). Ça rendrait mes décisions plus lisibles et utiles pour l'équipe.
          </p>
          <p style={textStyle}>
            Et puis, il y a cette réalité qu'on ne peut pas ignorer : entre la théorie et les projets réels, ça coince parfois. Les deadlines, les budgets ou les compétences dispo dans l'équipe forcent souvent à faire des compromis. J'ai appris à jongler entre l'idéal – genre une architecture hexagonale nickel – et ce qui est faisable, comme une solution rapide mais propre en Node.js pour un proto. Ça demande de rester flexible, de se poser les bonnes questions et d'ajuster le tir en permanence.
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
            Pour continuer à avancer en architecture logicielle, j&apos;ai quelques idées en tête, des axes qui me parlent et qui collent à ce que je veux faire. D&apos;abord, à court terme, j&apos;aimerais creuser les architectures événementielles et réactives – des approches qui reviennent souvent dans les systèmes distribués d&apos;aujourd&apos;hui. Ça me tente bien pour mes projets perso en Node.js, où je pourrais tester des trucs comme un flux d&apos;événements en temps réel. Je pense suivre une ou deux formations là-dessus et me lancer dans des petits projets pratiques pour me faire la main.
          </p>
          <p style={textStyle}>
            À moyen terme, j&apos;ai envie de mieux comprendre le côté opérationnel des choses, comme le DevOps ou l&apos;architecture cloud-native. En alternance, avec Next.js et Prisma, j&apos;ai déjà vu l&apos;importance d&apos;avoir un système qui tourne bien en prod, pas juste sur le papier. Alors, je me dis qu&apos;intégrer ces aspects dès le départ, ça peut rendre mes architectures plus solides. J&apos;aimerais passer une certification ou deux – genre sur AWS ou Docker – et bosser plus avec les équipes qui gèrent l&apos;exploitation, histoire de voir comment mes choix techniques tiennent en conditions réelles.
          </p>
          <p style={textStyle}>
            À plus long terme, je me verrais bien aller vers l&apos;architecture d&apos;entreprise. Passer d&apos;une appli isolée – comme celles que je fais en Node.js ou Next.js – à une vue d&apos;ensemble, avec tout l&apos;écosystème d&apos;une boîte, ça m&apos;attire. L&apos;idée, c&apos;est de dessiner des solutions qui s&apos;intègrent bien dans ce qui existe déjà et qui aident vraiment l&apos;entreprise à avancer. Ça demande de lever un peu le nez du code pour regarder plus loin, et c&apos;est un défi qui me motive.
          </p>
          <p style={textStyle}>
            Et puis, j&apos;aimerais aussi donner un coup de main à la communauté. Que ce soit en écrivant des articles sur ce que j&apos;apprends – genre un retour d&apos;expérience sur Prisma ou un tuto Node.js –, en causant dans une conf ou en mettant les mains dans un projet open source, ça me tente. Ça m&apos;aiderait à structurer mes idées, et en bonus, je pourrais choper des retours d&apos;autres devs. Entre mes études, l&apos;alternance et mes bidouilles perso, j&apos;ai déjà pas mal à partager, et ça pourrait être utile à d&apos;autres.
          </p>
        </div>
      </section>
    </div>
  );
}