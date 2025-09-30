
import { FaCheckCircle, FaSync, FaMobileAlt, FaCoins } from 'react-icons/fa';

const savingsReasons = [
  {
    title: "1. Taux d'intérêt compétitif",
    description: "Profitez de taux d'intérêt attractifs qui permettent à votre épargne de fructifier au fil du temps. Plus vous épargnez, plus vous gagnez, les intérêts étant calculés et versés régulièrement."
  },
  {
    title: "2. Flexibilité de retrait",
    description: "Avec le compte d'épargne BSIC, vous avez la possibilité de retirer de l'argent quand vous en avez besoin, sans frais ni pénalités. Accédez à vos fonds 24h/24 et 7j/7 via notre application mobile ou notre réseau d'agences."
  },
  {
    title: "3. Pas de frais de gestion",
    description: "Ouvrez et maintenez votre compte d'épargne sans frais mensuels ni coûts cachés. Conservez chaque centime de vos intérêts durement gagnés et épargnez en toute sérénité."
  },
  {
    title: "4. Sécurité maximale",
    description: "Votre argent est protégé par les normes de sécurité bancaire les plus strictes. De plus, vos dépôts sont couverts par notre système d'assurance-dépôts, qui garantit la sécurité de vos fonds, quelles que soient les circonstances."
  }
];

const savingsBenefits = [
  {
    icon: <FaCheckCircle/>,
    title: "Ouverture facile",
    description: "L'ouverture d'un compte d'épargne BSIC est simple et rapide. Vous pouvez le faire en ligne ou en agence avec un minimum de documents."
  },
  {
    icon: <FaSync/>,
    title: "Dépôts automatiques",
    description: "Mettez en place des virements automatiques de votre compte courant vers votre compte d'épargne pour épargner sans effort."
  },
  {
    icon: <FaMobileAlt/>,
    title: "Gestion en ligne et mobile",
    description: "Gérez facilement votre compte via notre application mobile ou notre site web. Vérifiez votre solde, transférez de l'argent et suivez la croissance de votre épargne à tout moment."
  },
  {
    icon: <FaCoins/>,
    title: "Pas de montant minimum",
    description: "Commencez à épargner avec le montant de votre choix, sans avoir à effectuer un dépôt initial élevé."
  }
];

const SavingsSection = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section className="mb-12">
        <p className="text-lg mb-4">
        A la BSIC-Bank, nous comprenons l&apos;importance d&apos;épargner pour l&apos;avenir tout en assurant la sécurité de votre épargne. 
        Notre compte d&apos;épargne BSIC est conçu pour répondre à vos besoins d&apos;épargne à court, moyen et long terme, en offrant des taux compétitifs et des avantages exclusifs.
        </p>
      </section>

      {/* Why Open a BSC-Bank Savings Account */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Pourquoi ouvrir un compte d&apos;épargne BSIC-Bank ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {savingsReasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of the BSC-Bank Savings Account */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Avantages du compte d&apos;épargne BSIC-Bank</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {savingsBenefits.map((benefit, index) => (
            <div key={index} className="bg-indigo-100 rounded-lg p-6">
              <div className="flex flex-row justifyy-center items-center text-4xl text-blue-500 mb-4">{benefit.icon} </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SavingsSection;
