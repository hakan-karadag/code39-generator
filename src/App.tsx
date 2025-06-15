import { useAppState } from '@/hooks/useAppState';
import { AnimatedBackground } from '@/components/layout/AnimatedBackground';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FormSection } from '@/components/forms/FormSection';
import { BarcodeDisplay } from '@/components/display/BarcodeDisplay';

const Code39Generator = () => {
  const { state, updateState, handleValidate, handleBackToHome, isSwitchActive, handleSwitchChange } = useAppState();

  if (state.page === 'result') {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <AnimatedBackground />
        <Header state={state} updateState={updateState} />
        <BarcodeDisplay state={state} handleBackToHome={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header state={state} updateState={updateState} />
      <div className="relative z-10 min-h-screen">
        {state.isInputFocused && (
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => {
              if (document.activeElement) {
                (document.activeElement as HTMLElement).blur();
              }
              updateState({ isInputFocused: false });
            }}
          />
        )}
        <FormSection 
          state={state}
          updateState={updateState}
          isSwitchActive={isSwitchActive}
          handleSwitchChange={handleSwitchChange}
          handleValidate={handleValidate}
        />
      </div>
      <Footer />
      </div>
  );
};

export default Code39Generator;