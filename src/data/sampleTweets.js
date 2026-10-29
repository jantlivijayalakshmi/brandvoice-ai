/**
 * @file sampleTweets.js
 * Comprehensive tweet generation logic, template pools, brand voice summary,
 * and brand presets for BrandVoice AI.
 */

// ============================================================================
// BRAND PRESETS
// ============================================================================

/**
 * Pre-configured brand voice presets for quick loading and demonstration.
 */
export const brandPresets = {
  nike: {
    brandName: 'Nike',
    industry: 'Fashion',
    campaignObjective: 'Engagement',
    productDescription: 'Running shoes, sportswear, and fitness products.',
    targetAudience: 'Athletes and fitness enthusiasts',
    brandTones: ['Bold', 'Inspirational'],
    samplePosts: '',
  },
  zomato: {
    brandName: 'Zomato',
    industry: 'Food & Beverage',
    campaignObjective: 'Engagement',
    productDescription: 'Food discovery and food delivery services.',
    targetAudience: 'Food lovers and young professionals',
    brandTones: ['Witty', 'Humorous', 'Friendly'],
    samplePosts: '',
  },
};

// ============================================================================
// CATEGORY DEFINITIONS & OBJECTIVE DISTRIBUTIONS
// ============================================================================

/**
 * Standard tweet categories supported across all brand generations.
 */
export const CATEGORIES = [
  'Engagement',
  'Promotional',
  'Humorous',
  'Informative',
  'Community',
  'Inspirational',
];

/**
 * Category distributions for exactly 10 tweets based on campaign objective.
 * Each distribution provides a balanced mix while anchoring to the campaign's core goal.
 */
export const OBJECTIVE_CATEGORY_DISTRIBUTIONS = {
  'engagement': [
    'Engagement',
    'Engagement',
    'Engagement',
    'Humorous',
    'Humorous',
    'Community',
    'Community',
    'Inspirational',
    'Informative',
    'Promotional',
  ],
  'product-promotion': [
    'Promotional',
    'Promotional',
    'Promotional',
    'Engagement',
    'Engagement',
    'Informative',
    'Informative',
    'Inspirational',
    'Community',
    'Humorous',
  ],
  'brand-awareness': [
    'Inspirational',
    'Inspirational',
    'Inspirational',
    'Engagement',
    'Engagement',
    'Informative',
    'Informative',
    'Promotional',
    'Community',
    'Humorous',
  ],
  'product-launch': [
    'Promotional',
    'Promotional',
    'Promotional',
    'Informative',
    'Informative',
    'Engagement',
    'Engagement',
    'Community',
    'Inspirational',
    'Humorous',
  ],
  'educational-content': [
    'Informative',
    'Informative',
    'Informative',
    'Engagement',
    'Engagement',
    'Community',
    'Community',
    'Inspirational',
    'Promotional',
    'Humorous',
  ],
  'community-building': [
    'Community',
    'Community',
    'Community',
    'Engagement',
    'Engagement',
    'Humorous',
    'Humorous',
    'Inspirational',
    'Informative',
    'Promotional',
  ],
  'default': [
    'Engagement',
    'Engagement',
    'Promotional',
    'Promotional',
    'Community',
    'Community',
    'Informative',
    'Informative',
    'Inspirational',
    'Humorous',
  ],
};

// ============================================================================
// TONE TEMPLATE POOLS (9 DISTINCT TONES)
// ============================================================================

/**
 * Template pool organized by brand tones.
 * Includes witty, humorous, professional, premium, friendly, bold, minimal, informative, and inspirational.
 */
