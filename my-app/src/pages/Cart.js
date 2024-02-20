import React, { useEffect } from "react";
import { useState } from "react";


export default function Cartt(props) {

    var totalPrice = 0;
    var Total = [];
    let [cartArray, setCartArray] = useState([])
    // Here I am gettting cart as a props from another componenet  Cart is the number of items selected

    setCartArray(props.cart);
    cartArray.map((product)=>
    {
       return Total.push(product.price)
        // now I'm pushing the all the prices into an array
    })
    console.log(`${Total} is the number of what exactly`);

    for(var i = 0; i<Total.length; i++){
        totalPrice = totalPrice + Total[i];
    }
    console.log(totalPrice);
    
    
    

    return (
        <div className="container my-5">
            <h2 className="text-center">CART</h2>
            {cartArray === [] ? <div> Cart is empty <hr></hr></div>:

                <div>
                    {props.cart.map((cartItem) => 
                        <div className="row border border-opacity-100 rounded mt-2" key = {cartItem.id}>
                            <div className="col container my-3 p-2 text-center">
                                
                                    <img src={cartItem.image} width="250px" className="rounded img-fluid"></img>
                                    {/* <hr></hr> */}
                            </div>
                            <div className="col container text-center my-5">
                                <hr></hr>
                                <strong><p>{cartItem.name}</p></strong>
                                <p>${cartItem.price} million</p>
                                <hr></hr>
                               
                            </div>
                        </div>

                        

                    )} 
                    <div className = "container text-center p-4 fw-bold fs-4">Total : {totalPrice} million dollars</div>
                    <button className = "btn btn-primary">Button dey</button>

        </div>}
        </div >
    )
}
