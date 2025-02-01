import Header from "../../components/Header/header";
import Foot from "../../components/footer/foot/foot";
import Contact from "../../components/contact/contact";
import imcontact from "../../assets/Images/formations/freecompress-im5_tennis.jpg";
// import box from "../../assets/Images/box.png";

export default function ContactUs() {
  return (
    <>
       <Header
      headertitle="Prenez contact avec nous"
      headerimage={imcontact}
      >
        <p>
            <strong>MADES</strong> est une organisation dynamique dédiée à la promotion du sport
            et de l'excellence dans les domaines du tennis, du CrossFit, et bien plus encore. Nous
            accompagnons les entraîneurs dans leur parcours professionnel en proposant des
            programmes de formation innovants et des outils adaptés aux besoins actuels du marché.
          </p>
      </Header>
      <Contact />
      <Foot />
    </>
  );
}
