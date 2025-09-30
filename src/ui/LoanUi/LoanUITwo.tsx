

// Données structurées pour les options de prêts
const loanOptions = [
  {
    category: "Prêts à la consommation",
    link: "/personal/loans/consumer",
    loans: [
      "Prêt personnel",
      "Prêt automobile",
      "Prêt à la rénovation"
    ]
  },
  {
    category: "Prêts immobiliers",
    link: "/personal/loans/property",
    loans: [
      "Prêt immobilier conventionnel",
      "Prêt relais",
      "Prêt à la rénovation immobilière"
    ]
  },
  {
    category: "Autres prêts",
    link: "/personal/loans/other",
    loans: [
      "Prêt aux entreprises",
      "Prêt étudiant"
    ]
  }
];

// Icône SVG réutilisable
const CheckIcon = () => (
  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const LoanSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos options de prêt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanOptions.map((option, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-4">{option.category}</h3>
              <ul className="mb-6 flex-grow">
                {option.loans.map((loan, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <CheckIcon />
                    {loan}
                  </li>
                ))}
              </ul>
              {/*
              <button href={option.link} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center">
              En savoir plus
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanSection;
