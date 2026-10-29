import React from 'react';
import { Target, Zap, Copy } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Consistent Brand Voice',
    description: "Stay true to your brand's personality across every tweet.",
    iconColor: 'bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100',
  },
  {
    icon: Zap,
    title: 'Faster Content Creation',
    description: 'Go from idea to 10 ready-to-post tweets in seconds.',
    iconColor: 'bg-blue-50 text-blue-600 border border-blue-100',
  },
  {
    icon: Copy,
    title: 'One-Click Copy',
    description: 'Easily copy individual tweets or all 10 at once.',
    iconColor: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-6 px-6 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Horizontal 3-Item Card Bar matching Image 2 */}
        <div className="bg-white rounded-3xl border border-gray-100/90 shadow-[0_4px_25px_rgba(15,23,42,0.03)] p-6 sm:p-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-4 ${idx > 0 ? 'pt-5 md:pt-0 md:pl-8' : ''}`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.iconColor}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
