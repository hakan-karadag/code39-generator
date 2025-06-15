import { useState, useCallback } from 'react';
import { AppState } from '@/types';
import { useURLParams } from './useURLParams';
import { useValidation } from './useValidation';
import { usePatternLogic } from './usePatternLogic';

export const useAppState = () => {
  const [state, setState] = useState<AppState>({
    page: 'home',
    patternVisible: false,
    idValue: '',
    patternValue: '',
    isInputFocused: false,
    showIdError: false,
    showPatternError: false
  });

  const updateState = useCallback((updates: Partial<AppState>) => 
    setState(prev => ({ ...prev, ...updates })), []);

  // Tous les hooks d'état unifiés
  const { navigateToResult, navigateToHome } = useURLParams(state, updateState);
  const { validateData } = useValidation(state, updateState);
  const { isSwitchActive, handleSwitchChange } = usePatternLogic(state, updateState);

  // Handlers optimisés
  const handleValidate = useCallback(() => {
    if (validateData()) {
      navigateToResult();
    }
  }, [validateData, navigateToResult]);

  const handleBackToHome = useCallback(() => {
    navigateToHome();
  }, [navigateToHome]);

  return {
    state,
    updateState,
    handleValidate,
    handleBackToHome,
    isSwitchActive,
    handleSwitchChange
  };
}; 