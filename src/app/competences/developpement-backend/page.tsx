'use client';

import CompetencePage from '@/components/CompetencePage';

export default function DeveloppementBackend() {
  const sections = [
    {
      title: "Ma définition",
      content: [
        "Le développement backend constitue la colonne vertébrale invisible des applications modernes, gérant toute la logique métier, le stockage des données et les traitements qui se déroulent côté serveur. C'est la partie immergée de l'iceberg numérique, essentielle mais souvent méconnue des utilisateurs finaux qui n'interagissent qu'avec l'interface visible (frontend).",
        "Cette discipline englobe la conception et l'implémentation des API (interfaces de programmation d'application) qui permettent la communication entre le frontend et les bases de données, ainsi que l'intégration avec des services tiers. Le développeur backend doit maîtriser des langages de programmation serveur comme Node.js, Python, Java, PHP ou Ruby, et comprendre les différents paradigmes de bases de données (relationnelles, NoSQL, NewSQL) pour choisir la solution la plus adaptée à chaque projet.",
        "La sécurité est une préoccupation majeure du développement backend, incluant l'authentification des utilisateurs, la gestion des autorisations, la protection contre les injections SQL et autres vulnérabilités courantes. Un backend robuste doit également être conçu pour être performant et scalable, capable de gérer efficacement un grand nombre de requêtes simultanées et de s'adapter à une charge croissante.",
        "Au-delà du code, le développement backend moderne implique une bonne compréhension des principes DevOps, avec la mise en place de pipelines d'intégration et de déploiement continus (CI/CD), la conteneurisation avec des technologies comme Docker, et l'orchestration avec Kubernetes. Cette approche permet d'automatiser les processus de test et de déploiement, garantissant ainsi la fiabilité et la disponibilité des applications."
      ]
    },
    {
      title: "Mes éléments de preuve",
      content: [
        "Mon parcours dans le développement backend a débuté lors de ma formation en informatique, où j'ai acquis les fondamentaux avec Java et les bases de données SQL. J'ai ensuite approfondi ces connaissances en me formant de manière autodidacte sur Node.js et l'écosystème JavaScript côté serveur, notamment à travers des cours spécialisés sur Udemy comme 'Node.js, Express & MongoDB: Le Guide Complet' et 'Microservices avec Node.js et Docker'.",
        "Dans le cadre professionnel, j'ai conçu et développé une API RESTful complète pour une application de gestion de ressources humaines, utilisant Node.js avec Express et une base de données MongoDB. Ce projet m'a permis de mettre en œuvre des fonctionnalités avancées comme l'authentification JWT, la validation des données avec Joi, et un système de logs centralisés avec Winston et Elasticsearch. L'architecture modulaire que j'ai mise en place a facilité l'évolution de l'application au fil du temps, avec l'ajout de nouvelles fonctionnalités sans perturber les services existants.",
        "J'ai également dirigé la migration d'une application monolithique vers une architecture de microservices pour une plateforme e-commerce. Ce projet complexe a impliqué la décomposition de l'application en services indépendants (gestion des utilisateurs, catalogue produits, commandes, paiements), chacun avec sa propre base de données et communiquant via des API REST et des messages asynchrones avec RabbitMQ. J'ai mis en place une infrastructure Docker et Kubernetes pour orchestrer ces services, ainsi qu'un système de découverte de services avec Consul et un API Gateway avec Kong.",
        "Dans le domaine de la performance, j'ai optimisé un backend existant qui souffrait de problèmes de latence sous charge. En implémentant des stratégies de mise en cache avec Redis, en optimisant les requêtes de base de données et en introduisant un système de file d'attente pour les tâches intensives, j'ai réussi à réduire le temps de réponse moyen de 70% et à augmenter la capacité du système de 300%, permettant ainsi de supporter des pics de trafic importants sans dégradation de service."
      ]
    },
    {
      title: "Mon autocritique",
      content: [
        "Grâce à mon expérience variée, je possède une solide maîtrise des technologies backend modernes, particulièrement dans l'écosystème Node.js et les bases de données NoSQL comme MongoDB. Je suis à l'aise avec la conception d'API RESTful et GraphQL, ainsi qu'avec les principes de microservices et l'infrastructure cloud. Ma connaissance approfondie des pratiques de sécurité me permet de développer des applications robustes, résistantes aux attaques courantes.",
        "Cependant, je reconnais que certains domaines du développement backend méritent d'être approfondis dans mon parcours. Bien que je maîtrise Node.js, ma connaissance d'autres langages backend comme Python (avec Django ou Flask) ou Go reste plus théorique que pratique. Ces technologies offrent des avantages spécifiques dans certains contextes, et élargir mon expertise à ces écosystèmes me permettrait d'avoir une vision plus complète et de choisir l'outil le plus adapté à chaque projet.",
        "Un autre aspect que je souhaite renforcer est ma maîtrise des bases de données SQL avancées et des techniques d'optimisation associées. Bien que je sois compétent avec les opérations CRUD basiques et les jointures simples, les requêtes complexes, l'optimisation des index et la conception de schémas pour des applications à très grande échelle représentent des domaines où je peux encore progresser significativement.",
        "Enfin, bien que j'aie travaillé avec des architectures de microservices, je suis conscient que la gestion de la complexité inhérente à ces systèmes distribués reste un défi. Les problématiques de cohérence des données, de résilience en cas de défaillance partielle du système, et de traçabilité dans un environnement distribué sont des aspects sur lesquels je continue à me former activement, notamment à travers l'étude de patterns comme CQRS, Event Sourcing et Circuit Breaker."
      ]
    },
    {
      title: "Mon évolution dans cette compétence",
      content: [
        "Pour continuer à progresser dans le domaine du développement backend, j'ai défini plusieurs axes d'amélioration. À court terme, je prévois d'approfondir ma maîtrise des bases de données SQL avancées en suivant une formation spécialisée sur PostgreSQL et en réalisant un projet personnel impliquant des requêtes complexes, des procédures stockées et des techniques d'optimisation. Je souhaite également me familiariser davantage avec les tests automatisés backend, en particulier les tests d'intégration et les tests de charge avec des outils comme JMeter ou k6.",
        "À moyen terme, je compte élargir mon expertise à d'autres langages et frameworks backend. Je prévois notamment de réaliser un projet avec Python et Django pour comprendre une approche différente du développement web, et d'explorer Go pour ses performances et sa simplicité dans le développement de services concurrents. Je souhaite également approfondir mes connaissances en matière d'architecture événementielle, en étudiant des technologies comme Apache Kafka et en implémentant des patterns comme Event Sourcing dans un projet concret.",
        "Sur le long terme, mon objectif est de devenir un expert en architectures distribuées et en ingénierie de systèmes à grande échelle. Je prévois de me former aux principes du Domain-Driven Design (DDD) pour mieux structurer les applications complexes, et d'explorer les architectures serverless et les plateformes FaaS (Function as a Service) qui représentent une évolution majeure dans le développement backend. Je souhaite également approfondir mes connaissances en matière de résilience et de tolérance aux pannes dans les systèmes distribués.",
        "Enfin, je souhaite contribuer davantage à la communauté backend en partageant mes connaissances à travers des articles techniques, des présentations lors de conférences et des contributions à des projets open source. J'ai déjà commencé à rédiger une série d'articles sur les meilleures pratiques pour la conception d'API et je prévois de proposer un workshop sur l'architecture de microservices lors d'un prochain événement tech local."
      ]
    }
  ];

  return <CompetencePage title="Développement Backend" sections={sections} />;
} 