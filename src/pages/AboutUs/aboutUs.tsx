import Header from "../../components/Header/header";
import Foot from "../../components/footer/foot/foot";
import Contact from "../../components/contact/contact";
import impropos from "../../assets/Images/business-partners-discussing-agreement-coffee-shop.jpg" 
// import box from "../../assets/Images/box.png";

export default function AboutUs() {
  return (
    <>
       <Header
            headertitle="Faites nous confiance"
            headerimage={impropos}
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
