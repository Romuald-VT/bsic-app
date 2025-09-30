
import { FaShieldAlt, FaBolt, FaThumbsUp, FaClock } from "react-icons/fa";

// Structure des données pour les avantages de la banque
const depositBenefits = [
  {
    icon: <FaShieldAlt/>,
    title: "Sécurité",
    description: "Vos fonds sont protégés grâce à nos systèmes de sécurité de pointe.",
  },
  {
    icon: <FaBolt/>,
    title: "Vitesse",
    description: "Vos dépôts sont rapidement crédités sur votre compte.",
  },
  {
    icon: <FaThumbsUp/>,
    title: "Simplicité",
    description: "Nos procédures de dépôt sont simples et intuitives.",
  },
  {
    icon: <FaClock/>,
    title: "Disponibilité",
    description: "De nombreuses options de dépôt sont à votre disposition.",
  },
];

const DepositBenefits = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre banque pour vos dépôts ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {depositBenefits.map((benefit, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <div className="text-4xl text-blue-500 mb-4">{benefit.icon} </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepositBenefits;
