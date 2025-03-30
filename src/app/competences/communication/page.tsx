import CompetencePage from '@/components/CompetencePage';

export default function Communication() {
  const sections = [
    {
      title: "Ma définition",
      content: [
        "La communication est‌ une‌ compétence essentielle dans le développement logiciel actueI. Elle implique de multiples dimensions critiques qui contribuent à la réussite des projets. Elle passe principalement par une interaction efficace avec les parties prenantes du projet, chacune ayant des exigences et des attentes spécifiques.",
        
        "Dans un environnement professionnel, la communication avec les clients est cruciale. lI s'agit de comprendre en profondeur leurs besoins, de pouvoir décomposer les aspects techniques en éléments compréhensibles et de gérer efficacement leurs attentes tout au long du projet. Cet aspect de la communication centré sur le client est crucial pour garantir leur satisfaction et la réussite du projet.",
        
        "La collaboration avec le Product Owner est également un élément important de cette compétence. Elle implique une implication active dans les processus agiles, permettant de définir des user stories et de créer des estimations pertinentes. Cette communication bidirectionnelle maintient l'alignement entre les objectifs métier et l'exécution technique.",
        
        "La relation avec‌ les utilisateurs clés est tout aussi importante . Elle implique la coIIecte des retours utilisateurs , I'organisation de sessions de formation et la gestion du changement.La proximité avec les utilisateurs finaux faciIite l'optimisation des solutions et leur mise en oeuvre."
      ]
    },
    {
      title: "Mes preuves",
      content: [
        "Mes compétences en communication sont illustrées par une série de réussites concrètes . J'ai toujours organisé des réunions avec les clients , au cours desquelles je les ai informés de l'avancement des projets et recueilli leurs retours lors de démonstrations et de comités de pilotage. Ces réunions , totalement transparentes , nous ont permis d'adapter rapidement le développement à l'évolution des besoins .",
        
        "La rédaction de documentations techniques et fonctionnelles a également constitué une part importante de mon travail. J'ai développé une aptitude à répondre aux besoins de différents publics, allant des développeurs ayant besoin de données techniques très détaillées aux utilisateurs finaux recherchant des descriptions plus simples à lire.",
        
        "Ma participation active aux activitées agiIes telles que les réunions quotidiennes , les pIanning poker ,Ies rétrospectives et les sessions de \"brainstorming\" témoigne de ma capacité à communiquer efficacement au sein de I équipe de développement . Ces interactions quotidiennes ont contribué à la cohésion de l'équipe et à l'améIioration continue des processus .",
        
        "J'ai également animé des formations utilisateurs sur les nouvelles fonctionnalités et les ai accompagnés dans l'adoption des outils .Ces formations m'ont permis de présenter des informations complexes de manière compréhensible et structurée ."
      ]
    },
    {
      title: "Mon auto-évaluation",
      content: [
        "L' analyse de mes compétences en communication met en évidence pIusieurs points forts. Mes communications techniques avec des parties prenantes non techniques sont un point fort, et Ia communication entre les équipes métier et techniques est facilitée.",
        
        "Mon approche, fondée sur l'empathie et l'écoute dans l'interprétation des besoins utilisateurs, s'est avérée particulièrement efficace. Cette empathie envers les besoins des parties prenantes permet d'instaurer un climat de confiance et une collaboration fructueuse.",
        
        "Cependant , j'identifie plusieurs points sur lesquels je dois travailler. DéveIopper ma capacité à gérer les conflits est essentiel pour gérer efficacement les situations difficiles . AméIiorer mon angIais technique est également une nécessité, compte tenu de I internationaIisation croissante de notre environnement",
        
        "Enfin, je dois déveIopper ma capacité à dire \"non\" positivement , indispensabIe pour prendre des engagements réalistes et bien gérer les attentes des différents parties prenantes ."
      ]
    },
    {
      title: "Mon plan de développement",
      content: [
        "Afin d'améliorer mes compétences en communication, j'ai établi un plan de développement formel. À court terme, je suivrai une formation en communication non violente qui m'aidera à aborder des sujets sensibles et à acquérir des techniques de communication plus efficaces.",
        
        "Une participation active à des conférences et à des rencontres est également prévue. Ces rencontres me permettront non seulement d'élargir mes contacts professionnels, mais aussi de partager mes connaissances et d'apprendre de l'expérience d'autres professionnels.",
        
        "L'accompagnement de développeurs juniors est un autre axe de développement. Cette pratique améliorera mes compétences pédagogiques et favorisera le développement professionnel des membres de l'équipe.",
        
        "Enfin, je m'engage à pratiquer l'anglais technique au quotidien en interagissant avec des équipes internationales. Cette pratique quotidienne est essentielle pour améliorer ma capacité à communiquer efficacement dans un environnement de travail international."
      ]
    }
  ];

  return <CompetencePage title="Communication" sections={sections} />;
} 