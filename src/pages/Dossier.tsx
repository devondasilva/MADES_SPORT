
import Header from "../components/Header/header";
import im from "../assets/Images/imgall.jpg";
import Foot from "../components/footer/foot/foot";




export default function Dossier(){


    return(
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
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                action="POST"
                className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-6"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Formulaire d'inscription
                </h2>

                {/* Nom */}
                <div className="mb-4">
                <label
                    htmlFor="lastname"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Nom
                </label>
                <input
                    type="text"
                    id="lastname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    placeholder="Entrez votre nom"
                />
                </div>

                {/* Prénom */}
                <div className="mb-4">
                <label
                    htmlFor="firstname"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Prénom
                </label>
                <input
                    type="text"
                    id="firstname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    placeholder="Entrez votre prénom"
                />
                </div>

                {/* Nationalité */}
                <div className="mb-4">
                <label
                    htmlFor="nationalite"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Nationalité
                </label>
                <input
                    type="text"
                    id="nationalite"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    placeholder="Entrez votre nationalité"
                />
                </div>

                {/* Fichier */}
                <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Ajouter votre CV
                </label>
                <input
                    type="file"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
                </div>

                {/* Bouton de soumission */}
                <div className="mt-6">
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
                >
                    Soumettre
                </button>
                </div>
            </form>
            </div>
        <Foot/>
            

        </>


    )
}


