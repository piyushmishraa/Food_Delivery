import { useDispatch } from "react-redux";
import { CDN_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ItemsList=({ items })=>{
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item));
        console.log(items);
    };
    return(
        <div>
            {
                items.map((item)=>(
                    <div key={item.card.info.name}
                    className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"> 
                    <div className="w-9/12"> 
                    <div  className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price/100}</span>
                    </div>
                     <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4 ">
                        <div className="absolute ">
                            <button onClick={()=>handleAddItem(item)} className="p-2 gg mx-16 h-8 rounded-lg bg-customeGreen3-700 shadow-lg text-white text-xs" >Add +</button>
                        </div>
                       <img src={CDN_IMG_URL+item.card.info.imageId}/>
                    </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemsList;