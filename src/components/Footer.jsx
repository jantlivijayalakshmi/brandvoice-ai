import React from 'react';
import { Sparkles, Heart, Wand2 } from 'lucide-react';

const quickLinks = [
  { label: 'Home', targetId: 'hero' },
  { label: 'How It Works', targetId: 'how-it-works' },
  { label: 'Features', targetId: 'features' },
  { label: 'Examples', targetId: 'examples' },
  { label: 'Generate Tweets', targetId: 'brand-form' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-[#64748B] pt-14 pb-10 border-t border-gray-100 mt-12">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-gray-100">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#6366F1] fill-[#6366F1]/20" />
              <span className="text-lg font-bold text-[#0F172A] tracking-tight">
                BrandVoice <span className="text-[#6366F1]">AI</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-sm mb-5">
              Turn your brand personality and campaign goals into 10 cohesive, high-converting tweets in seconds. Calibrated for modern social media strategies.
            </p>

            <button
              onClick={() => scrollTo('brand-form')}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] px-5 py-2 text-xs font-semibold text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Start Generating</span>
            </button>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.targetId)}
                    className="text-xs sm:text-sm text-[#64748B] hover:text-[#6366F1] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Stack & Badges */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-4">
              Product Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-3">
              Built with React, Vite, Tailwind CSS, and Lucide icons for instantaneous, responsive content generation.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['10-Tweet Batches', 'Persona Summary', 'One-Click Copy', 'Mobile Friendly'].map((badge) => (
                <span
                  key={badge}
                  className="inline-block bg-gray-50 text-gray-600 text-[11px] font-semibold rounded-full px-2.5 py-0.5 border border-gray-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} BrandVoice AI. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for modern creators & brands with{' '}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
