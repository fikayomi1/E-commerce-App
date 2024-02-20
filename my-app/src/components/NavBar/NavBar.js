import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from "./Images/Logo.jpg"
import "./NavBar.css"

export default function NavBar() {

  return (
    <div id="home" className="pb-5">
      <nav className="navbar navbar-expand-md bg-white border fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand ms-5 fw-semibold ts-3 fst-italic" href="/">
            Mac's Store</a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto pe-4 mb-2 mb-lg-0 ">
              <li className="nav-item me-2">
                {/* <a className="nav-link fw-semibold " href="#home">HOME</a>  */}
                <Link className="nav-link fw-bold" to="/">HOME</Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link fw-bold" to="/products">PRODUCTS</Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link fw-bold" to="/login">LOGIN</Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link fw-bold" to="/cart">CART</Link>
              </li>
            </ul>
            <Link to="/reset"><button className="btn btn-outline-dark ">Sign In / Register</button></Link>
          </div>
        </div>
      </nav>
    </div>

  )
}