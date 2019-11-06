import React from "react";
import {Link} from "react-router-dom";

// component to list all products
const Products = props => (
  <div>
    {props.products.map(product => {
      return (
        <div key={product._id}>
          <p>{product.productName}</p>
          <Link
            to={{
              pathname: `/store/product/${product._id}`,
              state: {product: product.productName}
            }}
          >
            <button className="btn btn-primary">Ver producto</button>
          </Link>
        </div>
      );
    })}
  </div>
);

export default Products;
