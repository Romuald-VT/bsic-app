

// Données structurées pour les options de dépôt
const depositOptions = [
  {
    id: 1,
    title: "Dépôt en agence",
    advantages: ["Conseils personnalisés", "Sécurité maximale", "Flexibilité"],
    howTo: "Rendez-vous dans une agence avec votre pièce d'identité et le montant à déposer.",
  },
  {
    id: 2,
    title: "Dépôt par virement bancaire",
    advantages: ["Vitesse", "Simplicité"],
    howTo: "Fournir notre IBAN et les détails de votre compte lors du transfert.",
  },
  {
    id: 3,
    title: "Dépôt de chèque",
    advantages: ["Pratique"],
    howTo: "Remplissez le bulletin de versement joint à votre chéquier. Indiquez clairement le montant et le bénéficiaire.",
  },
  {
    id: 4,
    title: "Dépôt au guichet automatique",
    advantages: ["Disponible 24 heures sur 24, 7 jours sur 7", "Vitesse"],
    howTo: "Insérez votre carte bancaire et suivez les instructions à l'écran.",
  },
];

const DepositOptions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Différentes options de dépôt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {depositOptions.map((option) => (
            <div key={option.id} className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{option.id}. {option.title}</h3>
              <h4 className="font-semibold mb-2">Avantages :</h4>
              <ul className="list-disc list-inside mb-4">
                {option.advantages.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Comment faire ?</h4>
              <p>{option.howTo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepositOptions;
