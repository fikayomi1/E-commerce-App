import React from "react";

import BG3 from "./Image (3).jpg"


export default function HomePage(props){
    return(
        <div className = "container row my-5 pt-4 mx-auto">
             
            <div className = "col my-auto overlay">
                {props.user && <div><h1>Welcome {props.user},</h1> <br></br> </div>}
                
                <h2>An Automobile is everything to us.</h2>
                <p className ="fw-normal">From the engines that work tirelessly to the wheels that spin and the buttons that go click click <br></br> They all make up the best work of art.</p>
                
            </div>
            <div className = "col d-none d-md-block justify-content-sm-center ">
                <img src = {BG3} className = "img-fluid" alt = "compp">

                </img>

            </div>
        </div>
    )
}