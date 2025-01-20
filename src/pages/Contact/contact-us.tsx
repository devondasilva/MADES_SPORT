import Header from "../../components/Header/header";
import Foot from "../../components/footer/foot/foot";
import Contact from "../../components/contact/contact";
import Banner from "../../components/formation/banner/banner";
// import box from "../../assets/Images/box.png";

export default function ContactUs() {
  return (
    <>
      <Header />
      <Banner 
        title="CONTACTEZ-NOUS" 
        imageSrc=''
      />
      <Contact />
      <Foot />
    </>
  );
}
