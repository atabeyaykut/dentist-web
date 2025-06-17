import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Hızlı Erişim",
      links: [
        { name: "Ana Sayfa", href: "#" },
        { name: "Hakkımızda", href: "#hakkımızda" },
        { name: "Hizmetler", href: "#hizmetler" },
        { name: "Doktorlar", href: "#doktorlar" },
        { name: "Blog", href: "#blog" },
        { name: "İletişim", href: "#iletişim" }
      ]
    },
    {
      title: "Hizmetlerimiz",
      links: [
        { name: "İmplant", href: "#" },
        { name: "Ortodonti", href: "#" },
        { name: "Diş Beyazlatma", href: "#" },
        { name: "Estetik Dolgu", href: "#" },
        { name: "Çocuk Diş Hekimliği", href: "#" },
        { name: "Diş Eti Tedavisi", href: "#" }
      ]
    },
    {
      title: "İletişim",
      links: [
        { 
          name: "Bağdat Caddesi No:123, Kadıköy, İstanbul", 
          href: "#",
          icon: <MapPin size={16} className="mr-2" />
        },
        { 
          name: "+90 (212) 123 45 67", 
          href: "tel:+902121234567",
          icon: <Phone size={16} className="mr-2" />
        },
        { 
          name: "info@uniqdent.com", 
          href: "mailto:info@uniqdent.com",
          icon: <Mail size={16} className="mr-2" />
        }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <img 
                src="https://via.placeholder.com/150x50?text=UniQDent" 
                alt="UniQDent Logo" 
                className="h-10"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Modern diş hekimliği yaklaşımı ile gülüşünüzü yeniden tasarlıyoruz. 
              Uzman kadromuz ve son teknoloji ekipmanlarımızla yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-cyan-600 transition-colors p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-cyan-600 transition-colors p-2 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-cyan-600 transition-colors p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-cyan-600 transition-colors p-2 rounded-full">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
                    >
                      {link.icon && link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} UniQDent. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Kullanım Şartları
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              KVKK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
