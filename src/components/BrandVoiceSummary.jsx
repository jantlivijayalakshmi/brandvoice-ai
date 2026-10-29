import React from 'react';
import { User, Palette, Target, BookOpen, PenTool, Sparkles } from 'lucide-react';

const summaryItems = [
  { key: 'personality', label: 'Brand Personality', Icon: User, color: 'bg-blue-50 text-blue-600' },
  { key: 'toneOfVoice', label: 'Tone of Voice', Icon: Palette, color: 'bg-purple-50 text-purple-600' },
  { key: 'targetAudience', label: 'Target Audience', Icon: Target, color: 'bg-indigo-50 text-indigo-600' },
  { key: 'contentThemes', label: 'Content Themes', Icon: BookOpen, color: 'bg-purple-50 text-purple-600' },
  { key: 'writingStyle', label: 'Writing Style', Icon: PenTool, color: 'bg-blue-50 text-blue-600' },
];

export default function BrandVoiceSummary({ summary, brandName = 'Your Brand' }) {
  if (!summary) return null;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 mb-8 border border-gray-100 shadow-[0_4px_30px_rgba(15,23,42,0.03)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-gray-100 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#6366F1] flex items-center justify-center text-white font-bold text-xs">
            B
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0F172A]">
              {brandName} Voice Summary
            </h3>
            <p className="text-xs text-[#64748B]">Synthesized personality parameters</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 border border-emerald-100">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active Brand Model
        </span>
      </div>

      {/* Grid of Attributes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {summaryItems.map(({ key, label, Icon, color }) => {
          const value = summary?.[key];
          if (value === undefined || value === null) return null;

          return (
            <div
              key={key}
              className="rounded-2xl border border-gray-100 bg-[#FAFAFE] p-4 flex items-start gap-3"
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${color}`}
              >
                <Icon className="w-4 h-4" />
              </div>

              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block mb-0.5">
                  {label}
                </span>

                {key === 'contentThemes' ? (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {(Array.isArray(value) ? value : [value]).map((theme, i) => (
                      <span
                        key={i}
                        className="inline-block bg-white text-[#6366F1] text-[11px] font-semibold rounded-full px-2.5 py-0.5 border border-indigo-100 shadow-2xs"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm text-[#0F172A] font-semibold leading-snug">
                    {value}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
