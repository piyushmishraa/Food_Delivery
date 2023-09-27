import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
           userinfo:{
            name:"default name",
            location:"default location",

           }
        }
    }
     async componentDidMount(){
         const data= await fetch("https://api.github.com/users/piyushmishraa");
         const jsondata=await data.json();
         console.log(jsondata);
         this.setState({
            userinfo:jsondata,
         }
            )
    }

    render(){
        const {name,location,avatar_url}= this.state.userinfo;

        return(
            <div className="user-card">
            <img src={avatar_url} style={{height:"130px"}}/>
            <p>Hemlo my name is {name}</p>
            <p>Location:{location}</p>
            
            <p>contact:fanboiofharrystyles@gmail.com</p>
            </div>
        )
    }

}
export default UserClass;