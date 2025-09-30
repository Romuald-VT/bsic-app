
import { FaWallet, FaPiggyBank, FaHome } from "react-icons/fa";

const products = [
  {
    icon:<FaWallet/>,
    title: "Compte Courant",
    description: "Gérez votre argent au quotidien avec facilité et souplesse.",
    link: "/current-account",
  },
  {
    icon:<FaPiggyBank/>,
    title: "Compte Épargne",
    description: "Faites fructifier votre épargne grâce à nos livrets et à nos options d'assurance-vie.",
    link: "/savings-account",
  },
  {
    icon:<FaHome/>,
    title: "Crédit",
    description: "Réalisez tous vos projets grâce à nos solutions de financement flexibles.",
    link: "/loans",
  },
];

const FlagshipProducts = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos produits phares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className=" bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl text-blue-500 mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p>{product.description}</p>
              <a href={product.link} className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
              En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipProducts;
