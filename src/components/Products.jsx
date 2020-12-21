import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import Product from "./Product";

const Products = () => {
  const products = useContext(GlobalContext);
  return (
    <div className="products">
      {products.length < 0 ? (
        <p>loading products...</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
