import { FaLock, FaMobileAlt, FaUserTie } from "react-icons/fa";

const features = [
  {
    icon: <FaLock/>,
    title: "Sécurité",
    description: "Votre argent et vos données sont protégés par des mesures de sécurité de pointe.",
  },
  {
    icon: <FaMobileAlt/>,
    title: "Simplicité",
    description: "Gérez facilement vos finances grâce à nos plateformes mobiles et web conviviales.",
  },
  {
    icon: <FaUserTie/>,
    title: "Soutien personnalisé",
    description: "Obtenez des conseils d'experts adaptés à votre situation financière unique et à vos objectifs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pourquoi choisir BSIC-Bank ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
               <div className="flex flex-col items-center text-4xl text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
