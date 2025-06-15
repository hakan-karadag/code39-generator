import React from 'react';
import { InputForm } from './InputForm';
import { PatternSelector } from './PatternSelector';
import { ValidateButton } from './ValidateButton';
import { useFooterHeight } from '@/hooks/useFooterHeight';
import { AppState } from '@/types';

interface FormSectionProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
  isSwitchActive: (id: string) => boolean;
  handleSwitchChange: (id: string) => void;
  handleValidate: () => void;
}

export const FormSection: React.FC<FormSectionProps> = ({
  state,
  updateState,
  isSwitchActive,
  handleSwitchChange,
  handleValidate
}) => {
  const footerHeight = useFooterHeight();

  return (
    <div 
      className="p-4 max-w-md mx-auto pt-20 relative z-40 space-y-6"
      style={{ paddingBottom: `${footerHeight}px` }}
    >
      <InputForm state={state} updateState={updateState} />
      <PatternSelector 
        state={state} 
        isSwitchActive={isSwitchActive} 
        handleSwitchChange={handleSwitchChange} 
      />
      <ValidateButton onClick={handleValidate} />
    </div>
  );
}; 