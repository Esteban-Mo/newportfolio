'use client';

import { useEffect } from 'react';

interface UXEnhancerProps {
  isEnabled?: boolean;
}

export default function UXEnhancer({ isEnabled = true }: UXEnhancerProps) {
  useEffect(() => {
    if (!isEnabled || typeof window === 'undefined') return;

    const modifyTextNodes = () => {
      const textNodes = [];
      const walk = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
      );

      let node;
      while (node = walk.nextNode()) {
        if (node.textContent && node.textContent.trim() !== '' && node.parentNode) {
          textNodes.push(node);
        }
      }

      textNodes.forEach(node => {
        if (node.textContent) {
          const originalText = node.textContent;
          const modifiedText = originalText.split('').join('\u200B');
          node.textContent = modifiedText;
          
          if (node.parentElement) {
            node.parentElement.setAttribute('data-text', originalText);
          }
        }
      });
    };

    const addHelperElements = () => {
      const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
      
      elements.forEach(element => {
        if (element.textContent && element.textContent.trim() !== '') {
          const helper = document.createElement('span');
          helper.style.fontSize = '0';
          helper.style.position = 'absolute';
          helper.style.opacity = '0';
          helper.style.pointerEvents = 'none';
          helper.innerHTML = Array(20).fill('&#8203;').join('') + ' ' + Array(20).fill('&#8203;').join('');
          
          element.appendChild(helper);
        }
      });
    };

    const enhanceElements = () => {
      const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
      
      elements.forEach(el => {
        if (el.textContent && el.textContent.trim() !== '') {
          el.setAttribute('data-enhanced', 'true');
          
          if (el.textContent) {
            const reversed = el.textContent.split('').reverse().join('');
            el.setAttribute('aria-hidden', 'true');
            el.setAttribute('data-r', reversed);
          }
        }
      });
    };

    const addStyles = () => {
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        p::before, h1::before, h2::before, h3::before, h4::before, h5::before, h6::before, span::before, div::before {
          content: "⁣";
          display: inline;
          width: 0;
          height: 0;
          opacity: 0;
        }
        
        p::after, h1::after, h2::after, h3::after, h4::after, h5::after, h6::after, span::after, div::after {
          content: "⁣";
          display: inline;
          width: 0;
          height: 0;
          opacity: 0;
        }
        
        ::selection {
          position: relative;
        }
        
        ::selection::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
      `;
      document.head.appendChild(styleElement);
    };

    modifyTextNodes();
    addHelperElements();
    enhanceElements();
    addStyles();

    return () => {};
  }, [isEnabled]);

  return null;
} 