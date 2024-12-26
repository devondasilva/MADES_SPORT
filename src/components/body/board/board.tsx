import './board.css';
import box from '../../../assets/Images/ballsboxAsset 6.png';

export default function Board() {
    return (
        <>
            <div className="flex justify-center bg-sky-600 py-6">
                <div className="w-full max-w-[1200px] px-4">
                    <div className="flex items-center gap-8">
                        {/* Section Texte */}
                        <div className="w-8/12 text-sm text-white">
                            <h1
                                className="text-lg font-bold"
                                style={{
                                    fontFamily: "Lexend2",
                                    fontSize: "35px"
                                }}
                            >
                                La fierté de tout un continent
                            </h1>
                            <p className="mt-4">
                                <strong>MADES</strong> est une organisation dynamique dédiée à la promotion du sport et de l'excellence dans les domaines du tennis, du CrossFit et bien plus encore. Nous accompagnons les entraîneurs dans leur parcours professionnel en proposant des programmes de formation innovants et des outils adaptés aux besoins actuels du marché. Notre mission est de transformer la passion en profession, en négociant des opportunités internationales pour les coachs et en leur offrant des ressources pour réussir. Grâce à une équipe de professionnels engagés, MADES crée des expériences d'apprentissage enrichissantes et impactantes, tout en renforçant la communauté sportive à travers le monde.
                            </p>
                        </div>
                        {/* Section Image */}
                        <div className="w-4/12 flex justify-end">
                            <img
                                src={box}
                                alt="Boîte"
                                style={{ height: "250px", width: "auto" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenant flex justify-center py-6">
                <div className="w-full max-w-[1200px] px-4">
                    <div className="haut">
                        <h2 className="my-4 text-2xl font-bold">
                            Découvrez désormais nos prochaines formations
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
