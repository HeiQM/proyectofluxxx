import React, { useState,useEffect } from "react";
import Carusel from "../components/Carusel";
    
const Cinesensacional = () => {


 const [home, setHome] = useState([])
    console.log(home);

    useEffect(()=>{
       fetch('https://api.themoviedb.org/3/movie/popular?api_key=b1f1f4bc0e9a9970ff6e005e582871ec')
       .then(response=>response.json())
       .then(data=>{setHome(data.results)});
    }, [])


    return ( 
    <div>
        <div>
            <Carusel home={home}/>

        </div>
    </div> 
    );
}
 
export default Cinesensacional;
