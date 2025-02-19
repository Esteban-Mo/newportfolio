'use client';

import { AiOutlineHome, AiOutlineProject, AiOutlineTool, AiOutlineMessage } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Accueil', href: '/', icon: AiOutlineHome },
    { name: 'Réalisations', href: '/realisations', icon: AiOutlineProject },
    { name: 'Compétences', href: '/competences', icon: AiOutlineTool },
    { name: 'Contact', href: '/contact', icon: AiOutlineMessage },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/images/me.jpg"
            alt="Esteban Mortier"
            width={40}
            height={40}
            className={styles.profileImage}
          />
          Esteban Mortier
        </div>
        
        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                <item.icon className={styles.icon} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
} 