const User=(props)=>{
    const {name,location}=props;
    return(
    <div className="user-card">
         <p>Hemlo my name is {name}</p>
         <p>Location:{location}</p>
         <p>contact:fanboiofharrystyles@gmail.com</p>
    </div>
        
    ) 
}
export default User;