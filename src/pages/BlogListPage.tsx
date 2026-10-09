import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, Calendar, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogsData';
import { BRAND } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface BlogListPageProps {
  onOpenContact: (service?: string) => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ onOpenContact }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Automation',
    'DIGI BIZ OS',
    'UK & US Corporate',
    'Banking & Gateways',
    'Engineering & SEO',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research &amp; Authority Hub • September 2026 Edition</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Knowledge, Trends &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
              Technical Insights.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            30 research-backed guides covering AI business automation, JARVIS voice control, DIGI BIZ OS, UK LTD / US LLC incorporation, Stripe global banking, and modern AEO/GEO optimization.
          </p>

          {/* Search Bar */}
          <div className="pt-6 max-w-xl mx-auto relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword, topic, or question (e.g. Stripe, DIGI BIZ OS, Voice AI, UK LTD)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-950 border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-blue transition-colors shadow-inner"
            />
          </div>

          {/* Categories */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-blue text-white shadow-glow-blue-sm scale-105'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 text-xs font-mono text-zinc-400">
          <span>Showing {filteredPosts.length} Published Articles</span>
          <span>AEO &amp; GEO Optimized</span>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="p-7 rounded-3xl bg-zinc-950 border border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                    <span className="text-brand-blue font-semibold bg-brand-blue/10 px-2.5 py-0.5 rounded border border-brand-blue/20">
                      {post.category}
                    </span>
                    <span className="text-zinc-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTime}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-brand-blue transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500">{post.publishDate}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-semibold text-brand-blue hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-zinc-500 font-mono text-sm">
            No articles found matching &quot;{searchTerm}&quot;. Please try a different search or contact us on WhatsApp.
          </div>
        )}
      </section>

      {/* CTA Box */}
      <section className="pt-6 max-w-5xl mx-auto px-4 text-center space-y-4">
        <div className="p-8 rounded-3xl bg-zinc-950 border border-brand-blue/30 shadow-glow-blue-sm space-y-4">
          <h3 className="font-display font-bold text-2xl text-white">
            Have Specific Technical or Corporate Questions?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            Our systems architecture and corporate compliance team is available directly on WhatsApp for real-time consultation.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Ask on WhatsApp: {BRAND.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

