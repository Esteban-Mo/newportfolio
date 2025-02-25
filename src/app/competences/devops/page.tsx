'use client';

import CompetencePage from '@/components/CompetencePage';

export default function DevOps() {
  const sections = [
    {
      title: "Ma définition",
      content: [
        "Le DevOps est une approche culturelle et technique qui vise à unifier le développement logiciel (Dev) et l'administration des systèmes (Ops). Cette méthodologie favorise une collaboration étroite entre les équipes de développement et d'exploitation, permettant une livraison continue de valeur aux utilisateurs finaux tout en maintenant la stabilité et la fiabilité des systèmes.",
        
        "Cette approche repose sur plusieurs piliers fondamentaux : l'automatisation des processus, l'intégration et le déploiement continus (CI/CD), le monitoring proactif, et la gestion des infrastructures comme du code (Infrastructure as Code). Ces pratiques permettent d'accélérer les cycles de développement tout en garantissant la qualité et la fiabilité des déploiements.",
        
        "L'automatisation est au cœur du DevOps, avec des outils comme Docker pour la conteneurisation, Kubernetes pour l'orchestration, et des plateformes de CI/CD comme Jenkins ou GitHub Actions. Ces outils permettent d'automatiser les tests, les builds, et les déploiements, réduisant ainsi les erreurs humaines et accélérant la mise en production des nouvelles fonctionnalités.",
        
        "La culture DevOps met également l'accent sur le monitoring et l'observabilité des systèmes, utilisant des outils de logging, de métriques et de traçage pour assurer une détection rapide et une résolution efficace des problèmes. Cette approche proactive de la maintenance permet d'améliorer continuellement la stabilité et les performances des applications."
      ]
    },
    {
      title: "Mes éléments de preuve",
      content: [
        "Mon expérience en DevOps s'est construite à travers plusieurs projets significatifs où j'ai mis en place et optimisé des pipelines CI/CD complets. Par exemple, j'ai implémenté une infrastructure de déploiement automatisé pour une application microservices utilisant GitHub Actions, Docker et Kubernetes. Cette solution a permis de réduire le temps de déploiement de 45 minutes à moins de 10 minutes, tout en améliorant la fiabilité des releases.",
        
        "J'ai également dirigé la migration d'une infrastructure traditionnelle vers une approche Infrastructure as Code en utilisant Terraform et Ansible. Ce projet a impliqué la création de templates réutilisables pour le provisionnement automatique des environnements de développement, de test et de production. Cette standardisation a non seulement réduit les erreurs de configuration mais a aussi permis de créer de nouveaux environnements en quelques minutes au lieu de plusieurs jours.",
        
        "Dans le cadre de l'amélioration continue, j'ai mis en place une suite complète d'outils de monitoring avec Prometheus et Grafana, permettant une surveillance en temps réel des performances applicatives et infrastructurelles. J'ai créé des dashboards personnalisés et configuré des alertes intelligentes qui ont permis de détecter et résoudre proactivement les problèmes avant qu'ils n'impactent les utilisateurs.",
        
        "J'ai également contribué à l'adoption des pratiques DevSecOps en intégrant des scans de sécurité automatisés dans les pipelines CI/CD. Cette initiative incluait l'analyse statique du code, les tests de vulnérabilité des dépendances et les scans des images Docker, renforçant significativement la posture de sécurité de nos applications."
      ]
    },
    {
      title: "Mon autocritique",
      content: [
        "Ma pratique du DevOps est solide sur les aspects fondamentaux comme l'automatisation des déploiements, la conteneurisation et le monitoring. Je suis particulièrement à l'aise avec l'écosystème Docker/Kubernetes et les outils de CI/CD modernes. Ma capacité à implémenter des solutions d'Infrastructure as Code permet de créer des environnements reproductibles et maintenables.",
        
        "Cependant, je reconnais que certains domaines méritent d'être approfondis. Bien que je maîtrise les bases du chaos engineering et des tests de résilience, je souhaite développer davantage mes compétences dans ces domaines pour mieux anticiper et gérer les scénarios de défaillance. Les pratiques de chaos engineering comme celles développées par Netflix représentent un axe d'amélioration important.",
        
        "Un autre aspect que je souhaite renforcer est ma maîtrise des architectures serverless et des services cloud natifs avancés. Bien que j'aie de l'expérience avec les services AWS et Azure de base, les architectures event-driven complexes et l'optimisation des coûts cloud représentent des domaines où je peux encore progresser.",
        
        "Enfin, je dois continuer à développer mes compétences en matière de DevSecOps. Bien que j'aie intégré des pratiques de sécurité basiques dans mes pipelines, je souhaite approfondir mes connaissances en sécurité des conteneurs, en gestion des secrets et en conformité réglementaire pour construire des systèmes encore plus sécurisés."
      ]
    },
    {
      title: "Mon évolution dans cette compétence",
      content: [
        "Pour continuer à progresser dans le domaine du DevOps, j'ai défini plusieurs axes d'amélioration. À court terme, je prévois d'approfondir mes connaissances en chaos engineering en suivant la certification Chaos Engineering Practitioner et en implémentant des tests de résilience systématiques dans nos environnements de production.",
        
        "À moyen terme, je compte développer mon expertise dans les architectures cloud natives avancées. Je prévois de passer les certifications AWS Solutions Architect Professional et Azure Solutions Architect Expert pour maîtriser les services cloud avancés et les patterns d'architecture distribués. Je souhaite également me former aux pratiques de FinOps pour optimiser les coûts d'infrastructure cloud.",
        
        "Sur le long terme, mon objectif est de devenir un expert en Platform Engineering, capable de construire et maintenir des plateformes de développement internes qui améliorent la productivité des équipes de développement. Je m'intéresse particulièrement aux outils comme Backstage de Spotify et aux pratiques de Developer Experience (DX) qui permettent d'industrialiser la création et la gestion des services.",
        
        "Enfin, je souhaite contribuer à la communauté DevOps en partageant mes connaissances et mon expérience. J'ai commencé à rédiger une série d'articles sur les meilleures pratiques en matière d'automatisation et je prévois de donner des présentations lors de meetups locaux. Cette démarche me permettra non seulement d'approfondir mes connaissances mais aussi de rester à jour avec les dernières évolutions du domaine."
      ]
    }
  ];

  return <CompetencePage title="DevOps" sections={sections} />;
} 