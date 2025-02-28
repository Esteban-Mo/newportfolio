export default function CompetencesMenu() {
    const competences = [
        {
            id: 'developpement-frontend',
            name: 'Développement Frontend',
            category: 'technique'
        },
        {
            id: 'developpement-backend',
            name: 'Développement Backend',
            category: 'technique'
        },
        {
            id: 'architecture-logicielle',
            name: 'Architecture Logicielle',
            category: 'technique'
        },
        {
            id: 'base-de-donnees',
            name: 'Base de Données',
            category: 'technique'
        },
        {
            id: 'communication',
            name: 'Communication',
            category: 'humaine'
        },
        {
            id: 'leadership',
            name: 'Leadership',
            category: 'humaine'
        },
        {
            id: 'adaptabilite',
            name: 'Adaptabilité',
            category: 'humaine'
        },
        {
            id: 'resolution-de-problemes',
            name: 'Résolution de Problèmes',
            category: 'humaine'
        }
    ];

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        transition: 'all 0.2s ease',
        backgroundColor: 'transparent'
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = '#333';
        target.style.color = '#60A5FA';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = 'transparent';
        target.style.color = '#fff';
    };

    return (
        <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            width: 'max-content',
            maxWidth: '90vw'
        }}>
            <div style={{
                gridColumn: '1 / -1',
                borderBottom: '1px solid #333',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
                color: '#60A5FA',
                fontWeight: 'bold'
            }}>
                Compétences
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
            }}>
                <div style={{
                    color: '#60A5FA',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                }}>
                    Techniques
                </div>
                {competences
                    .filter(comp => comp.category === 'technique')
                    .map(comp => (
                        <a
                            key={comp.id}
                            href={`/competences/${comp.id}`}
                            style={linkStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {comp.name}
                        </a>
                    ))}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
            }}>
                <div style={{
                    color: '#60A5FA',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                }}>
                    Humaines
                </div>
                {competences
                    .filter(comp => comp.category === 'humaine')
                    .map(comp => (
                        <a
                            key={comp.id}
                            href={`/competences/${comp.id}`}
                            style={linkStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {comp.name}
                        </a>
                    ))}
            </div>
        </div>
    );
} 