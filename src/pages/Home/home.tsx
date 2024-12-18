import Header from "../../components/Header/header"
import Board from "../../components/body/board/board"
import Stats from "../../components/body/stats/stats"
import Formations from "../../components/body/formations/formations"
import Video from "../../components/body/videos/video"
import Add from "../../components/body/add/add"
import Foot from "../../components/footer/foot"
import Reviews from "../../components/body/reviews/reviews"
// import { useState } from "react"


export default function Home(){
    // const [showFoot, setShowFoot] = useState(true);
    return(
        <>
            <Header />
            <Board />
            <Stats />
            <Formations />
            <Video />
            <Add />
            <Reviews />
            <Foot/>
            {/* <button
                onClick={() => setShowFoot((prev) => !prev)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                {showFoot ? "Cacher le Footer" : "Afficher le Footer"}
            </button>
            {showFoot && <Foot />} */}
        </>
    )
}
