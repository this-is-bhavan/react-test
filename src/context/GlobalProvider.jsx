import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <GlobalContext.Provider value={products}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
