import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory=({data})=>{
    
    const [showItems,SetshowItems]=useState(false)
    
    const handleClick=()=>{
        SetshowItems(!showItems);

    }

return(
    <div>
        {/* {header} */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
            <div className="flex justify-between" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>

            </div>
            
           { showItems && <ItemsList  items={data.itemCards}/>}
        </div>
        
        
    </div>
)

}
export default RestaurantCategory ;