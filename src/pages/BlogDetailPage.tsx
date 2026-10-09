import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogsData';
import { BRAND } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface BlogDetailPageProps {
  onOpenContact: (service?: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ onOpenContact }) => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts from same or different categories
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Schema.org BlogPosting JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": "2026-09-01",
          "dateModified": "2026-09-24",
          "author": {
            "@type": "Organization",
            "name": "Agentic Scope Technical Research",
            "url": "https://agenticscope.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Agentic Scope",
            "logo": {
              "@type": "ImageObject",
              "url": "https://agenticscope.com/agentic-scope-logo.png"
            }
          },
          "keywords": post.keywords.join(", "),
          "mainEntityOfPage": `https://agenticscope.com/#/blog/${post.slug}`
        })}
      </script>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-brand-blue truncate">{post.category}</span>
        </div>

        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-semibold">
              {post.category}
            </span>
            <span className="text-zinc-500 flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishDate}</span>
            </span>
            <span className="text-zinc-500 flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-base text-zinc-300 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* AEO Answer Box (Direct Synthesis for AI & Quick Readers) */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>AEO Direct Synthesis Answer</span>
          </div>
          <p className="text-sm text-zinc-200 leading-relaxed font-sans">
            {post.aeoAnswer}
          </p>
        </div>

        {/* Main Body Content */}
        <div className="prose prose-invert max-w-none text-zinc-300 text-sm sm:text-base leading-relaxed space-y-6 pt-4">
          <div className="whitespace-pre-line font-sans space-y-4">
            {post.content}
          </div>
        </div>

        {/* Keyword Tags */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <span className="text-xs font-mono text-zinc-500 uppercase block mb-3">Target Topic Keywords</span>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/5 text-zinc-400"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Direct WhatsApp Consultation CTA Box */}
        <div className="mt-12 p-8 rounded-3xl bg-zinc-950 border border-brand-blue/40 shadow-glow-blue-sm text-center space-y-4">
          <h3 className="font-display font-bold text-2xl text-white">
            Need Expert Assistance with {post.title.split(':')[0]}?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Talk directly with Agentic Scope consultants on WhatsApp for step-by-step guidance, pricing, or custom deployment.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Direct WhatsApp: {BRAND.phoneFormatted}</span>
            </a>
            <button
              onClick={() => onOpenContact(`Blog Inquiry: ${post.title}`)}
              className="px-6 py-3.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10"
            >
              Inquire via Form
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-white/10 space-y-6">
          <h3 className="font-display font-bold text-xl text-white">Related Research &amp; Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/5 hover:border-brand-blue/40 transition-all space-y-2 block group"
              >
                <span className="text-[10px] font-mono text-brand-blue font-semibold">{rel.category}</span>
                <h4 className="font-display font-bold text-sm text-white group-hover:text-brand-blue transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2">{rel.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

