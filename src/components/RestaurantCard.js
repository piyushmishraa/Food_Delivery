import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resdata}=props
    //refactoring by destructuring the resdata object
    const { cloudinaryImageId,name, avgRatingString,sla, costForTwo,cuisines,areaName}=resdata?.info;
    return(
        
           

  

         <div className="card">
                

                
               
               <img  src={CDN_IMG_URL + cloudinaryImageId} alt="Salad" />
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
}

export default RestaurantCard