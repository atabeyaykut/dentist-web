import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// Dropdown menü verileri
const navDropdowns = {
  Services: [
    // Left column
    { label: "All Services", href: "#" },
    { label: "Cavity Prevention", href: "#" },
    { label: "Emergency Dentistry", href: "#" },
    { label: "Gum Care", href: "#" },
    { label: "Oral Surgery", href: "#" },
    // Right column
    { label: "Dental Implants", href: "#" },
    { label: "Pediatric Dentistry", href: "#" },
    { label: "Smile Enhancement", href: "#" },
    { label: "Whitening Boost", href: "#" },
    { label: "Wisdom Tooth Extraction", href: "#" },
  ],
  Pages: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

function Header() {
  return (
    <header className="w-full absolute top-0 z-10 bg-transparent">
      {/* Top bar with address and social media */}
      <div className="bg-[#0d2c40] bg-opacity-90 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            <span>511 SW 10th Ave 1204, Portland, OR United States</span>
            <button className="ml-2 text-xs underline">SHOW ON MAP</button>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-transparent py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#00cec8] rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">Dentalist</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-[#00cec8]">Home</a>
            {/* Services Dropdown */}
            <div className="relative group ">
              <a href="#" className="text-white hover:text-[#00cec8] flex items-center">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-[450px] bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                <div className="grid grid-cols-2 gap-0 py-2">
                  {navDropdowns.Services.slice(0, 5).map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                  {navDropdowns.Services.slice(5, 10).map((item, idx) => (
                    <a
                      key={idx + 5}
                      href={item.href}
                      className="block px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Pages Dropdown */}
            <div className="relative group">
              <a href="#" className="text-white hover:text-[#00cec8] flex items-center">
                Pages
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-[225px] py-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                {navDropdowns.Pages.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="block px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <a href="#" className="text-white hover:text-[#00cec8]">Our Doctors</a>
            <a href="#" className="text-white hover:text-[#00cec8]">Contacts</a>
          </nav>
          
          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-white">+1-800-123-1234</span>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
