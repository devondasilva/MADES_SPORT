import React from "react";
import Section from "../Section";
import { Feather } from "react-feather";
import Im2 from "../../assets/Images/freecompress-img4_tennis.jpg";
import Newsletter from "../email/newsletter";
import LatestNews from "../news/article";

const About: React.FC = () => {
  return (
    <>
      <Section
        title=" Une structure qualifiée offrant des services de pointes pour la nouvelle génération"
        subtitle="Que devez-vous savoir de nous ?"
        subtitleColor="#FFFFFF "
        subtitleBgColor="#3B94D0"
        text="Ceci est le texte principal de la section."
        imageSrc={Im2}
        imageAlt="Description de l'image"
        imagePosition="left"
        additionnalContent={
          <div className="flex flex-col ">
            <div className="grid grid-cols-2 mb-4">
              {/* Éléments en haut */}
              <div className="flex">
                <Feather className="mr-2 text-[#0284c7]" />{" "}
                {/* Icône à gauche */}
                <h2 className="text-lg font-bold">Formation Accélérée</h2>
              </div>
              <div className="flex">
                <Feather className="mr-2 text-[#0284c7]" />{" "}
                {/* Icône à gauche */}
                <h2 className="text-lg font-bold">
                  Organisation Événement Sportif
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2">
              {/* Éléments en bas */}
              <div className="flex">
                <Feather className="mr-2 text-[#0284c7]" />{" "}
                {/* Icône à gauche */}
                <h2 className="text-lg font-bold">Remise à Niveau</h2>
              </div>
              <div className="flex">
                <Feather className="mr-2 text-[#0284c7]" />{" "}
                {/* Icône à gauche */}
                <h2 className="text-lg font-bold">Liaison avec les Clubs</h2>
              </div>
            </div>
          </div>
        }
      />

      <div className="bg-[#F2F1F1]">
      <Section
        subtitle="QUI NOUS SOMMES"
        subtitleColor="#0A5473"
        text="Créé il y a plus de treize (13) ans, MADES-BUS, est une organisation non gouvernementale dont la vocation première est de fédérer les spécialistes et les experts de l’univers sportif, en particulier celui du tennis, dans le but de renforcer leurs capacités techniques et managériales, aux côtés des institutions nationales, continentale internationales. Notre vision est de faire du métier d'entraîneur un véritable maillon de création d’emploi au service du développement du sport africain et de l’éducation de la jeunesse. Dans cet objectif, nous avons œuvré, pendant plus d’une décennie, à l’insertion, au renforcement de capacités et au suivi de nombreux joueurs et entraÏneurs dans leurs carrières respectives. Aujourd’hui plus que jamais les enjeux liés, à la professionnalisation du sport, à l’emploi des jeunes et à la lutte contre l’immigration clandestine, nous amènent à nous mobiliser davantage autour de notre vision première : « faire du métier d'entraîneur un véritable maillon de création d’em ploi au service du développement du sport africain et de l’éducation de la jeunesse africaine »."
        imageSrc={Im2}
        imageAlt="Description de l'image"
        imagePosition="left"
        buttonText="Lire la suite ->"
      />
      </div>

      <div className="bg-[#3B94D0]">
      <Section
        subtitle="NOTRE PROJET"
        subtitleColor="#FFFFFF"
        text="Le projet actuel est un séminaire de formation des entraîneurs de l’espace francophone africain. Il a été initié dans le but de renforcer les capacités techniques et managériales des différents entraîneurs de sport, par une formation excellente de qualité avec pour finalité leur insertion. Il aura lieu du 12 au 18 Août 2024 à Cotonou au Bénin. Ledit séminaire de formation sera animé par des experts et des professionnels du domaine tennistique, qui partageront avec les apprenants leurs connaissances et savoir-faire. Au cours de cette formation, non seulement les capacités seront renforcées, l’appropriation de l’enseignement de nouvelles disciplines émergentes seront aussi enseignées aux participants à savoir : - le Beach Tennis , - le Padel - le Fitness cross fit Nous soulignons aussi que des formations linguistiques telles que l’anglais et l’arabe seront ajoutées à celles déjà annoncées, vue les exigences de certains clubs internationaux (au canada, en Corée du sud et certains pays du Golf)."
        imageSrc={Im2}
        imageAlt="Description de l'image"
        imagePosition="right"
        buttonText="Lire la suite ->"
      />
      </div>

      
      <Section
        subtitle="EXPERIENCES"
        subtitleColor="#0A5473"
        text="En Août 2022, au Bénin, lors de la première édition, les projets pilotes de « Beach Tennis » et de « secourisme » ont été implémentés et ont connu la participation de 65 entraîneurs venant de plusieurs pays de la sous-région. Cela a été un véritable succès non seulement pour le corps sportif africain mais également pour les entraîneurs, y com pris le gouvernement du Bénin, à travers les nombreuses sollicitations de ces derniers, qui nous ont encouragés à organiser le plus souvent de pareils évènements qui concordent parfaitement avec leurs besoins. Fort de cette première réussite, MADES-BUS a étendu son influence lors de la deuxième édition, qui s'est déroulée en Côte d'Ivoire en 2023. Cette fois-ci, notre séminaire de formation a élargi son public, accueillant non seulement des entraîneurs mais également des pratiquants et des amateurs de tennis. Aussi, sous la tutelle d'experts et de professionnels du tennis, le séminaire a approfondi les connaissances des participants, incluant des disciplines émergentes telles que le Beach Tennis, le Padel, et la Musculation."
        imageSrc={Im2}
        imageAlt="Description de l'image"
        imagePosition="left"
        buttonText="Lire la suite ->"
      />

        <LatestNews /> 
        <Newsletter />

    </>
  );
};

export default About;
