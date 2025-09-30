import { FaExchangeAlt, FaGlobe, FaMobileAlt } from "react-icons/fa";

// Structure des données pour les options de transfert
const transferOptions = [
  {
    icon: <FaExchangeAlt/>,
    title: "Transferts nationaux",
    description: "Envoyer de l'argent vers des comptes à l'intérieur du pays rapidement et facilement.",
  },
  {
    icon: <FaGlobe/>,
    title: "Transferts internationaux",
    description: "Transférez des fonds vers des comptes dans le monde entier à des taux de change compétitifs.",
  },
  {
    icon: <FaMobileAlt/>,
    title: "Mobile Transfers",
    description: "Envoyer de l'argent instantanément à d'autres clients de BSIC-Bank en utilisant leur numéro de téléphone.",
  },
];

// Section des options de transfert
const TransferOptionsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Options de transfert</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transferOptions.map((option, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6">
              <div className="flex flex-col justify-center items-center text-4xl text-blue-500 mb-4">{option.icon}  </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Structure des données pour les éléments de sécurité
const securityPoints = [
  "Cryptage de bout en bout pour tous les transferts",
  "Détection et prévention de la fraude en temps réel",
  "Secure login with biometric authentication",
  "Limites de transactions et alertes en cas d'activité inhabituelle",
];

// Section Sécurité
const SecuritySection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">La sécurité d&apos;abord</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
          Chez BSIC-Bank, nous donnons la priorité à la sécurité de vos transferts. Notre cryptage avancé et notre authentification à plusieurs facteurs garantissent que votre argent et vos informations personnelles sont protégés à tout moment.
          </p>
          <ul className="list-disc list-inside space-y-2">
            {securityPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Composant principal
const TranfertUiTwo = () => {
  return (
    <div>
      <TransferOptionsSection />
      <SecuritySection />
    </div>
  );
};

export default TranfertUiTwo;
