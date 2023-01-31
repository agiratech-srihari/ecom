import React ,{useContext}from 'react'
import Data from './ProductData';
import ProductCard from './prodCard';
import ProductContext from './ProductContext';

function Header() {

     
        const productContext = useContext(ProductContext);
        let addtoCart = (id) => {
          let product = Data.find((obj) => obj.id === id);
          product.qty++;
          productContext.setCartItems([...productContext.cartItems, product]);
        };
    return (
        <div>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
              {Data.map((Product,index) => {
                return <ProductCard key={index} data={Product} handleCart={addtoCart} />;
              })}
            </div>
          </div>
        </section>
      </div>
    )
}

export default Header
