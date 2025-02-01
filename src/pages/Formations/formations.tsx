import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import Foot from "../../components/footer/foot/foot";
import Newsletter from "../../components/email/newsletter";
import im6 from "../../assets/Images/formations/freecompress-img6_padel.jpg";
import im7 from "../../assets/Images/tennis/freecompress-IMG_3697.jpg";
import im8 from "../../assets/Images/formations/freecompress-formation1.jpg";
import "../../App.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Formations from "../../components/body/formations/formations";

export default function Formation() {
  const [mounted, setMounted] = useState(false);
  const [hoveredAccordion, setHoveredAccordion] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const formations = [
    {
      id: 1,
      icon: <ArrowDropDownIcon />,
      title: "Tennis",
      description:
        "Enrichissez vos compétences avec des formations innovantes, axées sur les techniques modernes et l'accompagnement personnalisé.",
    },
    {
      id: 2,
      icon: <ArrowDropDownIcon />,
      title: "Beach Tennis",
      description:
        "Découvrez le beach tennis avec nos programmes interactifs, adaptés aux besoins des amateurs et des professionnels.",
    },
    {
      id: 3,
      icon: <ArrowDropDownIcon />,
      title: "Padel",
      description:
        "Apprenez les bases et les stratégies avancées du padel grâce à nos experts qualifiés et à des ateliers pratiques.",
    },
    {
      id: 4,
      icon: <ArrowDropDownIcon />,
      title: "Squash",
      description:
        "Apprenez les bases et les stratégies avancées du squash grâce à nos experts qualifiés et à des ateliers pratiques.",
    },
  ];

  const handleMouseEnter = (id: number) => {
    setHoveredAccordion(id);
  };

  const handleMouseLeave = () => {
    setHoveredAccordion(null);
  };

  return (
    <>
      <Header headertitle="NOS FORMATIONS" headerimage={im8}>
        <p>
          <strong>MADES</strong> est une organisation dynamique dédiée à la
          promotion du sport et de l'excellence dans les domaines du tennis, du
          CrossFit, et bien plus encore. Nous accompagnons les entraîneurs dans
          leur parcours professionnel en proposant des programmes de formation
          innovants et des outils adaptés aux besoins actuels du marché.
        </p>
      </Header>

      <div className="flex justify-center py-10">
        <div className="w-full max-w-[1200px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="relative flex justify-center items-center ">
  {/* Grande image en arrière-plan */}
                  <img
                    src={im6}
                    alt="Formation"
                    className="rounded-2xl shadow-lg w-full lg:w-3/4 h-auto stat"
                  />

                  {/* Petite image superposée dans l'angle inférieur droit */}
                  <img
                    src={im7}
                    alt="Formation"
                    className="absolute stat bottom-4 right-4 rounded-lg shadow-md w-40 h-auto lg:w-52 lg:h-auto border-2 border-white "
                  />
                </div>

            {/* Text Section */}
            <div className="space-y-6 p-8 border-s-2">
              <h2 className="text-3xl text-[#3982b4]">
                Pourquoi choisir nos formations ?
              </h2>
              <p className="text-sm">
                Nous sommes votre passerelle vers un apprentissage sans souci.
                Notre engagement envers l'excellence et notre expertise dans le
                domaine sportif font de nous le partenaire idéal pour répondre
                à vos besoins de formation.
              </p>

              {/* Accordion Section */}
              <div className="space-y-4">
                {formations.map((formation) => (
                  <div
                    key={formation.id}
                    className="rounded-lg overflow-hidden border border-[#3982b4] bg-white"
                    onMouseEnter={() => handleMouseEnter(formation.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-lg font-bold bg-[#3982b4] text-white hover:bg-[#205070] transition-colors"
                      type="button"
                    >
                      <div className="flex items-center gap-3">
                        {formation.title}
                      </div>
                      <div className="flex justify-end">{formation.icon}</div>
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                        hoveredAccordion === formation.id
                          ? "max-h-40 px-4 py-2"
                          : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-700 text-sm">
                        {formation.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Formations/>
      <Newsletter />
      <Foot />
    </>
  );
}
