import React from 'react';
import datas from "../Product/Data"
import { Link } from 'react-router-dom';

export default function Products() {


  return (
    <div>
      {<div>
        <h2 className="text-center mt-5 pt-5 " id="prod">Products</h2>
        <hr className="w-3" />
        <div className="row p-3 m-3 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-1" id="prod">
          {datas.map((data) => {
            return (
              <div key={data.id}>
                <div className="col mt-1">
                  <div className="card p-2 text-center" >
                    <img src={data.image} className="card-img-top " alt="compp" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text">{data.description}</p>
                      <p className="card-text">${data.price}m</p>
                      {/* {data.image} */}
                      <Link className="" to={`/products/${data.id}`}><button className="btn btn-outline-dark">Buy Now</button></Link>

                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div></div>}
    </div >

  )
}