export const toneTemplatePools = {
  witty: [
    {
      category: 'Engagement',
      template: "Hot take: half the meetings this week could have been replaced by {product}. What's one industry debate your team refuses to let go of?",
      tone: 'witty',
    },
    {
      category: 'Humorous',
      template: "Entering {industry} thinking it's all smooth sailing vs. reality: 17 browser tabs open and relying on {brand} to keep it together.",
      tone: 'witty',
    },
    {
      category: 'Inspirational',
      template: "The best ideas in {industry} never come from playing it safe. They come from someone curious enough to ask: 'Why are we still doing it this way?'",
      tone: 'witty',
    },
    {
      category: 'Informative',
      template: "Quick sanity check: if you're still doing things the manual way, consider this your official permission slip to switch to {product}.",
      tone: 'witty',
    },
    {
      category: 'Community',
      template: "Tag a peer in {industry} who deserves an award just for keeping their composure through this week's deadlines.",
      tone: 'witty',
    },
    {
      category: 'Promotional',
      template: "We could write a 10-page whitepaper on why {brand} is built differently, or you could experience {product} and tell us we were right.",
      tone: 'witty',
    },
    {
      category: 'Engagement',
      template: "There are two types of people in {industry}: those who over-plan every step, and those who trust {brand} to handle the details. Which one are you?",
      tone: 'witty',
    },
    {
      category: 'Humorous',
      template: "Our social team promised not to mention {product} today, but our product team made it too good to keep quiet.",
      tone: 'witty',
    },
  ],

  humorous: [
    {
      category: 'Humorous',
      template: "Nobody:\nLiterally nobody:\nUs at {brand}: here's another reason why {product} is going to change your entire week.",
      tone: 'humorous',
    },
    {
      category: 'Engagement',
      template: "Tell us your biggest pet peeve in {industry} without actually naming it. We'll start in the replies.",
      tone: 'humorous',
    },
    {
      category: 'Community',
      template: "Shoutout to every member of {audience} who opened their to-do list today, took one look, and immediately made a fresh cup of coffee instead.",
      tone: 'humorous',
    },
    {
      category: 'Humorous',
      template: "Current mood: pretending we have everything under control until {product} steps in and actually solves it.",
      tone: 'humorous',
    },
    {
      category: 'Promotional',
      template: "Side effects of choosing {brand}: unprompted sighs of relief, smoother days, and wondering why you waited so long for {product}.",
      tone: 'humorous',
    },
    {
      category: 'Informative',
      template: "A gentle reminder that doing things the hard way doesn't give you extra bonus points in {industry}. Let {product} do the heavy lifting.",
      tone: 'humorous',
    },
    {
      category: 'Inspirational',
      template: "Remember: every legend in {industry} started as someone who had no idea what they were doing and pressed the wrong button at least once.",
      tone: 'humorous',
    },
    {
      category: 'Humorous',
      template: "You can't buy happiness, but you can choose {brand}, and honestly our community says that's pretty close.",
      tone: 'humorous',
    },
  ],

  professional: [
    {
      category: 'Informative',
      template: "In an evolving {industry} landscape, precision and dependability matter. {brand} delivers {product} engineered for sustained operational excellence.",
      tone: 'professional',
    },
    {
      category: 'Promotional',
      template: "Designed with purpose, built for impact. Discover how {product} from {brand} empowers modern workflows for forward-thinking {audience}.",
      tone: 'professional',
    },
    {
      category: 'Engagement',
      template: "As industry standards shift, what is the single highest strategic priority for your team this quarter?",
      tone: 'professional',
    },
    {
      category: 'Inspirational',
      template: "Sustainable progress is not accidental. It is the natural result of disciplined execution, rigorous standards, and an unwavering commitment to quality.",
      tone: 'professional',
    },
    {
      category: 'Community',
      template: "Proud to collaborate with dedicated {audience}. Your insight and ongoing partnership continue to guide every milestone at {brand}.",
      tone: 'professional',
    },
    {
      category: 'Informative',
      template: "Three core tenets that define {brand}: thoughtful architecture, user-centric reliability, and measurable value for {audience}.",
      tone: 'professional',
    },
    {
      category: 'Promotional',
      template: "Elevate your benchmarks. Experience how {brand} is setting new standards across {industry} with {product}.",
      tone: 'professional',
    },
    {
      category: 'Engagement',
      template: "Strategic execution in {industry} requires balancing short-term velocity with long-term resilience. How is your team navigating this balance?",
      tone: 'professional',
    },
  ],

  premium: [
    {
      category: 'Inspirational',
      template: "Excellence is never an afterthought; it is an enduring standard. {brand} embodies this philosophy in every facet of {product}.",
      tone: 'premium',
    },
    {
      category: 'Promotional',
      template: "Refined craft. Uncompromising standards. Discover the art of {product}, curated by {brand} for discerning {audience}.",
      tone: 'premium',
    },
    {
      category: 'Informative',
      template: "True luxury is found in the quiet details you rarely have to think about because they perform so effortlessly. That is the promise of {brand}.",
      tone: 'premium',
    },
    {
      category: 'Engagement',
      template: "When compromise is off the table, what is the singular hallmark you look for when evaluating quality in {industry}?",
      tone: 'premium',
    },
    {
      category: 'Community',
      template: "To the creators, tastemakers, and leaders who elevate their craft each day: {brand} is honored to accompany your path.",
      tone: 'premium',
    },
    {
      category: 'Promotional',
      template: "Every curve, material, and touchpoint considered. Step into the distinction of {product} by {brand}.",
      tone: 'premium',
    },
    {
      category: 'Inspirational',
      template: "Timeless design outlasts fleeting trends. Build with deliberate intention; invest in what endures.",
      tone: 'premium',
    },
    {
      category: 'Informative',
      template: "Mastery occurs where patience meets uncompromising intention. Inside the meticulous engineering of {brand}.",
      tone: 'premium',
    },
  ],

  friendly: [
    {
      category: 'Community',
      template: "Friendly reminder from your friends at {brand}: take a deep breath, stay hydrated, and know that you are doing fantastic work today!",
      tone: 'friendly',
    },
    {
      category: 'Engagement',
      template: "Hey {audience}! What is one win—big or small—that you celebrated this week? Drop it below so we can cheer you on!",
      tone: 'friendly',
    },
    {
      category: 'Promotional',
      template: "We poured our hearts into building {product}. Our biggest hope is that it brings a little extra ease and delight to your daily routine!",
      tone: 'friendly',
    },
    {
      category: 'Humorous',
      template: "Consider this your friendly, official nudge from {brand} to step away from your screen and take that well-deserved five-minute walk.",
      tone: 'friendly',
    },
    {
      category: 'Informative',
      template: "A quick tip for {audience}: steady, consistent steps always beat sporadic sprints. Give yourself credit for showing up today!",
      tone: 'friendly',
    },
    {
      category: 'Inspirational',
      template: "You don't need everything figured out all at once. Just focus on taking the next kind, thoughtful step. We're in your corner at {brand}!",
      tone: 'friendly',
    },
    {
      category: 'Community',
      template: "Our absolute favorite part of building {brand}? Getting to connect with genuine people like you. Thank you for being part of our story.",
      tone: 'friendly',
    },
    {
      category: 'Engagement',
      template: "Morning routine check-in: are you team coffee, team tea, or team 'let me wake up before speaking'? Tell {brand} in the replies!",
      tone: 'friendly',
    },
  ],

  bold: [
    {
      category: 'Inspirational',
      template: "Stop waiting for the 'right time'. The right time is the moment you decide to act. Move forward with {brand}.",
      tone: 'bold',
    },
    {
      category: 'Promotional',
      template: "We didn't design {product} to blend into the background. We built it to define the category. Experience {brand}.",
      tone: 'bold',
    },
    {
      category: 'Engagement',
      template: "What is the single boldest move you've made in {industry} that completely redefined your trajectory? Speak up below.",
      tone: 'bold',
    },
    {
      category: 'Informative',
      template: "Comfort zones produce average results. Disruption requires conviction and sharper tools. That is why {brand} refuses to settle.",
      tone: 'bold',
    },
    {
      category: 'Community',
      template: "Built for those who don't ask for permission to innovate. To every member of our community pushing boundaries: keep breaking molds.",
      tone: 'bold',
    },
    {
      category: 'Inspirational',
      template: "They said it couldn't be done in {industry}. That was all the motivation {brand} needed to make it happen.",
      tone: 'bold',
    },
    {
      category: 'Promotional',
      template: "Unapologetic performance. Zero compromises. Discover what happens when {brand} rethinks {product}.",
      tone: 'bold',
    },
    {
      category: 'Humorous',
      template: "Playing it safe never wrote history. Take the leap, do the work, and let {brand} back you up.",
      tone: 'bold',
    },
  ],

  minimal: [
    {
      category: 'Inspirational',
      template: "Simplicity is strength. Focus on what truly moves the needle.",
      tone: 'minimal',
    },
    {
      category: 'Promotional',
      template: "Less noise. More substance. Introducing {product} by {brand}.",
      tone: 'minimal',
    },
    {
      category: 'Informative',
      template: "Clarity over complexity. Always.",
      tone: 'minimal',
    },
    {
      category: 'Engagement',
      template: "One word to describe your main goal in {industry} this week. Go.",
      tone: 'minimal',
    },
    {
      category: 'Community',
      template: "To the dedicated craftspeople who let the work speak for itself: {brand} salutes you.",
      tone: 'minimal',
    },
    {
      category: 'Promotional',
      template: "Essential. Functional. Distinct. Crafted by {brand}.",
      tone: 'minimal',
    },
    {
      category: 'Inspirational',
      template: "Cut the excess. Master the fundamentals. Build to endure.",
      tone: 'minimal',
    },
    {
      category: 'Humorous',
      template: "No buzzwords. Just {product} that actually gets the job done.",
      tone: 'minimal',
    },
  ],

  informative: [
    {
      category: 'Informative',
      template: "Did you know? Thoughtful adjustments in workflow can yield significant gains in {industry}. Here is how {brand} approaches purposeful design.",
      tone: 'informative',
    },
    {
      category: 'Informative',
      template: "A breakdown of how {product} is specifically structured to solve the everyday friction points experienced by {audience}.",
      tone: 'informative',
    },
    {
      category: 'Engagement',
      template: "What is one widespread myth about {industry} that you wish more people would question?",
      tone: 'informative',
    },
    {
      category: 'Community',
      template: "Knowledge grows when shared openly. Here is a key observation our team learned while refining {product} this season.",
      tone: 'informative',
    },
    {
      category: 'Promotional',
      template: "Built with intention: a closer look at how {brand} translates user research into actionable features in {product}.",
      tone: 'informative',
    },
    {
      category: 'Inspirational',
      template: "Curiosity is the engine of genuine innovation. Keep challenging assumptions and testing fresh perspectives.",
      tone: 'informative',
    },
    {
      category: 'Informative',
      template: "Three fundamentals every member of {audience} should keep in mind: consistency in craft, adaptability in mindset, and reliable tools from {brand}.",
      tone: 'informative',
    },
    {
      category: 'Engagement',
      template: "If you could share one foundational lesson with someone just starting out in {industry}, what would it be?",
      tone: 'informative',
    },
  ],

  inspirational: [
    {
      category: 'Inspirational',
      template: "Greatness is rarely born from comfort. It is built in the quiet, unseen moments of perseverance. Keep showing up.",
      tone: 'inspirational',
    },
    {
      category: 'Inspirational',
      template: "Your only real benchmark is who you were yesterday. Push past your limits and keep expanding what's possible with {brand}.",
      tone: 'inspirational',
    },
    {
      category: 'Community',
      template: "Surround yourself with people who hold you to a higher standard. Deeply grateful for the energy of the {brand} community.",
      tone: 'inspirational',
    },
    {
      category: 'Engagement',
      template: "What was the initial spark that inspired your journey in {industry}? Share your origin story below.",
      tone: 'inspirational',
    },
    {
      category: 'Promotional',
      template: "Empowering {audience} to unlock their full potential. Discover how {product} helps you reach your next milestone.",
      tone: 'inspirational',
    },
    {
      category: 'Informative',
      template: "Every breakthrough began with a single decision to act despite uncertainty. Trust the process.",
      tone: 'inspirational',
    },
    {
      category: 'Inspirational',
      template: "The terrain ahead may be challenging, but every intentional stride builds momentum. Stand tall and trust your preparation.",
      tone: 'inspirational',
    },
    {
      category: 'Humorous',
      template: "Believe in your vision as fiercely as our team believes in rigorously testing every inch of {product}.",
      tone: 'inspirational',
    },
  ],
};

