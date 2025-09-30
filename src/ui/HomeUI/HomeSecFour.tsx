"use client"
import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Typage des témoignages
interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Bsc-bank has made managing my finances so much easier. Their mobile app is intuitive and their customer service is top-notch!",
    author: "Sarah J., Small Business Owner",
  },
  {
    quote:
      "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Michael T., Retired Teacher",
  },
  {
    quote:
      "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Léa D., Fondatrice de startup",
  },
  {
    quote:
      "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Thomas B., Artisan boulanger indépendant",
  },
  {
    quote:
      "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Camille L., Consultante en marketing digital",
  },
  {
    quote:
      "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Antoine R., Vétérinaire libéral",
  },
  {
    quote:
      "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Émilie P., Auteure indépendante",
  },
  {
    quote:
      "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Victor S., Coach sportif à domicile",
  },
  {
    quote:
      "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Chloé M., Créatrice de bijoux artisanaux",
  },
  {
    quote:
      "I've been with Bsc-bank for over a decade now. Their personalized approach to banking has helped me achieve my financial goals.",
    author: "Nicolas G., Développeur web freelance",
  },
];

// Typage des flèches slick
interface ArrowProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

// Flèche précédente
const PrevArrow: React.FC<ArrowProps> = ({ onClick, className, style }) => (
  <button
    onClick={onClick}
    className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full focus:outline-none`}
    style={{ ...style, display: "block" }}
  >
    <FaChevronLeft className="text-blue-500" />
  </button>
);

// Flèche suivante
const NextArrow: React.FC<ArrowProps> = ({ onClick, className, style }) => (
  <button
    onClick={onClick}
    className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full focus:outline-none`}
    style={{ ...style, display: "block" }}
  >
    <FaChevronRight className="text-blue-500" />
  </button>
);

const Testimonials: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Afficher deux témoignages à la fois
    slidesToScroll: 1, // Défiler un seul témoignage à la fois
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Ce que disent nos clients
        </h2>
        <Slider {...settings} className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6">
              <p className="mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
