import React from 'react';
import { patterns } from '@/constants/patterns';
import { AppState } from '@/types';

interface PatternSelectorProps {
  state: AppState;
  isSwitchActive: (id: string) => boolean;
  handleSwitchChange: (id: string) => void;
}

export const PatternSelector: React.FC<PatternSelectorProps> = ({
  state,
  isSwitchActive,
  handleSwitchChange
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center text-left">
          <div className="text-white/90 text-xs font-medium uppercase tracking-wide">Switch</div>
          <div className="text-white/70 text-[10px] uppercase tracking-wider">Pattern</div>
        </div>
        <div className="flex items-center gap-2">
          {patterns.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => handleSwitchChange(pattern.id)}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 transform ${
                isSwitchActive(pattern.id) 
                  ? 'bg-white/15 backdrop-blur-sm text-white scale-110' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105 hover:shadow-md'
              }`}
            >
              {Array.isArray(pattern.icon) ? (
                <div className="flex flex-col items-center justify-center text-[9px] leading-[0.7]">
                  <span>{pattern.icon[0]}</span>
                  <span>{pattern.icon[1]}</span>
                </div>
              ) : (
                <span className="text-xs">{pattern.icon}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 