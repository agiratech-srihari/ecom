import React, { useState } from "react";

let ProductContext = React.createContext();
export default ProductContext;

export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState([]);

  return (
    <ProductContext.Provider
      value={{ cartItems, setCartItems, total, setTotal }}
    >
      {children}
    </ProductContext.Provider>
  );
};
