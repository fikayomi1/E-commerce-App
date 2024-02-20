import React from 'react';
import { Link, useParams } from 'react-router-dom';
import datas from "../Product/Data";


var Arr = [];
export default function ProductDesc(props) {

    const { id } = useParams();
    console.log(id)
    var productArray = datas.filter((dat)=> dat.id === id)
    //The productArray returns an object in an array
    var product = productArray[0];
    
    console.log(product)


    const handleCart = () =>{
        

        Arr.push(product);
        // console.log(`${Arr[1].name} is an array`)
        props.setCart([...Arr])
        console.log(`This product ${product.name} was selected here my dear` )
        // console.log(Arr);
        // console.log(props.cart)

    }
    
    return (
        <div className = "container mt-4 text-center">
           
            <img className = "img-thumbnail"src = {product.image} width ="700px" alt = {product.name}></img>
            <hr></hr>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p><strong>Price : </strong>${product.price} million</p>
          <Link to = "/cart">  <button className = "btn btn-outline-primary" onClick = {handleCart}>Add to Cart</button></Link>
        </div>
    )
}