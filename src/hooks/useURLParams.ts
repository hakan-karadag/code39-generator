import { useEffect, useCallback } from 'react';
import { URLService } from '@/services/URLService';
import { AppState } from '@/types';

export const useURLParams = (
  state: AppState,
  updateState: (updates: Partial<AppState>) => void
) => {
  // Chargement initial des paramètres URL
  useEffect(() => {
    const { id, pattern } = URLService.getURLParams();
    
    if (id || pattern) {
      updateState({
        idValue: id || '',
        patternValue: pattern || '',
        patternVisible: Boolean(pattern)
      });
    }
  }, [updateState]);

  // Détection de la page actuelle ET écoute des changements d'URL
  useEffect(() => {
    const handleURLChange = () => {
      const currentPage = URLService.getCurrentPage();
      const { id, pattern } = URLService.getURLParams();
      
      updateState({ 
        page: currentPage,
        idValue: id || state.idValue,
        patternValue: pattern || state.patternValue,
        patternVisible: Boolean(pattern) || state.patternVisible
      });
    };

    // Écoute des changements d'URL (back/forward, changement manuel)
    window.addEventListener('popstate', handleURLChange);
    
    // Vérification initiale
    handleURLChange();
    
    return () => window.removeEventListener('popstate', handleURLChange);
  }, [updateState]);

  // Mise à jour de l'URL en temps réel (seulement sur la page home)
  useEffect(() => {
    const path = window.location.pathname;
    const isHomePage = path === '/' || path === '/code39-generator/' || path === '/code39-generator';
    
    if (state.page === 'home' && isHomePage) {
      URLService.updateURL(state.idValue, state.patternValue);
    }
  }, [state.idValue, state.patternValue, state.page]);

  // Handlers de navigation
  const navigateToResult = useCallback(() => {
    URLService.navigateToResult(state.idValue, state.patternValue);
    updateState({ page: 'result' });
  }, [state.idValue, state.patternValue, updateState]);

  const navigateToHome = useCallback(() => {
    URLService.navigateToHome();
    updateState({ page: 'home' });
  }, [updateState]);

  return {
    navigateToResult,
    navigateToHome
  };
}; 