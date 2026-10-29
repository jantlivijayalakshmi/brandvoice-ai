import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose?.();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 toast-enter"
    >
      <div className="flex items-center gap-3 bg-[#111827] text-white px-4.5 py-3 rounded-2xl shadow-xl shadow-black/25 border border-gray-700/80 backdrop-blur-md">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
        <span className="text-xs sm:text-sm font-medium tracking-tight pr-1">
          {message}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 p-1 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          aria-label="Dismiss message"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
