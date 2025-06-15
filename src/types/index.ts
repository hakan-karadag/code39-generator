// Types pour l'application CODE39 Generator
export interface AppState {
  page: 'home' | 'result';
  patternVisible: boolean;
  idValue: string;
  patternValue: string;
  isInputFocused: boolean;
  showIdError: boolean;
  showPatternError: boolean;
}

export interface Pattern {
  id: string;
  icon: string | string[];
  pattern: string;
}

export interface BarcodeElement {
  type: 'bar' | 'space';
  width: number;
}

export interface AnimationElement {
  id: number;
  style: React.CSSProperties;
  className: string;
}

// Interface commune pour les composants avec état
export interface BaseComponentProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

// Interface pour les composants avec logique pattern
export interface PatternComponentProps extends BaseComponentProps {
  isSwitchActive: (id: string) => boolean;
  handleSwitchChange: (id: string) => void;
} 