// ============================================================================
// OBJECTIVE TEMPLATE POOLS (6 DISTINCT CAMPAIGN OBJECTIVES)
// ============================================================================

/**
 * Template pool organized by campaign objectives.
 * Includes engagement, product-promotion, brand-awareness, product-launch,
 * educational-content, and community-building.
 */
export const objectiveTemplatePools = {
  'engagement': [
    {
      category: 'Engagement',
      template: "Question for {audience}: What is the single most valuable daily habit you have cultivated in {industry}?",
      objective: 'engagement',
    },
    {
      category: 'Engagement',
      template: "Fill in the blank: The most rewarding aspect of {industry} is _________. Best responses will get a shoutout from {brand}!",
      objective: 'engagement',
    },
    {
      category: 'Humorous',
      template: "Describe your current workload in three emojis. {brand} will reply with our official diagnosis and remedy.",
      objective: 'engagement',
    },
    {
      category: 'Community',
      template: "Drop your latest project or milestone below! Let's celebrate the incredible work being done by {audience} today.",
      objective: 'engagement',
    },
    {
      category: 'Engagement',
      template: "Unpopular opinion time: What is one trend in {industry} that everyone seems to love, but you are not convinced by?",
      objective: 'engagement',
    },
    {
      category: 'Promotional',
      template: "Have you had a chance to explore {product} yet? What element has made the biggest difference in your routine?",
      objective: 'engagement',
    },
    {
      category: 'Inspirational',
      template: "What is one ambitious milestone you are determined to hit before this quarter wraps? Let's stay accountable together.",
      objective: 'engagement',
    },
    {
      category: 'Informative',
      template: "Quick poll: When solving complex problems in {industry}, do you lean towards rapid iteration or in-depth preparation? Why?",
      objective: 'engagement',
    },
  ],

  'product-promotion': [
    {
      category: 'Promotional',
      template: "Ready to elevate your everyday standard? See how {product} from {brand} is thoughtfully crafted for {audience}.",
      objective: 'product-promotion',
    },
    {
      category: 'Promotional',
      template: "Engineered for real-world impact. Explore how {brand} combines durability, precision, and performance in {product}.",
      objective: 'product-promotion',
    },
    {
      category: 'Informative',
      template: "What sets {product} apart? It begins by listening directly to {audience} and engineering solutions that actually endure.",
      objective: 'product-promotion',
    },
    {
      category: 'Engagement',
      template: "Which specific feature of {product} are you most curious about? Our team is answering questions in the replies today!",
      objective: 'product-promotion',
    },
    {
      category: 'Inspirational',
      template: "When you upgrade your toolkit, you expand what you are capable of achieving. Experience the impact of {product} with {brand}.",
      objective: 'product-promotion',
    },
    {
      category: 'Community',
      template: "To everyone who has made {product} an indispensable part of their routine: thank you for trusting {brand} on your journey.",
      objective: 'product-promotion',
    },
    {
      category: 'Humorous',
      template: "Life is simply too short to wrestle with frustrating tools. Treat yourself to {product} by {brand} and feel the difference.",
      objective: 'product-promotion',
    },
    {
      category: 'Promotional',
      template: "Thoughtfully conceived. Masterfully produced. Learn why {audience} rely on {brand} for premium {product}.",
      objective: 'product-promotion',
    },
  ],

  'brand-awareness': [
    {
      category: 'Inspirational',
      template: "At {brand}, our guiding mission is simple: empower {audience} to excel without having to make compromises.",
      objective: 'brand-awareness',
    },
    {
      category: 'Informative',
      template: "Who is {brand}? We are innovators, thinkers, and builders committed to redefining possibilities within {industry}.",
      objective: 'brand-awareness',
    },
    {
      category: 'Engagement',
      template: "What values matter most to you when choosing a brand in {industry}? Authenticity, craftsmanship, or bold innovation?",
      objective: 'brand-awareness',
    },
    {
      category: 'Community',
      template: "A brand is only as meaningful as the people it stands alongside. We are honored to champion {audience} around the world.",
      objective: 'brand-awareness',
    },
    {
      category: 'Promotional',
      template: "From our earliest sketches to {product}, our commitment remains firm: purpose-driven quality that stands the test of time.",
      objective: 'brand-awareness',
    },
    {
      category: 'Humorous',
      template: "You might recognize {brand} for {product}, but did you know our entire philosophy is built on an obsession with getting the details right?",
      objective: 'brand-awareness',
    },
    {
      category: 'Inspirational',
      template: "When you stand firmly for quality, every single detail speaks. Welcome to the ethos of {brand}.",
      objective: 'brand-awareness',
    },
    {
      category: 'Informative',
      template: "Behind every release we create lies a foundational conviction: {industry} deserves human-centric, thoughtful design.",
      objective: 'brand-awareness',
    },
  ],

  'product-launch': [
    {
      category: 'Promotional',
      template: "The next chapter is officially here. Introducing {product} by {brand}—developed from the ground up to empower {audience}.",
      objective: 'product-launch',
    },
    {
      category: 'Informative',
      template: "The wait is over. Here is everything you need to know about the design, materials, and capabilities of the all-new {product}.",
      objective: 'product-launch',
    },
    {
      category: 'Engagement',
      template: "The launch is live! Which capability of {product} are you most eager to put to the test first?",
      objective: 'product-launch',
    },
    {
      category: 'Community',
      template: "A heartfelt thank you to our early community testers who provided feedback that directly shaped the final form of {product}.",
      objective: 'product-launch',
    },
    {
      category: 'Inspirational',
      template: "Months of research, testing, and meticulous refinement have culminated in this moment. Welcome to the future of {brand}.",
      objective: 'product-launch',
    },
    {
      category: 'Humorous',
      template: "Our development team hasn't rested much lately, but seeing {product} out in the world makes every cup of coffee completely worth it.",
      objective: 'product-launch',
    },
    {
      category: 'Promotional',
      template: "Crafted for what's ahead. Discover the performance and ingenuity behind the new {product} from {brand}.",
      objective: 'product-launch',
    },
    {
      category: 'Engagement',
      template: "First impressions are everything: let us know what you think of {product} in the replies below!",
      objective: 'product-launch',
    },
  ],

  'educational-content': [
    {
      category: 'Informative',
      template: "Three core principles for sustained success in {industry}: 1) Master the fundamentals. 2) Solicit honest feedback. 3) Rely on purpose-built tools like {product}.",
      objective: 'educational-content',
    },
    {
      category: 'Informative',
      template: "Common mistake in {industry}: attempting to solve everything at once. Focus on one high-leverage friction point today.",
      objective: 'educational-content',
    },
    {
      category: 'Engagement',
      template: "What is the single most transformative piece of advice you have ever received regarding {industry}?",
      objective: 'educational-content',
    },
    {
      category: 'Community',
      template: "Insight grows when shared across the community. Here is a valuable lesson we documented while working closely with {audience}.",
      objective: 'educational-content',
    },
    {
      category: 'Inspirational',
      template: "Never underestimate how much compounding knowledge you gain simply by staying curious and consistent day after day.",
      objective: 'educational-content',
    },
    {
      category: 'Promotional',
      template: "Curious how {product} operates under demanding conditions? Here is how our architecture supports the daily workflows of {audience}.",
      objective: 'educational-content',
    },
    {
      category: 'Humorous',
      template: "Standard education gave us theory, but navigating {industry} taught us that having the right tools on hand makes all the real difference.",
      objective: 'educational-content',
    },
    {
      category: 'Informative',
      template: "A practical guide for {audience}: how to structure your daily workflow to maximize clarity and minimize unnecessary fatigue.",
      objective: 'educational-content',
    },
  ],

  'community-building': [
    {
      category: 'Community',
      template: "Community spotlight: celebrating the remarkable initiatives {audience} are building alongside {brand}.",
      objective: 'community-building',
    },
    {
      category: 'Community',
      template: "You inspire every single thing we create at {brand}. What is one challenge you would love to see our team tackle next?",
      objective: 'community-building',
    },
    {
      category: 'Engagement',
      template: "Let's connect our network! Where in the world are you tuning in from today? Drop your city or flag below!",
      objective: 'community-building',
    },
    {
      category: 'Humorous',
      template: "Spotting someone else who relies on {product} in the wild is an instant connection. No words needed, just mutual respect.",
      objective: 'community-building',
    },
    {
      category: 'Inspirational',
      template: "Individual effort achieves milestones, but collective passion builds a movement. Honored to stand alongside the {brand} family.",
      objective: 'community-building',
    },
    {
      category: 'Promotional',
      template: "Co-created with our community. Learn how direct insights from {audience} helped refine the latest iteration of {product}.",
      objective: 'community-building',
    },
    {
      category: 'Informative',
      template: "Milestone reached: bringing together thousands of {audience} across {industry}. Thank you for making {brand} part of your journey.",
      objective: 'community-building',
    },
    {
      category: 'Engagement',
      template: "What is one hurdle our community can help you brainstorm or resolve this week? Share in the replies below!",
      objective: 'community-building',
    },
  ],
};

