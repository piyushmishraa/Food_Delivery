import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resdata}=props
    //refactoring by destructuring the resdata object
    const { cloudinaryImageId,name, avgRating}=resdata?.info;
    return(
        
           

  

         <div className="card">
            <div className="card__image">
               <img src={CDN_IMG_URL + cloudinaryImageId} alt="Salad" />
            </div>
            <div className="card__info">
               <div className="car__info--title">
                  <h3>{name}</h3>
                  <p>{avgRating}</p>
               </div>
               <div className="card__info--price">
                  <p> ⭐{avgRating}</p>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
               </div>
            </div>
         </div>
       
        
    )
}

export default RestaurantCard