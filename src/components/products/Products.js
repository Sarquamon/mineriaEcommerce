import React from "react";

// component to list all products
const Products = props => (
  <div>
    {props.products.map(product => {
      return (
        <div key={product._id}>
          <p>{product.productName}</p>
        </div>
      );
    })}
  </div>
);

export default Products;
