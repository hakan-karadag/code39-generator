import { useCallback } from 'react';
import { AppState } from '@/types';

export const useValidation = (
  state: AppState,
  updateState: (updates: Partial<AppState>) => void
) => {
  const showError = useCallback((field: 'Id' | 'Pattern') => {
    const errorKey = `show${field}Error` as keyof AppState;
    updateState({ [errorKey]: true } as Partial<AppState>);
    setTimeout(() => {
      updateState({ [errorKey]: false } as Partial<AppState>);
    }, 3000);
  }, [updateState]);

  const validateData = useCallback((): boolean => {
    const validChars = /^[0-9A-Z\-\.\ \$\/\+\%]*$/;
    
    // Validation de l'ID
    if (!state.idValue.trim() || 
        !validChars.test(state.idValue.toUpperCase()) || 
        state.idValue.length > 1000) {
      showError('Id');
      return false;
    }

    // Validation du pattern (si présent)
    if (state.patternValue) {
      const patternChars = /^[0-9A-Z\-\.\ \$\/\+\%\<\>ID]*$/;
      if (!patternChars.test(state.patternValue.toUpperCase()) || 
          state.patternValue.length > 1000) {
        showError('Pattern');
        return false;
      }
    }

    return true;
  }, [state.idValue, state.patternValue, showError]);

  return {
    validateData,
    showError
  };
}; 