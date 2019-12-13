import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const vetAPI = "http://localhost:2000";

//component for individual product
export class Product extends Component {
	state = {
		activeProduct: [],
		recommendedProducts: []
	};

	selectRandomProduct(productArr) {
		const randomNumber =
			Math.floor(Math.random() * (productArr.length - 1 - 0 + 1)) + 0;
		return randomNumber;
	}

	componentDidMount = () => {
		const productID = this.props.location.state.productID;

		axios
			.get(`${vetAPI}/product/${productID}`)
			.then(res => {
				this.setState({activeProduct: res.data.product});
			})
			.catch(err => {
				console.log(err);
			});
		axios
			.get(`${vetAPI}/order/checkSimilarProd/${productID}`)
			.then(res => {
				if (res) {
					// console.log(res);

					if (res.data.count > 0) {
						// console.log("Si hay");

						const productArr = [];
						// console.log(res.data.products);
						res.data.products.forEach(product => {
							productArr.push(product);
						});

						// console.log(productArr[this.selectRandomProduct(productArr)]);

						this.setState({
							recommendedProducts:
								productArr[this.selectRandomProduct(productArr)]
						});
					} else {
						// console.log("no hay");
					}
				} else {
					console.log(`Error!`);
				}
			})
			.catch(err => {
				console.log(`Error! ${err}`);
			});
	};

	render() {
		const product = this.state.activeProduct;
		const recommendedProduct = this.state.recommendedProducts;
		return (
			<div>
				{this.state.activeProduct.length !== 0 && (
					<div className="container">
						<div className="row justify-content-around">
							<div className="col-lg-6">
								<div
									className="card mt-3 mb-3" /* style={{width: 20 + "rem"}} */
								>
									<img
										src={product.productImage}
										className="card-img-top"
										alt=""
									/>
									<div className="card-body">
										<h4 className="card-title">{product.productName}</h4>
										<h4 className="card-text text-right">
											{product.productPrice}
										</h4>
										{recommendedProduct.productName ? (
											<div>
												<h5 className="card-text">
													Otros usuarios comparon este producto tambi&eacute;n
													con el actual:
												</h5>
												<p className="card-text mb-3">
													{recommendedProduct.productName}
												</p>
											</div>
										) : (
											<h5 className="card-text mb-3">
												No hay recomendacion para este producto
											</h5>
										)}
										<div className="btn-group">
											<Link to="/store/">
												<button className="btn btn-outline-primary">
													Regresar
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row"></div>
					</div>
				)}
			</div>
		);
	}
}

export default Product;
