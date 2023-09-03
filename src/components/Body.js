import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mock";
import { useEffect, useState } from "react";
    

const Body=()=>{
    const [listofrestaurant,setlistofrestaurant]=useState(reslist);
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();


        
    const cardsWithRestaurants = json.data.cards.filter(card => 
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
      );
        console.log(cardsWithRestaurants);

        const combinedRestaurants = cardsWithRestaurants.reduce((acc, card) => {
            const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (Array.isArray(restaurants)) {
              return [...acc, ...restaurants];
            }
            return acc;
          }, []);
          const uniqueArray = Array.from(new Set(combinedRestaurants.map(obj => obj.info.id))).map(id => {
            return combinedRestaurants.find(obj => obj.info.id === id);
          });
          
        setlistofrestaurant(uniqueArray);
    }

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
                   <RestaurantCard  key={restaurant.info.id}  resdata={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;