// ============================================================================
// HELPER UTILITIES
// ============================================================================

/**
 * Normalizes input keys (e.g. "Product Promotion" -> "product-promotion").
 * @param {string} str
 * @returns {string}
 */
export function normalizeKey(str) {
  if (!str || typeof str !== 'string') return '';
  return str.toLowerCase().trim().replace(/[\s_]+/g, '-');
}

/**
 * Cleans product description for clean embedding in sentence templates.
 * Removes trailing periods, excess punctuation, and handles empty values gracefully.
 * @param {string} text
 * @returns {string}
 */
export function cleanProductDescription(text) {
  if (!text || typeof text !== 'string') return 'our products';
  let cleaned = text.trim();
  // Remove trailing period or semicolon
  cleaned = cleaned.replace(/[.;,]+$/, '');
  return cleaned || 'our products';
}

/**
 * Replaces placeholder tokens in a tweet template string.
 * Tokens: {brand}, {audience}, {product}, {industry}
 * Ensures total length does not exceed 280 characters.
 *
 * @param {string} template
 * @param {{ brand: string, audience: string, product: string, industry: string }} data
 * @returns {string}
 */
export function replacePlaceholders(template, data) {
  if (!template || typeof template !== 'string') return '';

  let text = template
    .replace(/\{brand\}/g, data.brand || 'Your Brand')
    .replace(/\{audience\}/g, data.audience || 'our community')
    .replace(/\{product\}/g, data.product || 'our products')
    .replace(/\{industry\}/g, data.industry || 'our space');

  // Clean double spaces and trim whitespace
  text = text.replace(/[ \t]+/g, ' ').trim();

  // Enforce Twitter 280 character limit with clean truncation if necessary
  if (text.length > 280) {
    text = text.slice(0, 277).trim() + '...';
  }

  return text;
}

