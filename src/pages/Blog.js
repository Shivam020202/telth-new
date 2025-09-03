import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts, blogCategories, getFeaturedPosts, getRecentPosts } from '../data/blogData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Navbar />
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm text-purple-700 mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Healthcare Technology Insights
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Telth
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Blog</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the latest insights, innovations, and best practices in healthcare technology, 
            telemedicine, and digital health transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('featured').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Articles
            </button>
            <button
              onClick={() => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-purple-300 text-white rounded-xl font-semibold hover:bg-purple-100 hover:text-purple-900 transition-all duration-300"
            >
              Browse Categories
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Posts Section */}
        <section id="featured" className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
              <p className="text-gray-600">Must-read insights from our healthcare technology experts</p>
            </div>
          </div>

          {featuredPosts.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Featured Post */}
              <div className="lg:col-span-2">
                <Link to={`/blog/${featuredPosts[0].category}/${featuredPosts[0].slug}`} className="group block">
                  <article className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-purple-100">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={featuredPosts[0].image} 
                        alt={featuredPosts[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(featuredPosts[0].category)}`}>
                          {blogCategories[featuredPosts[0].category]?.icon} {blogCategories[featuredPosts[0].category]?.name}
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4 text-white text-sm mb-3">
                          <span>{formatDate(featuredPosts[0].publishedAt)}</span>
                          <span>•</span>
                          <span>{featuredPosts[0].readTime} min read</span>
                          <span>•</span>
                          <span>By {featuredPosts[0].author.name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {featuredPosts[0].title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {featuredPosts[0].excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPosts[0].tags.slice(0, 4).map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img 
                            src={featuredPosts[0].author.avatar} 
                            alt={featuredPosts[0].author.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{featuredPosts[0].author.name}</p>
                            <p className="text-sm text-gray-500">{featuredPosts[0].author.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                          <span className="text-sm font-medium mr-2">Read More</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Categories Section */}
        <section id="categories" className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
              <p className="text-gray-600">Explore topics that interest you most</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(blogCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedCategory(key);
                  document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
                }}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-purple-200 text-left"
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm text-purple-600 font-medium flex items-center">
                  Explore Articles
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Articles
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Search by title, content, or tags..."
                  />
                </div>
              </div>
              <div className="lg:w-64">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="all">All Categories</option>
                  {Object.entries(blogCategories).map(([key, category]) => (
                    <option key={key} value={key}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section id="articles">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Articles' : blogCategories[selectedCategory]?.name}
              </h2>
              <p className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear Filter
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or filters.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.category}/${post.slug}`} className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {blogCategories[post.category]?.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                        </div>
                        <div className="flex items-center text-purple-600 text-sm">
                          <span>Read</span>
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl overflow-hidden">
            <div className="px-8 py-16 md:px-16 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-purple-100 mb-8">
                  Get the latest healthcare technology insights delivered to your inbox. 
                  Join thousands of professionals staying ahead of the curve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900"
                  />
                  <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-purple-200 text-sm mt-4">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;