import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * 
 * A component that displays the website footer with:
 * - Company information and description
 * - Popular services links
 * - Page navigation links
 * - Contact information
 * - Social media links
 * - Copyright notice
 */
function Footer() {
  // Footer data stored as objects
  const footerData = {
    companyInfo: {
      name: "Dentalist",
      description: "We understand just how closely connected oral health is to your overall health, confidence, and appearance, and we pride ourselves on cultivating a friendly, upbeat dental environment where you can always feel comfortable in our care.",
      logo: "/logo.svg" // Replace with actual logo path
    },
    popularServices: [
      { name: "Oral Surgery", link: "/services/oral-surgery" },
      { name: "Pediatric Dentistry", link: "/services/pediatric-dentistry" },
      { name: "Whitening Boost", link: "/services/whitening-boost" },
      { name: "Wisdom Tooth Extraction", link: "/services/wisdom-tooth-extraction" },
      { name: "Gum Care", link: "/services/gum-care" },
      { name: "Emergency Dentistry", link: "/services/emergency-dentistry" },
      { name: "Ortho Solutions", link: "/services/ortho-solutions" },
      { name: "Cavity Prevention", link: "/services/cavity-prevention" }
    ],
    pages: [
      { name: "About Us", link: "/about" },
      { name: "Our Team", link: "/team" },
      { name: "Our Services", link: "/services" },
      { name: "Blog Page", link: "/blog" },
      { name: "Contacts", link: "/contacts" },
      { name: "Image Credits", link: "/credits" }
    ],
    contactInfo: {
      address: "511 SW 10th Ave 1206, Portland, OR United States",
      phone: "+1 800-123-1234",
      email: "clinic@example.com"
    },
    socialMedia: [
      { name: "Facebook", icon: "facebook", link: "https://facebook.com" },
      { name: "Instagram", icon: "instagram", link: "https://instagram.com" },
      { name: "Twitter", icon: "twitter", link: "https://twitter.com" }
    ]
  };

  return (
    <footer className="bg-[#0c1e2b] w-[100vw] text-white pt-16 pb-4">
      <div className="container mx-auto px-4">
        {/* Top Section with Headline and Contact Button */}
        <div className="border-b border-gray-700 pb-10 mb-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl text-white font-medium max-w-md">
                Thousands of happy, healthy smiles, in the heart of Portland
              </h2>
            </div>
            <div>
              <Link 
                to="/contact" 
                className="inline-block bg-[#00efd1] hover:bg-[#00c5be] text-black font-medium py-3 px-6 transition-colors uppercase tracking-wider text-sm font-['Plus_Jakarta_Sans',sans-serif] font-medium"
                style={{
                  fontFamily: 'var(--cmsmasters-accent-font-family)',
                  fontSize: 'var(--cmsmasters-accent-font-size)',
                  lineHeight: 'var(--cmsmasters-accent-line-height)',
                  fontWeight: 'var(--cmsmasters-accent-font-weight)',
                  textTransform: 'var(--cmsmasters-accent-text-transform)',
                  letterSpacing: 'var(--cmsmasters-accent-letter-spacing)'
                }}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={footerData.companyInfo.logo} 
                alt={footerData.companyInfo.name} 
                className="h-10"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOCA5LjA1djIuNzVhMi4yNSAyLjI1IDAgMCAwIDQuNSAwVjkuMDUiPjwvcGF0aD48cGF0aCBkPSJNOCA5LjA1YTIuMjUgMi4yNSAwIDAgMCA0LjUgMCI+PC9wYXRoPjwvc3ZnPg==";
                }}
              />
              <h3 className="text-xl font-medium mt-2">{footerData.companyInfo.name}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {footerData.companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {footerData.socialMedia.map((platform, index) => (
                <a 
                  key={index} 
                  href={platform.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00e1d9] transition-colors"
                  aria-label={platform.name}
                >
                  {platform.icon === "facebook" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  )}
                  {platform.icon === "instagram" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )}
                  {platform.icon === "twitter" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          {/* Popular Services */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">Popular Services</h3>
            <ul className="space-y-3">
              {footerData.popularServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.link} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* More Pages */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">More Pages</h3>
            <ul className="space-y-3">
              {footerData.pages.map((page, index) => (
                <li key={index}>
                  <Link 
                    to={page.link} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">Contact</h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                {footerData.contactInfo.address}
              </p>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00e1d9] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href={`tel:${footerData.contactInfo.phone}`} 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {footerData.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00e1d9] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${footerData.contactInfo.email}`} 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {footerData.contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-gray-700 text-center text-gray-500 text-xs">
          <p>This is a sample website - cmsmasters © 2023 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
