import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header=()=>{

    const [login,setlogin]=useState("login");
    return(
         
        

    
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>
                    <button className="newbtn" onClick={()=>{
                        login==="login"?
                        setlogin("logout"):
                        setlogin("login");
                    }} >
                         {login}
                      
                    </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;