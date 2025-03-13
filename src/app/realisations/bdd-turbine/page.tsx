'use client';

import RealisationPage from '@/components/RealisationPage';

export default function BDDTurbine() {
  const competences = [
    { nom: 'Développement Frontend', lien: '/competences/developpement-frontend' },
    { nom: 'Développement Backend', lien: '/competences/developpement-backend' },
    { nom: 'Base de Données', lien: '/competences/base-de-donnees' },
    { nom: 'Architecture Logicielle', lien: '/competences/architecture-logicielle' }
  ];

  const description = [
    "BDD Turbine est une application web innovante conçue pour la gestion de turbines industrielles. Ce projet a été développé pour répondre aux besoins spécifiques d'une entreprise du secteur énergétique qui souhaitait centraliser et optimiser la gestion de ses données techniques.",
    
    "L'application offre une interface utilisateur intuitive permettant aux techniciens et ingénieurs de créer, visualiser et administrer les données relatives aux turbines. Chaque turbine est associée à un ensemble de paramètres techniques, d'historiques de maintenance et de performances énergétiques.",
    
    "Une API RESTful sécurisée a été implémentée pour permettre l'exportation des données au format CSV, facilitant ainsi l'intégration avec d'autres systèmes d'information de l'entreprise. Cette fonctionnalité a considérablement amélioré les flux de travail entre les différents départements."
  ];

  const defis = [
    "L'un des principaux défis de ce projet était de concevoir une base de données capable de gérer efficacement un volume important de données techniques tout en maintenant des performances optimales lors des requêtes complexes.",
    
    "La sécurité des données sensibles représentait également un enjeu majeur, nécessitant la mise en place d'un système d'authentification robuste et d'une gestion fine des permissions utilisateurs.",
    
    "L'interface utilisateur devait être à la fois complète pour les experts techniques et accessible pour les utilisateurs moins familiers avec les spécificités des turbines industrielles."
  ];

  const solutions = [
    "Pour répondre à ces défis, nous avons opté pour une architecture moderne utilisant React et Next.js pour le frontend, offrant une expérience utilisateur fluide et réactive. L'utilisation de TypeScript a permis de sécuriser le développement en détectant les erreurs potentielles dès la phase de compilation.",
    
    "Côté backend, nous avons implémenté une API RESTful avec Node.js, utilisant Prisma comme ORM pour interagir avec une base de données PostgreSQL. Cette combinaison a permis d'optimiser les performances des requêtes tout en maintenant un code backend propre et maintenable.",
    
    "Pour la sécurité, nous avons mis en place un système d'authentification basé sur JWT (JSON Web Tokens) avec différents niveaux d'accès selon les profils utilisateurs. Toutes les communications sont sécurisées via HTTPS et les données sensibles sont chiffrées en base de données."
  ];

  const resultats = [
    "L'application BDD Turbine a permis à l'entreprise de réduire de 40% le temps consacré à la gestion des données techniques, grâce à une interface centralisée et des processus automatisés.",
    
    "La qualité des données a été significativement améliorée grâce à la validation en temps réel et à la détection des incohérences, réduisant ainsi les erreurs dans les rapports techniques et les décisions opérationnelles.",
    
    "L'intégration transparente avec les autres systèmes d'information via l'API a éliminé les silos de données, permettant une vision globale et cohérente du parc de turbines à travers tous les départements de l'entreprise."
  ];

  return (
    <RealisationPage 
      titre="BDD Turbine"
      resume="Application web innovante de gestion de turbines industrielles avec une interface intuitive pour la création et l'administration des données. API RESTful sécurisée permettant l'exportation des données au format CSV pour une intégration transparente avec d'autres systèmes."
      competences={competences}
      description={description}
      defis={defis}
      solutions={solutions}
      resultats={resultats}
    />
  );
} 