import React from 'react';
import { BarcodeService } from '@/services/BarcodeService';
import { BARCODE_CONFIG } from '@/constants/patterns';

interface BarcodeHTMLProps {
  text: string;
  idText: string;
  patternText: string;
}

export const BarcodeHTML: React.FC<BarcodeHTMLProps> = ({ text, idText, patternText }) => {
  const elements = BarcodeService.generateHTML(text);

  return (
    <div className="bg-white rounded-2xl p-2 md:p-6 border-2 border-gray-200 w-[calc(100vw-16px)] md:w-auto md:max-w-2xl lg:max-w-4xl mx-auto screenshot-protection">
      {/* Code-barres en HTML */}
      <div className="flex items-end justify-center mb-3 md:mb-6 overflow-x-auto min-h-[70px] md:min-h-[120px]">
        <div className="flex items-end" style={{ height: `${BARCODE_CONFIG.HEIGHT}px` }}>
          {elements.map((element, index) => (
            <div
              key={index}
              className={`${element.type === 'bar' ? 'bg-black h-full' : 'bg-transparent h-px'} flex-shrink-0`}
              style={{ 
                width: `${element.width * BARCODE_CONFIG.SCALE}px`,
                minWidth: `${element.width * BARCODE_CONFIG.SCALE}px`
              }}
            />
          ))}
        </div>
      </div>

      {/* Texte du code-barres */}
      <div className="text-center">
        <div className="text-base md:text-2xl font-mono font-bold text-gray-800 mb-2 break-all">
          {text}
        </div>
        <div className="text-xs md:text-sm text-gray-600 break-all">
          ID: {idText} | Pattern: {patternText}
        </div>
      </div>

      {/* Overlay de protection invisible */}
      <div className="absolute inset-0 pointer-events-none screenshot-overlay" />
    </div>
  );
}; 