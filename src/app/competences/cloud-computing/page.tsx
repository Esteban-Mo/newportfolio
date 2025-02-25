'use client';

import { useRouter } from 'next/navigation';

export default function CloudComputing() {
  const router = useRouter();

  const handleRetour = () => {
    // Rediriger vers la section des compétences sur la page d&apos;accueil
    router.push('/#competences');
  };

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem 1rem',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <button 
        onClick={handleRetour}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'none',
          border: 'none',
          color: '#60A5FA',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '2rem',
          padding: '0.5rem 0',
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>←</span>
        <span>Retour à l&apos;accueil</span>
      </button>

      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
        fontWeight: '700',
        color: '#60A5FA',
        marginBottom: '2rem',
      }}>
        Cloud Computing
      </h1>

      <section style={{
        marginBottom: '3rem',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#60A5FA',
        }}>
          Ma définition
        </h2>
        <div style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'rgba(255,255,255,0.9)',
        }}>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Le Cloud computing aussi appelé simplement Cloud, fut créé en 2006 et consiste en l&apos;emploi d&apos;infrastructures géographiquement distantes de leurs utilisateurs finaux.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Trois principaux modèles de Cloud Computing existent. Ils peuvent être privés, publics ou hybrides. Un Cloud privé est une infrastructure distante gérée par une entreprise pour ses propres besoins. Un Cloud public loue des services d&apos;hébergement comme des bases de données et du stockage de fichiers. Il loue également des services de calcul comme des machines virtuelles ou du CAAS (Conteneur As A Service). Un fournisseur Cloud public accueillera toujours plusieurs clients (entreprises ou particuliers) qui se partageront les puissances des infrastructures aux capacités très élevées. Les solutions de Cloud hybrides quant à elles sont pour moi les plus fascinantes, car elles permettent d&apos;utiliser les ressources d&apos;un fournisseur Cloud public uniquement si un Cloud privé n&apos;est plus en mesure de répondre aux demandes de calcul ou de stockage qu&apos;on lui adresse.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Une entreprise peut choisir d&apos;employer l&apos;une de ses trois solutions en fonction de ses besoins. La puissance de calcul nécessaire ou le nombre de données à stocker et leurs niveaux de confidentialité, mais également le coût total lui permettent de qualifier la meilleure option à choisir. En entreprise, le Cloud est très utile pour simplifier la gestion des infrastructures. Par exemple, nous pouvons choisir de louer dans le Cloud public un logiciel complexe à mettre en œuvre plutôt que de devoir l&apos;installer nous-même dans un Cloud privé. La simplicité est une chose nécessaire en entreprise et le fait d&apos;avoir la possibilité de déployer automatiquement des logiciels dans le Cloud sans difficulté permet aux entreprises de ne pas s&apos;encombrer de tâches d&apos;installation, de maintenance, de sauvegarde et de mise à jour. De plus, les nombreuses possibilités de location à la seconde permettent aux entreprises de pouvoir, le temps d&apos;une journée par exemple, louer de très grosses machines virtuelles spécialisées dans le calcul pour un prix abordable.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Un article du site &quot;les numériques&quot; traite du fait que le marché du Cloud public est largement dominé par trois entreprises américaines : Amazon, Microsoft et Google. Il évoque qu&apos;il est très important d&apos;avoir conscience des dimensions juridiques qui s&apos;appliquent en France et en Europe concernant le traitement des données par des acteurs non-européens.
          </p>
        </div>
      </section>

      <section style={{
        marginBottom: '3rem',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#60A5FA',
        }}>
          Mes éléments de preuve
        </h2>
        <div style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'rgba(255,255,255,0.9)',
        }}>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Pour me former sur le Cloud, j&apos;ai réalisé le parcours d&apos;apprentissage d&apos;ingénieur Google Cloud en 2021, puis j&apos;ai lu et appris le contenu du livre de préparation à la certification d&apos;ingénieur Google Cloud. Je lis actuellement le livre de préparation à la certification d&apos;architecte Google Cloud. Pour ne pas être complètement focalisé sur Google Cloud, j&apos;ai aussi lu la documentation d&apos;architecte Openstack (solution de Cloud privé opensource). Cette documentation m&apos;a beaucoup appris sur le fonctionnement interne d&apos;un Cloud. J&apos;ai pu ainsi comprendre les différentes étapes (approvisionnement du stockage, du réseau, des changements d&apos;état dans les bases de données et dans la gestion des permissions) pour démarrer une machine virtuelle.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Deux anecdotes me viennent à l&apos;esprit en rédigeant cette compétence. La première est en lien avec la réalisation E-Lawvation durant mon année de licence professionnelle à l&apos;université de Toulon. La seconde s&apos;est déroulée durant la réalisation &quot;gestion des incidents Google Cloud des entreprises&quot; réalisée en sur mon temps libre entre 2021 et 2024.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Durant le projet E-Lawvation, j&apos;ai confectionné plusieurs architectures Google Cloud différentes pour proposer plusieurs hypothèses à notre client. Celui-ci souhaitait connaître le prix total d&apos;un site web. Pour cela, j&apos;ai conçu trois différentes hypothèses permettant au client de comprendre la corrélation entre les coûts et les différentes puissances de calcul. J&apos;ai intégré à ces hypothèses les sauvegardes et la gestion de la redondance. J&apos;ai réussi à atteindre l&apos;objectif fixé par nos enseignants qui était de réaliser une réponse technique qui soit conforme aux besoins du client. Cette réalisation a été pour moi, la toute première occasion de réaliser le chiffrage complet des coûts d&apos;une infrastructure Cloud. J&apos;ai ainsi pu découvrir certains détails de facturations qui m&apos;étaient inconnus comme les coûts liés aux données téléchargées et envoyées sur Internet depuis une machine virtuelle.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Dans le cadre de ma réalisation &quot;Gestion des incidents Google Cloud chez les entreprises&quot;, j&apos;ai répondu à différentes questions sur un forum Discord spécialisé sur Google Cloud. J&apos;ai ainsi aidé un employé de Ultimate Kronos Group (UKG) qui avait rencontré trois incidents plus ou moins majeurs sur Google Cloud. J&apos;ai réalisé des investigations directement sur ses interfaces de productions en réalisant des visioconférences avec lui dans lesquelles je prenais le contrôle de son ordinateur. Dans les trois cas, j&apos;ai su apporter une réponse et ainsi solutionner les problèmes rencontrés. J&apos;ai beaucoup apprécié aider bénévolement UKG, car cela m&apos;a permis d&apos;approfondir mes compétences et de consolider celles que je maîtrisais déjà.
          </p>
        </div>
      </section>

      <section style={{
        marginBottom: '3rem',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#60A5FA',
        }}>
          Mon autocritique
        </h2>
        <div style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'rgba(255,255,255,0.9)',
        }}>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Ayant réalisé le parcours d&apos;apprentissage d&apos;ingénieur Google Cloud, je suis apte à concevoir, déployer, gérer les coûts et la sécurité d&apos;infrastructures Google Cloud, cependant, je ne me qualifie pas d&apos;expert en Cloud Computing pour la raison que mes connaissances me viennent presque toutes de situations théoriques. De par ce constat, je dirais plutôt que j&apos;ai un niveau avancé dans ce domaine.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            J&apos;ai encore beaucoup à apprendre en matière de Cloud Computing. Je pense notamment à l&apos;approfondissement de mes connaissances en sécurité, mais aussi dans la mise en œuvre de solutions que je ne peux pas réaliser en tant que particulier, car trop coûteuses. Passionné par le Cloud, j&apos;ai souhaité dans un premier temps me spécialiser sur Google Cloud pour être apte à travailler avec ces solutions en entreprise. Cependant, je pense qu&apos;il est nécessaire pour moi de découvrir d&apos;autres solutions de Cloud publics. Je pense notamment à Scaleway qui est une entreprise de Cloud Française qui ne pose pas de problème en matière de souveraineté. En tant que DevOps dans une entreprise de cybersécurité française, le Cloud Computing n&apos;est pas complètement central à mon métier. Pour préserver la souveraineté de mon entreprise, je ne peux pas exercer mes compétences en matière de Cloud Public, car ceux-ci sont majoritairement américains. Ma compétence ne s&apos;exerce ainsi pas complètement dans le cadre de la cybersécurité.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Les compétences que j&apos;ai acquises en Cloud Computing font de moi un Expert en Ingénierie des Systèmes d&apos;Information. Le Cloud étant très complexe, la compréhension et la mise en œuvre d&apos;infrastructures vont me permettre de devenir un ingénieur qualifié.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            J&apos;ai vite compris les fonctionnalités de base du Cloud (notamment la scalabilité, mais aussi les concepts liés à la facturation à la seconde). J&apos;ai cependant dû redoubler d&apos;efforts en réalisant le parcours d&apos;apprentissage d&apos;ingénieur Cloud, car celui-ci était réellement complexe. Il aurait été plus judicieux pour moi de lire le livre consacré à la théorie avant d&apos;être confronté à la pratique. J&apos;ai depuis terminé et compris le livre nommé &quot;Official Google Cloud certified Associate Cloud Engineer study guide&quot; écrit par Dan SULLIVAN. J&apos;ai commencé la lecture d&apos;un second livre nommé &quot;Official Google Cloud certified Professional Cloud Architect study guide&quot; écrit par le même auteur et qui a pour but d&apos;inviter le lecteur à réfléchir sur les bons choix d&apos;architectures Google Cloud selon les contextes techniques. Travaillant en entreprise sur la mise en condition opérationnelle d&apos;un logiciel de sécurité nommé Reveelium qui est très complexe, j&apos;ai pu approfondir mes connaissances en matière d&apos;administration système & réseaux. Ces connaissances sont particulièrement importantes pour travailler avec des infrastructures Cloud.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Avec l&apos;expérience que j&apos;ai, je conseillerai à n&apos;importe quel informaticien de découvrir certains concepts du Cloud (notamment le paiement à la seconde d&apos;infrastructures simples ou complexes) qui peuvent faciliter grandement certaines tâches d&apos;administration.
          </p>
        </div>
      </section>

      <section style={{
        marginBottom: '3rem',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#60A5FA',
        }}>
          Mon évolution dans cette compétence
        </h2>
        <div style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'rgba(255,255,255,0.9)',
        }}>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            J&apos;ai pour projet professionnel de devenir architecte Google Cloud. Je souhaite dans les prochaines années, être capable de concevoir des architectures complexes pour des entreprises et que celles-ci soient mises en production.
          </p>
          <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
            Pour cela, je compte terminer la lecture du livre sur la maîtrise des architectures de Google Cloud et réaliser le parcours d&apos;apprentissage d&apos;architecte Cloud proposé par Google Cloud Skill Boost. J&apos;ai aussi la volonté de réaliser des tests sur des fournisseurs Cloud autres que Google. Je pense en particulier à AWS (fournisseur Cloud Américain) et Scaleway (fournisseur Cloud Français).
          </p>
        </div>
      </section>
    </div>
  );
}