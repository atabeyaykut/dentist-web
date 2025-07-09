import React from 'react';
import ServiceTemplate from './ServiceTemplate';

/**
 * WisdomToothExtraction Page Component
 */
function WisdomToothExtraction() {
  // Page content
  const pageData = {
    title: "Wisdom Tooth Extraction",
    image: "https://picsum.photos/id/447/1200/600",
    aboutTitle: "About Wisdom Tooth Extraction Services",
    aboutContent: [
      "Our Wisdom Tooth Extraction service provides safe, comfortable removal of third molars (wisdom teeth) that are causing problems or have the potential to create issues in the future. Using advanced imaging technology and surgical techniques, we can precisely plan and perform extractions with minimal discomfort and recovery time.",
      "During your consultation, we'll conduct a thorough examination including 3D imaging to determine the position of your wisdom teeth and assess whether removal is necessary. We'll discuss your options for anesthesia and sedation to ensure your comfort during the procedure, ranging from local anesthesia to conscious sedation or general anesthesia.",
      "Our team provides comprehensive pre-operative and post-operative care instructions to promote smooth healing. We're available for follow-up care and to address any concerns that may arise during your recovery period, ensuring the best possible outcome from your wisdom tooth extraction."
    ],
    faqs: [
      {
        id: 1,
        question: "Why Do Wisdom Teeth Need to Be Removed?",
        answer: "Wisdom teeth often require removal because most people's jaws aren't large enough to accommodate these third molars properly. This can lead to impaction (teeth trapped in the jawbone or gums), crowding of existing teeth, improper eruption at problematic angles, increased risk of decay and gum disease due to difficult cleaning access, and potential cyst or tumor development around impacted teeth. Early removal is often recommended to prevent these complications and avoid more difficult extraction later in life."
      },
      {
        id: 2,
        question: "What Is the Recovery Process Like?",
        answer: "Recovery from wisdom tooth extraction typically takes about 7-10 days. The first 24-48 hours involve some bleeding, swelling, and discomfort, managed with prescribed pain medication and cold compresses. A soft food diet is recommended for several days. Most patients can return to school or work within 2-3 days, though strenuous activity should be avoided for a week. Complete healing of the extraction sites takes several weeks. Following post-operative instructions carefully helps prevent complications like dry socket and infection."
      },
      {
        id: 3,
        question: "At What Age Should Wisdom Teeth Be Removed?",
        answer: "Wisdom teeth are typically removed between the ages of 17 and 25, when the roots are about two-thirds formed. Extraction during this window often results in fewer complications and faster healing compared to removal later in life. However, the appropriate timing varies by individual. Regular dental check-ups during the teen years and early twenties, including panoramic X-rays, help monitor wisdom tooth development and determine the optimal time for extraction if needed."
      },
      {
        id: 4,
        question: "Do All Wisdom Teeth Need to Be Removed?",
        answer: "No, not everyone needs their wisdom teeth removed. Wisdom teeth that are healthy, fully erupted, positioned correctly, and can be properly cleaned may not require extraction. However, many people don't have enough jaw space for proper eruption, leading to potential problems. Your dentist will evaluate your specific situation using clinical examination and imaging to determine if removal is recommended based on current issues or the likelihood of future complications."
      },
      {
        id: 5,
        question: "What Are the Risks of Wisdom Tooth Extraction?",
        answer: "While wisdom tooth extraction is a common procedure with a high success rate, it does carry some risks. These include dry socket (painful inflammation when the blood clot is lost prematurely), infection, damage to adjacent teeth, temporary or permanent nerve damage affecting sensation in the lower lip or tongue, sinus complications for upper wisdom teeth, and jaw stiffness or difficulty opening. These complications are relatively rare, and your surgeon will discuss specific risks based on your individual case."
      }
    ],
    specialists: [
      {
        id: 1,
        name: "Dr. Marcus Johnson",
        title: "Oral Surgeon",
        image: "https://picsum.photos/id/1009/300/300"
      },
      {
        id: 2,
        name: "Dr. Sophia Williams",
        title: "Extraction Specialist",
        image: "https://picsum.photos/id/1008/300/300"
      },
      {
        id: 3,
        name: "Dr. David Chen",
        title: "Surgical Dentist",
        image: "https://picsum.photos/id/1007/300/300"
      }
    ]
  };

  return <ServiceTemplate {...pageData} />;
}

export default WisdomToothExtraction;
