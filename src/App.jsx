import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ExampleBrands from './components/ExampleBrands';
import BrandInputForm from './components/BrandInputForm';
import TweetResults from './components/TweetResults';
import Footer from './components/Footer';
import Toast from './components/Toast';
import EmptyState from './components/EmptyState';
import LoadingOverlay from './components/LoadingOverlay';
import { generateTweets, generateBrandVoiceSummary, brandPresets } from './data/sampleTweets';

/** Default empty form state */
const initialFormData = {
  brandName: '',
  industry: '',
  campaignObjective: '',
  productDescription: '',
  targetAudience: '',
  brandTones: [],
  samplePosts: '',
};

/**
 * Main Application Component
 * Orchestrates state management, tweet generation, and clipboard operations.
 */
export default function App() {
  // Form state
  const [formData, setFormData] = useState({ ...initialFormData });

  // Generated results
  const [tweets, setTweets] = useState([]);
  const [summary, setSummary] = useState(null);

  // UI states
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });

  /**
   * Show a toast notification with the given message.
   */
  const showToast = useCallback((message) => {
    setToast({ visible: true, message });
  }, []);

  /**
   * Hide the toast notification.
   */
  const hideToast = useCallback(() => {
    setToast({ visible: false, message: '' });
  }, []);

  /**
   * Copy text to clipboard using the Clipboard API.
   * Falls back to document.execCommand for older browsers.
   */
  const copyToClipboard = useCallback(async (text) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      return true;
    } catch (err) {
      console.error('Failed to copy:', err);
      return false;
    }
  }, []);

  /**
   * Handle tweet generation.
   * Validates the form, runs the local generator with a simulated delay,
   * and displays the results.
   */
  const handleGenerate = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    setTweets([]);
    setSummary(null);

    // Simulate a brief processing delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 1800));

    try {
      const generatedTweets = generateTweets(formData);
      const voiceSummary = generateBrandVoiceSummary(formData);

      setTweets(generatedTweets);
      setSummary(voiceSummary);

      // Scroll to results after a brief moment
      setTimeout(() => {
        document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Generation error:', error);
      showToast('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [formData, isLoading, showToast]);

  /**
   * Handle selecting a brand preset (Nike or Zomato).
   * Populates the form and scrolls to the form section.
   */
  const handleSelectPreset = useCallback((presetName) => {
    const preset = brandPresets[presetName];
    if (preset) {
      setFormData({ ...preset });
      setTweets([]);
      setSummary(null);

      // Scroll to the form
      setTimeout(() => {
        document.querySelector('#brand-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  /**
   * Copy all 10 tweets in a numbered format.
   */
  const handleCopyAll = useCallback(async () => {
    if (tweets.length === 0) return;

    const allText = tweets
      .map((tweet, i) => `${i + 1}. ${tweet.text}`)
      .join('\n\n');

    const success = await copyToClipboard(allText);
    if (success) {
      showToast('All 10 tweets copied to clipboard!');
    } else {
      showToast('Failed to copy. Please try again.');
    }
  }, [tweets, copyToClipboard, showToast]);

  /**
   * Generate a new set of tweets with the same inputs.
   */
  const handleGenerateAgain = useCallback(() => {
    handleGenerate();
  }, [handleGenerate]);

  /**
   * Clear all results and reset the form for a new brand.
   */
  const handleStartNew = useCallback(() => {
    setFormData({ ...initialFormData });
    setTweets([]);
    setSummary(null);

    // Scroll to the form
    setTimeout(() => {
      document.querySelector('#brand-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    showToast('Form cleared. Ready for a new brand!');
  }, [showToast]);

  return (
    <div className="min-h-screen bg-[#FAFAFE] text-[#0F172A] flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust and Features Section */}
        <Features />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. Example Brand Presets */}
        <ExampleBrands onSelectPreset={handleSelectPreset} />

        {/* 6. Brand Input Form */}
        <BrandInputForm
          formData={formData}
          setFormData={setFormData}
          onGenerate={handleGenerate}
          isLoading={isLoading}
        />

        {/* 7. Loading / Empty / Results Section */}
        {isLoading ? (
          <LoadingOverlay />
        ) : tweets.length > 0 ? (
          <TweetResults
            tweets={tweets}
            brandName={formData.brandName || 'Your Brand'}
            onCopyAll={handleCopyAll}
            onGenerateAgain={handleGenerateAgain}
            onStartNew={handleStartNew}
            summary={summary}
            copyToClipboard={copyToClipboard}
            showToast={showToast}
          />
        ) : (
          <EmptyState />
        )}
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onClose={hideToast}
      />
    </div>
  );
}
