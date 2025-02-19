'use client';

import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const linkStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1rem',
        transition: 'color 0.3s ease'
    };

    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const getLinkColor = (path: string, linkId: string) => {
        if (pathname === path) return '#60A5FA';
        return hoveredLink === linkId ? '#60A5FA' : '#fff';
    };

    return (
        <header style={{
            width: '100%',
            height: '70px',
            backdropFilter: 'blur(10px)',
            display: 'grid',
            gridTemplateColumns: '250px 1fr 250px',
            alignItems: 'center',
            padding: '0 2rem',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
            borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
        }}>
            <div style={{
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 'bold'
            }}>
                Esteban Mortier
            </div>
            
            <nav style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center'
            }}>
                <Link 
                    href="/" 
                    style={{
                        ...linkStyle,
                        color: getLinkColor('/', 'home')
                    }}
                    onMouseEnter={() => setHoveredLink('home')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <HomeIcon /> Accueil
                </Link>
                <Link 
                    href="/realisations" 
                    style={{
                        ...linkStyle,
                        color: getLinkColor('/realisations', 'realisations')
                    }}
                    onMouseEnter={() => setHoveredLink('realisations')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <WorkIcon /> Réalisations
                </Link>
                <Link 
                    href="/competences" 
                    style={{
                        ...linkStyle,
                        color: getLinkColor('/competences', 'competences')
                    }}
                    onMouseEnter={() => setHoveredLink('competences')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <CodeIcon /> Compétences
                </Link>
                <Link 
                    href="/contact" 
                    style={{
                        ...linkStyle,
                        color: getLinkColor('/contact', 'contact')
                    }}
                    onMouseEnter={() => setHoveredLink('contact')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <ContactMailIcon /> Contact
                </Link>
            </nav>
            <div></div>
        </header>
    );
} 