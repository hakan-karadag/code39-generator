import React from 'react';
import { BarcodeHTML } from './BarcodeHTML';
import { useFooterHeight } from '@/hooks/useFooterHeight';
import { AppState } from '@/types';

interface BarcodeDisplayProps {
  state: AppState;
  handleBackToHome: () => void;
}

export const BarcodeDisplay: React.FC<BarcodeDisplayProps> = ({ state, handleBackToHome }) => {
  const footerHeight = useFooterHeight();
  // Génération du résultat du code-barres
  let barcodeResult = state.idValue || '187';
  if (state.patternValue && state.idValue) {
    try {
      if (state.patternValue.includes('<ID>')) {
        barcodeResult = state.patternValue.replace('<ID>', state.idValue);
      } else if (state.patternValue.includes('$1')) {
        barcodeResult = state.patternValue.replace('$1', state.idValue);
      } else if (state.patternValue.includes('$')) {
        barcodeResult = state.patternValue.replace('$', state.idValue);
      } else {
        const match = state.idValue.match(new RegExp(state.patternValue));
        barcodeResult = match ? (match.length > 1 ? match.slice(1).join('') : match[0]) : 'NO MATCH';
      }
    } catch {
      barcodeResult = 'INVALID PATTERN';
    }
  }

  return (
    <div 
      className="relative z-10 pt-20 md:pt-24 p-4 space-y-8"
      style={{ paddingBottom: `${footerHeight}px` }}
    >
      <button
        onClick={handleBackToHome}
        className="flex items-center gap-2 text-white bg-white/15 backdrop-blur-xl rounded-2xl px-4 py-2 shadow-xl hover:bg-white/20 active:scale-95 transition-all duration-200"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span className="text-sm">Retour</span>
      </button>
      <BarcodeHTML 
        text={barcodeResult}
        idText={state.idValue || '187'}
        patternText={barcodeResult}
      />
    </div>
  );
}; 