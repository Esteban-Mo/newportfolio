'use client';

import RealisationPage from '@/components/RealisationPage';

export default function AtlasEolien() {
  const competences = [
    { nom: 'Développement Frontend', lien: '/competences/developpement-frontend' },
    { nom: 'Cloud Computing', lien: '/competences/cloud-computing' },
    { nom: 'DevOps', lien: '/competences/devops' },
    { nom: 'Architecture Logicielle', lien: '/competences/architecture-logicielle' }
  ];

  const description = [
    "Atlas Éolien est une plateforme cartographique interactive dédiée à la visualisation et à l'analyse des données éoliennes à l'échelle nationale. Ce projet innovant combine des technologies de cartographie avancées avec des analyses de données en temps réel pour offrir une vision complète du potentiel éolien sur différents territoires.",
    
    "La plateforme permet aux utilisateurs de visualiser sur une carte interactive les parcs éoliens existants, les projets en développement, ainsi que les zones à fort potentiel éolien. Des filtres avancés permettent d'affiner les recherches selon divers critères : puissance installée, date de mise en service, type d'éoliennes, etc.",
    
    "Un tableau de bord personnalisable offre des statistiques détaillées et des graphiques dynamiques sur la production d'énergie, l'impact environnemental et les aspects économiques des installations éoliennes. Ces données sont régulièrement mises à jour grâce à des connexions API avec différentes sources officielles."
  ];

  const defis = [
    "Le principal défi technique de ce projet était d'intégrer et de traiter efficacement d'importants volumes de données géospatiales et météorologiques provenant de sources diverses, tout en maintenant des performances optimales pour l'affichage cartographique.",
    
    "La visualisation en temps réel des données de production nécessitait une architecture capable de gérer des flux de données continus tout en assurant une expérience utilisateur fluide, même sur des connexions internet limitées.",
    
    "L'interface devait être intuitive et accessible à différents types d'utilisateurs, des experts du secteur éolien aux décideurs politiques, en passant par le grand public intéressé par les énergies renouvelables."
  ];

  const solutions = [
    "Pour relever ces défis, nous avons développé une architecture cloud-native déployée sur AWS, utilisant des services comme Lambda pour le traitement des données et DynamoDB pour le stockage. Cette approche serverless a permis d'optimiser les coûts tout en garantissant une excellente scalabilité.",
    
    "Le frontend a été construit avec React et Mapbox GL JS pour la cartographie interactive, offrant des performances élevées même avec de nombreuses couches de données géospatiales. L'utilisation de WebGL a permis des rendus cartographiques fluides et des animations sophistiquées.",
    
    "Pour la gestion des flux de données en temps réel, nous avons implémenté une architecture basée sur WebSockets et AWS AppSync, permettant des mises à jour instantanées des données sans nécessiter de rafraîchissement de page."
  ];

  const resultats = [
    "Atlas Éolien est devenu un outil de référence pour les professionnels du secteur éolien, avec plus de 5000 utilisateurs actifs mensuels. La plateforme a été saluée pour sa facilité d'utilisation et la richesse de ses fonctionnalités analytiques.",
    
    "Le projet a contribué à améliorer la transparence dans le secteur éolien en rendant accessibles des données auparavant dispersées ou difficiles d'accès. Cette centralisation a facilité la prise de décision pour de nouveaux projets d'implantation.",
    
    "La solution a été adoptée par plusieurs organismes publics et entreprises du secteur énergétique comme outil d'aide à la décision, démontrant sa valeur ajoutée dans la planification stratégique des infrastructures éoliennes."
  ];

  return (
    <RealisationPage 
      titre="Atlas Éolien"
      resume="Plateforme cartographique interactive pour la visualisation et l'analyse des données éoliennes à l'échelle nationale. Combine des technologies de cartographie avancées avec des analyses de données en temps réel pour offrir une vision complète du potentiel éolien sur différents territoires."
      competences={competences}
      description={description}
      defis={defis}
      solutions={solutions}
      resultats={resultats}
    />
  );
} 