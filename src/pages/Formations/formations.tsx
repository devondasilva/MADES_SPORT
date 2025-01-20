import Header from "../../components/Header/header";
import Formations from "../../components/body/formations/formations";
import Foot from "../../components/footer/foot/foot";
import Banner from "../../components/formation/banner/banner";
import Editions from "../../components/formation/edition/editions";
import Newsletter from "../../components/email/newsletter";
import im6 from "../../assets/Images/im6.png"    // import box from "../../../assets/Images/ballsboxAsset6.png";

export default function Formation() {
  return (
    <>
      <Header />
      <Banner 
        title="NOS FORMATIONS" 
        imageSrc={im6} 
      />
      <Editions />
      <Formations />
      <Newsletter />
      <Foot />
    </>
  );
}
