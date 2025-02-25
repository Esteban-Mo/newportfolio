import CompetencePage from '@/components/CompetencePage';

export default function Communication() {
  const sections = [
    {
      title: "Ma définition",
      content: [
        "La communication est une compétence fondamentale dans le développement logiciel moderne, englobant plusieurs aspects essentiels qui contribuent au succès des projets. Elle se manifeste principalement à travers la capacité à interagir efficacement avec différents acteurs du projet, chacun ayant ses propres besoins et attentes.",
        
        "Dans le contexte professionnel, la communication avec les clients est primordiale. Elle implique la compréhension approfondie de leurs besoins, la capacité à expliquer des concepts techniques de manière accessible, et la gestion efficace de leurs attentes tout au long du projet. Cette dimension client-centrée de la communication est essentielle pour garantir la satisfaction et le succès des projets.",
        
        "La collaboration avec les Product Owners constitue un autre aspect crucial de cette compétence. Elle se traduit par une participation active aux rituels agiles, une capacité à clarifier les user stories et à fournir des estimations précises. Cette communication bidirectionnelle permet d'assurer l'alignement entre les objectifs métier et la réalisation technique.",
        
        "L'interaction avec les utilisateurs clés est également fondamentale. Elle comprend le recueil des retours d'expérience, l'animation de sessions de formation, et l'accompagnement au changement. Cette proximité avec les utilisateurs finaux permet d'affiner les solutions et d'assurer leur adoption effective."
      ]
    },
    {
      title: "Mes éléments de preuve",
      content: [
        "Mon expérience en communication s'illustre à travers plusieurs réalisations concrètes. J'ai notamment pris en charge l'animation régulière de réunions client, où je présentais l'avancement des projets et recueillais les retours lors de démonstrations et de comités de pilotage. Ces interactions ont permis de maintenir une transparence totale et d'ajuster rapidement les développements selon les besoins.",
        
        "La rédaction de documentations techniques et fonctionnelles a constitué un autre aspect important de ma pratique. J'ai développé une expertise dans l'adaptation du contenu selon les différents publics, qu'il s'agisse de développeurs nécessitant des détails techniques précis ou d'utilisateurs finaux ayant besoin d'explications plus accessibles.",
        
        "Ma participation active aux cérémonies agiles, incluant les daily meetings, le planning poker, les rétrospectives et les sessions de refinement, démontre ma capacité à communiquer efficacement au sein d'une équipe de développement. Ces interactions quotidiennes ont contribué à la cohésion de l'équipe et à l'amélioration continue de nos processus.",
        
        "J'ai également assuré la formation des utilisateurs sur les nouvelles fonctionnalités et leur accompagnement dans la prise en main des outils. Cette expérience pédagogique a renforcé ma capacité à transmettre des connaissances complexes de manière claire et structurée."
      ]
    },
    {
      title: "Mon autocritique",
      content: [
        "L'analyse de mes compétences en communication révèle plusieurs points forts significatifs. Ma capacité à vulgariser les concepts techniques pour les rendre accessibles aux non-techniciens constitue un atout majeur, permettant de faciliter la compréhension mutuelle entre les équipes techniques et métier.",
        
        "Mon approche basée sur l'écoute active et l'empathie dans la compréhension des besoins utilisateurs s'est avérée particulièrement efficace. Cette sensibilité aux besoins des interlocuteurs permet de créer un climat de confiance et de collaboration constructive.",
        
        "Cependant, je reconnais plusieurs axes d'amélioration importants. Le développement de mes compétences en gestion de conflits représente un défi que je dois relever pour mieux gérer les situations complexes. L'amélioration de ma communication en anglais technique constitue également un objectif prioritaire, particulièrement dans un contexte de plus en plus international.",
        
        "Enfin, je dois renforcer ma capacité à dire 'non' de manière constructive, une compétence essentielle pour maintenir des engagements réalistes et gérer efficacement les attentes des parties prenantes."
      ]
    },
    {
      title: "Mon évolution dans cette compétence",
      content: [
        "Pour continuer à progresser dans mes compétences en communication, j'ai établi un plan de développement structuré. À court terme, je prévois de suivre une formation en communication non violente, qui me permettra d'améliorer ma gestion des situations délicates et de développer des techniques de communication plus efficaces.",
        
        "La participation active à des meetups et conférences fait également partie de ma stratégie de développement. Ces événements me permettront non seulement de développer mon réseau professionnel mais aussi de partager mon expertise et d'apprendre des expériences d'autres professionnels.",
        
        "L'implication dans le mentorat de nouveaux développeurs constitue un autre axe de progression important. Cette activité me permettra de renforcer mes capacités pédagogiques tout en contribuant au développement professionnel d'autres membres de l'équipe.",
        
        "Enfin, je m'engage à pratiquer régulièrement l'anglais technique à travers des échanges avec des équipes internationales. Cette pratique régulière est essentielle pour améliorer ma capacité à communiquer efficacement dans un contexte professionnel international."
      ]
    }
  ];

  return <CompetencePage title="Communication" sections={sections} />;
} 