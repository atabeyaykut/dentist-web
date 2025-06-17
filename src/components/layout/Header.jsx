import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="/" className="flex items-center">
            <img src="./DtAtabenLogo.svg" alt="DtAtabenLogo" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm"
            >
              {item}
            </a>
          ))}
          <Button variant="cyan" size="sm" className="ml-4 bg-cyan-600 text-white rounded-full px-6 py-2 text-sm">
            Randevu Al
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'md:hidden overflow-hidden bg-white',
          isOpen ? 'border-t border-gray-100' : ''
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-700 hover:text-cyan-600 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="cyan" size="default" className="w-full">
            Randevu Al
          </Button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
