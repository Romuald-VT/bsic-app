'use client'
import { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Comment réinitialiser mon mot de passe de banque en ligne ?",
    answer:
      "Vous pouvez réinitialiser votre mot de passe en cliquant sur le lien Mot de passe oublié sur la page de connexion de notre plateforme de banque en ligne. Suivez les instructions pour vérifier votre identité et créer un nouveau mot de passe.",
  },
  {
    id: 2,
    question: "Que dois-je faire si je perds ma carte de débit ?",
    answer:
      "Si vous avez perdu votre carte de débit ou si vous pensez qu'elle a été volée, veuillez appeler immédiatement notre ligne de services 24 heures sur 24 et 7 jours sur 7 au 1-800-BSC-CARD pour le signaler et demander un remplacement.",
  },
  {
    id: 3,
    question: "Comment puis-je demander un prêt ?",
    answer:
      "Vous pouvez demander un prêt en ligne sur notre site web ou vous rendre dans l'une de nos agences. Vous devrez fournir des informations personnelles et des documents à l'appui de votre demande.",
  },
  // Vous pouvez ajouter d'autres FAQ ici sous forme d'objets.
];

const ContactUiFour = () => {
  const [selected, setSelected] = useState<number | null>(null); // Typage explicite

  const toggleFAQ = (id: number) => {
    setSelected(selected !== id ? id : null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Questions fréquemment posées
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex justify-between items-center w-full p-4 bg-gray-200 hover:bg-gray-300 transition duration-300"
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`w-5 h-5 ${
                    selected === faq.id ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {selected === faq.id && (
                <div className="p-4 bg-gray-100">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUiFour;
