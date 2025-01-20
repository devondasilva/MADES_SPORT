
import box from "../../../../assets/Images/ballsboxAsset 6.png";
import Newsletter from "../../../../components/email/newsletter";
import Foot from "../../../../components/footer/foot/foot";
import Banner from "../../../../components/formation/banner/banner";
import Gallery from "../../../../components/formation/gallery/gallery";
import Header from "../../../../components/Header/header";


export default function Edition3() {
  return (
    <>
      <Header />
      <Banner 
        title=" IMAGES LAWN TENNIS" 
        imageSrc={box} 
        optionalText="EDITION 2024" 
      />
      <Gallery />
      <Newsletter />
      <Foot />
    </>
  );
}
