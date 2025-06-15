import { Link } from 'react-router-dom';

// Import icons individually to avoid import issues
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DentCare</h3>
            <p className="text-secondary-300 mb-4">
              Providing quality dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-primary-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-secondary-300 hover:text-primary-400 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#general-dentistry" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services#cosmetic-dentistry" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services#orthodontics" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link to="/services#pediatric-dentistry" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services#dental-implants" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Dental Implants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-300">
                  123 Dental Street, Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@dentcare.com" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  info@dentcare.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-secondary-300">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-secondary-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} DentCare. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
