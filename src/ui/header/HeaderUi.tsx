"use client"

import { useState } from "react";
import  Link  from "next/link";
import UserInfoMod from "../userInfoModal"
import Image from "next/image";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "#", dropdown: true, subItems: [
    { name: "Prêts", path: "/loans" },
    { name: "Dépôts d'argent", path: "/deposits" },
    { name: "Transfert d'argent", path: "/money-transfer" },
  ] },
  { name: "Produits", path: "#", dropdown: true, subItems: [
    { name: "Carte de crédit", path: "/credit-card" },
    { name: "Compte d'épargne", path: "/savings-account" },
    { name: "Compte courant", path: "/current-account" },
  ] },
  { name: "A propos de Nous", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false); // État pour Products dropdown

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);
  const toggleProductsDropdown = () => setProductsDropdownOpen(!productsDropdownOpen); // Gestion du dropdown Products

  return (
    <nav className="bg-gray-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image alt="BscBank logo" src="/logo1.png" width={150} height={150} className="h-20 w-auto mr-3" />
            </Link>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="py-2 px-3 text-gray-100 hover:text-blue-500 transition duration-300 flex items-center"
                      onClick={item.name === "Services" ? toggleServicesDropdown : toggleProductsDropdown}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {item.name === "Services" && servicesDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                        {item.subItems.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.name === "Produits" && productsDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                        {item.subItems.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.path} className="py-2 px-3 text-gray-100 hover:text-blue-600 transition duration-300">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Login & Signup Buttons */}
            <UserInfoMod/>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <Link href={item.path} className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-600 hover:text-white">
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.subItems.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.path}
                        className="block py-2 px-4 text-sm hover:bg-blue-600 hover:text-white"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
