
import YouTube from 'react-youtube';
import type { YouTubeEvent } from 'react-youtube';

export default function Video() {
  const handleOnReady = (event: YouTubeEvent) => {
    // Access the player instance from the event
    const player = event.target;
    // Pause the video
    player.pauseVideo();
  };

  return (
    <div className="flex justify-center py-4">
      <div className="w-full max-w-[1200px] m-4">
        <div className="flex justify-center">
          <YouTube
            videoId="RVwRHsahcII" // The YouTube video ID
            opts={{
              height: '300',
              width: '800px',
              playerVars: {
                autoplay: 1, // Autoplay video
                loop: 1, // Loop video
                rel: 0, // Disable showing related videos
              },
            }}
            onReady={handleOnReady}
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className=" text-lg" style={{fontFamily:"Lexend2"}}>Achille TAKPA</h2>
          <p className="text-gray-700">Un message pour tous les adhérents de MADES/BUS</p>
        </div>
      </div>
    </div>
  );
}
