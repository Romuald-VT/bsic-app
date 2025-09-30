import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Structures de données utilisées : Tableaux pour les liens et les icônes
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  const socialLinks = [
    { icon: <FaFacebook/>, href: "#" },
    { icon: <FaTwitter/>, href: "#" },
    { icon: <FaLinkedin/>, href: "#" },
    { icon: <FaInstagram/>, href: "#" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bsc-bank</h3>
            <p className="text-sm">Your trusted financial partner</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-indigo-300 transition duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-indigo-300 transition duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-2xl hover:text-indigo-300 transition duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>&copy; 2023 Bsc-bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
