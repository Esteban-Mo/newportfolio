'use client';

import RealisationPage from '@/components/RealisationPage';

export default function ModuleFoncier() {
  const competences = [
    { nom: 'Développement Frontend', lien: '/competences/developpement-frontend' },
    { nom: 'Développement Backend', lien: '/competences/developpement-backend' },
    { nom: 'Base de Données', lien: '/competences/base-de-donnees' },
    { nom: 'Architecture Logicielle', lien: '/competences/architecture-logicielle' }
  ];

  const description = [
    "Le Module Foncier est une plateforme complète de gestion immobilière d'entreprise développée pour répondre aux besoins spécifiques des grandes organisations possédant un patrimoine immobilier conséquent. Cette solution sur mesure permet une gestion efficace et centralisée de l'ensemble des actifs immobiliers.",
    
    "La plateforme offre une interface intuitive pour le suivi des baux commerciaux, la gestion des espaces de travail, et l'optimisation de l'occupation des locaux. Elle intègre également des fonctionnalités avancées de reporting et d'analyse pour aider à la prise de décision stratégique concernant le patrimoine immobilier.",
    
    "Un tableau de bord personnalisable présente les indicateurs clés de performance (KPI) pertinents pour chaque niveau de management, permettant ainsi une vision claire et immédiate de la situation immobilière de l'entreprise."
  ];

  const defis = [
    "Le principal défi de ce projet était de concevoir une solution capable de gérer des structures immobilières complexes et hiérarchisées, tout en maintenant une interface utilisateur simple et intuitive pour des utilisateurs aux profils variés.",
    
    "La gestion des droits d'accès représentait également un enjeu majeur, car différents départements et niveaux hiérarchiques devaient avoir accès à des informations spécifiques sans compromettre la confidentialité des données sensibles.",
    
    "L'intégration avec les systèmes existants de l'entreprise (ERP, CRM, outils financiers) nécessitait la mise en place d'interfaces d'échange de données robustes et sécurisées."
  ];

  const solutions = [
    "Pour répondre à ces défis, nous avons développé une architecture modulaire basée sur React et Next.js pour le frontend, offrant une expérience utilisateur fluide et réactive. L'interface a été conçue selon les principes du design thinking, avec de nombreux tests utilisateurs pour garantir son ergonomie.",
    
    "Le backend a été implémenté avec Node.js et Express, communiquant avec une base de données PostgreSQL via Prisma ORM. Cette stack technologique a permis de développer rapidement des API performantes tout en garantissant la sécurité et l'intégrité des données.",
    
    "Pour la gestion des droits, nous avons mis en place un système de contrôle d'accès basé sur les rôles (RBAC) avec une granularité fine, permettant de définir précisément les permissions de chaque utilisateur ou groupe d'utilisateurs."
  ];

  const resultats = [
    "Le Module Foncier a permis à l'entreprise de réduire de 30% le temps consacré à la gestion administrative de son patrimoine immobilier, grâce à l'automatisation de nombreux processus et à la centralisation des informations.",
    
    "L'optimisation des espaces de travail, facilitée par les outils d'analyse de la plateforme, a conduit à une réduction de 15% des coûts immobiliers annuels, représentant une économie significative pour l'organisation.",
    
    "La solution a également amélioré la conformité réglementaire en automatisant le suivi des échéances contractuelles et des obligations légales liées aux baux commerciaux, réduisant ainsi les risques juridiques et financiers."
  ];

  return (
    <RealisationPage 
      titre="Module Foncier"
      resume="Plateforme complète de gestion immobilière d'entreprise avec suivi des baux, optimisation des espaces et reporting avancé. Solution sur mesure permettant une gestion efficace et centralisée du patrimoine immobilier."
      competences={competences}
      description={description}
      defis={defis}
      solutions={solutions}
      resultats={resultats}
    />
  );
} 