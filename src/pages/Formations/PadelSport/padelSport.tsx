import Newsletter from "../../../components/email/newsletter";
import Foot from "../../../components/footer/foot/foot";
import Header from "../../../components/Header/header";
import impadel from "../../../assets/Images/people-playing-padle-tennis-inside.jpg"
import Editions from "../../../components/formation/edition/editions";
export default function PadelSport() {
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
      <Editions 
        formation="Padel" 
        content="Notre formation en Tennis a été une véritable opportunité pour les entraîneurs de perfectionner leurs techniques et stratégies dans ce sport emblématique. Pendant plusieurs jours, les participants ont exploré des approches modernes d’entraînement, renforcé leurs connaissances tactiques et échangé avec d’autres passionnés. Une expérience enrichissante qui élève le niveau de performance et d’expertise."
      />
      
      <div className="text-center mb-5 mt-4 sm:block hidden">
      <a href="/Formation">
        <button className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800">
          Voir toutes nos formations
        </button>
        </a>
      </div>
      <Newsletter />
      <Foot />
    </>
  );
}
