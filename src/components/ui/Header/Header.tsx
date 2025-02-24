'use client';

import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const getLinkColor = (path: string, linkId: string) => {
        if (pathname === path) return '#60A5FA';
        return hoveredLink === linkId ? '#60A5FA' : '#fff';
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/me.jpg"
                        alt="Esteban Mortier"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                Esteban Mortier
            </div>
            
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.mobileMenuButton}
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <nav className={styles.desktopNav}>
                <Link 
                    href="/" 
                    className={styles.link}
                    style={{ color: getLinkColor('/', 'home') }}
                    onMouseEnter={() => setHoveredLink('home')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <HomeIcon /> Accueil
                </Link>
                <Link 
                    href="/realisations" 
                    className={styles.link}
                    style={{ color: getLinkColor('/realisations', 'realisations') }}
                    onMouseEnter={() => setHoveredLink('realisations')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <WorkIcon /> Réalisations
                </Link>
                <Link 
                    href="/competences" 
                    className={styles.link}
                    style={{ color: getLinkColor('/competences', 'competences') }}
                    onMouseEnter={() => setHoveredLink('competences')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <CodeIcon /> Compétences
                </Link>
                <Link 
                    href="/contact" 
                    className={styles.link}
                    style={{ color: getLinkColor('/contact', 'contact') }}
                    onMouseEnter={() => setHoveredLink('contact')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <ContactMailIcon /> Contact
                </Link>
            </nav>

            <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <Link 
                    href="/" 
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor('/', 'home') }}
                    onMouseEnter={() => setHoveredLink('home')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <HomeIcon /> Accueil
                </Link>
                <Link 
                    href="/realisations" 
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor('/realisations', 'realisations') }}
                    onMouseEnter={() => setHoveredLink('realisations')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <WorkIcon /> Réalisations
                </Link>
                <Link 
                    href="/competences" 
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor('/competences', 'competences') }}
                    onMouseEnter={() => setHoveredLink('competences')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <CodeIcon /> Compétences
                </Link>
                <Link 
                    href="/contact" 
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor('/contact', 'contact') }}
                    onMouseEnter={() => setHoveredLink('contact')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <ContactMailIcon /> Contact
                </Link>
            </nav>
        </header>
    );
} 