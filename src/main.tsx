import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Suppress ResizeObserver errors globally
window.addEventListener('error', (e) => {
  if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
    e.stopImmediatePropagation();
    e.preventDefault();
    return false;
  }
});

const debounce = <Args extends unknown[]>(func: (...args: Args) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Override ResizeObserver to add debouncing
if (typeof window !== 'undefined' && window.ResizeObserver) {
  const OriginalResizeObserver = window.ResizeObserver;

  window.ResizeObserver = class extends OriginalResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      const debouncedCallback = debounce(callback, 16); // 60fps
      super(debouncedCallback);
    }
  };
}

createRoot(document.getElementById("root")!).render(<App />);
