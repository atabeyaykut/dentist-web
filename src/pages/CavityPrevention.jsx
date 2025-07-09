import React from 'react';
import ServiceTemplate from './ServiceTemplate';

/**
 * CavityPrevention Page Component
 */
function CavityPrevention() {
  // Page content
  const pageData = {
    title: "Cavity Prevention",
    image: "https://picsum.photos/id/304/1200/600",
    aboutTitle: "About Cavity Prevention Services",
    aboutContent: [
      "Our cavity prevention program is designed to help patients of all ages maintain optimal oral health and avoid tooth decay. We believe that preventive care is the foundation of good dental health, and our comprehensive approach combines professional treatments with education on home care practices.",
      "During your preventive care visits, our dental team provides thorough cleanings to remove plaque and tartar buildup that regular brushing can't reach. We also offer fluoride treatments to strengthen tooth enamel and dental sealants to protect vulnerable areas from decay, particularly effective for children and teenagers.",
      "Education is a key component of our cavity prevention services. We take time to demonstrate proper brushing and flossing techniques, discuss diet choices that impact dental health, and create personalized prevention plans based on your specific risk factors and oral health needs."
    ],
    faqs: [
      {
        id: 1,
        question: "How Often Should I Have Professional Dental Cleanings?",
        answer: "Most patients benefit from professional cleanings every six months. However, if you have certain risk factors like gum disease, a history of frequent cavities, or medical conditions that affect oral health (such as diabetes), we may recommend more frequent visits, typically every 3-4 months. Your dentist will create a personalized schedule based on your specific needs."
      },
      {
        id: 2,
        question: "Are Dental Sealants Just for Children?",
        answer: "While dental sealants are commonly recommended for children as soon as their permanent molars erupt, adults can also benefit from them. Anyone with deep grooves in their teeth or who is prone to cavities may be a good candidate for sealants. They're a simple, painless, and effective way to protect vulnerable tooth surfaces from decay."
      },
      {
        id: 3,
        question: "How Does Diet Affect Cavity Formation?",
        answer: "Diet plays a crucial role in cavity formation. Frequent consumption of sugary or acidic foods and beverages provides fuel for cavity-causing bacteria and can weaken tooth enamel. Sticky foods that cling to teeth are particularly problematic. A diet rich in fruits, vegetables, calcium, and phosphorus helps strengthen teeth, while drinking water throughout the day helps rinse away food particles and bacteria."
      },
      {
        id: 4,
        question: "Is Fluoride Safe and Necessary?",
        answer: "Fluoride is both safe and effective when used appropriately. It works by strengthening tooth enamel and making it more resistant to acid attacks that cause decay. While many communities have fluoridated water, additional fluoride treatments may be beneficial, especially for those at higher risk for cavities. We carefully control the amount used in professional treatments to ensure safety while maximizing benefits."
      },
      {
        id: 5,
        question: "Can Cavities Develop Without Symptoms?",
        answer: "Yes, cavities often develop without any noticeable symptoms in their early stages. By the time you experience pain or sensitivity, the decay has typically progressed significantly. This is why regular dental check-ups with x-rays are essential—they allow us to detect cavities when they're small and easier to treat, often before they cause discomfort or require extensive treatment."
      }
    ],
    specialists: [
      {
        id: 1,
        name: "Dr. Sophia Lee",
        title: "Preventive Specialist",
        image: "https://picsum.photos/id/64/300/300"
      },
      {
        id: 2,
        name: "Dr. Daniel Martinez",
        title: "Pediatric Dentist",
        image: "https://picsum.photos/id/91/300/300"
      },
      {
        id: 3,
        name: "Dr. Rachel Kim",
        title: "Family Dentist",
        image: "https://picsum.photos/id/1062/300/300"
      }
    ]
  };

  return <ServiceTemplate {...pageData} />;
}

export default CavityPrevention;
