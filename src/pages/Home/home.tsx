import "../../App.css"
import Header from "../../components/Header/header";
import Stats from "../../components/body/stats/stats";
import Formations from "../../components/body/formations/formations";
import Video from "../../components/body/videos/video";
import Add from "../../components/body/add/add";
import Foot from "../../components/footer/foot/foot";
import Reviews from "../../components/body/reviews/reviews";
import im from "../../assets/Images/imgall.jpg";

// import { useState } from "react"

export default function Home() {
  // const [showFoot, setShowFoot] = useState(true);
  return (
    <>
      <Header
      headertitle="La fierté de tout un continent"
      headerimage={im}
      >
        <p>
            <strong>MADES</strong> est une organisation dynamique dédiée à la promotion du sport
            et de l'excellence dans les domaines du tennis, du CrossFit, et bien plus encore. Nous
            accompagnons les entraîneurs dans leur parcours professionnel en proposant des
            programmes de formation innovants et des outils adaptés aux besoins actuels du marché.
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
