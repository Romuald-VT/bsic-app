

const stepsToGetCard = [
  "Ouvrez un compte BSIC-Bank en ligne ou dans une agence.",
  "Choisissez la carte qui correspond à vos besoins.",
  "Activez votre carte instantanément via l'application ou en contactant notre service clientèle.",
  "Profitez des avantages et de la flexibilité offerts par votre nouvelle carte BSIC-Bank.",
];

const ContactInfo = () => {
  return (
    <section className="bg-blue-500 text-white rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Nous contacter</h2>
      <p className="mb-4">Besoin de plus d&apos;informations sur nos cartes de crédit ?</p>
      <p className="mb-2">Contactez notre service clientèle au numero suivant <span className="font-bold">01 23 45 67 89</span></p>
      <p>ou visitez l&apos;une de nos succursales.</p>
      <p className="mt-4">Vous pouvez également consulter notre FAQ consacrée aux cartes de crédit pour obtenir des réponses à vos questions.</p>
    </section>
  );
};

const GetCardSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Comment obtenir votre carte BSC-Bank ?</h2>
      <ol className="list-decimal list-inside space-y-2">
        {stepsToGetCard.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </section>
  );
};

const CreditCardUiThree = () => {
  return (
    <div>
      <GetCardSection />
      <ContactInfo />
    </div>
  );
};

export default CreditCardUiThree;
