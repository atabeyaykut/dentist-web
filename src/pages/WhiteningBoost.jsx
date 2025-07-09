import React from 'react';
import ServiceTemplate from './ServiceTemplate';

/**
 * WhiteningBoost Page Component
 */
function WhiteningBoost() {
  // Page content
  const pageData = {
    title: "Whitening Boost",
    image: "https://picsum.photos/id/660/1200/600",
    aboutTitle: "About Whitening Boost Services",
    aboutContent: [
      "Our Whitening Boost service provides professional-grade teeth whitening solutions that deliver dramatic results far beyond what over-the-counter products can achieve. We offer both in-office and take-home whitening options to accommodate your preferences, timeline, and budget.",
      "Our in-office whitening treatment can brighten your smile by up to eight shades in just a single visit. Using professional-strength whitening agents and specialized activation technology, we can safely and effectively remove years of stains and discoloration while you relax in our comfortable treatment room.",
      "For those who prefer to whiten at their own pace, our custom take-home whitening kits provide exceptional results with maximum convenience. These kits include custom-fitted trays created from impressions of your teeth and professional-grade whitening gel, ensuring optimal contact with tooth surfaces while minimizing gum exposure."
    ],
    faqs: [
      {
        id: 1,
        question: "How Long Do Teeth Whitening Results Last?",
        answer: "The longevity of teeth whitening results varies depending on your habits and lifestyle. Generally, professional whitening results can last from six months to two years. To extend your results, avoid or minimize consumption of staining substances like coffee, tea, red wine, and tobacco. Regular dental cleanings, good oral hygiene, and occasional touch-up treatments can help maintain your bright smile."
      },
      {
        id: 2,
        question: "Is Professional Teeth Whitening Safe?",
        answer: "Yes, professional teeth whitening under dental supervision is safe for most patients. Before recommending whitening, we evaluate your oral health to ensure you're a good candidate. Our professional whitening systems include protective measures for your gums and soft tissues. While some temporary sensitivity is normal, we can provide desensitizing treatments if needed. Professional whitening is much safer than unsupervised use of over-the-counter products."
      },
      {
        id: 3,
        question: "Why Choose Professional Whitening Over Store-Bought Products?",
        answer: "Professional whitening offers several advantages over store-bought options. The whitening agents we use are stronger and more effective, delivering more dramatic results in less time. Our custom-fitted trays ensure even application and minimize gum irritation. Professional supervision means we can address any sensitivity issues immediately. Additionally, we can determine if discoloration is due to an underlying issue that whitening won't resolve, saving you time and money."
      },
      {
        id: 4,
        question: "Will Teeth Whitening Work on All Discoloration?",
        answer: "Professional whitening works best on extrinsic stains—those on the outer layer of teeth caused by foods, beverages, and tobacco. It's less effective on intrinsic discoloration (stains inside the tooth structure) from medications, trauma, or excessive fluoride exposure. Whitening also won't change the color of dental restorations like fillings, crowns, or veneers. During your consultation, we'll assess your specific situation and recommend the most effective approach for achieving your desired results."
      },
      {
        id: 5,
        question: "How Do I Maintain My Whitening Results?",
        answer: "To maintain your whitening results, practice excellent oral hygiene including brushing twice daily and flossing daily. Use a whitening toothpaste once or twice a week. Rinse your mouth with water after consuming staining foods and beverages. Consider using a straw when drinking beverages that stain. Schedule regular dental cleanings to remove surface stains. Avoid or minimize tobacco use. Periodic touch-up treatments, either in-office or with your take-home kit, can help maintain your bright smile."
      }
    ],
    specialists: [
      {
        id: 1,
        name: "Dr. Christopher Reed",
        title: "Cosmetic Specialist",
        image: "https://picsum.photos/id/1025/300/300"
      },
      {
        id: 2,
        name: "Dr. Samantha Taylor",
        title: "Aesthetic Dentist",
        image: "https://picsum.photos/id/1014/300/300"
      },
      {
        id: 3,
        name: "Dr. Brandon Miller",
        title: "Whitening Expert",
        image: "https://picsum.photos/id/1006/300/300"
      }
    ]
  };

  return <ServiceTemplate {...pageData} />;
}

export default WhiteningBoost;
