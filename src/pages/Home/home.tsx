import "../../App.css"
import Header from "../../components/Header/header";
import Stats from "../../components/body/stats/stats";
import Formations from "../../components/body/formations/formations";
import Video from "../../components/body/videos/video";
import Add from "../../components/body/add/add";
import Foot from "../../components/footer/foot/foot";
import Reviews from "../../components/body/reviews/reviews";
import im from "../../assets/Images/freecompress-img2_tennis.jpg";

// import { useState } from "react"

export default function Home() {
  // const [showFoot, setShowFoot] = useState(true);
  return (
    <>
      <Header
      headertitle="Devenez l'entraîneur de demain avec MADES"
      headerimage={im}
      >
        <p>
            <strong>MADES</strong> est une organisation dédiée à l'excellence sportive. Nous proposons des formations innovantes et personnalisées pour les entraîneurs de tennis, de CrossFit et plus encore.
            Rejoignez notre communauté et bénéficiez d'outils et de ressources adaptés à vos besoins. Ensemble, élevons le niveau de l'entraînement sportif.
            <div className=" p-2 shadow-none mt-2 text-lg font-bold ">
              Vos compétences nous interessent et votre emploi, notre préoccupation
            </div>
          </p>
      </Header>

          
      <Stats />
      <Formations />
      <Video />
      <Add />
      <Reviews />
      <Foot />
    </>
  );
}
