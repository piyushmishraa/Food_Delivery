import { useEffect, useState } from "react";

const Restaurantmenu=()=>{
    const [resinfo,setresinfo]=useState(null);
    useEffect(()=>{
        fetchmenu();
    },
    [])

    const fetchmenu=async()=>{

        const data= await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=132622"  
        );

        const jsondata = await data.json();
        console.log(jsondata);
        setresinfo(jsondata.data);

    }
const {name,cuisines,costForTwoMessage}=resinfo?.cards[0]?.card?.card?.info;
    
    // const{itemCards}=resinfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0];

    return(
        <div>
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            <p>Menu</p>
            <ul>
                <li>Burger</li>
                <li>biryani</li>
                <li>Lassi</li>
            </ul>
        </div>
    )
};

export default Restaurantmenu;