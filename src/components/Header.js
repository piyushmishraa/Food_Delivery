import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{

    const [login,setlogin]=useState("login");
    const {loggedInUser}=useContext(UserContext);
  

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
         
        

    
        <div className="flex justify-between bg-customeOrange-500 shadow-lg h-14">
            <div className="logo-container">
                <img className=" h-10 pr-1 mx-auto rounded-full pt-2 pl-1" 
                src={LOGO_URL}
                />
            </div>
            <div className="flex  items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to={"/"} style={{ color: 'black',textDecoration: 'none'}}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"} style={{ color: 'black',textDecoration: 'none'}}>About Us</Link></li>
                    <li className="px-4"><Link to={"/contact"} style={{ color: 'black',textDecoration: 'none'}}>Contact Us</Link></li>
                    <li className="px-4">Cart({cartItems.length})</li>
                    <li>
                    <button className="newbtn" onClick={()=>{
                        login==="login"?
                        setlogin("logout"):
                        setlogin("login");
                    }} >
                         {login}
                      
                    </button>
                    </li>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;