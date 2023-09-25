import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        
        <div>
            <h2>This is about page</h2>
            
     <User name={"Piyush Mishra(functional)"} location={"Ghaziabad"}/>
     <UserClass name={"Piyush Mishra(class)"} location={"Ghaziabad(class)"}/>
            
        </div>
    )
};

export default About;