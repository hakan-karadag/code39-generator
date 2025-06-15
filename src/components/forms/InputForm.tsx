import React from 'react';
import { AppState } from '@/types';
import { ToggleButton } from './ToggleButton';

interface InputFormProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ state, updateState }) => {
  return (
    <div className="flex-1">
      {/* Input ID */}
      <div className="space-y-2 mb-1">
        <div className="flex justify-between items-center">
          <label className="text-sm text-white">ID</label>
          {state.showIdError && (
            <div className="text-red-400 text-xs animate-pulse">
              Invalid ID: Use only 0-9, A-Z, -.$ /+% (max 1000)*
            </div>
          )}
        </div>
        <input
          type="text"
          value={state.idValue}
          onChange={(e) => updateState({ idValue: e.target.value.slice(0, 1000) })}
          onFocus={() => updateState({ isInputFocused: true })}
          onBlur={() => updateState({ isInputFocused: false })}
          placeholder="Enter your ID (0-9, A-Z, -.$+/%)"
          className="w-full bg-white/10 backdrop-blur-xl border-0 rounded-3xl px-6 py-4 text-white placeholder-gray-400 hover:bg-white/20 focus:bg-white/20 focus:outline-none transition-all shadow-lg"
          maxLength={1000}
        />
        <div className="text-xs text-gray-500 text-right">{state.idValue.length}/1000</div>
      </div>

      {/* Input Pattern */}
      <div className={`transition-all duration-300 overflow-hidden ${
        state.patternVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="space-y-2 pt-1">
          <label className="text-sm text-white">PATTERN</label>
          <input
            type="text"
            value={state.patternValue}
            onChange={(e) => updateState({ patternValue: e.target.value.slice(0, 100) })}
            onFocus={() => updateState({ isInputFocused: true })}
            onBlur={() => updateState({ isInputFocused: false })}
            placeholder="Enter pattern (CODE39 chars + <ID>)"
            className="w-full bg-white/10 backdrop-blur-xl border-0 rounded-3xl px-6 py-4 text-white placeholder-gray-400 hover:bg-white/20 focus:bg-white/20 focus:outline-none transition-all shadow-lg"
            maxLength={1000}
          />
          {state.showPatternError && (
            <div className="text-red-400 text-sm mt-1 animate-pulse">
              Invalid pattern: Use CODE39 chars + &lt;ID&gt; (max 100 chars)*
            </div>
          )}
          <div className="text-xs text-gray-500 text-right">{state.patternValue.length}/1000</div>
        </div>
      </div>

      {/* Toggle Pattern */}
      <ToggleButton 
        patternVisible={state.patternVisible} 
        onToggle={() => updateState({ patternVisible: !state.patternVisible })} 
      />
    </div>
  );
}; 