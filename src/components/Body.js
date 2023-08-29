import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mock";
    

const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                <p>search</p>
            </div>
            <div className="res-container">
                {reslist.map((restaurant)=>(
                   <RestaurantCard key={restaurant.info.resId} resdata={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;