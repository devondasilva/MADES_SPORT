import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";
import Header from "../components/Header/header";
import Foot from "../components/footer/foot/foot";
import im from "../assets/Images/tennis/freecompress-IMG_3509 (1).jpg";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const schema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  firstname: z.string().min(1, "Le prénom est requis"),
  email: z.string().email("Veuillez entrer un email valide"),
  phone: z
    .string()
    .min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres")
    .max(15, "Le numéro de téléphone est trop long")
    .regex(/^[0-9]+$/, "Le numéro de téléphone ne doit contenir que des chiffres"),
  country: z.string().min(1, {
    message: "Le pays est requis"
  }),
  file: z
    .instanceof(File, { message: "Ce fichier est requis" })
    .refine((file) => file.size <= MAX_FILE_SIZE, { message: "La taille maximale est de 5MB" })
    .refine((file) => file.type === "application/pdf", { message: "Seuls les fichiers PDF sont autorisés" }),
});

type FormData = z.infer<typeof schema>;

function CountrySelector({ onChange }: { onChange: (value: string) => void }) {
  const [value, setValue] = useState<{ value: string; label: string } | null>(null);
  const options = countryList().getData();

  return (
    <Select
      options={options}
      value={value}
      onChange={(selected) => {
        setValue(selected);
        onChange(selected?.value || "");
      }}
      placeholder="Sélectionnez un pays"
    />
  );
}

export default function Dossier() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, control } = useForm<FormData>({ resolver: zodResolver(schema) });
  const fields : {
    key: "name" | "firstname" | "email" | "phone" | "country" | "file",
    label: string;
  }[] =   [
    {
      key: 'name',
      label: 'Nom'
    },
    {
      key: 'firstname',
      label: 'Prénom',
    },
    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'phone',
      label: 'Téléphone'
    },
    ]
  const onSubmit = async (data: {
    name: string;
    firstname: string;
    email: string;
    phone: string;
    country: string;
    file: File;
  }) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    try {
      setIsLoading(true);
      await axios.post("https://mades.iria.tech/api/application/submit", formData, { headers: { "Content-Type": "multipart/form-data" } });
      alert("Demande effectuée avec succès");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Une erreur s'est produite lors de l'enregistrement.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header headertitle="Appel à candidatures - Formation DEJEPS Tennis - option tennis en France" headerimage={im}>
      </Header>
      

      <div className="flex justify-center items-start min-h-screen my-5"> {/* items-start for top alignment */}
        <div className="w-full max-w-lg"> {/* Same width as the form */}
          <div className="textform mb-4 p-6 bg-white shadow-md rounded-lg"> {/* Styled container */}
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              Dans le cadre d'un partenariat, nous présélectionnons 15 candidats pour intégrer un centre de formation
              DEJEPS, option Tennis en France.
            </h2>
            <ul className="list-disc pl-6 text-gray-700"> {/* Improved list styling */}
              <li className="mb-2"><strong>Durée de la formation:</strong> 1 à 2 ans</li>
              <li className="mb-2"><strong>Période :</strong> septembre 2025 - juin 2026</li>
              <li className="mb-2"><strong>Type de contrat :</strong> apprentissage</li>
              <li className="mb-2"><strong>Niveau de jeu requis :</strong> seconde série française</li>
              <li className="mb-2"><strong>Sélection :</strong> sur dossier et entretien, du 1er février au 15 mars 2025</li>
            </ul>
          </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-6" encType="multipart/form-data">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Formulaire d'inscription</h2>

          {fields.map((field) => (
            <div key={field.key} className="mb-4">
              <label htmlFor={field.key} className="block text-gray-700 font-medium mb-2">
                {field.label}
              </label>
              <input
                type={field.key === 'email' ? 'email' : 'text'}
                id={field.key}
                {...register(field.key)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder={`Entrez votre ${field.label}`}
              />
              {errors[field.key] && <p className="text-red-500 text-sm">{errors[field.key]?.message}</p>}
            </div>
          ))}

          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Nationalité</label>
            <Controller name="country" control={control} render={({ field }) => <CountrySelector onChange={field.onChange} />} />
            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-700 font-medium mb-2">Ajouter votre CV</label>
            <Controller name="file" control={control} render={({ field }) => (
              <input
                type="file"
                id="file"
                accept="application/pdf"
                onChange={(e) => field.onChange(e.target.files?.[0])}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            )} />
            {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
          </div>

          <button type="submit" disabled={isLoading} className={`w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:outline-none ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
            {isLoading ? "Envoi en cours..." : "Soumettre"}
          </button>
        </form>
      </div>
      </div>
      <Foot />
    </>
  );
}
