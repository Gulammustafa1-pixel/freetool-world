import { useEffect, useState } from "react";
import "../styles/Loader.css";

function Loader({ children }) {

    const [loading,setLoading]=useState(true);

    useEffect(()=>{

        const timer=setTimeout(()=>{

            setLoading(false);

        },1800);

        return ()=>clearTimeout(timer);

    },[]);

    if(loading){

        return(

            <div className="loader">

                <div className="loader-logo">

                    FreeTool.world

                </div>

                <div className="loader-line">

                    <div className="loader-fill"></div>

                </div>

                <p>Loading AI Experience...</p>

            </div>

        );

    }

    return children;

}

export default Loader;