import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ title, excerpt, image, date, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {category && (
          <div className="absolute top-4 left-4 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="text-gray-500 text-sm mb-2">{date}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
        >
          Devamını Oku
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
