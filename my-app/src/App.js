import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './App.css';
import LogReg from "./pages/LogReg";
import Products from "./components/Product/Product";
import ProductDesc from "./components/ProductDesc/ProductDesc";
import Login from "./pages/Login"
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Cartt from "./pages/Cart";




const Application = () => {

  const [cart,setCart] =useState([]);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/todo" element={<Register />} />
          <Route path = "/login" element = {<Login/>}/>
          <Route path="/reset" element={<LogReg />} />
          <Route path="/products/:id" element={<ProductDesc cart = {cart} setCart = {setCart}/>} />
          <Route path = "/products" element = {<Products/>} />
          <Route path = "/cart" element = {<Cartt cart = {cart}/>} />
        </Routes>
      </div>
    </Router>
  )
}



ReactDOM.render(<Application />, document.getElementById("base"));

// eslint-disable-next-line
export default "App";
