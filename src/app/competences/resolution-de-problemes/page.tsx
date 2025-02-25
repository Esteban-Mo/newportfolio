import CompetencePage from '@/components/CompetencePage';

export default function ResolutionDeProblemes() {
  const sections = [
    {
      title: "Ma définition",
      content: [
        "La résolution de problèmes est une compétence fondamentale en développement logiciel qui consiste à identifier, analyser et résoudre efficacement les défis techniques et fonctionnels. Cette capacité va au-delà de la simple correction de bugs, elle englobe l'aptitude à aborder méthodiquement des situations complexes et à trouver des solutions innovantes.",
        
        "Cette compétence repose sur plusieurs piliers essentiels : l'analyse systématique des problèmes, la capacité à décomposer des problèmes complexes en sous-problèmes plus simples, l'aptitude à explorer différentes pistes de solution, et la validation rigoureuse des solutions proposées.",
        
        "La résolution de problèmes nécessite également une approche structurée incluant la collecte d'informations pertinentes, l'identification des causes racines, l'évaluation des différentes options de résolution, et la mise en œuvre de solutions durables plutôt que de correctifs temporaires.",
        
        "Dans le contexte du développement logiciel moderne, cette compétence implique aussi la capacité à utiliser efficacement les outils de debugging, à interpréter les logs et les métriques, et à collaborer avec d'autres membres de l'équipe pour résoudre des problèmes complexes."
      ]
    },
    {
      title: "Mes éléments de preuve",
      content: [
        "Mon expérience en résolution de problèmes s'illustre à travers plusieurs réalisations significatives. J'ai notamment résolu un problème critique de performance dans une application de traitement de données, où j'ai identifié et corrigé des fuites de mémoire qui impactaient la stabilité du système, améliorant les temps de réponse de 60%.",
        
        "J'ai également piloté la résolution d'un problème complexe de synchronisation dans une architecture distribuée, où j'ai mis en place une approche méthodique pour identifier les conditions de concurrence et implémenter une solution robuste utilisant des verrous distribués.",
        
        "Ma capacité à résoudre les problèmes s'est particulièrement illustrée lors du débogage d'une application legacy présentant des comportements intermittents. En utilisant une approche systématique et des outils de monitoring avancés, j'ai pu identifier et corriger des problèmes qui persistaient depuis plusieurs mois.",
        
        "J'ai aussi démontré mes compétences en résolution de problèmes en optimisant les performances d'une API critique, où j'ai utilisé des outils de profilage et d'analyse pour identifier les goulots d'étranglement et mettre en œuvre des optimisations ciblées."
      ]
    },
    {
      title: "Mon autocritique",
      content: [
        "Mes points forts en résolution de problèmes incluent ma capacité à aborder les situations complexes de manière méthodique et structurée. Je suis particulièrement efficace dans l'analyse des causes racines et dans l'élaboration de solutions durables plutôt que de correctifs temporaires.",
        
        "J'ai développé une bonne expertise dans l'utilisation des outils de debugging et de profilage, ce qui me permet d'investiguer efficacement les problèmes techniques. Ma capacité à documenter clairement les problèmes et leurs solutions facilite le partage de connaissances au sein de l'équipe.",
        
        "Cependant, je dois améliorer ma gestion du temps lors de la résolution de problèmes complexes. Il m'arrive parfois de m'investir trop profondément dans un problème sans prendre suffisamment de recul ou sans demander de l'aide assez tôt.",
        
        "Un autre axe d'amélioration concerne ma communication pendant la résolution de problèmes critiques. Bien que je parvienne généralement à résoudre les problèmes, je dois travailler sur ma capacité à tenir les parties prenantes informées de l'avancement et des impacts potentiels."
      ]
    },
    {
      title: "Mon évolution dans cette compétence",
      content: [
        "Pour continuer à progresser dans la résolution de problèmes, j'ai défini plusieurs axes de développement. À court terme, je prévois d'approfondir mes connaissances en analyse de performance et en optimisation système en suivant des formations spécialisées.",
        
        "Je souhaite également améliorer mes compétences en debugging avancé, notamment en me formant sur des outils spécialisés comme les profilers de mémoire et les analyseurs de traces système. Cette expertise me permettra d'aborder des problèmes plus complexes avec plus d'efficacité.",
        
        "À moyen terme, je compte développer mes compétences en analyse prédictive des problèmes, en utilisant des outils de monitoring et d'alerting plus sophistiqués pour identifier les problèmes potentiels avant qu'ils n'impactent les utilisateurs.",
        
        "Enfin, je prévois de partager mon expérience en matière de résolution de problèmes en rédigeant des articles techniques et en animant des sessions de formation pour l'équipe. Cette démarche me permettra non seulement de structurer mes connaissances mais aussi d'améliorer ma capacité à communiquer sur des sujets techniques complexes."
      ]
    }
  ];

  return <CompetencePage title="Résolution de Problèmes" sections={sections} />;
} 