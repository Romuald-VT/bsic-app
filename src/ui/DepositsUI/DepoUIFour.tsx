"use client"

import {useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Structure des données pour les FAQs
const faqs = [
  {
    question: "Quelles sont les heures d'ouverture de l'agence ?",
    answer:
      "Nos agences sont généralement ouvertes du lundi au vendredi de 9h à 17h. Certaines agences peuvent avoir des horaires prolongés ou être ouvertes le samedi. Consultez notre localisateur d'agences pour plus de détails.",
  },
];

const FaqSection = () => {
  const [selected, setSelected] = useState<number|null>(null);

  // Fonction pour gérer l'affichage des réponses
  const toggleFaq = (index:number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquemment posées</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-4 bg-gray-200 hover:bg-gray-300 transition duration-300"
              >
                <span className="font-semibold">{faq.question}</span>
                <div className={`w-5 h-5 ${selected === index ? "transform rotate-180" : ""}`}>
                  {selected === index ? <FaChevronUp/> : <FaChevronDown/>} 
                </div>
              </button>
              {selected === index && (
                <div className="p-4 bg-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HelpSection = () => {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Besoin d&apos;aide pour vos dépôts ?</h2>
        <p className="mb-8">
        N&apos;hésitez pas à contacter notre service clientèle si vous avez besoin d&apos;informations supplémentaires.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 mr-4"
        >
          Contacter un conseiller
        </a>
        <a
          href="/contact"
          className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-500 transition duration-300"
        >
          Trouver une agence
        </a>
      </div>
    </section>
  );
};

const MainComponent = () => {
  return (
    <div>
      <FaqSection />
      <HelpSection />
    </div>
  );
};

export default MainComponent;
