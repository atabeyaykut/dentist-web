import React from 'react';
import ServiceTemplate from './ServiceTemplate';

/**
 * GumCare Page Component
 */
function GumCare() {
  // Page content
  const pageData = {
    title: "Gum Care",
    image: "https://picsum.photos/id/237/1200/600",
    aboutTitle: "About Gum Care Services",
    aboutContent: [
      "Our comprehensive Gum Care services focus on preventing, diagnosing, and treating gum disease to maintain not only your oral health but your overall well-being. Research has established strong connections between gum health and systemic conditions such as heart disease, diabetes, and respiratory issues.",
      "We offer thorough periodontal evaluations that include measuring gum pocket depths, assessing gum recession, checking for inflammation, and examining bone levels with digital radiographs when necessary. This detailed assessment allows us to detect early signs of gum disease before significant damage occurs.",
      "Our treatment options range from non-surgical therapies like scaling and root planing (deep cleaning) to advanced procedures for more severe cases. We also provide personalized home care instructions and recommend specialized products to help you maintain healthy gums between professional visits."
    ],
    faqs: [
      {
        id: 1,
        question: "What Are the Warning Signs of Gum Disease?",
        answer: "Early warning signs of gum disease include gums that bleed during brushing or flossing, red, swollen, or tender gums, persistent bad breath, receding gums that make teeth appear longer, pus between teeth and gums, loose or shifting teeth, changes in how your teeth fit together when biting, and pain when chewing. Since gum disease can be painless in its early stages, regular dental check-ups are essential for early detection."
      },
      {
        id: 2,
        question: "How Is Gum Disease Treated?",
        answer: "Treatment depends on the severity of the disease. Early-stage gingivitis can often be reversed with professional cleaning and improved home care. More advanced periodontal disease typically requires scaling and root planing—a deep cleaning procedure to remove tartar below the gumline and smooth rough root surfaces. Severe cases may require surgical interventions like flap surgery, bone or tissue grafts, or guided tissue regeneration. Ongoing maintenance therapy is essential after treatment."
      },
      {
        id: 3,
        question: "Can Gum Disease Be Prevented?",
        answer: "Yes, gum disease is largely preventable with good oral hygiene practices. Brush twice daily with fluoride toothpaste, floss daily to remove plaque between teeth, use an antimicrobial mouthwash, eat a balanced diet low in sugary foods and drinks, avoid tobacco products, and schedule regular dental check-ups and professional cleanings. Early intervention at the first signs of gum problems can prevent progression to more serious disease."
      },
      {
        id: 4,
        question: "Is Gum Disease Linked to Other Health Problems?",
        answer: "Research has shown strong associations between periodontal disease and several systemic health conditions. The inflammation and bacteria from gum disease can enter the bloodstream and potentially affect other parts of the body. Studies have linked gum disease to increased risk of heart disease, stroke, diabetes complications, respiratory diseases, and adverse pregnancy outcomes. Maintaining healthy gums may contribute to better overall health."
      },
      {
        id: 5,
        question: "What Is the Difference Between Regular Cleaning and Deep Cleaning?",
        answer: "A regular dental cleaning (prophylaxis) focuses on removing plaque and tartar from tooth surfaces above the gumline and is recommended for preventive maintenance in patients with healthy gums. A deep cleaning (scaling and root planing) is a therapeutic procedure for patients with gum disease that removes bacteria, calculus, and toxins from below the gumline and smooths the root surfaces to promote healing and gum reattachment. Deep cleaning may require multiple visits and local anesthesia for comfort."
      }
    ],
    specialists: [
      {
        id: 1,
        name: "Dr. Jennifer Hughes",
        title: "Periodontist",
        image: "https://picsum.photos/id/1013/300/300"
      },
      {
        id: 2,
        name: "Dr. Thomas Wright",
        title: "Gum Specialist",
        image: "https://picsum.photos/id/1003/300/300"
      },
      {
        id: 3,
        name: "Dr. Alicia Patel",
        title: "Periodontal Therapist",
        image: "https://picsum.photos/id/1002/300/300"
      }
    ]
  };

  return <ServiceTemplate {...pageData} />;
}

export default GumCare;
