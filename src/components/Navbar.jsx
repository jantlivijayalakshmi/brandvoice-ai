import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', targetId: 'hero', active: true },
  { label: 'How It Works', targetId: 'how-it-works' },
  { label: 'Features', targetId: 'features' },
  { label: 'Examples', targetId: 'examples' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  const scrollTo = (id) => {
    setActiveTab(id);
    const el = document.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100/80">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* ---- Brand Logo ---- */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 cursor-pointer text-left focus:outline-none"
            aria-label="BrandVoice AI"
          >
            <div className="flex items-center justify-center text-[#6366F1]">
              <Sparkles className="w-6 h-6 fill-[#6366F1]/20 stroke-[#6366F1]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0F172A]">
              BrandVoice <span className="text-[#6366F1]">AI</span>
            </span>
          </button>

          {/* ---- Desktop Navigation Links ---- */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, targetId }) => {
              const isActive = activeTab === targetId;
              return (
                <div key={targetId} className="relative py-2">
                  <button
                    onClick={() => scrollTo(targetId)}
                    className={`text-sm font-medium transition-colors cursor-pointer ${
                      isActive ? 'text-[#6366F1]' : 'text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    {label}
                  </button>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#6366F1] rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* ---- Desktop Action Button ---- */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollTo('brand-form')}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition-all duration-200 hover:shadow-md hover:shadow-indigo-500/30 hover:opacity-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white/20 stroke-white" />
              <span>Start Generating</span>
            </button>
          </div>

          {/* ---- Mobile Hamburger Toggle ---- */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-2 text-[#64748B] hover:text-[#0F172A] rounded-lg cursor-pointer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ---- Mobile Drawer ---- */}
      {mobileOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-6 py-4 shadow-lg">
          <div className="space-y-2">
            {navLinks.map(({ label, targetId }) => (
              <button
                key={targetId}
                onClick={() => scrollTo(targetId)}
                className="block w-full text-left py-2 text-base font-medium text-[#475569] hover:text-[#6366F1]"
              >
                {label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => scrollTo('brand-form')}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Generating</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
