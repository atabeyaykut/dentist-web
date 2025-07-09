import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Blog Page Component
 */
function Blog() {
  // Blog categories
  const categories = [
    'All Posts',
    'Dental Tips',
    'Oral Health',
    'Cosmetic Dentistry',
    'Children\'s Dental Health',
    'Dental Technology'
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Regular Dental Check-ups',
      excerpt: 'Regular dental check-ups are essential for maintaining good oral health. Learn why you should visit your dentist every six months and what to expect during your appointment.',
      image: 'https://picsum.photos/id/1000/800/500',
      category: 'Dental Tips',
      author: 'Dr. Sarah Johnson',
      date: 'July 5, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding Dental Implants: Benefits and Procedure',
      excerpt: 'Dental implants are a popular solution for replacing missing teeth. This article explains the benefits of dental implants and what to expect during the procedure.',
      image: 'https://picsum.photos/id/1001/800/500',
      category: 'Dental Technology',
      author: 'Dr. Michael Chen',
      date: 'June 28, 2025',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Tips for Teaching Your Child Good Oral Hygiene Habits',
      excerpt: 'Establishing good oral hygiene habits early in life is crucial for long-term dental health. Discover effective strategies to help your children develop proper brushing and flossing techniques.',
      image: 'https://picsum.photos/id/1002/800/500',
      category: 'Children\'s Dental Health',
      author: 'Dr. Emily Rodriguez',
      date: 'June 20, 2025',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'The Connection Between Oral Health and Overall Wellness',
      excerpt: 'Research continues to show links between oral health and various systemic conditions. Learn how taking care of your teeth and gums can contribute to your overall health.',
      image: 'https://picsum.photos/id/1003/800/500',
      category: 'Oral Health',
      author: 'Dr. James Wilson',
      date: 'June 15, 2025',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Teeth Whitening: Professional vs. At-Home Options',
      excerpt: 'Considering teeth whitening? This article compares professional in-office treatments with at-home whitening kits to help you make an informed decision.',
      image: 'https://picsum.photos/id/1004/800/500',
      category: 'Cosmetic Dentistry',
      author: 'Dr. Lisa Thompson',
      date: 'June 8, 2025',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'How to Prevent Gum Disease: Essential Tips',
      excerpt: 'Gum disease is a common but preventable condition. Discover practical steps you can take to maintain healthy gums and prevent periodontal issues.',
      image: 'https://picsum.photos/id/1005/800/500',
      category: 'Oral Health',
      author: 'Dr. Robert Garcia',
      date: 'June 1, 2025',
      readTime: '5 min read'
    }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('All Posts');

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <h1 
            className="text-left" 
            style={{
              fontFamily: 'var(--cmsmasters-h1-font-family)',
              fontSize: 'var(--cmsmasters-h1-font-size)',
              lineHeight: 'var(--cmsmasters-h1-line-height)',
              fontWeight: 'var(--cmsmasters-h1-font-weight)',
              color: 'var(--cmsmasters-colors-heading)'
            }}
          >
            Dental Health Blog
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Blog Introduction */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 
            className="mb-6 text-3xl"
            style={{
              fontFamily: 'var(--cmsmasters-h2-font-family)',
              fontSize: 'var(--cmsmasters-h2-font-size)',
              lineHeight: 'var(--cmsmasters-h2-line-height)',
              fontWeight: 'var(--cmsmasters-h2-font-weight)',
              color: 'var(--cmsmasters-colors-heading)'
            }}
          >
            Expert Insights for Your Dental Health
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our blog where our dental professionals share valuable information, tips, and the latest advancements in dental care. Explore our articles to learn more about maintaining optimal oral health and achieving your best smile.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-semibold">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <span className="ml-2 text-sm font-medium">{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 
            className="mb-4 text-2xl"
            style={{
              fontFamily: 'var(--cmsmasters-h3-font-family)',
              fontSize: 'var(--cmsmasters-h3-font-size)',
              lineHeight: 'var(--cmsmasters-h3-line-height)',
              fontWeight: 'var(--cmsmasters-h3-font-weight)',
              color: 'var(--cmsmasters-colors-heading)'
            }}
          >
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest articles, dental tips, and special offers. We'll deliver them straight to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
