import { Pattern } from '@/types';

// Configuration des patterns pour l'interface
export const patterns: Pattern[] = [
  { id: 'none', icon: '❌', pattern: '' },
  { id: 'orange', icon: ['🏋️', '🟧'], pattern: 'G<ID>87' },
  { id: 'yellow', icon: ['🏋️', '🟨'], pattern: 'F<ID>' },
  { id: 'hotel', icon: '🏨', pattern: 'E<ID>' }
];

// Configuration du rendu
export const BARCODE_CONFIG = {
  SCALE: 3,
  HEIGHT: 240
} as const;

// Patterns CODE39 pour la génération de codes-barres
export const code39Patterns: Record<string, string> = {
  '0': 'nnnwwnwnn', '1': 'wnnwnnnnw', '2': 'nnwwnnnnw', '3': 'wnwwnnnnn',
  '4': 'nnnwwnnnw', '5': 'wnnwwnnnn', '6': 'nnwwwnnnn', '7': 'nnnwnnwnw',
  '8': 'wnnwnnwnn', '9': 'nnwwnnwnn', 'A': 'wnnnnwnnw', 'B': 'nnwnnwnnw',
  'C': 'wnwnnwnnn', 'D': 'nnnnwwnnw', 'E': 'wnnnwwnnn', 'F': 'nnwnwwnnn',
  'G': 'nnnnnwwnw', 'H': 'wnnnnwwnn', 'I': 'nnwnnwwnn', 'J': 'nnnnwwwnn',
  'K': 'wnnnnnnww', 'L': 'nnwnnnnww', 'M': 'wnwnnnnwn', 'N': 'nnnnwnnww',
  'O': 'wnnnwnnwn', 'P': 'nnwnwnnwn', 'Q': 'nnnnnnwww', 'R': 'wnnnnnwwn',
  'S': 'nnwnnnwwn', 'T': 'nnnnwnwwn', 'U': 'wwnnnnnnw', 'V': 'nwwnnnnnw',
  'W': 'wwwnnnnnn', 'X': 'nwnnwnnnw', 'Y': 'wwnnnwnnw', 'Z': 'nwwnnwnnw',
  '*': 'nwnnwnwnn', ' ': 'nwwnwnnnn', '-': 'nwnnnnwwn', '.': 'wwnnnnnwn',
  '$': 'nwnwnwnnn', '/': 'nwnwnnnwn', '+': 'nwnnnwnwn', '%': 'nnnwnwnwn'
}; 