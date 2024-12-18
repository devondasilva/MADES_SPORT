import lOgO from '../../assets/Images/log2Asset 8.png'



export default function Foot(){
    return(

        <>
            <div className="grid grid-flow-row row-span-2" style={{height:"300px", backgroundColor:"#136c95" , marginTop:"20px"}}>
                <div className="h-2/3">
                    <p className=" flex justify-center text-lg text-white my-4 " style={{fontFamily:"Lexend2"}}>NOS PARTENAIRES</p>
                    <div className="grid grid-cols-8  mx-6">
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>
                        <img src={lOgO} alt="" className='col-span-1 mx-3'/>

                    </div>
                    <img src="" alt="" />
                </div>
                <div className="flex justify-center h-1/3" style={{color:"white"}}>
                        <p>Copyrigth @DAS COMMUNICATION</p>
                </div>

            </div>
        </>
    )
}