import React, { useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { Auth0Provider } from '@auth0/auth0-react';

const AppLayout=()=>{
    //authentication code(aise hi)
    const[username,setusername]=useState();
    //code for fetching data(aise hi)
    useEffect(()=>{
      const data ={
        name:"Piyush Mishra",
      }
      setusername(data.name)
    },[])

    return(<Auth0Provider
      domain="dev-jrsy3gca5i5plmel.us.auth0.com"
      clientId="FVIOZEZX41RLVMhbyKxXFzxbOp5uazxk"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:username,setusername}}>
          <div className="App">
           <Header/>
           <Outlet/>
        </div>
      </UserContext.Provider>
      </Provider>
      </Auth0Provider>
      
    )
}

const appRouter=createBrowserRouter(
    [
        {
          path:"/",
          element:<AppLayout/>,
          children:[ 
             {
                path:"/",
                element:<Body/>

             },
             {
               path:"about",
               element:<About/>
             },
             {
               path:"/contact",
               element:<Contact/>
             },
             {
              path:"/restaurant/:resId",
              element:<Restaurantmenu/>
             },
             {
              path:"/cart",
              element:<Cart/>
             }
            ],
          errorElement:<Error/>
        }
       
    ]
)
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);