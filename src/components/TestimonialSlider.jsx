import React from 'react';
import InfiniteSlider from './InfiniteSlider';

function TestimonialSlider() {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      image: "/images/testimonials/patient1.jpg",
      title: "Ayşe Yılmaz",
      description: "Kliniğe ilk geldiğimde çok endişeliydim, ancak doktorlar ve personel beni çok rahat hissettirdi. Tedavim mükemmel sonuçlandı!",
    },
    {
      id: 2,
      image: "/images/testimonials/patient2.jpg",
      title: "Mehmet Kaya",
      description: "Diş implantı konusunda uzman bir ekip. Ağrısız ve sorunsuz bir tedavi süreci geçirdim. Herkese tavsiye ederim.",
    },
    {
      id: 3,
      image: "/images/testimonials/patient3.jpg",
      title: "Zeynep Demir",
      description: "Çocuğumun diş korkusunu yendiren harika doktorlar. Artık diş hekimine gitmek onun için korku değil, eğlence!",
    },
    {
      id: 4,
      image: "/images/testimonials/patient4.jpg",
      title: "Ahmet Öztürk",
      description: "Estetik diş tedavisi için gelmiştim, sonuçlar beklentilerimin çok üzerinde. Gülüşüme kavuştum!",
    },
    {
      id: 5,
      image: "/images/testimonials/patient5.jpg",
      title: "Elif Yıldız",
      description: "Modern ekipman ve profesyonel yaklaşım. Diş sağlığım için en doğru adres olduğuna eminim.",
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-12">HASTALARIMIZIN YORUMLARI</h2>
        
        <div className="testimonial-slider-wrapper">
          <InfiniteSlider 
            items={testimonials}
            speed={4000}
            visibleItems={3}
            autoPlay={true}
            className="testimonial-slider"
          />
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Tüm Yorumları Gör
          </a>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
