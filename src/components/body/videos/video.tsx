import YouTube from "react-youtube";
import type { YouTubeEvent } from "react-youtube";

export default function Video() {
  const handleOnReady = (event: YouTubeEvent) => {
    const player = event.target;
    player.pauseVideo(); // Pause the video initially
  };

  const handleOnError = () => {
    console.error("Erreur lors du chargement de la vidéo.");
  };

  return (
    <div className="flex justify-center py-8 ">
      <div className="w-full max-w-[1200px] px-4">
        {/* Vidéo YouTube */}
        <div className="flex justify-center">
          <div className="w-full max-w-[800px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
            <YouTube
              videoId="RVwRHsahcII" // ID de la vidéo YouTube
              opts={{
                height: "400", // Hauteur fixe pour grands écrans
                width: "100%", // S'adapte à la largeur du conteneur
                playerVars: {
                  autoplay: 1,
                  loop: 1,
                  rel: 0,
                  mute: 1, // Démarrer en mode silencieux
                  modestbranding: 1, // Masquer le logo YouTube
                },
              }}
              onReady={handleOnReady}
              onError={handleOnError}
            />
          </div>
        </div>

        {/* Informations sur la vidéo */}
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold" style={{ fontFamily: "Lexend2" }}>
            Achille TAKPA
          </h2>
          <p className="text-gray-700">
            Un message pour tous les adhérents de MADES/BUS
          </p>
        </div>
      </div>
    </div>
  );
}
