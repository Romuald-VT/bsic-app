
import { FaLock, FaHeadset, FaMobileAlt } from 'react-icons/fa';

const cardData = [
  {
    id: 1,
    title: "Carte BSIC Essential",
    benefits: [
      "Idéal pour vos achats quotidiens",
      "Pas de frais annuels",
      "Accès à un réseau mondial de distributeurs automatiques de billets",
      "Sécurisé par la technologie de la puce et du sans contact",
    ],
    description: "Pour sa simplicité et son accessibilité. Gérez vos finances en toute sécurité, sans frais inutiles.",
    whyChoose: "Pourquoi choisir la carte BSIC Essential ?",
  },
  {
    id: 2,
    title: "Carte BSIC Premium",
    benefits: [
      "Conçu pour les voyageurs fréquents",
      "Protection contre la fraude et assurance voyage gratuite",
      "Accès aux salons VIP des aéroports",
      "Programme de récompenses pour chaque achat",
    ],
    description: "Elle offre des avantages exceptionnels aux globe-trotters et à ceux qui recherchent des privilèges exclusifs.",
    whyChoose: "Pourquoi choisir la carte BSIC Premium ?",
  },
  {
    id: 3,
    title: "Carte BSIC Business",
    benefits: [
      "Spécialement conçu pour les professionnels",
      "Contrôle facile des dépenses de l'entreprise",
      "Limites de crédit élevées",
      "Accès aux offres des partenaires",
    ],
    description: "Le partenaire idéal pour la gestion financière de votre entreprise, avec un contrôle total de vos flux de trésorerie.",
    whyChoose: "Pourquoi choisir la carte BSC Business ?",
  },
];

const commonBenefits = [
  {
    id: 1,
    icon: <FaLock/>,
    title: "Paiements sécurisés",
    description: "Technologie de sécurité avancée pour protéger vos transactions.",
  },
  {
    id: 2,
    icon: <FaHeadset/>,
    title: "Service clientèle 24/7",
    description: "Une assistance disponible à tout moment, où que vous soyez.",
  },
  {
    id: 3,
    icon: <FaMobileAlt/>,
    title: "Gestion mobile",
    description: "Accédez aux informations de votre carte via notre application mobile BSIC-Bank.",
  },
];

const CreditCardUiTwo = () => {
  return (
    <div>
      <section className="mb-12">
        <p className="text-lg mb-4">
        A la BSIC-Bank, nous comprenons que chaque client a des besoins financiers différents. C&apos;est pourquoi nous avons conçu une gamme de cartes de crédit adaptées à vos besoins quotidiens.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Nos cartes de crédit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{card.id}. {card.title}</h3>
              <ul className="list-disc list-inside mb-4">
                {card.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <p className="font-bold">{card.whyChoose}</p>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Avantages communs à toutes nos cartes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commonBenefits.map((benefit) => (
            <div key={benefit.id} className="bg-indigo-100 rounded-lg p-6 text-center">
              <div className="flex flex-col justify-center items-center text-4xl text-blue-500 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreditCardUiTwo;
