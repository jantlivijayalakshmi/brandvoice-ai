import React from 'react';
import { Sparkles, ArrowDown, Wand2 } from 'lucide-react';

export default function EmptyState() {
  const scrollToForm = () => {
    document.querySelector('#brand-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-14 sm:py-20 px-6 sm:px-8">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-12 text-center border border-gray-100 shadow-[0_4px_30px_rgba(15,23,42,0.03)]">
        <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#6366F1] flex items-center justify-center mx-auto mb-4 border border-purple-100">
          <Sparkles className="w-7 h-7 fill-[#6366F1]/20" />
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2 tracking-tight">
          Ready to Craft Your Brand’s Voice?
        </h3>

        <p className="text-sm text-[#64748B] leading-relaxed mb-6 max-w-md mx-auto">
          Fill in your brand parameters above or try an example preset to generate 10 tailored, categorized tweets.
        </p>

        <button
          type="button"
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 cursor-pointer"
        >
          <Wand2 className="w-4 h-4" />
          <span>Configure Brand Details</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
