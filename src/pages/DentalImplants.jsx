import React from 'react';
import ServiceTemplate from './ServiceTemplate';

/**
 * DentalImplants Page Component
 */
function DentalImplants() {
  // Page content
  const pageData = {
    title: "Dental Implants",
    image: "https://picsum.photos/id/287/1200/600",
    aboutTitle: "About Dental Implants Services",
    aboutContent: [
      "Dental implants are the gold standard for replacing missing teeth. They provide a permanent solution that looks, feels, and functions just like your natural teeth. Unlike dentures or bridges, dental implants replace both the root and crown of your missing tooth, preserving jawbone health and preventing facial structure changes.",
      "The implant process begins with a thorough evaluation to ensure you're a good candidate. Next, a titanium post is surgically placed in your jawbone to serve as an artificial tooth root. After a healing period during which the implant fuses with your bone, we attach a custom-made crown that matches your natural teeth perfectly.",
      "With proper care, dental implants can last a lifetime. They allow you to eat, speak, and smile with complete confidence, knowing your replacement teeth won't slip or shift. Implants also help maintain facial structure and prevent the bone loss that typically occurs when teeth are missing."
    ],
    faqs: [
      {
        id: 1,
        question: "Am I a Good Candidate for Dental Implants?",
        answer: "Most adults with good general health are candidates for dental implants. Ideal candidates have healthy gum tissue, adequate bone density to support the implant, and good oral hygiene habits. Some conditions like uncontrolled diabetes, severe gum disease, or certain medications may affect eligibility. We conduct a thorough evaluation to determine if implants are right for you."
      },
      {
        id: 2,
        question: "How Long Do Dental Implants Last?",
        answer: "With proper care and maintenance, dental implants can last a lifetime. The implant itself (the titanium post) has a success rate of over 95% at 10 years. The crown attached to the implant may need replacement after 10-15 years due to normal wear and tear, similar to natural teeth."
      },
      {
        id: 3,
        question: "Is the Dental Implant Procedure Painful?",
        answer: "Most patients report that dental implant surgery is less uncomfortable than they expected. The procedure is performed under local anesthesia, so you won't feel pain during the surgery. Some discomfort, swelling, and bruising are normal after the procedure, but these symptoms are typically manageable with over-the-counter pain medications and usually subside within a few days."
      },
      {
        id: 4,
        question: "How Do I Care for My Dental Implants?",
        answer: "Dental implants require the same care as natural teeth: brushing twice daily, flossing daily, and regular dental check-ups. While implants can't develop cavities, the surrounding gum tissue can become infected without proper care. Using a soft-bristled toothbrush and non-abrasive toothpaste is recommended to avoid scratching the implant crown."
      },
      {
        id: 5,
        question: "How Much Do Dental Implants Cost?",
        answer: "The cost of dental implants varies depending on factors like the number of implants needed, whether additional procedures (like bone grafting) are required, and the type of restoration. While implants may have a higher initial cost than alternatives like bridges or dentures, their longevity and benefits often make them more cost-effective in the long run. We offer financing options to help make this investment in your oral health more affordable."
      }
    ],
    specialists: [
      {
        id: 1,
        name: "Dr. Sarah Chen",
        title: "Implant Specialist",
        image: "https://picsum.photos/id/64/300/300"
      },
      {
        id: 2,
        name: "Dr. Michael Rodriguez",
        title: "Prosthodontist",
        image: "https://picsum.photos/id/177/300/300"
      },
      {
        id: 3,
        name: "Dr. Emily Washington",
        title: "Oral Surgeon",
        image: "https://picsum.photos/id/65/300/300"
      }
    ]
  };

  return <ServiceTemplate {...pageData} />;
}

export default DentalImplants;
