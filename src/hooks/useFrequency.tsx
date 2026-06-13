/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type FrequencyMode = 'void' | 'ascended';

interface FrequencyContextType {
  mode: FrequencyMode;
  setMode: (mode: FrequencyMode) => void;
}

const FrequencyContext = createContext<FrequencyContextType>({
  mode: 'void',
  setMode: () => {},
});

const STORAGE_KEY = 'cosmic-frequency-mode';

// Map modes to their HTML class names
const MODE_CLASSES: Record<FrequencyMode, string | null> = {
  void: null,
  ascended: 'shifted-frequency-active',
};

export const FrequencyProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<FrequencyMode>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as FrequencyMode | null;
    // Backwards-compat: old boolean toggle
    if (stored === null) {
      const oldShifted = localStorage.getItem('cosmic-frequency-shifted');
      return oldShifted === 'true' ? 'ascended' : 'void';
    }
    if (stored === 'void' || stored === 'ascended') return stored;
    return 'void';
  });

  useEffect(() => {
    // Remove all mode classes first
    Object.values(MODE_CLASSES).forEach((cls) => {
      if (cls) document.documentElement.classList.remove(cls);
    });
    // Apply the current one
    const cls = MODE_CLASSES[mode];
    if (cls) document.documentElement.classList.add(cls);

    localStorage.setItem(STORAGE_KEY, mode);
    // Also keep old key in sync for backwards compat
    localStorage.setItem('cosmic-frequency-shifted', mode === 'ascended' ? 'true' : 'false');
  }, [mode]);

  const setMode = (m: FrequencyMode) => setModeState(m);

  return (
    <FrequencyContext.Provider value={{ mode, setMode }}>
      {children}
    </FrequencyContext.Provider>
  );
};

export const useFrequency = () => useContext(FrequencyContext);
