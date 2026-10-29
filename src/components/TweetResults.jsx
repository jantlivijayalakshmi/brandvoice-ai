import React, { useState, useEffect, useCallback } from 'react';
import { Copy, RefreshCw, PlusCircle, CheckCheck, Sparkles } from 'lucide-react';
import TweetCard from './TweetCard';
import BrandVoiceSummary from './BrandVoiceSummary';

export default function TweetResults({
  tweets = [],
  brandName = 'Your Brand',
  onCopyAll,
  onGenerateAgain,
  onStartNew,
  summary,
  copyToClipboard,
  showToast,
}) {
  const [allCopied, setAllCopied] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    if (allCopied) {
      const timer = setTimeout(() => setAllCopied(false), 2200);
      return () => clearTimeout(timer);
    }
  }, [allCopied]);

  useEffect(() => {
    if (copiedIndex !== null) {
      const timer = setTimeout(() => setCopiedIndex(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedIndex]);

  const handleCopyAll = useCallback(() => {
    if (onCopyAll) {
      onCopyAll();
    }
    setAllCopied(true);
  }, [onCopyAll]);

  const handleCopyTweet = useCallback(
    async (text, index) => {
      let success = false;
      if (copyToClipboard) {
        success = await copyToClipboard(text);
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          success = true;
        } catch (e) {
          success = false;
        }
      }

      setCopiedIndex(index);
      if (showToast && success) {
        showToast(`Tweet #${index + 1} copied to clipboard!`);
      }
    },
    [copyToClipboard, showToast]
  );

  if (!tweets || tweets.length === 0) {
    return null;
  }

  return (
    <section id="results" className="py-14 sm:py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Brand Voice Summary Card */}
        {summary && <BrandVoiceSummary summary={summary} brandName={brandName} />}

        {/* Results Header and Actions */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 mb-8 border border-gray-100 shadow-[0_4px_30px_rgba(15,23,42,0.03)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-0.5 text-xs font-semibold text-[#6366F1] border border-purple-100">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>10 Tweets Generated</span>
                </span>
                <span className="text-xs text-[#64748B]">
                  Tailored to {brandName}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Generated Tweets
              </h2>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopyAll}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition-all hover:shadow-md hover:shadow-indigo-500/30 cursor-pointer"
              >
                {allCopied ? (
                  <>
                    <CheckCheck className="h-4 w-4 text-emerald-200" />
                    <span>All 10 Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy All 10 Tweets</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onGenerateAgain}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <RefreshCw className="h-4 w-4 text-[#6366F1]" />
                <span>Generate Again</span>
              </button>

              <button
                type="button"
                onClick={onStartNew}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Start New Brand</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tweets Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {tweets.map((tweet, index) => (
            <TweetCard
              key={tweet.id ?? index}
              tweet={tweet}
              index={index}
              copied={copiedIndex === index}
              onCopy={(text) => handleCopyTweet(text, index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
