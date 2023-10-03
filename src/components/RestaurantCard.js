import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resdata}=props
    //refactoring by destructuring the resdata object
    const { cloudinaryImageId,name, avgRatingString,sla, costForTwo,cuisines,areaName}=resdata?.info;
    return(
        
           

  

         <div className="card">
                

              <div style={{height:"230px"}}>
                
              <img  src={CDN_IMG_URL + cloudinaryImageId} alt="Salad" />
               </div>  
               
               
               <h3 className="font-bold">{name}</h3>
               <h5>{cuisines.join(", ")}</h5>
               <h5>{areaName}</h5>
            <span className=" flex">
              <h4>
              <i className="fa-solid fa-star"></i>
                 ⭐  { avgRatingString}
               </h4>
              <h4>•</h4>
               <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
               <h4>•</h4>
               <h4>{costForTwo ?? '₹200 for two'}</h4>
            </span>
            </div> 
            
      
       
        
    );
};

// higher order component for is open label

export const IsopenCard=(RestaurantCard)=>{
   return (props)=>{
      return(
        <div>
         <label className="absolute bg-customeGreen3-700 text-white m-1 p-2  rounded-xs z-10  text-xs ">Open</label>
         <RestaurantCard {...props}/>
        </div>


      )
   }
}

export default RestaurantCard