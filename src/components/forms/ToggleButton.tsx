import React from 'react';

interface ToggleButtonProps {
  patternVisible: boolean;
  onToggle: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ patternVisible, onToggle }) => {
  return (
    <div className="flex justify-center py-1">
      <button 
        onClick={onToggle} 
        className="p-3 rounded-xl transition-all duration-200 bg-white/10 backdrop-blur-xl hover:bg-white/20 shadow-lg animate-subtle-float hover:animate-pulse"
      >
        {patternVisible ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        )}
      </button>
    </div>
  );
}; 