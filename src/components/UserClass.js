import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count:0,
            count2:2
        }
    }


    render(){

        const{count,count2}=this.state;
        return(
            <div className="user-card">
            <p>Hemlo my name is {this.props.name}</p>
            <p>Location:{this.props.location}</p>
            <p>count:{count}</p>
            <p>count2:{count2}</p>
            <p>contact:fanboiofharrystyles@gmail.com</p>
            </div>
        )
    }

}
export default UserClass;