import Formation from "./formation";
import Im from '../../../assets/Images/black-man-with-tennis-racket-beach.jpg';
import Im2 from '../../../assets/Images/portrait-athletic-male-tennis-player.jpg';
import Im3 from '../../../assets/Images/people-playing-padle-tennis-inside.jpg';

const Formations: React.FC = () => {
  const title = "NOS FORMATION";
  const contenu = [
    {
      im: Im,
      titre: "BEACH TENNIS",
      content: "Découvrez le beach tennis, une discipline dynamique combinant le tennis traditionnel et l'esprit de la plage. Apprenez les techniques spécifiques pour exceller dans ce sport tout en ayant du plaisir sous le soleil.",
      adres: "/Formations/BeachTennis"
    },
    {
      im: Im2,
      titre: "LAWN TENNIS",
      content: "Le tennis sur gazon est l'un des sports les plus emblématiques au monde. Découvrez les bases et les stratégies pour devenir un joueur accompli, que ce soit en compétition ou pour le loisir.",
      adres: "/Formations/Tennis"
    },
    {
      im: Im3,
      titre: "PADEL SPORT",
      content: "Le padel est un sport en plein essor qui combine des éléments de tennis et de squash. Apprenez les bases, les techniques avancées et comment maîtriser ce sport passionnant.",
      adres: "/Formations/Padel"
    },
  ];

  return (
    <div className="flex justify-center py-6 my-4 bg-gray-100">
      <div className="w-full max-w-[1200px] py-4">
        <div>
          <h1 className="text-sky-700 text-center my-4 text-4xl font-semibold" style={{ fontFamily: "Lexend2" }}>
            {title}
          </h1>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {contenu.map((item, index) => (
              <Formation key={index} im={item.im} titre={item.titre} content={item.content} adres={item.adres} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formations;
