import React,{useContext} from 'react';
import { Context } from "../store/appContext";
import Cardspelis from "../components/Cardspelis";

const Peliculas = () => {
    
    const {store}=useContext(Context);
    
    return ( 
        <>
        <div className="row">
            {store.pelis.map((item)=>(
            <div className="col-sm-6 col-lg-3">
            <Cardspelis title={item.original_title} date={item.release_date} url={item.poster_path}/>
            </div>))} 
        </div>
        </>
     );
}
 
export default Peliculas; 