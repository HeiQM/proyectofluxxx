import React,{useContext} from 'react';
import { Context } from "../store/appContext";
import Cardprogra from '../components/Cardprogra';

const Programastv = () => {
    
    const {store}=useContext(Context);
    
    return ( 
        <>
        <div className="row">
            {store.tvprogram.map((item)=>(
            <div className="col-sm-6 col-lg-3">
            <Cardprogra name={item.name} url={item.poster_path} />
            </div>))} 
        </div>
        </>
     );
}
 
export default Programastv; 