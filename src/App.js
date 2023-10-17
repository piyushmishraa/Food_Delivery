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

    return(
      <UserContext.Provider value={{loggedInUser:username,setusername}}>
          <div className="App">
           <Header/>
           <Outlet/>
        </div>
      </UserContext.Provider>
      
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
             }
            ],
          errorElement:<Error/>
        }
       
    ]
)
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);