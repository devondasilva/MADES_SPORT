






import Im3 from '../../../assets/Images/profil.jpg';
import { IoPerson } from "react-icons/io5";
import './reviews.css';

interface ModifProps{
  Nom: string,
  Nationalite: string,
  Texte: string
}


// const Review: React.FC<ModifProps>=( {lien, Nom, Nationalite, Club})=>{
//     return(
        
//         <div className='col'>
//             <div className="ligne"></div>
//             <div className='d-flex '>
//                 <div className='' style={{backgroundImage:Im3}}>
//                     <img src={Im3} alt=""  style={{position:"absolute"}}/>
//                     <a href={lien} target="_blank" rel="noopener noreferrer" style={{position:"relative"}}> <IoPerson/> Voir son Profil</a>
//                 </div>
//                 <div style={{color:"black"}}>
//                     <h2>{Nom}</h2>
//                     <h3>{Nationalite}</h3>
//                     <h3>{Club}</h3>
//                 </div>
//             </div>



//         </div>
        
//     )
// }



const Review:React.FC<ModifProps>=({Nom, Nationalite, Texte})=>{
    return(
      
        
            <div className=' h-60 grid grid-cols-1 gap-3 my-2 overflow-hidden' style={{borderRadius:"15px" }}>
              <div className=' grid grid-cols-2'>
                  <div className='rounded-lg overflow-hidden' >
                      <div className='grid h-3/5 overflow-hidden'>
                        <img src={Im3} alt="" style={{width:"cover"}} className=' '/>
                      </div>
                      <div className='flex justify-center items-center h-1/5 bg-sky-600 ' style={{ width:"100%", color:"white"}}>
                        <a href="" target="_blank" rel="noopener noreferrer" className='flex text-white text-sm ' >
                            <div className='mt-1'> 
                                <IoPerson/>
                            </div> 
                            <div style={{marginLeft:"10px"}} >
                              Voir son Profil
                            </div></a>
                      </div>
                  </div>
                  <div className='grid grid-cols-1' style={{color:"black", alignContent:"center", marginLeft:"20px"}}>
                      <h2 style={{fontFamily:"Lexend2"}}>{Nom}</h2>
                        <h3 style={{ marginTop:"5px"}}>{Nationalite}</h3>
                        <h4 style={{marginTop:"5px", fontSize:"12px"}}>{Texte}</h4>
                    </div>
                </div>
            </div>

          // <div className='border h-96 grid grid-cols-2 gap-3'>

          //   <div className='border grid grid-cols-2 col-span-2'>

          //     <div className=' border-1 border-red-300 '> 
          //       <div className='border-1 border-blue-300 h-4/5'></div>
          //       <div className='border-1 border-green-200 h-1/5'></div>
          //     </div>
          //     <div className='  border-1 border-red-300 '></div>
          //   </div>
          //   <div className='border '></div>
          //   <div className='border '></div>

    )
}

export default Review;