/**
 * Generates an articulate, contextual rationale explaining why a tweet was generated
 * and how it reflects the brand voice, tone, and objective.
 *
 * @param {string} category
 * @param {string} primaryTone
 * @param {string} objective
 * @param {string} brand
 * @param {string} audience
 * @returns {string}
 */
export function generateTweetExplanation(category, primaryTone, objective, brand, audience) {
  const toneLabel = primaryTone ? primaryTone.toLowerCase() : 'authentic';
  const cleanAudience = audience || 'target audience';
  const cleanBrand = brand || 'the brand';

  switch (category) {
    case 'Engagement':
      return `Employs a ${toneLabel} approach with open-ended conversation starters to invite ${cleanAudience} into dialogue, driving organic comments and algorithmic reach aligned with ${objective}.`;
    case 'Promotional':
      return `Spotlights ${cleanBrand}'s core offerings with ${toneLabel} language, highlighting value and craft for ${cleanAudience} without relying on aggressive claims or artificial discounts.`;
    case 'Humorous':
      return `Uses lighthearted, ${toneLabel} observational wit to build emotional rapport with ${cleanAudience}, turning everyday industry realities into relatable, shareable brand moments.`;
    case 'Informative':
      return `Delivers clear, value-first industry perspective in a ${toneLabel} tone, establishing ${cleanBrand} as a credible, thoughtful authority for ${cleanAudience}.`;
    case 'Community':
      return `Fosters belonging and mutual appreciation across ${cleanAudience}, reinforcing ${cleanBrand}'s commitment to championing its community through ${toneLabel} messaging.`;
    case 'Inspirational':
      return `Rallies ${cleanAudience} around shared ambition, determination, and values, leveraging a ${toneLabel} voice to cultivate lasting brand affinity and inspiration.`;
    default:
      return `Tailored with a ${toneLabel} voice to advance the ${objective} objective while engaging ${cleanAudience} authentically.`;
  }
}

