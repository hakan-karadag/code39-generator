import { BarcodeElement } from '@/types';
import { code39Patterns } from '@/constants/patterns';

export class BarcodeService {
  /**
   * Génère les éléments d'un code-barres CODE39
   */
  static generateCode39(text: string): BarcodeElement[] {
    const elements: BarcodeElement[] = [];
    
    const addPattern = (pattern: string) => {
      for (let i = 0; i < pattern.length; i++) {
        elements.push({
          type: i % 2 === 0 ? 'bar' : 'space',
          width: pattern[i] === 'w' ? 3 : 1
        });
      }
      elements.push({ type: 'space', width: 1 });
    };

    // Début
    addPattern(code39Patterns['*']);
    
    // Caractères du texte
    for (let char of text.toUpperCase()) {
      if (code39Patterns[char]) {
        addPattern(code39Patterns[char]);
      }
    }
    
    // Fin
    addPattern(code39Patterns['*']);
    
    return elements;
  }

  /**
   * Génère le HTML du code-barres (plus léger que l'image)
   */
  static generateHTML(text: string): BarcodeElement[] {
    return this.generateCode39(text);
  }


} 