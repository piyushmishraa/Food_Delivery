import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

const cartitems= useSelector((store)=>store.cart.items)

const dispatch=useDispatch()

const clear=()=>{
    dispatch(clearCart());
}
console.log(cartitems);


return (
    <div className="text-center m-4 p-4">
        <h1 className=" text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2  bg-customeGreen3-700 shadow-lg text-white text-xs rounded-lg" onClick={clear}>
                clear
            </button>
            {cartitems.length  === 0 && (
                <h1>Cart is empty,add items to the cart</h1>
            )}
         <ItemsList items={cartitems}/>
        </div>
        
    </div>
)

}
export default Cart;