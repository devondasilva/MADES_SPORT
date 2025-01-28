import Header from "../components/Header/header";
import im from "../assets/Images/img_dossier.jpg";
import Foot from "../components/footer/foot/foot";
import CountrySelector from "../components/CountrySelector";
import { useState } from "react";

export default function Dossier() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    tel: "",
    country: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

 

  const validateForm = () => {
    if (!formData.lastname || !formData.firstname || !formData.email || !formData.tel || !formData.country) {
      alert("Tous les champs sont obligatoires !");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Veuillez entrer un email valide !");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(formData);
    if (file) console.log(file);
    setFormData({ lastname: "", firstname: "", email: "", tel: "", country: "" });
    setFile(null);
    alert("Formulaire soumis avec succès !");
  };

  return (
    <>
      <Header headertitle="La fierté de tout un continent" headerimage={im}>
        <p>
          <strong>MADES</strong> est une organisation dynamique dédiée à la promotion du sport et de l'excellence dans les
          domaines du tennis, du CrossFit, et bien plus encore. Nous accompagnons les entraîneurs dans leur parcours
          professionnel en proposant des programmes de formation innovants et des outils adaptés aux besoins actuels du
          marché.
        </p>
      </Header>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-6"
          action="#" method="post"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Formulaire d'inscription
          </h2>

          <div className="mb-4">
            <label htmlFor="lastname" className="block text-gray-700 font-medium mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Entrez votre nom"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="firstname" className="block text-gray-700 font-medium mb-2">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Entrez votre prénom"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Entrez votre adresse mail"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tel" className="block text-gray-700 font-medium mb-2">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="tel"
              value={formData.tel}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Entrez votre numéro de téléphone"
            />
          </div>

          <div className="mb-4">
                <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                    Pays d'origine
                </label>
                <CountrySelector
                    onChange={(selected) => setFormData((prev) => ({ ...prev, country: selected?.value || '' }))}
                />
            </div>

          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-700 font-medium mb-2">
              Ajouter votre CV
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
            {file && <p className="text-gray-600 mt-2">Fichier sélectionné : {file.name}</p>}
          </div>

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
      <Foot />
    </>
  );
}
