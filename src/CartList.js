import React,{useContext} from 'react'
import ProductContext from './ProductContext';
import {Link} from "react-router-dom"

function CartList() {

    let total = 0;

    const prod = useContext(ProductContext)

    prod.cartItems.map((a) => {
        return (total = parseInt(a.price) * a.count + total);
      });
      let IncreaseQty = (id) => {
        let productIndex = prod.cartItems.findIndex((obj) => obj.id === id);
        prod.cartItems[productIndex].qty++;
        prod.setCartItems([...prod.cartItems]);
      };
      let DecreaseQty = (id) => {
        let productIndex = prod.cartItems.findIndex((obj) => obj.id === id);
        prod.cartItems[productIndex].qty--;
        prod.setCartItems([...prod.cartItems]);
      };
      let Remove = (id) => {
        let productIndex = prod.cartItems.findIndex((obj) => obj.id === id);
        let product = prod.cartItems[productIndex];
        let confirm = window.confirm(
          `Do you want to remove ${product.productName} from cart?`
        );
        if (confirm) {
          let productIndex = prod.cartItems.findIndex((obj) => obj.id === id);
          prod.cartItems.splice(productIndex, 1);
          prod.setCartItems([...prod.cartItems]);
        }
      };
    return (
        <div className="text-center">
        <Link className="btn btn-outline-dark margin" to="/">
          HOME
        </Link>
        {prod.cartItems.length === 0 ? (
          <h2>Your Cart is Empty</h2>
        ) : (
          <div className="cart-details">
          <h2>
            Total : Rs{" "}
            {prod.cartItems
              .map((e) => e.qty * e.price)
              .reduce((a, b) => a + b)}
          </h2></div>
        )}
        <div className="cart-List">
          {
          prod.cartItems.map((el) => {
            return (
              <>
                <div className="cart-card">
                  <div>
                    <h1>{el.productName}</h1>
                  </div>
                  <div>
                    <h4>
                      PRICE : {el.price}*{el.qty} = Rs {el.price * el.qty}
                    </h4>
                  </div>
                  <div>
                    <span>
                      <button
                        className="btn btn-primary margin"
                        onClick={() => DecreaseQty(el.id)}
                        disabled={el.qty < 2}
                      >
                        -
                      </button>
                    </span>
                    <span className="badge bg-secondary ">
                      Quantity: {el.qty}
                    </span>
                    <span>
                      <button
                        className=" btn btn-primary margin "
                        onClick={() => IncreaseQty(el.id)}
                      >
                        +
                      </button>
                    </span>
                  </div>
                  <div>
                    <button
                      className="btn btn-danger margin"
                      onClick={() => Remove(el.id)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    )
}

export default CartList
