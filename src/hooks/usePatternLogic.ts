import { useCallback, useMemo } from 'react';
import { patterns } from '@/constants/patterns';
import { AppState } from '@/types';

export const usePatternLogic = (
  state: AppState,
  updateState: (updates: Partial<AppState>) => void
) => {
  // Logique métier - mémorisée pour éviter les recalculs
  const getActiveSwitches = useMemo(() => {
    if (!state.patternValue) return ['none'];
    const matches = patterns.filter(p => p.pattern === state.patternValue && p.pattern !== '');
    return matches.length > 0 ? matches.map(p => p.id) : ['none'];
  }, [state.patternValue]);

  const isSwitchActive = useCallback((id: string) => getActiveSwitches.includes(id), [getActiveSwitches]);

  const handleSwitchChange = useCallback((id: string) => {
    const pattern = patterns.find(p => p.id === id)?.pattern || '';
    updateState({ patternValue: pattern });
  }, [updateState]);

  return {
    getActiveSwitches,
    isSwitchActive,
    handleSwitchChange
  };
}; 