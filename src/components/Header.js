import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
const Header=()=>{

    const [login,setlogin]=useState("login");
    const {loggedInUser}=useContext(UserContext);
  
    //subscribing to store
    const cartItems = useSelector((store) => {return (store.cart.items)});
    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
    

    return(
         
        

    
        <div className="flex justify-between bg-customeOrange-500 shadow-lg h-14 ">
            <div className="logo-container">
                <img className=" h-10 pr-1 mx-auto rounded-full pt-2 pl-1" 
                src={LOGO_URL}
                />
            </div>
            <div className="flex  items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 font-weight: 900"><Link to={"/"} style={{ color: 'black',textDecoration: 'none',fontWeight:'bold'}}>Home</Link></li>
                    <li className="px-4 font-weight: 900"><Link to={"/about"} style={{ color: 'black',textDecoration: 'none',fontWeight:'bold'}}>About Us</Link></li>
                    <li className="px-4 font-weight: 900"><Link to={"/contact"} style={{ color: 'black',textDecoration: 'none',fontWeight:'bold'}}>Contact Us</Link></li>
                    <li className="px-4 font-weight: 900"><Link to={"/cart"} style={{fontWeight:'bold'}}>Cart({cartItems.length})</Link></li>
                    
                    {/* <button className="newbtn" onClick={()=>{
                        login==="login"?
                        setlogin("logout"):
                        setlogin("login");
                    }} >
                         {login}
                      
                    </button> */}
                    <li  style={{fontWeight:'bold'}}>
                        {
                            isAuthenticated && <p>{user.name}</p>
                        }
                    </li>

                    {
                        isAuthenticated ? (
                            <li className="px-4" style={{fontWeight:'bold'}}>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                            </button>
                            </li>

                        ):(

                         <li  className="px-4"  style={{fontWeight:'bold'}}>
                            <button onClick={() => loginWithRedirect()}>Log in </button>
                        </li>
                        )
                    }

                    
                   
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;