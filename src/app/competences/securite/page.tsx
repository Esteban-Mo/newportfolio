'use client';

import CompetencePage from '@/components/CompetencePage';

export default function Securite() {
  const sections = [
    {
      title: "Ma définition",
      content: [
        "La sécurité informatique est un domaine crucial qui englobe la protection des systèmes, des réseaux et des données contre les menaces et les vulnérabilités. Elle repose sur trois piliers fondamentaux : la confidentialité, l'intégrité et la disponibilité des ressources informatiques.",
        
        "Cette discipline nécessite une approche holistique, intégrant la sécurité dès la conception (Security by Design) et tout au long du cycle de vie du développement logiciel (SDLC). Elle comprend l'identification des risques, l'implémentation de contrôles de sécurité, la gestion des accès et des identités, ainsi que la surveillance continue des menaces.",
        
        "La sécurité applicative est particulièrement importante, avec la mise en œuvre de pratiques comme la validation des entrées, la gestion sécurisée des sessions, le chiffrement des données sensibles, et la protection contre les vulnérabilités courantes (XSS, CSRF, injections SQL, etc.).",
        
        "La cybersécurité moderne nécessite également une compréhension approfondie des normes et réglementations (RGPD, PCI DSS, etc.), ainsi qu'une veille constante sur les nouvelles menaces et les bonnes pratiques de sécurité."
      ]
    },
    {
      title: "Mes éléments de preuve",
      content: [
        "J'ai mis en place des systèmes d'authentification et d'autorisation robustes utilisant des protocoles standards comme OAuth 2.0 et OpenID Connect. J'ai notamment implémenté une solution SSO (Single Sign-On) pour une suite d'applications d'entreprise, renforçant la sécurité tout en améliorant l'expérience utilisateur.",
        
        "Dans le cadre de projets sensibles, j'ai réalisé des audits de sécurité approfondis, utilisant des outils comme OWASP ZAP et Burp Suite pour identifier et corriger les vulnérabilités. J'ai également mis en place des processus de revue de code axés sur la sécurité et intégré des outils d'analyse statique (SAST) dans nos pipelines CI/CD.",
        
        "J'ai développé une expertise dans la gestion sécurisée des données, notamment en implémentant le chiffrement des données au repos et en transit, en gérant les clés de chiffrement de manière sécurisée, et en assurant la conformité avec les réglementations sur la protection des données personnelles.",
        
        "J'ai également contribué à la mise en place d'une stratégie de sécurité DevSecOps, intégrant des contrôles de sécurité automatisés tout au long du pipeline de développement, et formé les équipes aux bonnes pratiques de sécurité."
      ]
    },
    {
      title: "Mon autocritique",
      content: [
        "Mes points forts en sécurité incluent la sécurisation des applications web, la gestion des identités et des accès, ainsi que l'intégration de la sécurité dans les processus DevOps. Je suis particulièrement à l'aise avec l'implémentation des contrôles de sécurité OWASP Top 10 et l'analyse des vulnérabilités applicatives.",
        
        "Cependant, je reconnais que le domaine de la sécurité des conteneurs et des environnements cloud natifs mérite d'être approfondi. Bien que je comprenne les concepts de base, je souhaite développer une expertise plus poussée dans la sécurisation des architectures microservices et des infrastructures cloud.",
        
        "Un autre axe d'amélioration concerne la réponse aux incidents de sécurité. Bien que j'aie une bonne compréhension théorique, mon expérience pratique dans la gestion des incidents de sécurité majeurs reste limitée.",
        
        "Enfin, je dois renforcer mes compétences en matière de tests de pénétration avancés et de red teaming. Ces compétences sont essentielles pour évaluer de manière plus approfondie la sécurité des systèmes."
      ]
    },
    {
      title: "Mon évolution dans cette compétence",
      content: [
        "À court terme, je prévois d'obtenir des certifications reconnues en sécurité comme la CEH (Certified Ethical Hacker) et la CISSP pour valider et approfondir mes connaissances. Je compte également me spécialiser dans la sécurité des environnements cloud en passant les certifications de sécurité spécifiques aux principaux fournisseurs cloud.",
        
        "Je souhaite développer mes compétences en matière de tests de pénétration avancés et de red teaming. Pour cela, je participe régulièrement à des CTF (Capture The Flag) et je prévois de suivre des formations spécialisées dans ces domaines.",
        
        "Sur le long terme, mon objectif est de devenir expert en architecture de sécurité, capable de concevoir et d'implémenter des solutions de sécurité robustes pour des systèmes complexes. Je m'intéresse particulièrement à l'application des principes Zero Trust et à la sécurisation des architectures cloud natives.",
        
        "Je continue également à contribuer à la communauté de la sécurité en partageant mes connaissances lors de conférences et en participant à des programmes de bug bounty. Cette implication me permet de rester à jour sur les dernières menaces et les meilleures pratiques de sécurité."
      ]
    }
  ];

  return <CompetencePage title="Sécurité" sections={sections} />;
} 