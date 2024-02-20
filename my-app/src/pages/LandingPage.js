import React from "react";
import HomePage from "../components/HomePage/HomePage";
import Products from "../components/Product/Product";

const LandingPage = (props) => {

    return(
        <div>
            
            
            <HomePage user = {props.user} />
            <Products />
            
        </div>
    )

}

export default LandingPage;