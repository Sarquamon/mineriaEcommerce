import React from "react";
// import {Link} from "react-router-dom";

export const OtherUsersBought = props => {
	const recommProduct = props.recommendedproduct;
	return (
		<div className="card" style={{width: 15 + "rem"}}>
			{/* {console.log(recommProduct)} */}
			<img
				className="card-img-top"
				src={`http://localhost:2000/${recommProduct.productImage}`}
				alt=""
			></img>
			<div className="card-body">
				<h5 className="card-title mb-3">{recommProduct.productName}</h5>
				{/* <Link
					to={{
						pathname: `/store/product/${recommProduct._id}`,
						state: {
							productID: recommProduct._id
						}
					}}
				>
					{/* <button className="btn btn-primary">Ver producto</button> 
				</Link> */}
			</div>
		</div>
	);
};

export default OtherUsersBought;
