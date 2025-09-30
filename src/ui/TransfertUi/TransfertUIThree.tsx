"use client"

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Structure de données pour les questions fréquentes
const faqItems = [
  {
    id: 1,
    question: "Combien de temps durent les transferts ?",
    answer: "Les virements nationaux sont généralement effectués en un jour ouvrable. Les virements internationaux peuvent prendre de 2 à 5 jours ouvrables, en fonction du pays de destination et de la banque.",
  },
  {
    id: 2,
    question: "Existe-t-il des limites de transfert ?",
    answer: "Les limites de transfert varient en fonction du type de compte et de la méthode de transfert. Veuillez consulter les détails de votre compte ou contacter notre service clientèle pour obtenir des informations spécifiques sur vos limites.",
  },
];

// Composant des FAQ
const FAQSection = () => {
  const [selected, setSelected] = useState<number|null>(null);

  const toggleSelected = (id:number) => {
    setSelected(selected !== id ? id : null);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Questions fréquemment posées</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4">
              <button
                onClick={() => toggleSelected(item.id)}
                className="flex justify-between items-center w-full p-4 bg-gray-200 hover:bg-gray-300 transition duration-300"
              >
                <span className="font-semibold">{item.question}</span>
                <div className="w-5 h-5">
                  {selected === item.id ? <FaChevronUp/> : <FaChevronDown/>}
                  
                </div>
              </button>
              {selected === item.id && (
                <div className="p-4 bg-gray-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant d'appel à l'action (CTA) pour les transferts
const CTASection = () => {
  return (
    <section className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à effectuer un transfert ?</h2>
        <p className="text-xl mb-8">Faites l&apos;expérience de la facilité et de la sécurité des services de transfert de BSIC-Bank.</p>
        <a href="/login">
          <button className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
          Commencez votre transfert maintenant
          </button>
        </a>
      </div>
    </section>
  );
};

// Composant principal
const TranfertUiThree = () => {
  return (
    <div>
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default TranfertUiThree;
