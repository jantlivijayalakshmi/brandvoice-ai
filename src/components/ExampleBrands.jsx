import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ExampleBrands({ onSelectPreset }) {
  return (
    <section id="examples" className="py-14 sm:py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* ─── Left Header Column ─── */}
          <div className="lg:col-span-3 text-left">
            <span className="inline-block bg-[#8B5CF6] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 shadow-xs">
              Try an Example Brand
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              See It in Action
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Use these demo brands to quickly test the application and see how different brands get unique tweet styles.
            </p>
          </div>

          {/* ─── Middle 2 Brand Cards ─── */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Nike Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-base shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                      <path d="M21.707 5.293c-.27-.27-.7-.3-1.004-.07L5.86 16.275c-1.37 1.05-3.324.97-4.606-.21-.86-.79-1.254-1.99-.958-3.08.312-1.15 1.258-2.02 2.38-2.2l12.78-2.04c.38-.06.66-.38.66-.77s-.28-.71-.66-.77L3.676 9.245C1.84 9.54.34 10.94.02 12.8c-.46 1.7.14 3.52 1.48 4.75 1.94 1.78 4.88 1.9 6.94.32L21.637 6.3c.3-.23.34-.66.07-1.007z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#0F172A] tracking-wide">
                      NIKE
                    </h3>
                    <p className="text-[11px] text-[#64748B]">
                      Sportswear · Engagement
                    </p>
                  </div>
                </div>

                {/* Details list */}
                <div className="space-y-1.5 text-xs text-[#64748B] mb-5">
                  <p>
                    <span className="font-semibold text-[#0F172A]">Tone:</span>{' '}
                    Bold, Inspirational, Energetic
                  </p>
                  <p>
                    <span className="font-semibold text-[#0F172A]">Audience:</span>{' '}
                    Athletes & fitness enthusiasts
                  </p>
                  <p className="line-clamp-2">
                    <span className="font-semibold text-[#0F172A]">Products:</span>{' '}
                    Running shoes, sportswear, fitness products
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectPreset('nike')}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-[#8B5CF6] px-4 py-2 text-xs font-bold text-[#8B5CF6] hover:bg-purple-50 transition-colors cursor-pointer"
              >
                <span>Try Nike</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Zomato Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E23744] text-white flex items-center justify-center font-black text-sm italic shrink-0">
                    z
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#0F172A] tracking-wide">
                      ZOMATO
                    </h3>
                    <p className="text-[11px] text-[#64748B]">
                      Food Delivery · Engagement
                    </p>
                  </div>
                </div>

                {/* Details list */}
                <div className="space-y-1.5 text-xs text-[#64748B] mb-5">
                  <p>
                    <span className="font-semibold text-[#0F172A]">Tone:</span>{' '}
                    Witty, Humorous, Conversational
                  </p>
                  <p>
                    <span className="font-semibold text-[#0F172A]">Audience:</span>{' '}
                    Food lovers & young professionals
                  </p>
                  <p className="line-clamp-2">
                    <span className="font-semibold text-[#0F172A]">Products:</span>{' '}
                    Food discovery & delivery services
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectPreset('zomato')}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-[#8B5CF6] px-4 py-2 text-xs font-bold text-[#8B5CF6] hover:bg-purple-50 transition-colors cursor-pointer"
              >
                <span>Try Zomato</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ─── Right Handwritten Sketch Note (from Image 2) ─── */}
          <div className="lg:col-span-3 hidden lg:flex items-center justify-center pl-4">
            <div className="relative font-handwritten -rotate-6 text-[#8B5CF6] text-2xl leading-snug select-none">
              <div className="absolute -top-3 -left-4 text-xs opacity-60">✦</div>
              <p className="font-bold">Different brands.</p>
              <p className="font-bold">Different voices.</p>
              <p className="font-bold underline decoration-wavy decoration-[#8B5CF6]/40">
                Same powerful tool.
              </p>
              <div className="absolute -bottom-2 -right-4 text-sm opacity-60">✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
