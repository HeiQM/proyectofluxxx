import React,{useContext} from 'react';
import { Context } from "../store/appContext";
import Cardpers from '../components/Cardpers';

const Personas = () => {
    
    const {store}=useContext(Context);
    
    return ( 
        <>
        <div className="row">
            {store.personas.map((item)=>(
            <div className="col-sm-6 col-lg-3">
            <Cardpers name={item.name} profile={item.profile_path} />
            </div>))} 
        </div>
        </>
     );
}
 
export default Personas; 