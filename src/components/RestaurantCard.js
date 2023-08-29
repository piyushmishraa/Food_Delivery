const RestaurantCard=(props)=>{
    const {resdata}=props
    //refactoring by destructuring the resdata object
    const {name,resId}=resdata?.info
    return(
        
           

  

         <div className="card">
            <div className="card__image">
               <img src={resdata.info.image.url} alt="Salad" />
            </div>
            <div className="card__info">
               <div className="car__info--title">
                  <h3>{name}</h3>
                  <p>{resdata.info.cuisine.name}</p>
               </div>
               <div class="card__info--price">
                  <p>{resId}</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
               </div>
            </div>
         </div>
       
        
    )
}

export default RestaurantCard