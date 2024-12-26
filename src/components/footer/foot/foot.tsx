import { useState } from "react";
import Partners from "../partners/partners";
import Logmades from "../../../assets/Images/logomades.png";
import "./foot.css";

interface LienProps {
  titre: string;
  adres: string;
}

interface SocialProps {
  titre: string;
  adres: string;
}

interface NavigationProps {
  items: LienProps[] | SocialProps[];
  type: "Navigation" | "Socials";
}

const Navigation: React.FC<NavigationProps> = ({ items, type }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="col-1 ms-10 p-4 flex justify-center">
        <div>
      <p className="font-bold text-xl text-white" style={{fontFamily:"Lexend2"}}>{type}</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              padding: "2px 0",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            <a
              href={item.adres}
              style={{
                color: "white",
                textDecoration: "none",
                position: "relative",
              }}
            >
              {item.titre}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: hoverIndex === index ? "50%" : "0%",
                  height: "2px",
                  backgroundColor: "white",
                  transition: "width 0.3s ease",
                  borderRadius: "5px",
                }}
              />
            </a>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default function Foot() {
  const items: LienProps[] = [
    { titre: "HOME", adres: "/" },
    { titre: "ABOUT US", adres: "/about" },
    { titre: "OUR SERVICES", adres: "/services" },
    { titre: "CONTACT US", adres: "/contact" },
  ];

  const socials: SocialProps[] = [
    { titre: "FACEBOOK", adres: "https://web.facebook.com/ProjetMADES" },
    { titre: "INSTAGRAM", adres: "/" },
    { titre: "LINKEDIN", adres: "https://www.linkedin.com/company/projet-mades" },
    { titre: "WHATSAPP", adres: "/" },
  ];

  return (
    <>
    
      <div className="my-10 max-w-1200px items-center">
        <p
            className="flex justify-center text-lg text-sky-700 my-4"
            style={{ 
              fontFamily: "Lexend2",
              fontSize:"35px"
             }}
          >
            NOS PARTENAIRES
          </p>
        <Partners />
      </div>
      <div className=" flex justify-center" style={{backgroundColor: "#3B94D0"}}>
       <div className="w-full max-w-[1200px]">

          <div
            className="grid grid-flow-row row-span-2 mt-4 pt-4"
            style={{ backgroundColor: "#3B94D0", marginTop: "20px" }}
          >
            <div >
              <div className="grid grid-cols-3  h-50 uppercase">
                <div className="col-1 border ms-10 bg-white px-6 flex items-center">
                  <img src={Logmades} alt="logo mades" />
                </div>
                <Navigation items={items} type="Navigation" />
                <Navigation items={socials} type="Socials" />
              </div>
            </div>
            <div className="flex justify-center my-10" style={{ color: "white" }}>
              <p>Copyright © DAS COMMUNICATION</p>
            </div>
          </div>
          </div>
      </div>
    </>
  );
}