/**
 * Simple pseudo-random shuffle for variety across generation calls.
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============================================================================
// MAIN GENERATION LOGIC: generateTweets
// ============================================================================

/**
 * Generates an array of exactly 10 tweet objects based on brand form data.
 *
 * Each returned object has:
 * - id: unique string identifier
 * - category: 'Engagement' | 'Promotional' | 'Humorous' | 'Informative' | 'Community' | 'Inspirational'
 * - text: formatted tweet under 280 characters with all placeholders replaced
 * - explanation: contextual rationale for why this tweet fits the tone and objective
 * - charCount: length of the generated tweet text
 *
 * @param {Object} formData
 * @param {string} [formData.brandName] - Name of the brand (fallback 'Your Brand')
 * @param {string} [formData.industry] - Industry or category (e.g. 'Fashion', 'SaaS')
 * @param {string} [formData.campaignObjective] - Campaign objective (e.g. 'Engagement', 'Product Launch')
 * @param {string} [formData.productDescription] - Brief description of products or services
 * @param {string} [formData.targetAudience] - Target audience persona
 * @param {string[]} [formData.brandTones] - Array of selected brand tones
 * @param {string} [formData.samplePosts] - Optional sample posts provided by user
 * @returns {Array<{ id: string, category: string, text: string, explanation: string, charCount: number }>}
 */
