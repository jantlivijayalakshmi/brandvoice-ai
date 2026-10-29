import React from 'react';
import { Loader2, Sparkles, Brain, Wand2 } from 'lucide-react';

export default function LoadingOverlay() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-md mx-auto saas-card bg-white p-8 sm:p-10 text-center border border-[#E5E7EB] shadow-xl shadow-purple-900/5">
        {/* Pulsing AI Generator Icon */}
        <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#4F46E5] opacity-20 blur-md animate-pulse" />
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center text-white shadow-md shadow-[#7C3AED]/30">
            <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-[#111827] mb-2 tracking-tight">
          Crafting Your 10 Tweets
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-[#64748B] leading-relaxed mb-6">
          Synthesizing your brand personality, tone parameters, and campaign objective into authentic social content...
        </p>

        {/* Step checklist preview */}
        <div className="space-y-2.5 text-left bg-[#FAFAFF] p-3.5 rounded-xl border border-[#E5E7EB] text-xs">
          <div className="flex items-center gap-2 text-[#7C3AED] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-ping" />
            <span>Analyzing voice archetype & audience</span>
          </div>
          <div className="flex items-center gap-2 text-[#64748B]">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <span>Distributing engagement, promo, and hook angles</span>
          </div>
          <div className="flex items-center gap-2 text-[#64748B]">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <span>Validating character counts & readability</span>
          </div>
        </div>

        {/* Mini progress dots */}
        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#7C3AED]"
              style={{
                animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
