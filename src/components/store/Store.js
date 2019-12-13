import React, {useState, useEffect} from "react";
import axios from "axios";

import ReactLoading from "react-loading";

import SearchForm from "../searchForm/SearchForm";
import Products from "../products/Products";

const vetAPI = "http://localhost:2000";

const Store = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const getAllItems = async () => {
		const response = await axios.get(`${vetAPI}/product`);
		// console.log(response.data.products[1].productImage);

		setProducts(response.data.products);
		setLoading(false);
	};

	useEffect(() => {
		const json = sessionStorage.getItem("products");
		const products = JSON.parse(json);
		setProducts({products});

		getAllItems();
		// console.log("corri we");
	}, []);

	useEffect(() => {
		const newProducts = JSON.stringify(products);
		sessionStorage.setItem("products", newProducts);
	}, [products]);

	const getProduct = e => {
		const productName = e.target.elements.productName.value;

		e.preventDefault();

		axios
			.get(`${vetAPI}/product/searchName/${productName}`)
			.then(res => {
				// console.log(res.data);

				setProducts(res.data.products);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div>
			<div className="container mt-3">
				<div className="row">
					<div className="col-lg-3"></div>
					<div className="col-lg-6">
						<SearchForm getProduct={getProduct} />
					</div>
					<div className="col-lg-3"></div>
				</div>
				<div className="row">
					<div className="col-lg-12 justify-content-around">
						{loading ? (
							<div style={{marginLeft: 8 + "rem"}} className="text-center">
								<ReactLoading type={"balls"} color={"#000000"} width={790} />
							</div>
						) : (
							<Products products={products} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Store;
