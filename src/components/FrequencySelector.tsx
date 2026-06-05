import React from 'react';
import { useFrequency, FrequencyMode } from '@/hooks/useFrequency';

const MODES: { mode: FrequencyMode; label: string; title: string }[] = [
  { mode: 'void',      label: '🌑', title: '432Hz · Void (Dark Cosmic)' },
  { mode: 'ascended',  label: '☀️', title: '888Hz · Ascended (Solar Gold)' },
  { mode: 'celestial', label: '🌕', title: '963Hz · Celestial (Light Realm)' },
];

const FrequencySelector = () => {
  const { mode, setMode } = useFrequency();

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-border/70 bg-card/60 backdrop-blur-md p-0.5 shadow-cosmic"
      title="Shift Frequency"
    >
      {MODES.map(({ mode: m, label, title }) => (
        <button
          key={m}
          title={title}
          aria-label={title}
          onClick={() => setMode(m)}
          className={`
            relative w-8 h-8 rounded-full flex items-center justify-center text-sm
            transition-all duration-300 ease-in-out
            ${mode === m
              ? 'bg-cosmic-gradient shadow-md scale-110 z-10'
              : 'hover:bg-muted/60 opacity-60 hover:opacity-100'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FrequencySelector;
