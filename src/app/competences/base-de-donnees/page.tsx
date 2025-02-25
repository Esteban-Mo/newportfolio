'use client';

import CompetencePage from '@/components/CompetencePage';

export default function BaseDeDonnees() {
  const sections = [
    {
      title: "Ma définition",
      content: [
        "Une base de données est un système organisé de stockage, de gestion et de récupération de données qui constitue le fondement de la plupart des applications modernes. Elle permet de stocker des informations de manière structurée, d'assurer leur intégrité, leur cohérence et leur disponibilité, tout en offrant des mécanismes efficaces pour les manipuler et les interroger.",
        
        "Il existe plusieurs types de bases de données, chacun adapté à des besoins spécifiques. Les bases de données relationnelles (SQL) comme PostgreSQL, MySQL ou Oracle, organisent les données en tables liées entre elles par des relations, garantissant l'intégrité référentielle et permettant des requêtes complexes via le langage SQL. Les bases de données NoSQL (MongoDB, Cassandra, Redis) offrent plus de flexibilité dans la structure des données et une meilleure scalabilité horizontale, particulièrement adaptées aux applications web modernes et aux big data.",
        
        "La conception d'une base de données est une étape cruciale qui nécessite une compréhension approfondie du domaine métier et des besoins en performance. La modélisation des données, la normalisation des schémas, l'optimisation des requêtes et la gestion des index sont autant d'aspects essentiels pour garantir l'efficacité et la maintenabilité du système. Les concepts ACID (Atomicité, Cohérence, Isolation, Durabilité) sont fondamentaux pour assurer l'intégrité des données dans les transactions.",
        
        "Au-delà des aspects techniques, la gestion des bases de données implique également des considérations importantes en termes de sécurité, de sauvegarde et de reprise après incident. La protection contre les injections SQL, la gestion des droits d'accès, la mise en place de stratégies de backup et de réplication sont essentielles pour garantir la robustesse et la fiabilité du système dans un environnement de production."
      ]
    },
    {
      title: "Mes éléments de preuve",
      content: [
        "Mon expertise en bases de données s'est construite à travers diverses expériences professionnelles et projets personnels. J'ai notamment conçu et optimisé une base de données PostgreSQL pour une application de gestion de ressources humaines traitant les données de plus de 10 000 employés. Ce projet m'a permis de mettre en pratique les principes de normalisation, d'optimisation des requêtes et de gestion des performances, résultant en une amélioration de 60% des temps de réponse sur les requêtes critiques.",
        
        "Dans le cadre d'un projet e-commerce, j'ai implémenté une architecture hybride combinant MongoDB pour le catalogue produits et Redis pour la gestion des sessions et du cache. Cette approche polyglotte a permis d'optimiser chaque aspect de l'application en utilisant la base de données la plus adaptée à chaque cas d'usage. J'ai également mis en place un système de réplication et de sharding pour assurer la haute disponibilité et la scalabilité horizontale de la solution.",
        
        "J'ai également dirigé la migration d'une base de données Oracle vers PostgreSQL pour une application financière critique. Ce projet complexe impliquait la conversion des schémas, la réécriture des procédures stockées et la mise en place d'une stratégie de migration sans interruption de service. J'ai développé des scripts de validation pour garantir l'intégrité des données et optimisé les performances post-migration, aboutissant à une réduction des coûts de licence de 70% tout en maintenant les performances du système.",
        
        "En matière de sécurité, j'ai mis en place des politiques de gestion des accès et de chiffrement des données sensibles conformes au RGPD. J'ai implémenté des mécanismes de détection et de prévention des injections SQL, et développé des procédures de sauvegarde et de restauration automatisées avec des tests réguliers de récupération pour garantir la continuité de service."
      ]
    },
    {
      title: "Mon autocritique",
      content: [
        "Ma maîtrise des bases de données relationnelles est solide, particulièrement avec PostgreSQL et MySQL. Je suis à l'aise avec la conception de schémas complexes, l'optimisation des performances et la gestion des transactions. Ma connaissance des bases NoSQL, notamment MongoDB et Redis, me permet de choisir et d'implémenter la solution la plus adaptée aux besoins spécifiques de chaque projet.",
        
        "Cependant, je reconnais que certains domaines méritent d'être approfondis. Bien que je maîtrise les concepts de base du sharding et de la réplication, je souhaite renforcer mes compétences dans la gestion de bases de données distribuées à très grande échelle. Les nouvelles solutions de bases de données NewSQL comme CockroachDB ou les bases de données temporelles comme TimescaleDB représentent également des domaines d'exploration intéressants.",
        
        "Un autre aspect que je souhaite améliorer est ma maîtrise des outils d'analyse et de monitoring avancés. Bien que je sois capable d'identifier et de résoudre les problèmes de performance courants, je souhaite approfondir ma connaissance des outils comme pg_stat_statements, pgBadger ou MongoDB Compass pour une analyse plus fine des performances et une optimisation plus poussée.",
        
        "Enfin, je dois continuer à développer mes compétences en matière de haute disponibilité et de disaster recovery. Bien que j'aie mis en place des solutions de réplication et de backup, les architectures multi-régions et les stratégies de basculement automatique sont des domaines où je souhaite gagner en expertise pour garantir une disponibilité maximale des systèmes critiques."
      ]
    },
    {
      title: "Mon évolution dans cette compétence",
      content: [
        "Pour continuer à progresser dans le domaine des bases de données, j'ai défini plusieurs axes d'amélioration. À court terme, je prévois d'approfondir ma maîtrise des bases de données distribuées en suivant des formations spécialisées sur CockroachDB et en participant à des projets impliquant des architectures géo-distribuées. Je souhaite également me former aux dernières fonctionnalités de PostgreSQL 15, notamment les améliorations en matière de performances et de monitoring.",
        
        "À moyen terme, je compte développer mon expertise dans le domaine des bases de données temporelles et des solutions de streaming de données. Je prévois d'explorer Apache Kafka et TimescaleDB pour mieux comprendre comment gérer efficacement les données en temps réel et les séries temporelles. Je souhaite également approfondir mes connaissances en matière d'automatisation et d'infrastructure as code pour la gestion des bases de données.",
        
        "Sur le long terme, mon objectif est de devenir un expert en architectures de données distribuées et en solutions de bases de données cloud-natives. Je prévois de me certifier sur les principales plateformes cloud (AWS, GCP, Azure) pour leurs services de bases de données managées, et d'approfondir ma compréhension des patterns de conception pour les systèmes distribués à grande échelle.",
        
        "Enfin, je souhaite partager mes connaissances avec la communauté en contribuant à des projets open source liés aux bases de données et en rédigeant des articles techniques sur l'optimisation des performances et les bonnes pratiques de conception. Cette démarche me permettra non seulement d'approfondir mes connaissances mais aussi de rester à jour avec les dernières évolutions du domaine."
      ]
    }
  ];

  return <CompetencePage title="Base de Données" sections={sections} />;
} 