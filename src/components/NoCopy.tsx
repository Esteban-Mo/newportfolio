'use client';

import { useEffect } from 'react';

interface TextEnhancerProps {
  isEnabled?: boolean;
}

export default function TextEnhancer({ isEnabled = true }: TextEnhancerProps) {
  useEffect(() => {
    if (!isEnabled) return;

    const handleCopy = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCopy);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCopy);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, [isEnabled]);

  return null;
} 