import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mock";
import { useState } from "react";
    

const Body=()=>{
    const [listofrestaurant,setlistofrestaurant]=useState(reslist);
    return(
        <div className="body">
            <div className="filter">
              <button onClick={()=>{  
                const filteredlist=listofrestaurant.filter(
                    (res)=>res.info.rating.aggregate_rating>4
                );
                console.log(filteredlist);
                setlistofrestaurant(filteredlist)
              }}> Button 
              </button>   
            </div>
            <div className="res-container">
                {listofrestaurant.map((restaurant)=>(
                   <RestaurantCard key={restaurant.info.resId} resdata={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;