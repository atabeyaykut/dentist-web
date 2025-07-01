import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import './BlogSection.css';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Kanal Tedavisi Nedir? Nasıl Yapılır? Nelere Dikkat Etmek Gerekir?",
      image: "https://picsum.photos/id/237/600/400",
      category: "GENEL"
    },
    {
      title: "Hızlı İmplant Tedavisi İle 1 Günde İmplant",
      image: "https://picsum.photos/id/238/600/400",
      category: "IMPLANT TEDAVISI"
    },
    {
      title: "Gülüş Tasarımında Tedavi Konusu Olan Bölümler Nelerdir?",
      image: "https://picsum.photos/id/239/600/400",
      category: "BLOG - GÜNCEL DIŞSEL FIKIRLER"
    },
    {
      title: "Diş Beyazlatma Sonrası",
      image: "https://picsum.photos/id/240/600/400",
      category: "DIŞ ESTETIĞI"
    },
    {
      title: "Protetik Diş Tedavisi",
      image: "https://picsum.photos/id/241/600/400",
      category: "DIŞ ESTETIĞI"
    },
    {
      title: "Yeni Nesil Hibrit Protez",
      image: "https://picsum.photos/id/242/600/400",
      category: "DIŞ ESTETIĞI"
    },
    {
      title: "Başarısız İmplant Belirtileri",
      image: "https://picsum.photos/id/243/600/400",
      category: "IMPLANT TEDAVISI"
    },
    {
      title: "Diş Eti Çekilmesi",
      image: "https://picsum.photos/id/244/600/400",
      category: "BLOG - GÜNCEL DIŞSEL FIKIRLER"
    },
    {
      title: "Sabit Protez Diş, Protez Türleri ve Yeni Nesil Diş Protezi",
      image: "https://picsum.photos/id/245/600/400",
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
