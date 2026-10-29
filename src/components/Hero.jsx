import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  User,
  MessageSquare,
  Target,
  FolderOpen,
  PenTool,
  Heart,
  MoreHorizontal,
} from 'lucide-react';

export default function Hero() {
  const [copiedId, setCopiedId] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopy = (text, id) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="hero" className="relative overflow-visible pt-12 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Soft Ambiance & Gradient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 right-0 w-[580px] h-[580px] bg-gradient-to-bl from-purple-200/40 via-indigo-100/35 to-blue-200/30 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-28 w-[380px] h-[380px] bg-purple-100/35 rounded-full blur-2xl -z-10"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ─── Left Column: Headline & Action ─── */}
          <div className="lg:col-span-6 text-left flex flex-col items-start">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F3E8FF] px-4 py-1.5 text-xs font-semibold text-[#7C3AED] mb-6">
              <Sparkles className="w-3.5 h-3.5 fill-[#7C3AED]/20" />
              <span>AI-Powered Social Media Content Generator</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
              Your Brand’s Voice.{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#6366F1]">10 Tweets.</span> Instantly.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-lg">
              Turn your brand personality and campaign goals into 10 cohesive,
              high-converting tweets. Authentic tone matching, zero generic fluff,
              ready to copy and post.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('brand-form')}
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-white/20" />
                <span>Generate Tweets</span>
              </button>

              <button
                onClick={() => scrollTo('how-it-works')}
                className="inline-flex items-center gap-2.5 rounded-full bg-white border border-gray-200 px-7 py-3.5 text-sm font-semibold text-[#0F172A] shadow-xs transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-[#0F172A] text-[#0F172A]" />
                <span>How It Works</span>
              </button>
            </div>
          </div>

          {/* ─── Right Column: Dashboard Preview + Floating Cards ─── */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end xl:pr-24">
            {/* The Main Dashboard Preview Card */}
            <div className="relative z-10 w-full max-w-[480px] bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              {/* Card Window Top Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#6366F1] flex items-center justify-center text-white text-xs font-bold">
                    B
                  </div>
                  <span className="text-sm font-bold text-[#0F172A]">
                    BrandVoice <span className="text-[#6366F1]">AI</span>
                  </span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>

              {/* Inside 2-Column Flex Grid */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                {/* Left Inner Column: Brand Voice Summary */}
                <div className="sm:w-[185px] shrink-0 sm:pr-3 sm:border-r border-gray-100">
                  <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-[#0F172A]">
                    <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
                    <span>Brand Voice Summary</span>
                  </div>

                  <div className="space-y-3">
                    {/* Item 1: Personality */}
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#0F172A]">Personality</div>
                        <div className="text-[10px] text-[#64748B]">Innovative & Friendly</div>
                      </div>
                    </div>

                    {/* Item 2: Tone */}
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#0F172A]">Tone</div>
                        <div className="text-[10px] text-[#64748B]">Conversational & Engaging</div>
                      </div>
                    </div>

                    {/* Item 3: Target Audience */}
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Target className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#0F172A]">Target Audience</div>
                        <div className="text-[10px] text-[#64748B]">Young Professionals</div>
                      </div>
                    </div>

                    {/* Item 4: Content Themes */}
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                        <FolderOpen className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#0F172A]">Content Themes</div>
                        <div className="text-[10px] text-[#64748B]">Productivity, Innovation, Lifestyle</div>
                      </div>
                    </div>

                    {/* Item 5: Writing Style */}
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <PenTool className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#0F172A]">Writing Style</div>
                        <div className="text-[10px] text-[#64748B]">Short, Clear, Authentic</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Inner Column: Generated Tweets */}
                <div className="flex-1 min-w-0 sm:pl-1">
                  <div className="text-xs font-semibold text-[#64748B] mb-2.5">
                    Generated Tweets
                  </div>

                  <div className="space-y-2.5">
                    {/* Tweet 1 */}
                    <div className="p-2.5 rounded-xl border border-gray-100 bg-[#FAFAFE]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-[#0F172A]">1</span>
                        <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/60">
                          Engagement
                        </span>
                      </div>
                      <p className="text-[11px] text-[#0F172A] leading-snug">
                        Great ideas don't always come from big meetings. Sometimes they come from a quiet moment. ✨
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400">
                        <span>112/280</span>
                        <button
                          onClick={() =>
                            handleCopy(
                              "Great ideas don't always come from big meetings. Sometimes they come from a quiet moment. ✨",
                              'h1'
                            )
                          }
                          className="px-2 py-0.5 rounded-full border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 text-[10px] font-medium cursor-pointer"
                        >
                          {copiedId === 'h1' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>

                    {/* Tweet 2 */}
                    <div className="p-2.5 rounded-xl border border-gray-100 bg-[#FAFAFE]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-[#0F172A]">2</span>
                        <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/60">
                          Promotional
                        </span>
                      </div>
                      <p className="text-[11px] text-[#0F172A] leading-snug">
                        Built for the dreamers, the doers, and everyone in between.
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400">
                        <span>98/280</span>
                        <button
                          onClick={() =>
                            handleCopy(
                              'Built for the dreamers, the doers, and everyone in between.',
                              'h2'
                            )
                          }
                          className="px-2 py-0.5 rounded-full border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 text-[10px] font-medium cursor-pointer"
                        >
                          {copiedId === 'h2' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>

                    {/* Tweet 3 */}
                    <div className="p-2.5 rounded-xl border border-gray-100 bg-[#FAFAFE]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-[#0F172A]">3</span>
                        <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/60">
                          Informative
                        </span>
                      </div>
                      <p className="text-[11px] text-[#0F172A] leading-snug">
                        Small steps + consistent effort = big results. Here's how to stay on track...
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400">
                        <span>126/280</span>
                        <button
                          onClick={() =>
                            handleCopy(
                              "Small steps + consistent effort = big results. Here's how to stay on track...",
                              'h3'
                            )
                          }
                          className="px-2 py-0.5 rounded-full border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 text-[10px] font-medium cursor-pointer"
                        >
                          {copiedId === 'h3' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Floating Rotated Twitter Cards on Right (positioned outside main card) ─── */}
            {/* Top Floating Card */}
            <div className="hidden xl:block absolute right-0 top-6 z-20 w-44 bg-white rounded-2xl shadow-xl shadow-indigo-950/10 p-3.5 border border-gray-100/90 rotate-6 transition-transform hover:rotate-3 duration-300">
              <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold mb-2">
                𝕏
              </div>
              <p className="text-xs font-semibold text-[#0F172A] leading-snug">
                Good content builds real connections.
              </p>
              <div className="mt-2.5 flex items-center gap-1.5 text-xs text-[#64748B]">
                <Heart className="w-3.5 h-3.5 fill-[#6366F1] text-[#6366F1]" />
                <span className="text-[11px] font-medium">142</span>
              </div>
            </div>

            {/* Bottom Floating Card */}
            <div className="hidden xl:block absolute right-0 bottom-6 z-20 w-44 bg-white rounded-2xl shadow-xl shadow-indigo-950/10 p-3.5 border border-gray-100/90 -rotate-4 transition-transform hover:rotate-0 duration-300">
              <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold mb-2">
                𝕏
              </div>
              <p className="text-xs font-semibold text-[#0F172A] leading-snug">
                Your brand.<br />Your story.<br />10 tweets.
              </p>
              <div className="mt-2.5 flex items-center gap-1.5 text-xs text-[#64748B]">
                <Heart className="w-3.5 h-3.5 fill-[#6366F1] text-[#6366F1]" />
                <span className="text-[11px] font-medium">98</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
