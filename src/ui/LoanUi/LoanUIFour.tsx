import { FaPercentage, FaCalendarAlt, FaUserFriends, FaShieldAlt } from "react-icons/fa";

// Données structurées pour chaque élément de la section "Why Choose Bsc-bank Loans?"
const reasons = [
  {
    icon: <FaPercentage/>,
    title: "Tarifs compétitifs",
    description: "Bénéficiez de taux d'intérêt parmi les meilleurs du secteur."
  },
  {
    icon: <FaCalendarAlt/>,
    title: "Conditions flexibles",
    description: "Choisissez des modalités de remboursement adaptées à votre situation financière."
  },
  {
    icon: <FaUserFriends/>,
    title: "Soutien personnel",
    description: "Bénéficiez des conseils de nos experts en prêts."
  },
  {
    icon: <FaShieldAlt/>,
    title: "Processus sécurisé",
    description: "Demandez des prêts en toute confiance grâce à notre système sécurisé."
  }
];

const WhyChooseLoans = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir BSIC-Bank pour vos prêts ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              {/* Utilisation de la classe icône */}
              <div className="flex flex-col justify-center items-center text-4xl text-blue-500 mb-4">{reason.icon}  </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLoans;
