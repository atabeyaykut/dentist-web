import React from 'react';
import ServiceTemplate from './ServiceTemplate';

/**
 * EmergencyDentistry Page Component
 */
function EmergencyDentistry() {
  // Page content
  const pageData = {
    title: "Emergency Dentistry",
    image: "https://picsum.photos/id/1059/1200/600",
    aboutTitle: "About Emergency Dentistry Services",
    aboutContent: [
      "I enjoy getting to know my patients and building meaningful relationships. I understand that each person has their own unique dental needs and diverse cultural backgrounds. I strive to actively listen and empower them to be an advocate for the health and wellness goals that are important to them.",
      "I'm dedicated to providing compassionate and individualized care by promoting evidence-based dentistry and education and practicing preventive medicine. I communicate about practicing preventive medicine and helping patients manage acute and chronic health conditions, mental health.",
      "I enjoy by doing almost any outdoor activity, including hiking, running, and exploring with our kiddos. I enjoy spending time with family and friends. I also strive to live mindfully and intentionally by creating uplifting routines and limiting media."
    ],
    faqs: [
      {
        id: 1,
        question: "Are Regular Dental Cleanings Necessary?",
        answer: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable."
      },
      {
        id: 2,
        question: "Do I Need to See a Dentist Even If My Teeth Feel Fine?",
        answer: "Regular dental check-ups are essential even when your teeth feel fine. Many dental issues develop without symptoms until they're advanced. Dentists can detect problems early, saving you pain and expense. Preventive care helps maintain oral health and can identify systemic health issues that first show signs in the mouth."
      },
      {
        id: 3,
        question: "What's a Dental Cleaning Like at Ruby Canyon Dental?",
        answer: "A dental cleaning at Ruby Canyon Dental is thorough yet comfortable. Our hygienists use specialized tools to remove plaque and tartar, polish your teeth, and provide fluoride treatment if needed. We also perform oral cancer screenings and offer personalized oral hygiene advice. The entire process typically takes 45-60 minutes."
      },
      {
        id: 4,
        question: "When Should I Change My Toothbrush?",
        answer: "You should replace your toothbrush every 3-4 months, or sooner if the bristles become frayed or worn. After illnesses, it's also a good idea to replace your toothbrush to prevent reinfection. Regular replacement ensures effective cleaning and maintains good oral hygiene."
      },
      {
        id: 5,
        question: "How Do I Know If I Have Gum Disease?",
        answer: "Signs of gum disease include red, swollen, or tender gums; bleeding while brushing or flossing; receding gums; persistent bad breath; loose teeth; and changes in how your teeth fit together. Early detection is crucial, so schedule an appointment if you notice any of these symptoms. Regular dental check-ups help catch gum disease in its early, more treatable stages."
      }
    ],
    specialists: [
      {
        id: 1,
        name: "Mark Potter",
        title: "Cosmetic Dentistry",
        image: "https://picsum.photos/id/1027/300/300"
      },
      {
        id: 2,
        name: "Anna Middleton",
        title: "Preventive Dentistry",
        image: "https://picsum.photos/id/1000/300/300"
      },
      {
        id: 3,
        name: "John Pierson, RDH",
        title: "Orthodontic Solutions",
        image: "https://picsum.photos/id/1074/300/300"
      }
    ]
  };

  return <ServiceTemplate {...pageData} />;
}

export default EmergencyDentistry;
