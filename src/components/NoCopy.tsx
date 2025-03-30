'use client';

import { useEffect, useState } from 'react';

interface NoCopyProps {
  isEnabled?: boolean;
}

export default function NoCopy({ isEnabled = true }: NoCopyProps) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Si la protection est désactivée, ne rien faire
    if (!isEnabled) return;

    const preventCopy = (e: Event) => {
      e.preventDefault();
      
      // Afficher le message d'avertissement
      setShowMessage(true);
      
      // Cacher le message après 2 secondes
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      
      return false;
    };

    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      
      // Afficher le message d'avertissement
      setShowMessage(true);
      
      // Cacher le message après 2 secondes
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      
      return false;
    };

    const preventSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Désactiver la copie
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    
    // Désactiver le menu contextuel
    document.addEventListener('contextmenu', preventContextMenu);
    
    // Désactiver la sélection de texte
    document.addEventListener('selectstart', preventSelectStart);

    // Nettoyage des event listeners lors du démontage du composant
    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('selectstart', preventSelectStart);
    };
  }, [isEnabled]);

  // Si la protection est désactivée, ne rien afficher
  if (!isEnabled) return null;

  return showMessage ? (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      color: '#fff',
      padding: '15px 20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 122, 255, 0.5)',
      zIndex: 9999,
      fontFamily: 'var(--font-montserrat)',
      textAlign: 'center',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <p style={{ margin: 0, fontWeight: 'bold' }}>Copie non autorisée</p>
      <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>Le contenu de ce site est protégé</p>
    </div>
  ) : null;
} 