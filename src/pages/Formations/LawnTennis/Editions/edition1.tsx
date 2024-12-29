
import Newsletter from "../../../../components/email/newsletter";
import Foot from "../../../../components/footer/foot/foot";
import Banner from "../../../../components/formation/banner/banner";
import Gallery from "../../../../components/formation/gallery/gallery";
import Header from "../../../../components/Header/header";
import box from "../../../../assets/Images/ballsboxAsset 6.png";


export default function Edition1() {
  return (
    <>
      <Header />
      <Banner 
        title=" IMAGES LAWN TENNIS" 
        imageSrc={box} 
        optionalText="EDITION 2022" 
      />
      <Gallery />
      <Newsletter />
      <Foot />
    </>
  );
}
