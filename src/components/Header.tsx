'use client';

import { AiOutlineHome, AiOutlineProject, AiOutlineTool, AiOutlineMessage } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 50;
  background-color: transparent;
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 2px 0 rgba(255, 249, 249, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #f1f1f1;
`;

const ProfileImage = styled(Image)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  object-fit: cover;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props: { $isActive?: boolean }) => props.$isActive ? '#748cda' : '#f1f1f1'};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #748cda;
  }
`;

const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
`;

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Accueil', href: '/', icon: AiOutlineHome },
    { name: 'Réalisations', href: '/realisations', icon: AiOutlineProject },
    { name: 'Compétences', href: '/competences', icon: AiOutlineTool },
    { name: 'Contact', href: '/contact', icon: AiOutlineMessage },
  ];

  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <ProfileImage
            src="/images/me.jpg"
            alt="Esteban Mortier"
            width={40}
            height={40}
          />
          Esteban Mortier
        </Logo>
        
        <Nav>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavLink
                key={item.href}
                href={item.href}
                $isActive={isActive}
              >
                <Icon as={item.icon} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </Nav>
      </Container>
    </HeaderContainer>
  );
} 