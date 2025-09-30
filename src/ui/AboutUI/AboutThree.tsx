import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

// Données structurées pour les objectifs
const objectives = [
  "Fournir des solutions financières innovantes qui s'adaptent à l'évolution des besoins de nos clients",
  "Maintenir les normes les plus élevées en matière de sécurité et de respect de la vie privée dans toutes nos activités",
  "Favoriser l'éducation financière et donner à nos clients les moyens de prendre des décisions en connaissance de cause.",
  "Contribuer à une croissance économique durable dans les communautés que nous servons",
];

const AboutUIThree = () => {
  return (
    <div>
      {/* Section Objectifs */}
      <section className="mb-16 relative">
        <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-lg"></div>
        <div className="relative z-10 p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Nos objectifs</h2>
          <ul className="list-none space-y-4">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-4 text-xl" />
                <span className="text-lg">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section Ambition */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Notre ambition</h2>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-8">
          <p className="text-lg leading-relaxed text-center">
          BSIC-Bank a pour objectif d&apos;être l&apos;institution financière la plus fiable et la plus innovante du pays. Nous aspirons à être à la pointe du secteur en matière de satisfaction de la clientèle, d&apos;avancées technologiques et de responsabilité sociale. Notre objectif est d&apos;avoir un impact positif sur chaque vie que nous touchons, qu&apos;il s&apos;agisse de nos clients, de nos employés ou de la communauté au sens large.
          </p>
        </div>
      </section>

      {/* Section Rejoignez-nous */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Rejoignez-nous dans notre voyage</h2>
        <p className="text-lg mb-8">Participez à notre histoire en continuant à façonner l&apos;avenir de la banque.</p>
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Explorer les carrières à la BSC-Bank
        </Link>
      </section>
    </div>
  );
};

export default AboutUIThree;
