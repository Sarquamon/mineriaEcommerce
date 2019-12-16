import React from "react";
import {Link} from "react-router-dom";

// component to list all products
const Products = props => {
	return (
		<div className="container">
			{props.products == null ? (
				<p>No se ha encontrado el producto :c </p>
			) : (
				<div className="row">
					{props.products.map(product => {
						return (
							<div className="col-lg-4 mt-4 mb-2" key={product._id}>
								<div className="card">
									<img
										src={`${product.productImage}`}
										className="card-img-top"
										alt=""
										height="190px"
									/>
									<div className="card-body">
										<h5 className="card-title">{product.productName}</h5>
										<p className="card-text">{product.productDesc}</p>
										<h6 className="card-subtitle text-right">
											{product.productPrice} $
										</h6>
										<Link
											to={{
												pathname: `/store/product/${product._id}`,
												state: {
													productID: product._id
												}
											}}
										>
											<button
												// onClick={() => props.onHistoryAdd(product._id)}
												className="btn btn-primary"
											>
												Ver producto
											</button>
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Products;