export function generateTweets(formData = {}) {
  // 1. Sanitize and provide fallbacks for formData fields
  const brandName = (formData.brandName && formData.brandName.trim()) ? formData.brandName.trim() : 'Your Brand';
  const industry = (formData.industry && formData.industry.trim()) ? formData.industry.trim() : 'our industry';
  const targetAudience = (formData.targetAudience && formData.targetAudience.trim()) ? formData.targetAudience.trim() : 'our community';
  const productDescription = cleanProductDescription(formData.productDescription);

  const rawObjective = formData.campaignObjective || 'Engagement';
  const normalizedObjective = normalizeKey(rawObjective);

  // Normalize brand tones array
  let rawTones = Array.isArray(formData.brandTones) ? formData.brandTones : [];
  if (rawTones.length === 0) {
    rawTones = ['Friendly', 'Professional'];
  }
  const normalizedTones = rawTones.map(t => normalizeKey(t));
  const primaryTone = rawTones[0] || 'Authentic';

  const placeholderData = {
    brand: brandName,
    audience: targetAudience,
    product: productDescription,
    industry: industry,
  };

  // 2. Determine 10-slot category sequence based on objective
  const distribution = OBJECTIVE_CATEGORY_DISTRIBUTIONS[normalizedObjective] || OBJECTIVE_CATEGORY_DISTRIBUTIONS['default'];

  // 3. Assemble all candidate templates from tones and objectives
  /** @type {Array<{ category: string, template: string, tone?: string, objective?: string, source: string }>} */
  const allTemplates = [];

  // Add from tone pools
  Object.keys(toneTemplatePools).forEach(toneKey => {
    const list = toneTemplatePools[toneKey] || [];
    list.forEach(item => {
      allTemplates.push({
        category: item.category,
        template: item.template,
        tone: item.tone,
        source: `tone-${toneKey}`,
      });
    });
  });

  // Add from objective pools
  Object.keys(objectiveTemplatePools).forEach(objKey => {
    const list = objectiveTemplatePools[objKey] || [];
    list.forEach(item => {
      allTemplates.push({
        category: item.category,
        template: item.template,
        objective: item.objective,
        source: `objective-${objKey}`,
      });
    });
  });

  // Track used templates to prevent duplicates across the 10 slots
  const usedTemplates = new Set();
  const generatedTweets = [];

  // 4. Select a template for each of the 10 category slots
  for (let i = 0; i < distribution.length; i++) {
    const targetCategory = distribution[i];

    // Filter available candidates matching targetCategory and not yet used
    const candidates = allTemplates.filter(item =>
      item.category === targetCategory && !usedTemplates.has(item.template)
    );

    // Score candidates based on match to user's selected tones and objective
    const scoredCandidates = candidates.map(cand => {
      let score = 0;
      // Tone match bonus
      if (cand.tone && normalizedTones.includes(normalizeKey(cand.tone))) {
        score += 5;
        // Higher bonus for primary tone
        if (normalizeKey(cand.tone) === normalizedTones[0]) {
          score += 3;
        }
      }
      // Objective match bonus
      if (cand.objective && normalizeKey(cand.objective) === normalizedObjective) {
        score += 6;
      }
      // Add slight randomness to ensure variety across repeated generations
      score += Math.random() * 2;
      return { candidate: cand, score };
    });

    // Sort by score descending
    scoredCandidates.sort((a, b) => b.score - a.score);

    let chosenTemplate = null;
    let chosenTone = primaryTone;

    if (scoredCandidates.length > 0) {
      const topChoice = scoredCandidates[0].candidate;
      chosenTemplate = topChoice.template;
      if (topChoice.tone) {
        chosenTone = topChoice.tone;
      }
    } else {
      // Fallback if all candidates for this category were used
      const fallbackList = allTemplates.filter(item => item.category === targetCategory);
      if (fallbackList.length > 0) {
        const randomItem = fallbackList[Math.floor(Math.random() * fallbackList.length)];
        chosenTemplate = randomItem.template;
        if (randomItem.tone) chosenTone = randomItem.tone;
      } else {
        // Safe ultimate fallback
        chosenTemplate = "Crafted with dedication by {brand} for {audience}. Discover what makes {product} distinct in {industry}.";
      }
    }

    usedTemplates.add(chosenTemplate);

    // Replace tokens and clamp length
    const tweetText = replacePlaceholders(chosenTemplate, placeholderData);
    const explanation = generateTweetExplanation(
      targetCategory,
      chosenTone,
      rawObjective,
      brandName,
      targetAudience
    );

    generatedTweets.push({
      id: `tweet-${i + 1}`,
      category: targetCategory,
      text: tweetText,
      explanation: explanation,
      charCount: tweetText.length,
    });
  }

  return generatedTweets;
}

// ============================================================================
// BRAND VOICE SUMMARY GENERATOR: generateBrandVoiceSummary
// ============================================================================

/**
 * Infers a comprehensive Brand Voice Summary based on the provided form data.
 *
 * Returns an object with:
 * - personality: string describing the brand's persona archetype
 * - toneOfVoice: string describing the primary voice dynamics
 * - targetAudience: string summarizing the target audience profile
 * - contentThemes: array of strings indicating core pillar themes
 * - writingStyle: string describing the tactical writing rules and style
 *
 * @param {Object} formData
 * @param {string} [formData.brandName]
 * @param {string} [formData.industry]
 * @param {string} [formData.campaignObjective]
 * @param {string} [formData.productDescription]
 * @param {string} [formData.targetAudience]
 * @param {string[]} [formData.brandTones]
 * @param {string} [formData.samplePosts]
 * @returns {{
 *   personality: string,
 *   toneOfVoice: string,
 *   targetAudience: string,
 *   contentThemes: string[],
 *   writingStyle: string
 * }}
 */
