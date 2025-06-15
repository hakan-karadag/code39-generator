import { useEffect, useState } from 'react';

export const useFooterHeight = () => {
  const [footerHeight, setFooterHeight] = useState(150);

  useEffect(() => {
    const updateFooterHeight = () => {
      const width = window.innerWidth;
      
      if (width >= 1024) { // lg
        setFooterHeight(80);
      } else if (width >= 768) { // md
        setFooterHeight(100);
      } else if (width >= 640) { // sm
        setFooterHeight(120);
      } else {
        // Mobile - valeur simplifiée
        setFooterHeight(180); // Valeur unique pour tous les mobiles
      }
    };

    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);
    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

  return footerHeight;
}; 