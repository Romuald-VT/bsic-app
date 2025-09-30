

// Données pour les FAQ
const faqData = [
  {
    question: "1. Existe-t-il un montant minimum pour ouvrir un compte d'épargne ?",
    answer: "Non, il n'y a pas de montant minimum requis pour ouvrir un compte d'épargne à la BSIC-Bank. Vous pouvez commencer à épargner avec le montant qui vous convient."
  },
  {
    question: "2. Comment puis-je accéder à mes fonds ?",
    answer: "Vous pouvez accéder à vos fonds en ligne, via notre application mobile ou en vous rendant dans l'une de nos agences."
  },
  {
    question: "3. Puis-je mettre en place des dépôts automatiques sur mon compte d'épargne ?",
    answer: "Oui, vous pouvez programmer des versements automatiques réguliers de votre compte à vue vers votre compte d'épargne."
  },
  {
    question: "4. Mes fonds sont-ils protégés ?",
    answer: "Oui, tous les fonds déposés sur votre compte d'épargne sont protégés par le système d'assurance-dépôts de la BSIC-Bank, ce qui garantit la sécurité de votre argent."
  }
];

const SavingsFAQ = () => {
  return (
    <div>
      {/* Section: How to Open Your Savings Account */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Comment ouvrir un compte d&apos;épargne</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Ouvrez un compte en ligne ou rendez-vous dans l&apos;une de nos agences BSIC-Bank.</li>
          <li>Remplissez un formulaire simple avec vos informations personnelles.</li>
          <li>Effectuez votre premier dépôt - le montant de votre choix, sans minimum requis.</li>
          <li>Commencez à épargner et faites fructifier vos fonds en toute sécurité.</li>
        </ol>
      </section>

      {/* Section: Frequently Asked Questions (FAQ) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Questions fréquemment posées (FAQ)</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Need More Information */}
      <section className="bg-blue-500 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Besoin de plus d&apos;informations ?</h2>
        <p className="mb-4">Pour en savoir plus sur le Livret BSC-Bank, rendez-vous dans l&apos;une de nos agences ou contactez notre service clientèle au 01 23 45 67 89.</p>
        <p>Vous pouvez également utiliser notre chat en ligne pour obtenir une assistance immédiate.</p>
      </section>
    </div>
  );
};

export default SavingsFAQ;