export function generateBrandVoiceSummary(formData = {}) {
  const brandName = (formData.brandName && formData.brandName.trim()) ? formData.brandName.trim() : 'Your Brand';
  const industry = (formData.industry && formData.industry.trim()) ? formData.industry.trim() : 'General Industry';
  const objective = formData.campaignObjective || 'Engagement';
  const audience = (formData.targetAudience && formData.targetAudience.trim()) ? formData.targetAudience.trim() : 'modern consumers and enthusiasts';
  const product = cleanProductDescription(formData.productDescription);

  const rawTones = Array.isArray(formData.brandTones) && formData.brandTones.length > 0
    ? formData.brandTones
    : ['Friendly', 'Professional'];

  const normalizedTones = rawTones.map(t => normalizeKey(t));

  // Determine Personality Archetype
  let personality = '';
  if (normalizedTones.includes('bold') && normalizedTones.includes('inspirational')) {
    personality = `A dynamic, high-conviction catalyst driven by athletic grit, boundary-pushing ambition, and an unrelenting passion to inspire greatness.`;
  } else if (normalizedTones.includes('witty') || normalizedTones.includes('humorous')) {
    personality = `A charismatic, pop-culture-aware conversationalist with clever observational humor, making everyday moments delightfully relatable.`;
  } else if (normalizedTones.includes('premium')) {
    personality = `A discerning, understated artisan devoted to timeless elegance, uncompromising craftsmanship, and quiet confidence.`;
  } else if (normalizedTones.includes('professional')) {
    personality = `An authoritative, forward-thinking industry leader that pairs strategic clarity with dependable execution and measurable value.`;
  } else if (normalizedTones.includes('minimal')) {
    personality = `A clean, focused purist that values clarity over noise, letting deliberate design and essential utility speak for themselves.`;
  } else if (normalizedTones.includes('friendly')) {
    personality = `A warm, approachable companion who prioritizes authentic connection, helpfulness, and uplifting encouragement.`;
  } else {
    personality = `A purpose-driven, user-first innovator dedicated to delivering exceptional value and fostering genuine relationships within ${industry}.`;
  }

  // Determine Tone of Voice descriptor
  const tonesJoined = rawTones.join(' & ');
  let toneOfVoice = `${tonesJoined} — `;
  if (normalizedTones.includes('bold')) {
    toneOfVoice += 'Direct, resolute, and energetic, challenging the status quo without corporate hesitation.';
  } else if (normalizedTones.includes('witty') || normalizedTones.includes('humorous')) {
    toneOfVoice += 'Playful, punchy, and self-aware, creating instant smiles while remaining rooted in community relevance.';
  } else if (normalizedTones.includes('premium')) {
    toneOfVoice += 'Sophisticated, poised, and articulate, conveying quality through deliberate word choice and refined cadence.';
  } else if (normalizedTones.includes('minimal')) {
    toneOfVoice += 'Succinct, understated, and powerful, stripping away fluff to deliver maximum signal per sentence.';
  } else if (normalizedTones.includes('inspirational')) {
    toneOfVoice += 'Empowering, motivational, and forward-looking, inspiring action through uplifting narratives.';
  } else {
    toneOfVoice += 'Approachable, clear, and trustworthy, speaking peer-to-peer with transparency and purpose.';
  }

  // Determine Target Audience Profile
  const targetAudience = `${audience} who value reliable quality and authentic brand communication in the ${industry} space.`;

  // Infer Content Themes based on Industry, Objective, and Product
  const contentThemes = [
    `Craftsmanship & Utility: Spotlighting the real-world value of ${product}`,
    `Community Culture: Celebrating the milestones and everyday stories of ${audience}`,
    `Industry Perspectives: Thoughtful reflections and dialogue on current ${industry} dynamics`,
    `Campaign Milestones: Rallying momentum around ${objective.toLowerCase()} and brand growth`,
  ];

  // Determine Writing Style
  let writingStyle = '';
  if (normalizedTones.includes('minimal')) {
    writingStyle = 'Short, crisp declarative sentences. Zero buzzwords, minimal punctuation, and generous white space. Maximum punch per word.';
  } else if (normalizedTones.includes('bold')) {
    writingStyle = 'Energetic, commanding language with short rhythmic cadence. Uses active verbs, fearless assertions, and memorable call-to-actions.';
  } else if (normalizedTones.includes('witty') || normalizedTones.includes('humorous')) {
    writingStyle = 'Breezy, conversational tone with clever timing, situational observations, and engaging interactive questions for the community.';
  } else if (normalizedTones.includes('premium')) {
    writingStyle = 'Polished, evocative prose with measured pacing. Emphasizes tactile quality, heritage, and intentional craft without hyperbole.';
  } else {
    writingStyle = 'Balanced, conversational, and direct. Employs accessible vocabulary, active voice, and clear transitions to keep social readers engaged.';
  }

  return {
    personality,
    toneOfVoice,
    targetAudience,
    contentThemes,
    writingStyle,
  };
}

export default {
  brandPresets,
  CATEGORIES,
  OBJECTIVE_CATEGORY_DISTRIBUTIONS,
  toneTemplatePools,
  objectiveTemplatePools,
  generateTweets,
  generateBrandVoiceSummary,
  normalizeKey,
  cleanProductDescription,
  replacePlaceholders,
  generateTweetExplanation,
};
