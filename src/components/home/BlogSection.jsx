import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import './BlogSection.css';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Kanal Tedavisi Nedir? Nasıl Yapılır? Nelere Dikkat Etmek Gerekir?",
      image: "/images/blog/root-canal-treatment.jpg",
      category: "GENEL"
    },
    {
      title: "Hızlı İmplant Tedavisi İle 1 Günde İmplant",
      image: "/images/blog/dental-implant.jpg",
      category: "IMPLANT TEDAVISI"
    },
    {
      title: "Gülüş Tasarımında Tedavi Konusu Olan Bölümler Nelerdir?",
      image: "/images/blog/smile-design.jpg",
      category: "BLOG - GÜNCEL DIŞSEL FIKIRLER"
    },
    {
      title: "Diş Beyazlatma Sonrası",
      image: "/images/blog/teeth-whitening.jpg",
      category: "DIŞ ESTETIĞI"
    },
    {
      title: "Protetik Diş Tedavisi",
      image: "/images/blog/prosthetic-treatment.jpg",
      category: "DIŞ ESTETIĞI"
    },
    {
      title: "Yeni Nesil Hibrit Protez",
      image: "/images/blog/hybrid-prosthetics.jpg",
      category: "DIŞ ESTETIĞI"
    },
    {
      title: "Başarısız İmplant Belirtileri",
      image: "/images/blog/implant-failure.jpg",
      category: "IMPLANT TEDAVISI"
    },
    {
      title: "Diş Eti Çekilmesi",
      image: "/images/blog/gum-recession.jpg",
      category: "BLOG - GÜNCEL DIŞSEL FIKIRLER"
    },
    {
      title: "Sabit Protez Diş, Protez Türleri ve Yeni Nesil Diş Protezi",
      image: "/images/blog/dental-prosthetics.jpg",
      category: "BLOG - GÜNCEL DIŞSEL FIKIRLER"
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="blog-header"
        >
          <h2 className="blog-title">
            Blog – Güncel Dişsel Fikirler
          </h2>
        </motion.div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              image={post.image}
              category={post.category}
            />
          ))}
        </div>

        <div className="blog-pagination">
          <span className="page-number active">1</span>
          <a href="#" className="page-number">2</a>
          <a href="#" className="page-number">3</a>
          <span className="page-separator">...</span>
          <a href="#" className="page-number">8</a>
          <a href="#" className="page-number">12</a>
          <a href="#" className="page-number next">→</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
