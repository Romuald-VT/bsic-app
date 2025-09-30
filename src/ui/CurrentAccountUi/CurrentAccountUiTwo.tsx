import { FaMobileAlt, FaCreditCard, FaExchangeAlt, FaPiggyBank, FaHandHoldingUsd, FaBolt, FaSync, FaBell, FaLaptop } from 'react-icons/fa';

// Données pour les sections
const currentAccountFeatures = [
  {
    icon: <FaMobileAlt/>,
    title: 'Gestion simplifiée',
    description: "Profitez d'une gestion financière simplifiée grâce à notre application mobile intuitive et à notre plateforme en ligne sécurisée. Vérifiez votre solde, effectuez des virements et suivez vos transactions en temps réel."
  },
  {
    icon: <FaCreditCard/>,
    title: 'Carte de débit ou de crédit',
    description: "Recevez une carte de débit ou de crédit liée à votre compte courant, vous permettant d'effectuer des achats en ligne et en magasin en toute sécurité. De plus, vous bénéficiez de services supplémentaires tels qu'une assurance voyage et des réductions auprès de nos partenaires."
  },
  {
    icon: <FaExchangeAlt/>,
    title: 'Retraits et dépôts flexibles',
    description: 'Effectuez des retraits et des dépôts dans nos agences et nos distributeurs automatiques de billets partout en France. Vous avez également la possibilité de gérer vos dépôts et retraits via notre application mobile.'
  },
  {
    icon: <FaPiggyBank/>,
    title: 'Pas de frais de gestion',
    description: 'Notre compte courant BSIC ne comporte pas de frais de gestion mensuels. Profitez de la liberté de gérer vos finances sans frais supplémentaires, avec des services transparents et sans coûts cachés.'
  },
  {
    icon: <FaHandHoldingUsd/>,
    title: 'Découvert autorisé',
    description: "Bénéficiez d'une limite de découvert autorisée pour gérer avec souplesse les situations financières imprévues. Vous pouvez également personnaliser votre limite de découvert en fonction de vos besoins."
  }
];

const currentAccountBenefits = [
  {
    icon: <FaBolt/>,
    title: 'Ouverture rapide',
    description: 'Ouvrez un compte courant BSIC en quelques minutes, en ligne ou en agence, avec un minimum de formalités.'
  },
  {
    icon: <FaSync/>,
    title: 'Virements automatiques et prélèvements automatiques',
    description: 'Mettez en place des virements réguliers et des prélèvements automatiques pour faciliter la gestion de vos paiements récurrents.'
  },
  {
    icon: <FaBell/>,
    title: 'Alertes et notifications',
    description: 'Recevez des alertes personnalisées pour suivre vos dépenses, transferts et paiements en temps réel, directement sur votre téléphone.'
  },
  {
    icon: <FaLaptop/>,
    title: 'Services de banque en ligne',
    description: "Gérez votre compte depuis n'importe où grâce à notre application mobile ou notre site web sécurisé. Effectuez vos opérations bancaires en toute simplicité."
  }
];

// Composant JSX
const CurrentAccountUiTwo = () => {
  return (
    <div>
      {/* Section Introduction */}
      <section className="mb-12">
        <p className="text-lg mb-4">
        A la BSIC-Bank, nous comprenons que votre compte courant est au cœur de vos finances quotidiennes. C&apos;est pourquoi nous avons conçu notre compte courant BSC pour vous offrir un maximum de flexibilité, une gestion facile et des services adaptés à vos besoins.
        </p>
      </section>

      {/* Section Why Choose */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Pourquoi choisir le compte courant de BSIC-Bank ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentAccountFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className='className="flex felx-col justify-center items-center text-4xl text-blue-500 mb-4"'>{feature.icon}  </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Avantages du compte courant de BSIC-Bank</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentAccountBenefits.map((benefit, index) => (
            <div key={index} className="bg-blue-100 rounded-lg p-6">
              <div className="text-4xl text-blue-500 mb-4"> icon={benefit.icon}  </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CurrentAccountUiTwo;
