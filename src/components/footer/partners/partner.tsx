


interface Partnerprops{
    lienIm: string;
}



 const Partner:React.FC<Partnerprops>=({lienIm})=>{

return(

        <>

            <div className="m-4 flex items-center" style={{width:"100px"}}>
                <img src={lienIm} alt="" />
            </div>

        </>

)


 }

 export default Partner;