

// Données structurées pour les FAQ
const faqData = [
  {
    question: "Quels sont les documents nécessaires à l'ouverture d'un compte à vue ?",
    answer: "Pour ouvrir un compte courant, vous devez vous munir d'une pièce d'identité valide et d'un justificatif de domicile récent."
  },
  {
    question: "Quels sont les frais liés au compte à vue ?",
    answer: "Le compte courant BSIC ne comporte pas de frais de gestion mensuels. Toutefois, des frais peuvent être appliqués pour les découverts ou les opérations spécifiques."
  },
  {
    question: "Puis-je personnaliser ma carte bancaire ?",
    answer: "Oui, vous pouvez choisir entre une carte de débit ou de crédit, avec des options personnalisées en fonction de vos besoins."
  },
  {
    question: "Comment gérer mon découvert autorisé ?",
    answer: "Vous pouvez personnaliser votre limite de découvert autorisé en contactant notre service clientèle ou en ligne via votre portail client."
  }
];

// Composant JSX
const CurrentAccountUiThree = () => {
  return (
    <div>
      {/* Section Comment ouvrir un compte courant */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Comment ouvrir un compte à vue</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Remplissez une demande en ligne ou rendez-vous dans l&apos;une de nos agences BSC-Bank.</li>
          <li>Soumettre les documents requis, tels qu&apos;une pièce d&apos;identité valide et un justificatif de domicile.</li>
          <li>Recevez votre carte bancaire et les informations relatives à votre compte.</li>
          <li>Commencez à utiliser votre compte pour gérer efficacement vos finances quotidiennes.</li>
        </ol>
      </section>

      {/* Section FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Questions fréquemment posées (FAQ)</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{index + 1}. {faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Contact */}
      <section className="bg-blue-500 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Nous contacter</h2>
        <p className="mb-4">
        Pour en savoir plus sur le compte courant BSC-Bank ou pour toute question, rendez-vous dans l&apos;une de nos agences ou contactez notre service clientèle au 01 23 45 67 89.
        </p>
        <p>Notre équipe est à votre disposition pour vous aider et répondre à toutes vos questions.</p>
      </section>
    </div>
  );
};

export default CurrentAccountUiThree;
