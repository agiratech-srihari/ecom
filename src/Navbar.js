import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import ProductContext from './ProductContext'


function Navbar() {
    const Prod = useContext(ProductContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-4 px-lg-5">
            <div className="navbar-brand fs-1">Shopping Page</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <Link className="nav-item nav-link active fs-5"  to="/">Home</Link>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle fs-5" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</div>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/">All Products</Link></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <Link className="btn btn-outline-light cart-icon" to="/cart">
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                        <span className="badge bg-daqty.cartItemsrk text-black ms-2 rounded-pill ">{Prod.cartItems.length}</span>
                    </Link>
                </form>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
