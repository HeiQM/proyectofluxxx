import React from "react";

const Cardspelis = (props) => {
    return ( 
    <div> 
      <div className="card" style= { {width: "18rem" }}> 
       <img src={'https://image.tmdb.org/t/p/w500/'+props.url} className="card-img-top" alt="."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.date}</p>
        </div>
     </div>
   </div>

);
}

export default Cardspelis;