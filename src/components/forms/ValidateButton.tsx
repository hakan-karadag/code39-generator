import React from 'react';

interface ValidateButtonProps {
  onClick: () => void;
}

export const ValidateButton: React.FC<ValidateButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="w-full bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 shadow-lg text-white font-semibold hover:bg-white/20 active:scale-95 transition-all duration-200"
    >
      VALIDE
    </button>
  );
}; 