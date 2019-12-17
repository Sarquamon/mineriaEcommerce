import React from "react";
import {Link} from "react-router-dom";

const RecommendedProducts = props => {
	return (
		<div className="container">
			{/* {console.log(props)} */}
			<h2>Productos recomendados basados en tu historial</h2>
			{props.products.length > 0 ? (
				<div className="row">
					<div className="col-lg-4">
						<h3 className="">Estos son los productos que has visto</h3>
					</div>
					<div className="row">
						{props.products.map(product => {
							// console.log(
							// 	`http://localhost:2000/${product.product.productImage}`
							// );

							return (
								<div className="col-lg-4 mt-4 mb-2" key={product._id}>
									<div className="card">
										<img
											src={`http://localhost:2000/${product.productImage}`}
											className="card-img-top"
											alt={product.productName}
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
													onClick={() =>
														props.onHistoryAdd(product.product._id)
													}
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
				</div>
			) : (
				<div className="row">
					<div className="col-lg-12 mt-3 mb-3">
						<h3>¡No tienes productos vistos! Comienza a explorar</h3>
					</div>
				</div>
			)}
		</div>
	);
};

export default RecommendedProducts;
