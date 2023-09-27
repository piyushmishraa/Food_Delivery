import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component{

    constructor(props){
        super(props);
    }





    render(){
        return(

            <div>
            <h2>This is about page</h2>
            
            {/* <User name={"Piyush Mishra(functional)"} location={"Ghaziabad"}/> */}
            <UserClass name={"Piyush Mishra(class)"} location={"Ghaziabad(class)"}/>
            
             </div>
            
        )
    }
}



export default About;