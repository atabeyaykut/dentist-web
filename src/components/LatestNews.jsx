import React from 'react';
import { Link } from 'react-router-dom';

/**
 * LatestNews Component
 * 
 * A component that displays the latest news articles in card format
 * - Uses Lorem Picsum for images
 * - Shows 3 news cards in a responsive layout
 * - Each card has a category, title, and read more link
 */
function LatestNews() {
  // News data stored as objects
  const newsArticles = [
    {
      id: 1,
      category: "EMERGENCY DENTAL CARE",
      title: "Emergency Dental Clinic And Dentist Services",
      image: "https://picsum.photos/id/304/400/300",
      link: "/news/emergency-dental-clinic"
    },
    {
      id: 2,
      category: "CHILDREN'S DENTISTRY",
      title: "9 Signs Your Child Should See A Pediatric Dentist",
      image: "https://picsum.photos/id/22/400/300",
      link: "/news/pediatric-dentist-signs"
    },
    {
      id: 3,
      category: "DENTAL IMPLANTS",
      title: "What Foods Can You Eat After Getting Dental Implants?",
      image: "https://picsum.photos/id/96/400/300",
      link: "/news/foods-after-dental-implants"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12" style={{
          fontFamily: 'var(--cmsmasters-h2-font-family)',
          fontSize: 'var(--cmsmasters-h2-font-size)',
          lineHeight: 'var(--cmsmasters-h2-line-height)',
          fontWeight: 'var(--cmsmasters-h2-font-weight)',
          textTransform: 'var(--cmsmasters-h2-text-transform)',
          fontStyle: 'var(--cmsmasters-h2-font-style)',
          textDecoration: 'var(--cmsmasters-h2-text-decoration)',
          letterSpacing: 'var(--cmsmasters-h2-letter-spacing)',
          wordSpacing: 'var(--cmsmasters-h2-word-spacing)',
          color: 'var(--cmsmasters-colors-heading)'
        }}>Latest News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="flex flex-col">
              <div className="mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{article.category}</p>
                <h3 className="text-xl font-medium mb-4">{article.title}</h3>
                <Link 
                  to={article.link} 
                  className="mt-auto inline-flex items-center text-sm font-medium"
                >
                  READ MORE
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link 
            to="/news" 
            className="border border-gray-300 px-6 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            VIEW MORE POSTS
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
