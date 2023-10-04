import { CDN_IMG_URL } from "../utils/constants";

const ItemsList=({items})=>{
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
                            <button className="p-2 mx-16 h-8 rounded-lg bg-customeGreen3-700 shadow-lg text-white text-xs" >Add +</button>
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