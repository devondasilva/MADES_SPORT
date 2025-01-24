import Newsletter from "../../../../components/email/newsletter";
import Foot from "../../../../components/footer/foot/foot";
import Gallery from "../../../../components/formation/gallery/gallery";
import Header from "../../../../components/Header/header";
import impadel from "../../../../assets/Images/people-playing-padle-tennis-inside.jpg"

export default function Edition3() {
  return (
    <>
      <Header
      headertitle="Padel"
      headerimage={impadel}
      >
        <p>
            <strong>MADES</strong> est une organisation dynamique dédiée à la promotion du sport
            et de l'excellence dans les domaines du tennis, du CrossFit, et bien plus encore. Nous
            accompagnons les entraîneurs dans leur parcours professionnel en proposant des
            programmes de formation innovants et des outils adaptés aux besoins actuels du marché.
          </p>
      </Header>
      <Gallery />
      <Newsletter />
      <Foot />
    </>
  );
}
