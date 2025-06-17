import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Diş Beyazlatma Hakkında Bilmeniz Gerekenler",
      excerpt: "Diş beyazlatma işlemi, dişlerin doğal rengini açarak daha beyaz ve parlak bir görünüm elde etmek için uygulanan bir estetik diş hekimliği prosedürüdür. Bu yazıda, diş beyazlatma işlemi öncesinde bilmeniz gereken önemli bilgileri derledik.",
      image: "https://picsum.photos/id/96/600/400",
      date: "15 Haziran 2025",
      category: "Estetik"
    },
    {
      title: "Çocuklarda Diş Sağlığı: Ebeveynler İçin Rehber",
      excerpt: "Çocuklarda diş sağlığının korunması, sağlıklı bir gülüşün ömür boyu sürmesi için atılan ilk adımdır. Bu yazıda, çocuğunuzun diş sağlığını korumak için uygulamanız gereken temel bakım adımlarını ve dikkat edilmesi gereken noktaları ele alıyoruz.",
      image: "https://picsum.photos/id/177/600/400",
      date: "8 Haziran 2025",
      category: "Çocuk"
    },
    {
      title: "İmplant Tedavisi: Süreci ve Avantajları",
      excerpt: "Diş implantları, eksik dişlerin yerine konulan, doğal dişlerin kök kısmını taklit eden titanyum vidalardan oluşan modern diş hekimliği çözümleridir. Bu yazıda implant tedavi sürecini ve sağladığı avantajları detaylı olarak inceliyoruz.",
      image: "https://picsum.photos/id/180/600/400",
      date: "1 Haziran 2025",
      category: "Cerrahi"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Blog & Haberler
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ağız ve diş sağlığı hakkında bilgilendirici yazılar ve kliniğimizden en güncel haberler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              category={post.category}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
            Tüm Yazıları Gör
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
