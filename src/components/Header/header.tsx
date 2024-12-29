import { useState } from "react";
import './header.css';
import Log from '../../assets/Images/logomades.png';

const Header: React.FC = () => {
  // État pour gérer le menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-200 flex justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Log} alt="Logo" className="h-10" />
          </div>

          {/* Menu mobile: hamburger icon */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menu de navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 items-center">
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-gray-600">ACCUEIL</a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-gray-600">A PROPOS DE NOUS</a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-gray-600">NOS SERVICES</a>
              </li>
            </ul>
            <button className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition duration-300">
              NOUS CONTACTEZ
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-gray-600">ACCUEIL</a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-gray-600">A PROPOS DE NOUS</a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-gray-600">NOS SERVICES</a>
              </li>
              <li>
                <button className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition duration-300">
                  NOUS CONTACTEZ
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
