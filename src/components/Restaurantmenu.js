import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY ,IMG_CDN_URL,
    ITEM_IMG_CDN_URL} from "../utils/constants";


const Restaurantmenu=()=>{
    const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
    const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
      getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
    }, []);
  
    async function getRestaurantInfo() {
      try {
        const response = await fetch( swiggy_menu_api_URL + resId);
        const json = await response.json();
  
        // Set restaurant data
        const restaurantData = json?.data?.cards?.map(x => x.card)?.
                               find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestaurant(restaurantData);
  
        // Set menu item data
        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                              groupedCard?.cardGroupMap?.REGULAR?.
                              cards?.map(x => x.card?.card)?.
                              filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                              map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
        
        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find(x => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        })
        setMenuItems(uniqueMenuItems);
      } catch (error) {
        setMenuItems([]);
        setRestaurant(null);
        console.log(error);
      }
    }
   
  
    return  (
      <div>
         <h2 className="restaurant-title">{restaurant?.name}</h2>
         <h3>
          menu
          </h3>
          <ul>
            {menuItems.map((item)=>(
              <li> {item?.name}</li>
            ))}

            </ul>  
         
         
      </div>
      
    )
};

export default Restaurantmenu;