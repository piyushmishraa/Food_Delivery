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
        console.log(resinfo);
        

    }
// const {name,cuisines,costForTwoMessage}=resinfo?.cards[0]?.card?.card?.info;
    
    // const{itemCards}=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(resinfo.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0].itemCards);

    return(
        <div>
            <h2>{resinfo?.cards[0]?.card?.card?.info?.name}</h2>
            <p>{resinfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}-{resinfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
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