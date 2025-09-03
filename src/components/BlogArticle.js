import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { getBlogPostBySlug, getRecentPosts, blogCategories } from '../data/blogData';

const BlogArticle = () => {
  const { category, slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const recentPosts = getRecentPosts(4);

  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // If category doesn't match, redirect to correct URL
  if (post.category !== category) {
    return <Navigate to={`/blog/${post.category}/${slug}`} replace />;
  }

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = post.seo.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.seo.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = post.seo.description;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', post.seo.keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = post.seo.keywords;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Update Open Graph meta tags
    const updateOrCreateMetaTag = (property, content) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.getElementsByTagName('head')[0].appendChild(metaTag);
      }
    };

    updateOrCreateMetaTag('og:title', post.seo.title);
    updateOrCreateMetaTag('og:description', post.seo.description);
    updateOrCreateMetaTag('og:image', post.seo.ogImage);
    updateOrCreateMetaTag('og:url', window.location.href);
    updateOrCreateMetaTag('og:type', 'article');
    
    // Twitter Card meta tags
    updateOrCreateMetaTag('twitter:card', 'summary_large_image');
    updateOrCreateMetaTag('twitter:title', post.seo.title);
    updateOrCreateMetaTag('twitter:description', post.seo.description);
    updateOrCreateMetaTag('twitter:image', post.seo.ogImage);

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [post]);

  const getCategoryColor = (category) => {
    const colors = {
      'healthcare-technology': 'bg-purple-100 text-purple-700 border-purple-200',
      'telemedicine': 'bg-blue-100 text-blue-700 border-blue-200',
      'digital-health': 'bg-green-100 text-green-700 border-green-200',
      'patient-care': 'bg-indigo-100 text-indigo-700 border-indigo-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    const description = encodeURIComponent(post.excerpt);

    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      // You could add a toast notification here
      alert('Link copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Navbar />
      <div className="h-20"></div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <Link to={`/blog?category=${category}`} className="hover:text-purple-600 transition-colors">
              {blogCategories[category]?.name}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium truncate">{post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(category)}`}>
              <span className="mr-2">{blogCategories[category]?.icon}</span>
              {blogCategories[category]?.name}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-600">{post.author.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-medium text-gray-700">Share this article:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                title="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                title="Share on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                title="Share on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                onClick={copyToClipboard}
                className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                title="Copy link"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose-content max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog?search=${tag}`}
                  className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm hover:bg-purple-100 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
          <div className="flex flex-col sm:flex-row gap-6">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-20 h-20 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.author.name}</h3>
              <p className="text-purple-600 font-medium mb-3">{post.author.title}</p>
              <p className="text-gray-600 leading-relaxed">{post.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts
              .filter(relatedPost => relatedPost.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.category}/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(relatedPost.category)}`}>
                          {blogCategories[relatedPost.category]?.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>{formatDate(relatedPost.publishedAt)}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Discover how Telth's innovative healthcare solutions can help you deliver better patient outcomes 
            and streamline your practice operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/blog"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </article>

      <Footer />

      {/* Custom CSS for prose content */}
      <style jsx global>{`
        .prose-content h2 {
          @apply text-3xl font-bold text-gray-900 mt-12 mb-6;
        }
        .prose-content h3 {
          @apply text-2xl font-semibold text-gray-800 mt-8 mb-4;
        }
        .prose-content h4 {
          @apply text-xl font-semibold text-gray-800 mt-6 mb-3;
        }
        .prose-content p {
          @apply text-gray-700 leading-relaxed mb-6;
        }
        .prose-content ul {
          @apply list-disc list-inside mb-6 space-y-2 text-gray-700;
        }
        .prose-content ol {
          @apply list-decimal list-inside mb-6 space-y-2 text-gray-700;
        }
        .prose-content blockquote {
          @apply border-l-4 border-purple-500 pl-6 italic text-gray-600 my-6;
        }
        .prose-content strong {
          @apply font-semibold text-gray-900;
        }
        .prose-content a {
          @apply text-purple-600 hover:text-purple-700 underline;
        }
        .prose-content img {
          @apply rounded-xl shadow-lg my-8;
        }
        .prose-content table {
          @apply w-full border-collapse border border-gray-200 my-6;
        }
        .prose-content th,
        .prose-content td {
          @apply border border-gray-200 px-4 py-2;
        }
        .prose-content th {
          @apply bg-gray-50 font-semibold;
        }
      `}</style>
    </div>
  );
};

export default BlogArticle;