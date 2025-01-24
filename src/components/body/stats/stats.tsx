
import Im from "../../../assets/Images/black-man-with-tennis-racket-beach.jpg";
import { Link } from 'react-router-dom';
import Stat from "./stat";

// Composant pour afficher un élément statistique




export default function Stats() {
    return (
        <>
            {/* Section Objectifs */}
            <div className="bg-sky-600 py-8">
                <div className="container mx-auto px-4">
                    <div className="stat text-center text-white">
                        <h1
                            className="text-center my-4 text-4xl font-semibold"
                            style={{ fontFamily: "Lexend2" }}
                        >
                            NOS OBJECTIFS
                        </h1>
                        <p className="text-sm lg:text-base max-w-3xl mx-auto">
                            MADES propose des formations adaptées et accompagne les entraîneurs dans la réalisation de leurs ambitions sportives et professionnelles. 
                            Notre objectif est de renforcer la communauté sportive mondiale grâce à des initiatives innovantes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section Statistiques */}
            <Stat/>

            {/* Section Formations */}
            <div className="flex justify-center">
              <div className="w-full max-w-[1200px]">
                <div className="py-8">
                  <div className="container mx-auto px-4">
                    <div className="bg-gray-100 rounded-2xl flex flex-col lg:flex-row items-center gap-8">

                      {/* Conteneur du texte - Centré horizontalement */}
                      <div className="flex items-center justify-center lg:w-8/12 w-full text-gray-700 px-8">
                        <div className="text-center lg:text-left"> {/* Text aligné à gauche sur grands écrans */}
                          <h2 className="text-xl lg:text-2xl font-bold">
                            Découvrez désormais nos prochaines formations
                          </h2>
                          <p className="text-justify">
                            En tant qu’organisation, nous nous engageons à offrir des opportunités uniques aux coachs en leur proposant des ressources adaptées, des ateliers pratiques et un accompagnement personnalisé pour réussir.
                          </p>
                        </div>
                      </div>

                      {/* Conteneur de l'image - Centré horizontalement */}
                      <div className="lg:w-4/12 w-full flex justify-center px-4">
                        <div className="stat1 h-60 w-60 flex items-center justify-center relative group">
                          {/* Image */}
                          <img src={Im} alt="Homme tenant une raquette sur la plage" className="rounded-2xl rotate-image" />
                          {/* Texte "Voir plus" */}
                          <Link to="/Formation">
                            <div className="overlay-text absolute inset-0 flex items-center justify-center opacity-0 text-white text-xl font-bold transition-opacity duration-500 group-hover:opacity-100">
                              Voir plus
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>



        </>
    );
}
