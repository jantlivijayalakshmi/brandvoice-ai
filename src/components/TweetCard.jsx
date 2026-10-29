import React from 'react';
import { Copy, Check, Hash, Lightbulb } from 'lucide-react';

const categoryPillMap = {
  Promotional: 'bg-blue-50 text-blue-600 border-blue-100/80',
  Engagement: 'bg-indigo-50 text-[#6366F1] border-indigo-100/80',
  Humorous: 'bg-emerald-50 text-emerald-600 border-emerald-100/80',
  Informative: 'bg-sky-50 text-sky-600 border-sky-100/80',
  Community: 'bg-purple-50 text-purple-600 border-purple-100/80',
  Inspirational: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100/80',
};

export default function TweetCard({ tweet, index, onCopy, copied }) {
  const { category, text, explanation, charCount } = tweet;

  const pillClass =
    categoryPillMap[category] || 'bg-blue-50 text-blue-600 border-blue-100/80';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md transition-shadow relative">
      <div>
        {/* Top Header: Number, Category Pill, Copy Button */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-gray-100 text-[#0F172A] flex items-center justify-center text-xs font-bold">
              {index + 1}
            </span>

            {category && (
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${pillClass}`}
              >
                {category}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => onCopy?.(text)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
            aria-label={copied ? 'Tweet copied' : 'Copy tweet'}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-gray-500" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Tweet Copy */}
        <p className="text-sm font-normal text-[#0F172A] leading-relaxed my-2 select-text">
          {text}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
        {explanation && (
          <div className="flex items-start gap-1.5 text-xs text-[#64748B] leading-snug">
            <Lightbulb className="w-3.5 h-3.5 text-[#6366F1] shrink-0 mt-0.5" />
            <span>{explanation}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-[11px] text-gray-400">
          <span>{charCount || text.length}/280</span>
          <span>X / Twitter</span>
        </div>
      </div>
    </div>
  );
}
