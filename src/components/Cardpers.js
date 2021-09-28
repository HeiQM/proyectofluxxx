const Cardpers = (props) => {
    return ( 
    <div> 
      <div className="card" style= { {width: "18rem" }}> 
       <img src={'https://image.tmdb.org/t/p/w500/'+props.profile} className="card-img-top" alt="."/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text"></p>
        </div>
     </div>
   </div>

);
}


export default Cardpers;