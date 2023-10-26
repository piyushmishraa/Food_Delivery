import RestaurantCard,{IsopenCard}from "./RestaurantCard";

import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
    

const Body=()=>{
    const [listofrestaurant,setlistofrestaurant]=useState([]);
    const [newsearchlist,setnewsearchlist]=useState([])
    const [searchlist,setsearchlist]=useState("");
    const IsopenlabelCard=IsopenCard(RestaurantCard);
    
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
    const  {setusername,loggedInUser}=useContext(UserContext)

    if (onlinestatus===false){
      return <h1>Looks Like you are offline</h1>
    }

    return(
        <div className="body">
           
            <div className="filter">

            <div className="items-center mx-px">
            <input 
             type="text"
              value={searchlist} 
              onChange={(e)=>setsearchlist(e.target.value)}
              className="border border-solid border-black ml-96 mt-12 rounded-md w-72  " placeholder="search Restaurants" />
            <button  className="ml-4 text-white bg-customeOrange-500 hover:bg-customeOrange-500/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"onClick={()=>{
                const newlist=listofrestaurant.filter(
                    (res)=>res.info.name.includes(searchlist)
                )
                console.log(newlist);
                setnewsearchlist(newlist);
            }}>
                search
            </button>
            </div>
              <button className="ml-[500] mb-12  text-white bg-customeGreen-400 hover:bg-customeGreen-400/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-customeGreen2-600/80 dark:focus:ring-[#FF9119]/40 " onClick={()=>{  
                const filteredlist=listofrestaurant.filter(
                    (res)=>res.info.avgRating>4.5
                );
                
                setnewsearchlist(filteredlist)
              }}> Recommended 
              </button>   
             
              
            </div>
            <div className="list">
                {newsearchlist.map((restaurant)=>(
                   <Link   key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id} style={{ color: 'black',textDecoration: 'none'}}>{restaurant.info.isOpen? (<IsopenlabelCard resdata={restaurant}/>):(<RestaurantCard  resdata={restaurant}/>)}</Link>
                ))}
            </div>
        </div>
    )
}

export default Body;