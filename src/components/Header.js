import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
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
                    <li><Link to={"/"} style={{ color: 'black',textDecoration: 'none'}}>Home</Link></li>
                    <li><Link to={"/about"} style={{ color: 'black',textDecoration: 'none'}}>About Us</Link></li>
                    <li><Link to={"/contact"} style={{ color: 'black',textDecoration: 'none'}}>Contact Us</Link></li>
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