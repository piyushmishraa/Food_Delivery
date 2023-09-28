import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
    

const Body=()=>{
    const [listofrestaurant,setlistofrestaurant]=useState([]);
    const [newsearchlist,setnewsearchlist]=useState([])
    const [searchlist,setsearchlist]=useState("");
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
        setnewsearchlist(uniqueArray);
    }

    const onlinestatus=useOnlineStatus();

    if (onlinestatus===false){
      return <h1>Looks Like you are offline</h1>
    }

    return(
        <div className="body">
           
            <div className="filter">

            <div className="search">
            <input 
             type="text"
              value={searchlist} 
              onChange={(e)=>setsearchlist(e.target.value)}/>
            <button onClick={()=>{
                const newlist=listofrestaurant.filter(
                    (res)=>res.info.name.includes(searchlist)
                )
                console.log(newlist);
                setnewsearchlist(newlist);
            }}>
                search
            </button>
            </div>
              <button className="yoo" onClick={()=>{  
                const filteredlist=listofrestaurant.filter(
                    (res)=>res.info.avgRating>4
                );
                
                setnewsearchlist(filteredlist)
              }}> Button 
              </button>   
            </div>
            <div className="res-container">
                {newsearchlist.map((restaurant)=>(
                   <Link   key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id} style={{ color: 'black',textDecoration: 'none'}}><RestaurantCard  resdata={restaurant}/></Link>
                ))}
            </div>
        </div>
    )
}

export default Body;