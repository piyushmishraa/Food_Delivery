// import User from "./User";
// import UserclassName from "./UserclassName";
// import React from "react";
import { useState } from "react";
import newburger2 from "../Images/newburger2.png"
import me from "../Images/me.jpg"
import github from "../Images/github.png"
import discord from "../Images/discord.png"
import reddit from "../Images/reddit.png"
import { Link } from "react-router-dom";
import lo from  "../Images/lo.jpg"

import newburger from "../Images/newburger.png"

// className About extends React.Component{

//     constructor(props){
//         super(props);
//     }





//     render(){
//         return(

//             <div>
//             <h2>This is about page</h2>
            
//             {/* <User name={"Piyush Mishra(functional)"} location={"Ghaziabad"}/> */}
//             <UserclassName name={"Piyush Mishra(className)"} location={"Ghaziabad(className)"}/>
            
//              </div>
            
//         )
//     }
// }



// export default About;

const About=()=>{
  const [showprofile,setshowprofile]=useState("show Profile")
  const [show,setshow]=useState(false)

  const namewala= ()=>{
    showprofile==="show Profile" ?
    setshowprofile("Hide profile"):
    setshowprofile("show Profile")
  };
   const dikhanewala=()=>{
    show===false?
    setshow(true):
    setshow(false)
   };
    return (
      <div>
        <div className="text-center m-12 ">
              <button className="btn" onClick={
                         ()=>{
                               namewala();
                                dikhanewala();

                              }
          
                              }>
                              {showprofile}
                </button>
       
              
                {
                  show &&

  <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white rounded-lg text-gray-900 mb-4 shadow-xl">
    <div className="rounded-t-lg h-32 overflow-hidden">
        <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src={me} alt='Woman looking front'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold">Piyush Mishra</h2>
        <p className="text-gray-500">Frontend developer</p>
    </div>
    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <Link to={"https://github.com/piyushmishraa"}>
          <img className="h-10" src={github} />
           
          </Link>
        
        </li>
        <li className="flex flex-col items-center justify-between">
          <Link to={"https://discord.com/channels/@me"}>
            <img className="h-10" src={discord}/> 
          
            
            </Link>
        </li> 
        <li className="flex flex-col items-center justify-around">
          <Link  to={"https://www.reddit.com/user/god_person69"}>
           <img  className="h-10" src={reddit}/>
            
            </Link>
        </li>
    </ul>
    <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Download Resume</button>
    </div>
</div>
                

                  
                }
              
        
        
        

        </div>
      
           <div className="about-container font-style: italic ">
             <div className="about-left">
              <h1>
               Speedy Delivery <br /> Bursting With <br/>Flavours <br />
               <span className="bg-customeOrange-500">Fill in yourself</span>
              </h1>
              
           </div>
           <div className="about-right">
             <img  className="h10" src={newburger2} alt="Food Image" />
           </div>
           </div>
      </div>
     
    )
}

export default About ;

