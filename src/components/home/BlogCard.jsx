import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ title, image, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="blog-card"
    >
      <div className="blog-card-image-container">
        <img 
          src={image} 
          alt={title} 
          className="blog-card-image"
          loading="lazy"
        />
      </div>
      
      <div className="blog-card-content">
        <div className="blog-card-category">{category}</div>
        <h3 className="blog-card-title">{title}</h3>
        
        <a 
          href="#" 
          className="blog-card-link"
        >
          DEVAMINI GÖRÜNTÜLE
          <ArrowRight size={16} className="blog-card-link-icon" />
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
