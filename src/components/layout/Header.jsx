import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import './Header.css';

const Header = ({ menuItems = ['Ana Sayfa', 'Hakkımızda', 'Hizmetler', 'Doktorlar', 'Blog', 'İletişim'] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'site-header',
      scrolled ? 'header-scrolled' : ''
    )}>
      <div className="header-top-bar">
        <div className="header-top-container">
          <div className="header-contact-info">
            <a href="tel:+905555555555" className="header-phone-link">
              <Phone size={16} className="header-phone-icon" />
              <span>+90 555 555 55 55</span>
            </a>
          </div>
          <div className="header-social-links">
            <a href="#" className="header-social-link">
              <img src="/images/social/facebook.svg" alt="Facebook" className="header-social-icon" />
            </a>
            <a href="#" className="header-social-link">
              <img src="/images/social/instagram.svg" alt="Instagram" className="header-social-icon" />
            </a>
            <a href="#" className="header-social-link">
              <img src="/images/social/twitter.svg" alt="Twitter" className="header-social-icon" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="header-container">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="header-logo-container"
          >
            <a href="/" className="header-logo-link">
              <img src="/images/DtAtabenLogo.svg" alt="Dr. Ataben Efe Çelik" className="header-logo" />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="header-nav-desktop">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="header-nav-link"
              >
                {item}
              </a>
            ))}
            <Button variant="cyan" size="sm" className="header-cta-button">
              Randevu Al
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="header-mobile-menu-button-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="header-mobile-menu-button"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'header-mobile-menu',
          isOpen ? 'header-mobile-menu-open' : ''
        )}
      >
        <div className="header-mobile-menu-container">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="header-mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="cyan" size="default" className="header-mobile-cta-button">
            Randevu Al
          </Button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
