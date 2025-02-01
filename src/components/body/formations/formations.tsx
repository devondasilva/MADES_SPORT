import { useState, useEffect } from "react";
import Formation from "./formation";
import Im from "../../../assets/Images/freecompress-img1_beachtennis.jpg";
import Im2 from "../../../assets/Images/freecompress-img4_tennis.jpg";
import Im3 from "../../../assets/Images/padel/freecompress-IMG_3794.jpg";


// Hook personnalisé pour récupérer la taille de la fenêtre
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Formations: React.FC = () => {
  const contenu = [
    {
      im: Im,
      titre: "BEACH TENNIS",
      content:
        "Découvrez le beach tennis, une discipline dynamique combinant le tennis traditionnel et l'esprit de la plage. Apprenez les techniques spécifiques pour exceller dans ce sport tout en ayant du plaisir.",
      adres: "/Formation/BeachTennis",
    },
    {
      im: Im2,
      titre: "TENNIS",
      content:
        "Le tennis sur gazon est l'un des sports les plus emblématiques au monde. Découvrez les bases et les stratégies pour devenir un joueur accompli, que ce soit en compétition ou pour le loisir.",
      adres: "/Formation/Tennis",
    },
    {
      im: Im3,
      titre: "PADEL SPORT",
      content:
        "Le padel est un sport en plein essor qui combine des éléments de tennis et de squash. Apprenez les bases, les techniques avancées et comment maîtriser ce sport passionnant.",
      adres: "/Formation/Padel",
    },
    {
      im: Im3,
      titre: "SQUASH",
      content:
        "Plongez dans l'univers du squash, un sport intense et stratégique. Développez votre rapidité, votre endurance et vos réflexes tout en apprenant à anticiper et ...",
      adres: "/Formation/Squash",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();

  // Détermine le nombre de slides visibles en fonction de la taille de l'écran
  const slidesPerView = width >= 1024 ? 3 : width >= 768 ? 2 : 1;

  const nextSlide = () => {
    if (currentIndex < contenu.length - slidesPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Auto-défilement toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < contenu.length - slidesPerView) {
        setCurrentIndex(currentIndex + 2);
      } else {
        setCurrentIndex(0); // Revenir au début
      }
    }, 5000);

    return () => clearInterval(interval); // Nettoyage
  }, [currentIndex, slidesPerView, contenu.length]);

  return (

    <>
    <div className="flex justify-center py-6 bg-gray-100">
      <div
        className="w-full max-w-[1200px] py-3 overflow-hidden relative"
        style={{ height: "500px" }} // Hauteur fixe pour le conteneur
      >
        <div
            className="flex transition-transform duration-1000 ease-in-out px-2"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
              width: `${contenu.length * (100 / slidesPerView)}%`, // Correction
            }}
          >
            {contenu.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{
                  width: `${100 / slidesPerView}%`, // Largeur adaptative des slides
                  height: "100%", // Prend toute la hauteur du conteneur
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Formation
                  im={item.im}
                  titre={item.titre}
                  content={item.content}
                  adres={item.adres}
                />
              </div>
            ))}
          </div>


        {/* Flèches de navigation */}
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-black p-2 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`} style={{backgroundColor:"unset", fontSize:"35px"}}
          aria-label="Slide précédent"
        >
          &#60;
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-black p-2${
            currentIndex >= contenu.length - slidesPerView ? "opacity-50 cursor-not-allowed" : ""
          }`} style={{backgroundColor:"unset", fontSize:"35px"}}
          aria-label="Slide suivant"
        >
          &#62;
        </button>
      </div>
      
    </div>
   
    
  </>
  );
};

export default Formations;
