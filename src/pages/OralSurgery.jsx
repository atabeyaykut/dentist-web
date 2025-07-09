import React from 'react';
import ServiceTemplate from './ServiceTemplate';

/**
 * OralSurgery Page Component
 */
function OralSurgery() {
  // Page content
  const pageData = {
    title: "Oral Surgery",
    image: "https://picsum.photos/id/366/1200/600",
    aboutTitle: "About Oral Surgery Services",
    aboutContent: [
      "Our oral surgery services encompass a wide range of procedures designed to treat complex dental issues that require surgical intervention. Our skilled oral surgeons combine extensive training with state-of-the-art technology to provide safe, effective treatments with optimal results and minimal recovery time.",
      "We offer comprehensive consultation and personalized treatment plans for each patient. Using advanced 3D imaging technology, we can precisely plan procedures and visualize potential challenges before surgery begins. This approach ensures greater precision, reduced surgical time, and improved outcomes.",
      "From wisdom tooth extractions and dental implant placement to corrective jaw surgery and treatment of oral pathologies, our team is equipped to handle diverse surgical needs. We prioritize your comfort throughout the process, offering various sedation options to ensure a pain-free experience."
    ],
    faqs: [
      {
        id: 1,
        question: "How Should I Prepare for Oral Surgery?",
        answer: "Before your oral surgery, follow all pre-operative instructions provided by your surgeon. This typically includes fasting for 8-12 hours if receiving general anesthesia, arranging for someone to drive you home, wearing comfortable clothing, and avoiding smoking for at least 12 hours before surgery. Be sure to inform your surgeon about all medications you're taking and any medical conditions you have."
      },
      {
        id: 2,
        question: "What Can I Expect During Recovery from Oral Surgery?",
        answer: "Recovery varies depending on the procedure, but generally involves some swelling, discomfort, and possibly bruising for several days. Follow post-operative instructions carefully, including taking prescribed medications, applying ice as directed, eating soft foods, and avoiding strenuous activity. Complete healing may take several weeks, with follow-up appointments to monitor your progress."
      },
      {
        id: 3,
        question: "Is Oral Surgery Painful?",
        answer: "During the procedure, you'll be properly anesthetized so you won't feel pain. We offer various sedation options ranging from local anesthesia to general anesthesia depending on the complexity of the procedure and your comfort level. After surgery, some discomfort is normal but can be managed effectively with prescribed pain medications and following proper aftercare instructions."
      },
      {
        id: 4,
        question: "When Is Tooth Extraction Necessary?",
        answer: "Tooth extraction may be necessary when a tooth is severely damaged beyond repair from trauma or decay, when there's advanced periodontal disease causing loose teeth, to prepare for orthodontic treatment when teeth are crowded, when wisdom teeth are impacted or causing problems, or when primary teeth don't fall out in time for permanent teeth to erupt properly."
      },
      {
        id: 5,
        question: "What Are Dry Sockets and How Can I Prevent Them?",
        answer: "A dry socket occurs when the blood clot that forms after tooth extraction becomes dislodged, exposing bone and nerves. To prevent this painful condition, avoid smoking, using straws, spitting forcefully, or rinsing vigorously for at least 24-48 hours after extraction. Also, follow all post-operative instructions, maintain good oral hygiene, and eat soft foods until healing begins."
      }
    ],
    specialists: [
      {
        id: 1,
        name: "Dr. James Wilson",
        title: "Oral Surgeon",
        image: "https://picsum.photos/id/1012/300/300"
      },
      {
        id: 2,
        name: "Dr. Lisa Thompson",
        title: "Maxillofacial Surgeon",
        image: "https://picsum.photos/id/1011/300/300"
      },
      {
        id: 3,
        name: "Dr. Robert Garcia",
        title: "Surgical Specialist",
        image: "https://picsum.photos/id/338/300/300"
      }
    ]
  };

  return <ServiceTemplate {...pageData} />;
}

export default OralSurgery;
