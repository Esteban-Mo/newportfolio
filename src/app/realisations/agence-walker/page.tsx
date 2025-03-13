'use client';

import RealisationPage from '@/components/RealisationPage';

export default function AgenceWalker() {
  const competences = [
    { nom: 'Développement Frontend', lien: '/competences/developpement-frontend' },
    { nom: 'Développement Backend', lien: '/competences/developpement-backend' },
    { nom: 'Base de Données', lien: '/competences/base-de-donnees' },
    { nom: 'Architecture Logicielle', lien: '/competences/architecture-logicielle' }
  ];

  const description = [
    "Agence Walker est une application immobilière nouvelle génération développée pour moderniser la gestion et la présentation des biens immobiliers. Cette solution innovante combine une interface élégante avec des fonctionnalités avancées pour offrir une expérience utilisateur exceptionnelle tant aux agents immobiliers qu'aux clients.",
    
    "La plateforme intègre une cartographie interactive permettant de visualiser en temps réel les propriétés disponibles et louées sur une carte dynamique. Les utilisateurs peuvent filtrer les biens selon divers critères (prix, surface, nombre de pièces, etc.) et voir instantanément les résultats s'afficher sur la carte.",
    
    "Au-delà de la simple présentation des biens, l'application offre des fonctionnalités avancées de gestion locative : suivi des loyers, gestion des contrats, planification des visites, et communication directe avec les locataires ou propriétaires via un système de messagerie intégré."
  ];

  const defis = [
    "Le principal défi technique était de développer une interface cartographique performante capable de gérer un grand nombre de marqueurs et de filtres en temps réel, tout en maintenant une expérience utilisateur fluide sur tous les appareils.",
    
    "La synchronisation des données immobilières provenant de différentes sources (MLS, bases de données internes, API tierces) nécessitait un système robuste d'intégration et de normalisation des données.",
    
    "L'application devait également offrir une expérience mobile optimale, avec des fonctionnalités spécifiques comme la géolocalisation pour trouver les biens à proximité ou la réalité augmentée pour visualiser des informations supplémentaires lors des visites."
  ];

  const solutions = [
    "Pour relever ces défis, nous avons développé une architecture frontend moderne avec React et Next.js, utilisant des techniques avancées de rendu côté serveur (SSR) et de génération statique incrémentale (ISR) pour optimiser les performances et le SEO.",
    
    "La cartographie interactive a été implémentée avec Mapbox GL JS, avec une attention particulière à l'optimisation des performances via le clustering de marqueurs et le chargement progressif des données en fonction du niveau de zoom et de la zone visible.",
    
    "Pour la gestion des données, nous avons mis en place une API GraphQL avec Apollo Server, permettant des requêtes flexibles et efficaces. Cette approche a facilité l'intégration de sources de données hétérogènes tout en minimisant le volume de données transférées."
  ];

  const resultats = [
    "Agence Walker a transformé l'expérience client de l'agence immobilière, avec une augmentation de 45% du temps passé sur la plateforme et une hausse de 28% du taux de conversion des prospects en clients.",
    
    "Les agents immobiliers ont vu leur productivité augmenter significativement grâce aux outils de gestion intégrés, avec une réduction de 35% du temps consacré aux tâches administratives et une meilleure organisation des visites et des suivis clients.",
    
    "La visibilité en ligne de l'agence s'est considérablement améliorée, avec un meilleur référencement naturel et une expérience utilisateur distinctive qui a permis de se démarquer dans un marché immobilier très concurrentiel."
  ];

  return (
    <RealisationPage 
      titre="Agence Walker"
      resume="Application immobilière nouvelle génération avec cartographie interactive des biens. Interface élégante offrant une visualisation en temps réel des propriétés disponibles et louées, enrichie de fonctionnalités avancées de gestion locative."
      competences={competences}
      description={description}
      defis={defis}
      solutions={solutions}
      resultats={resultats}
    />
  );
} 