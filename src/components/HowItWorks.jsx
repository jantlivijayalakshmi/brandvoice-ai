import React from 'react';
import { PenTool, Sparkles, Send, ArrowRight, Info } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-[1240px] text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1 text-xs font-semibold text-indigo-600 mb-3 border border-indigo-100/60">
          <span>Simple 3-Step Process</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          How It Works
        </h2>

        {/* Subtitle */}
        <p className="mt-2.5 text-sm sm:text-base text-[#64748B] max-w-xl mx-auto">
          Turn your brand details into 10 engaging tweets in just a few clicks.
        </p>

        {/* 3 Step Cards with Arrows */}
        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 text-left shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center text-xs font-bold">
                1
              </span>
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <PenTool className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-1.5">
              Define Your Brand
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Enter your brand details, products, target audience and preferred tone.
            </p>
          </div>

          {/* Connector Arrow 1 */}
          <div className="hidden md:flex items-center justify-center px-1 text-gray-400">
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 text-left shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-xs font-bold">
                2
              </span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-1.5">
              Discover Your Voice
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Our AI analyzes your inputs and creates a brand voice summary.
            </p>
          </div>

          {/* Connector Arrow 2 */}
          <div className="hidden md:flex items-center justify-center px-1 text-gray-400">
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 text-left shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#10B981] text-white flex items-center justify-center text-xs font-bold">
                3
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Send className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-1.5">
              Generate 10 Tweets
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Explore 10 diverse, on-brand tweets in different content styles.
            </p>
          </div>
        </div>

        {/* Demo Disclaimer Info Pill */}
        <div className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-50/70 border border-blue-100/90 px-4 py-1.5 text-xs text-blue-700">
          <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
          <span>This is a frontend demonstration using smart templates. No real AI model is required.</span>
        </div>
      </div>
    </section>
  );
}
