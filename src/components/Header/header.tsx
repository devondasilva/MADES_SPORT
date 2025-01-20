import React, { useState } from "react";
import Log from "../../assets/Images/logomades.png";
import "./header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const openModal = (imgSrc: string) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setIsModalOpen(false);
  };

  const menuItems = [
    { title: "ACCUEIL", link: "/" },
    { title: "A PROPOS DE NOUS", link: "/formations" },
    { title: "NOS FORMATIONS", link: "/Formation" },
  ];

  return (
    <div className="bg-gray-200 flex justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => openModal(Log)}>
              <img src={Log} alt="Logo" className="h-10" />
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="text-sm text-gray-800 hover:text-gray-600"
              >
                {item.title}
              </a>
            ))}
            <a href="/Nos_contacts">
              <button className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition duration-300">
                NOUS CONTACTEZ
              </button>
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle Menu"
              id="but"
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
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    className="text-sm text-gray-800 hover:text-gray-600"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="/Nos_contacts">
                  <button className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition duration-300">
                    NOUS CONTACTEZ
                  </button>
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && currentImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-800 hover:text-gray-600"
                aria-label="Close Modal"
              >
                ×
              </button>
              <img src={currentImage} alt="Modal" className="max-w-full h-auto" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
