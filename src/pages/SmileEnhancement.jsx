import React from 'react';
import ServiceTemplate from './ServiceTemplate';

/**
 * SmileEnhancement Page Component
 */
function SmileEnhancement() {
  // Page content
  const pageData = {
    title: "Smile Enhancement",
    image: "https://picsum.photos/id/634/1200/600",
    aboutTitle: "About Smile Enhancement Services",
    aboutContent: [
      "Our Smile Enhancement services are designed to transform your smile and boost your confidence. We offer a comprehensive range of cosmetic dental procedures tailored to address your specific aesthetic concerns while maintaining optimal oral health and function.",
      "During your smile consultation, we'll discuss your goals and use digital imaging technology to show you what your smile could look like after treatment. This collaborative approach ensures that the final results align perfectly with your expectations and complement your facial features.",
      "From subtle improvements to dramatic transformations, our cosmetic dentistry options include professional teeth whitening, porcelain veneers, dental bonding, gum contouring, and complete smile makeovers. Each treatment plan is customized to achieve natural-looking results that enhance your unique smile."
    ],
    faqs: [
      {
        id: 1,
        question: "How Long Do Porcelain Veneers Last?",
        answer: "With proper care, porcelain veneers typically last 10-15 years or longer. To maximize their lifespan, maintain excellent oral hygiene, avoid using your teeth as tools, wear a nightguard if you grind your teeth, and schedule regular dental check-ups. While veneers are stain-resistant, it's still advisable to limit consumption of staining substances like coffee, tea, and red wine."
      },
      {
        id: 2,
        question: "Is Teeth Whitening Safe?",
        answer: "Professional teeth whitening performed under dental supervision is safe for most patients. We carefully evaluate your oral health before recommending whitening to ensure you're a good candidate. Our professional-grade whitening systems use controlled concentrations of whitening agents and include protective measures for your gums and soft tissues. Some temporary sensitivity is normal but subsides quickly after treatment."
      },
      {
        id: 3,
        question: "What's the Difference Between Bonding and Veneers?",
        answer: "Dental bonding uses tooth-colored composite resin applied directly to the tooth, shaped, and hardened with a special light. It's less expensive, requires minimal tooth preparation, and can usually be completed in one visit. Veneers are thin porcelain shells custom-made in a lab and bonded to the front of teeth. While more expensive, veneers are more durable, stain-resistant, and generally provide a more refined aesthetic result than bonding."
      },
      {
        id: 4,
        question: "How Much Does a Smile Makeover Cost?",
        answer: "The cost of a smile makeover varies widely depending on the specific procedures included, the complexity of your case, and the number of teeth being treated. During your consultation, we'll provide a detailed treatment plan with associated costs. We offer various financing options to help make your smile enhancement affordable, and we can prioritize treatments if you prefer to complete your makeover in phases."
      },
      {
        id: 5,
        question: "Will My Insurance Cover Cosmetic Dental Procedures?",
        answer: "Most dental insurance plans don't cover procedures that are purely cosmetic. However, some treatments that improve both function and aesthetics, such as crowns or bonding to repair damaged teeth, may receive partial coverage. Our team will help you understand your insurance benefits and maximize your coverage when possible. For non-covered services, we offer payment plans and financing options to make treatment more accessible."
      }
    ],
    specialists: [
      {
        id: 1,
        name: "Dr. Olivia Parker",
        title: "Cosmetic Dentist",
        image: "https://picsum.photos/id/1005/300/300"
      },
      {
        id: 2,
        name: "Dr. Nathan Brooks",
        title: "Aesthetic Specialist",
        image: "https://picsum.photos/id/1010/300/300"
      },
      {
        id: 3,
        name: "Dr. Victoria Adams",
        title: "Restorative Expert",
        image: "https://picsum.photos/id/1001/300/300"
      }
    ]
  };

  return <ServiceTemplate {...pageData} />;
}

export default SmileEnhancement;
