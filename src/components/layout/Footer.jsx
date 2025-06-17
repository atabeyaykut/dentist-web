import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

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
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">
                <span className="footer-logo-highlight">Dt. Ataben Efe</span>
                <span className="footer-logo-normal"> Çelik</span>
              </span>
            </div>
            <p className="footer-description">
              Modern diş hekimliği yaklaşımı ile gülüşünüzü yeniden tasarılıyoruz. 
              Uzman kadromuz ve son teknoloji ekipmanlarımızla yanınızdayız.
            </p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-link">
                <Facebook size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="footer-links-column">
              <h3 className="footer-column-title">{column.title}</h3>
              <ul className="footer-links-list">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="footer-links-item">
                    <a 
                      href={link.href} 
                      className="footer-link"
                    >
                      {link.icon && <span className="footer-link-icon">{link.icon}</span>}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} UniQDent. Tüm hakları saklıdır.
          </p>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">
              Gizlilik Politikası
            </a>
            <a href="#" className="footer-legal-link">
              Kullanım Şartları
            </a>
            <a href="#" className="footer-legal-link">
              KVKK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
