import React from "react";

const SearchForm = props => {
	return (
		<div className="d-flex justify-content-around">
			<form className="form-inline" onSubmit={props.getProduct}>
				<div className="btn-toolbar" role="toolbar">
					<div className="input-group">
						<input
							type="text"
							className="form-control custom-form-control"
							placeholder="Ingrese un articulo"
							name="productName"
						/>
					</div>

					<div className="btn-group ml-2">
						<button className="btn btn-outline-primary">Buscar</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
