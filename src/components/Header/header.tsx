import React, { ReactNode, useState } from "react";
import Log from "../../assets/Images/logomades.png";
import Board from "../body/board/board";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";

interface HeaderProps {
  headertitle: string;
  headerimage: string;
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ headertitle, headerimage, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state for mobile menu

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle mobile menu

  const menuItems = [
    { title: "Accueil", link: "/" },
    { title: "À propos de nous", link: "/A_propos" },
    { title: "Nos formations", link: "/Formation" },
  ];

  return (
    <>
      <header className="header-wrapper">
        <div className="sticky-navbar bg-gray-200 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="flex items-center justify-between px-6 py-5">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a onClick={() => openModal(Log)} role="button">
                  <img src={Log} alt="Logo" className="h-10 cursor-pointer" />
                </a>
              </div>

              {/* Menu Desktop */}
              <nav className="hidden md:flex items-center space-x-4">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="text-[12px] text-gray-800 hover:text-gray-600 uppercase "
                  >
                    {item.title}
                  </a>
                ))}
                <a href="/Nos_contacts">
                  <button className="contact-btn text-[12px]">NOUS CONTACTEZ</button>
                </a>
                <a href="/Dossier">
                  <button className="contact-btn text-[12px] bg-orange-500 hover:bg-orange-600">SOUMETTRE SON DOSSIER</button>
                </a>
              </nav>

              {/* Menu Mobile */}
              <div className="md:hidden">
                <Dropdown open={isMenuOpen} onOpenChange={toggleMenu}>
                  <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{ root: { variant: "outlined", color: "neutral" } }}
                  >
                    <MoreVert />
                  </MenuButton>
                  <Menu>
                    {menuItems.map((item) => (
                      <MenuItem key={item.title}>
                        <a href={item.link} className="text-gray-800">
                          {item.title}
                        </a>
                      </MenuItem>
                    ))}
                    <MenuItem>
                      <a href="/Nos_contacts" className="text-gray-800">
                        NOUS CONTACTEZ
                      </a>
                    </MenuItem>
                  </Menu>
                </Dropdown>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && modalImage && (
              <div className="modal-backdrop">
                <div className="modal-content">
                  <button
                    onClick={closeModal}
                    className="modal-close-btn"
                    aria-label="Close Modal"
                  >
                    ×
                  </button>
                  <img src={modalImage} alt="Modal content" className="modal-image" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Board */}
        <Board title={headertitle} imageLink={headerimage}>
          {children}
        </Board>
      </header>
    </>
  );
};

export default Header;
