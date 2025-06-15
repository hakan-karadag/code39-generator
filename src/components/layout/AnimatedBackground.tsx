import React, { useMemo, useState } from 'react';
import { AnimationElement } from '@/types';

export const AnimatedBackground: React.FC = () => {
  // Précalcul des styles et animations pour éviter les calculs en runtime
  const [bgElements] = useState(() => {
    // Fonction helper pour précalculer les styles
    const precalculateStyles = (count: number, type: string) => {
      const baseConfig = {
        stars: { sizeRange: [1, 3], durationRange: [6, 10], opacity: 0.7 },
        particles: { sizeRange: [2, 5], durationRange: [8, 14], opacity: 0.5 },
        rays: { sizeRange: [1, 1], durationRange: [8, 14], opacity: 0.2 },
        planets: { sizeRange: [6, 12], durationRange: [25, 35], opacity: 0.4 },
        comets: { sizeRange: [3, 5], durationRange: [15, 21], opacity: 0.8 }
      };
      
      const config = baseConfig[type as keyof typeof baseConfig];
      return Array.from({ length: count }, (_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * (config.sizeRange[1] - config.sizeRange[0]) + config.sizeRange[0];
        const duration = Math.random() * (config.durationRange[1] - config.durationRange[0]) + config.durationRange[0];
        const delay = Math.random() * 10;
        
        // Précalcul des styles CSS complets
        const baseStyle = {
          left: `${left}%`,
          top: `${top}%`,
          width: type === 'rays' ? '100%' : `${size}px`,
          height: type === 'rays' ? '1px' : `${size}px`,
          animationDelay: `${delay}s`
        };
        
        // Styles spécifiques par type précalculés
        const typeStyles = {
          stars: {
            ...baseStyle,
            animation: `twinkle ${duration}s ease-in-out infinite`
          },
          particles: {
            ...baseStyle,
            animation: `float ${duration}s ease-in-out infinite`
          },
          rays: {
            ...baseStyle,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `shimmer ${duration}s linear infinite`
          },
          planets: {
            ...baseStyle,
            animation: `orbit ${duration}s linear infinite`
          },
          comets: {
            ...baseStyle,
            animation: `cometMove ${duration}s linear infinite`,
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(251, 146, 60, 0.6)'
          }
        };
        
        return {
          id: i,
          style: typeStyles[type as keyof typeof typeStyles],
          className: `absolute rounded-full will-change-transform ${
            type === 'stars' || type === 'comets' ? 'bg-white' :
            type === 'particles' ? 'bg-orange-400' :
            type === 'rays' ? 'bg-gradient-to-r from-transparent via-orange-300 to-transparent' :
            'bg-gradient-to-br from-orange-300/30 to-orange-600/50'
          }`
        };
      });
    };
    
    return {
      stars: precalculateStyles(50, 'stars'),
      particles: precalculateStyles(25, 'particles'),
      rays: precalculateStyles(10, 'rays'),
      planets: precalculateStyles(3, 'planets'),
      comets: precalculateStyles(2, 'comets')
    };
  });

  return useMemo(() => {
    // CSS animations précalculées - une seule fois
    const keyframes = `
      @keyframes twinkle { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
      @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
      @keyframes shimmer { 0%, 100% { opacity: 0; } 50% { opacity: 0.8; } }
      @keyframes orbit { from { transform: rotate(0deg) translateX(15px) rotate(0deg); } to { transform: rotate(360deg) translateX(15px) rotate(-360deg); } }
      @keyframes cometMove { 0% { opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { opacity: 0; transform: translate(100vw, 100vh); } }
    `;

    return (
      <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-900/30 to-black">
        <style dangerouslySetInnerHTML={{ __html: keyframes }} />
        
        {/* Rendu optimisé - styles précalculés appliqués directement */}
        {Object.entries(bgElements).map(([type, elements]) => (
          <div key={type} className="absolute inset-0" style={{ 
            opacity: type === 'stars' ? 0.7 : type === 'particles' ? 0.5 : type === 'rays' ? 0.2 : type === 'planets' ? 0.4 : 0.8,
            pointerEvents: 'none' // Optimisation : pas d'interactions
          }}>
            {(elements as AnimationElement[]).map((el) => (
              <div
                key={`${type}-${el.id}`}
                className={el.className}
                style={el.style}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }, [bgElements]);
}; 