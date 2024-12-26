import { useState } from "react";
import Formation from "./formation";
import Im from "../../../assets/Images/black-man-with-tennis-racket-beach.jpg";
import Im2 from "../../../assets/Images/portrait-athletic-male-tennis-player.jpg";
import Im3 from "../../../assets/Images/people-playing-padle-tennis-inside.jpg";

const Formations: React.FC = () => {
  const contenu = [
    {
      im: Im,
      titre: "BEACH TENNIS",
      content:
        "Découvrez le beach tennis, une discipline dynamique combinant le tennis traditionnel et l'esprit de la plage. Apprenez les techniques spécifiques pour exceller dans ce sport tout en ayant du plaisir sous le soleil.",
      adres: "https://github.com/",
    },
    {
      im: Im2,
      titre: "TENNIS",
      content:
        "Le tennis sur gazon est l'un des sports les plus emblématiques au monde. Découvrez les bases et les stratégies pour devenir un joueur accompli, que ce soit en compétition ou pour le loisir.",
      adres: "https://github.com/",
    },
    {
      im: Im3,
      titre: "PADEL SPORT",
      content:
        "Le padel est un sport en plein essor qui combine des éléments de tennis et de squash. Apprenez les bases, les techniques avancées et comment maîtriser ce sport passionnant.",
      adres: "https://github.com/",
    },
    {
      im: Im3,
      titre: "SQUASH",
      content:
        "Le padel est un sport en plein essor qui combine des éléments de tennis et de squash. Apprenez les bases, les techniques avancées et comment maîtriser ce sport passionnant.",
      adres: "https://github.com/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesPerView = window.innerWidth < 768 ? 1 : 3; // Une formation visible sur mobile, 3 sur écran large

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

  return (
    <div className="flex justify-center py-6 my-4 bg-gray-100">
      <div className="w-full max-w-[1200px] py-4">
        <h1
          className="text-sky-700 text-center my-4 text-4xl font-semibold"
          style={{ fontFamily: "Lexend2" }}
        >
          NOS FORMATIONS
        </h1>
        <div className="relative">
          <div className="flex overflow-hidden transition-transform duration-300">
            {/* Affichage des formations */}
            {contenu.slice(currentIndex, currentIndex + slidesPerView).map((item, index) => (
              <Formation
                key={index}
                im={item.im}
                titre={item.titre}
                content={item.content}
                adres={item.adres}
              />
            ))}
          </div>

          {/* Flèches de navigation */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Slide précédent"
            disabled={currentIndex === 0}
          >
            &#60;
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full ${
              currentIndex >= contenu.length - slidesPerView ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Slide suivant"
            disabled={currentIndex >= contenu.length - slidesPerView}
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Formations;
