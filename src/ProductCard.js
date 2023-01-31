import React from 'react'
import ProductContext from './ProductContext';

function ProductCard(props) {
    const prod = useContext(ProductContext)
    return (
        <div className="col mb-5">
        <div className="card h-100 rounded">
          <img src="http://placehold.it/200x100" alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.data.name}</h5>
              <h6>{props.data.description}</h6>
              RS : {props.data.price}
          </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="text-center btn btn-outline-dark mt-auto cart-icon"

              onClick={() => props.handleCart(props.data.id)}
              disabled={prod.cartItems.some((obj) => obj.id === props.data.id)}
            >
              <i className="bi-cart-fill me-1"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProductCard
