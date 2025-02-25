import CompetencePage from '@/components/CompetencePage';

export default function Leadership() {
  const sections = [
    {
      title: "Ma définition",
      content: [
        "Le leadership dans le développement logiciel est une compétence essentielle qui va bien au-delà de la simple gestion d'équipe. Il s'agit de la capacité à inspirer, guider et mobiliser les équipes vers des objectifs communs tout en favorisant l'innovation et l'excellence technique.",
        
        "Cette compétence se manifeste à travers plusieurs dimensions clés : la vision stratégique pour guider les choix techniques et organisationnels, la capacité à prendre des décisions éclairées en situation d'incertitude, et l'aptitude à créer un environnement propice à la collaboration et à l'apprentissage continu.",
        
        "Le leadership technique implique également la responsabilité de maintenir l'excellence technique au sein des projets, en établissant des standards de qualité élevés, en encourageant les bonnes pratiques de développement, et en facilitant le partage des connaissances au sein de l'équipe.",
        
        "Un aspect crucial du leadership moderne est la capacité à adopter une approche servant-leader, où le leader se met au service de son équipe pour lever les obstacles, faciliter la progression individuelle et collective, et créer les conditions de la réussite du projet."
      ]
    },
    {
      title: "Mes éléments de preuve",
      content: [
        "Mon expérience en leadership s'est construite à travers plusieurs rôles et responsabilités clés. J'ai notamment dirigé une équipe de développement de six personnes sur un projet critique de transformation digitale, où j'ai su maintenir la motivation et la cohésion de l'équipe malgré des délais serrés et des changements fréquents de priorités.",
        
        "En tant que lead developer, j'ai mis en place des processus d'amélioration continue qui ont significativement augmenté la qualité du code et la productivité de l'équipe. Cela incluait l'introduction de revues de code systématiques, l'organisation de sessions de partage de connaissances hebdomadaires, et la mise en place d'un programme de mentorat pour les développeurs juniors.",
        
        "J'ai également piloté plusieurs initiatives transverses, comme la modernisation de notre stack technique et l'adoption de nouvelles méthodologies de travail. Ces projets ont nécessité une communication claire de la vision, une gestion du changement efficace, et un accompagnement personnalisé des équipes dans leur montée en compétences.",
        
        "Ma capacité à fédérer les équipes s'est particulièrement illustrée lors de la transition vers une architecture microservices, où j'ai su coordonner les efforts de plusieurs équipes tout en maintenant un haut niveau de qualité et en respectant les contraintes de temps et de budget."
      ]
    },
    {
      title: "Mon autocritique",
      content: [
        "Mes points forts en leadership incluent ma capacité à créer un environnement de travail positif et collaboratif, où chaque membre de l'équipe se sent valorisé et encouragé à donner le meilleur de lui-même. Ma vision technique claire et ma capacité à la communiquer efficacement permettent d'aligner les équipes sur des objectifs communs.",
        
        "Je suis particulièrement efficace dans l'identification et le développement des talents au sein de l'équipe, en offrant des opportunités de croissance et en adaptant mon style de management aux besoins individuels. Ma capacité à prendre des décisions difficiles tout en maintenant la cohésion d'équipe est également un atout important.",
        
        "Cependant, je dois continuer à travailler sur certains aspects, notamment la délégation. Bien que je comprenne son importance, j'ai parfois tendance à vouloir trop contrôler les détails, ce qui peut limiter l'autonomie de l'équipe. Je dois également améliorer ma gestion du stress en période de forte pression.",
        
        "Un autre axe d'amélioration concerne la gestion des conflits interpersonnels. Bien que je parvienne généralement à les résoudre, je pourrais développer des approches plus proactives pour les anticiper et les prévenir."
      ]
    },
    {
      title: "Mon évolution dans cette compétence",
      content: [
        "Pour continuer à progresser dans mon rôle de leader, j'ai défini plusieurs axes de développement. À court terme, je prévois de suivre une formation en management situationnel pour mieux adapter mon style de leadership aux différentes situations et personnalités au sein de l'équipe.",
        
        "Je souhaite également approfondir mes compétences en coaching agile en passant la certification Professional Agile Leadership. Cette formation me permettra de mieux accompagner les équipes dans leur adoption des pratiques agiles et de faciliter leur progression vers plus d'autonomie.",
        
        "À moyen terme, je compte développer mes compétences en gestion de la performance et en développement organisationnel. Je m'intéresse particulièrement aux approches modernes de management comme le Management 3.0 et les organisations apprenantes.",
        
        "Enfin, je souhaite contribuer plus activement à la communauté tech en partageant mon expérience de leadership lors de conférences et en mentoring d'autres tech leads. Cette démarche me permettra non seulement de structurer mes apprentissages mais aussi d'enrichir ma pratique au contact d'autres leaders."
      ]
    }
  ];

  return <CompetencePage title="Leadership" sections={sections} />;
} 