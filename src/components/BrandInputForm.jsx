import React, { useState } from 'react';
import {
  Sparkles,
  ChevronDown,
  Loader2,
  Wand2,
  Building2,
  Target,
  Volume2,
  Check,
  AlertCircle,
} from 'lucide-react';

const INDUSTRY_OPTIONS = [
  'Technology',
  'Fashion',
  'Food & Beverage',
  'E-commerce',
  'Education',
  'Fitness',
  'Beauty',
  'Finance',
  'Other',
];

const CAMPAIGN_OBJECTIVES = [
  'Engagement',
  'Product Promotion',
  'Brand Awareness',
  'Product Launch',
  'Educational Content',
  'Community Building',
];

const BRAND_TONES = [
  'Witty',
  'Humorous',
  'Professional',
  'Premium',
  'Friendly',
  'Bold',
  'Minimal',
  'Informative',
  'Inspirational',
];

export default function BrandInputForm({
  formData = {
    brandName: '',
    industry: '',
    campaignObjective: '',
    productDescription: '',
    targetAudience: '',
    brandTones: [],
    samplePosts: '',
  },
  setFormData,
  onGenerate,
  isLoading = false,
}) {
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleToggleTone = (tone) => {
    const currentTones = Array.isArray(formData?.brandTones)
      ? formData.brandTones
      : [];
    const updatedTones = currentTones.includes(tone)
      ? currentTones.filter((t) => t !== tone)
      : [...currentTones, tone];

    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        brandTones: updatedTones,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;

    const newErrors = {};
    if (!formData?.campaignObjective || !formData.campaignObjective.trim()) {
      newErrors.campaignObjective = 'Please select a campaign objective to continue';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const objectiveEl = document.getElementById('campaignObjective');
      if (objectiveEl) {
        objectiveEl.focus();
      }
      return;
    }

    setErrors({});
    if (onGenerate) {
      onGenerate(e);
    }
  };

  return (
    <section id="brand-form" className="py-14 sm:py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100/70 px-4 py-1 text-xs font-semibold text-[#7C3AED] mb-3">
            <Sparkles className="w-3.5 h-3.5 fill-[#7C3AED]/20" />
            <span>AI Tweet Generator Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Define Your Brand
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#64748B]">
            Fill in your brand details and we’ll generate 10 tailored tweets calibrated to your voice.
          </p>
        </div>

        {/* Clean White Card */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 max-w-4xl mx-auto shadow-[0_4px_30px_rgba(15,23,42,0.04)]">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Group 1: Brand Identity */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                <Building2 className="w-4 h-4 text-[#6366F1]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  1. Brand Identity & Audience
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Brand Name */}
                <div>
                  <label
                    htmlFor="brandName"
                    className="block text-xs font-semibold text-[#0F172A] mb-1.5"
                  >
                    Brand Name <span className="text-[#64748B] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    value={formData?.brandName || ''}
                    onChange={(e) => handleChange('brandName', e.target.value)}
                    placeholder="e.g., Nike, Zomato, Apple"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] transition-all"
                  />
                </div>

                {/* Industry / Category */}
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-xs font-semibold text-[#0F172A] mb-1.5"
                  >
                    Industry / Category
                  </label>
                  <div className="relative">
                    <select
                      id="industry"
                      name="industry"
                      value={formData?.industry || ''}
                      onChange={(e) => handleChange('industry', e.target.value)}
                      className="w-full h-11 px-4 pr-10 rounded-xl border border-gray-200 bg-white text-sm text-[#0F172A] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] transition-all"
                    >
                      <option value="">Select industry</option>
                      {INDUSTRY_OPTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Target Audience */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="targetAudience"
                    className="block text-xs font-semibold text-[#0F172A] mb-1.5"
                  >
                    Target Audience
                  </label>
                  <input
                    type="text"
                    id="targetAudience"
                    name="targetAudience"
                    value={formData?.targetAudience || ''}
                    onChange={(e) => handleChange('targetAudience', e.target.value)}
                    placeholder="e.g., Athletes, developers, young professionals, food lovers"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Group 2: Campaign & Offer */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                <Target className="w-4 h-4 text-[#6366F1]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  2. Campaign Objective & Description
                </h3>
              </div>

              <div className="space-y-5">
                {/* Campaign Objective (Required) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="campaignObjective"
                      className="text-xs font-semibold text-[#0F172A]"
                    >
                      Campaign Objective <span className="text-[#6366F1]">*</span>
                    </label>
                    <span className="text-[11px] text-[#64748B]">Required</span>
                  </div>
                  <div className="relative">
                    <select
                      id="campaignObjective"
                      name="campaignObjective"
                      value={formData?.campaignObjective || ''}
                      onChange={(e) => handleChange('campaignObjective', e.target.value)}
                      className={`w-full h-11 px-4 pr-10 rounded-xl border ${
                        errors.campaignObjective
                          ? 'border-red-500 focus:ring-red-400/20 focus:border-red-500'
                          : 'border-gray-200'
                      } bg-white text-sm text-[#0F172A] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] transition-all`}
                    >
                      <option value="">Select campaign objective</option>
                      {CAMPAIGN_OBJECTIVES.map((objective) => (
                        <option key={objective} value={objective}>
                          {objective}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.campaignObjective && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.campaignObjective}
                    </p>
                  )}
                </div>

                {/* Product or Service Description */}
                <div>
                  <label
                    htmlFor="productDescription"
                    className="block text-xs font-semibold text-[#0F172A] mb-1.5"
                  >
                    Product or Service Description
                  </label>
                  <textarea
                    id="productDescription"
                    name="productDescription"
                    rows={3}
                    value={formData?.productDescription || ''}
                    onChange={(e) => handleChange('productDescription', e.target.value)}
                    placeholder="Describe your products, services, and unique selling points..."
                    className="w-full p-3.5 rounded-xl border border-gray-200 bg-white text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] transition-all resize-y"
                  />
                </div>
              </div>
            </div>

            {/* Group 3: Voice & Tones */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                <Volume2 className="w-4 h-4 text-[#6366F1]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  3. Brand Tone
                </h3>
              </div>

              {/* Tone Chips */}
              <div className="mb-5">
                <div className="flex flex-wrap gap-2.5">
                  {BRAND_TONES.map((tone) => {
                    const isSelected = (formData?.brandTones || []).includes(tone);
                    return (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => handleToggleTone(tone)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#6366F1] text-white border-[#6366F1] shadow-xs shadow-indigo-500/20'
                            : 'bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-gray-50'
                        }`}
                        style={{
                          backgroundColor: isSelected ? '#6366F1' : '#FFFFFF',
                          borderColor: isSelected ? '#6366F1' : '#E2E8F0',
                          color: isSelected ? '#FFFFFF' : '#334155',
                        }}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        <span>{tone}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sample Posts */}
              <div>
                <label
                  htmlFor="samplePosts"
                  className="block text-xs font-semibold text-[#0F172A] mb-1.5"
                >
                  Sample Brand Posts <span className="text-[#64748B] font-normal">(Optional)</span>
                </label>
                <textarea
                  id="samplePosts"
                  name="samplePosts"
                  rows={2}
                  value={formData?.samplePosts || ''}
                  onChange={(e) => handleChange('samplePosts', e.target.value)}
                  placeholder="Paste examples of your brand's existing social media posts..."
                  className="w-full p-3.5 rounded-xl border border-gray-200 bg-white text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] transition-all resize-y"
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-xs font-semibold text-[#6366F1]">
                <Sparkles className="w-3.5 h-3.5" />
                10 tweets per generation
              </span>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>Generate 10 Tweets</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
