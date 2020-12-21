import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.title}</h2>
    </div>
  );
};

export default Product;
