import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl backdrop-saturate-200 border-t border-white/10 p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="text-white text-sm font-medium text-center">
          Créez vos codes-barres professionnels, ajoutez une étoile ⭐ au projet en cliquant{' '}
          <a 
            href="https://github.com/hakan-karadag/code39-generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors font-bold"
          >
            ICI
          </a>
          , c'est gratuit et ça me soutient
        </div>
        <div className="text-gray-300 text-xs text-center">
          Ajoutez cette page aux favoris une fois le CODE39 généré
        </div>
      </div>
    </div>
  );
}; 