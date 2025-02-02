import { useState } from "react";
import Partners from "../partners/partners";
import Logmades from "../../../assets/Images/logomades.png";
import "./foot.css";

interface LienProps {
  titre: string;
  adres: string;
}

interface NavigationProps {
  items: LienProps[];
  type: string;
}

const Navigation: React.FC<NavigationProps> = ({ items, type }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-start space-y-2 ps-6">
      <p className="font-bold text-xl text-white mb-4" style={{ fontFamily: "Lexend2" }}>
        {type}
      </p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <a
              href={item.adres}
              className="text-white text-sm no-underline "
              aria-label={item.titre}
            >
              {item.titre}
            </a>
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
                hoverIndex === index ? "w-1/3" : "w-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Foot() {
  const items: LienProps[] = [
    { titre: "ACCEUIL", adres: "/" },
    { titre: "A PROPOS DE NOUS", adres: "/about" },
    { titre: "NOS FORMATIONS", adres: "/services" },
    { titre: "NOUS CONTACTEZ", adres: "/contact" },
  ];

  const socials: LienProps[] = [
    { titre: "FACEBOOK", adres: "https://web.facebook.com/ProjetMADES" },
    { titre: "INSTAGRAM", adres: "/" },
    { titre: "LINKEDIN", adres: "https://www.linkedin.com/company/projet-mades" },
    { titre: "WHATSAPP", adres: "/" },
  ];

  return (
    <>
      <div className="my-10 max-w-[1200px] mx-auto">
        <p
          className="text-center text-sky-700 font-semibold mb-4"
          style={{ fontFamily: "Lexend2", fontSize: "35px" }}
        >
          NOS PARTENAIRES
        </p>
        <Partners />
      </div>
      <div className="bg-[#3B94D0] py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center uppercase">
            {/* Logo */}
            <div className="bg-white flex justify-center items-center h-full ">
              <img src={Logmades} alt="logo mades" className="max-h-12 w-auto" />
            </div>
            {/* Navigation */}
            <Navigation items={items} type="Navigation" />
            {/* Socials */}
            <Navigation items={socials} type="Socials" />
          </div>
          {/* Footer Text */}
          <div className="flex justify-center mt-10 text-white">
            <p>Copyright © MADES</p>
          </div>
        </div>
      </div>
    </>
  );
}
