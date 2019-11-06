import React from "react";
import axios from "axios";

const vetAPI = "https://newvetsapi.herokuapp.com";

const getProduct = e => {
  const productName = e.target.elements.productName.value;
  e.preventDefault();
  axios
    .get(`${vetAPI}/product/name/${productName}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

const SearchForm = () => (
  <form className="form-inline" onSubmit={getProduct}>
    <div className="btn-toolbar" role="toolbar">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese un articulo"
          name="productName"
        />
      </div>

      <div className="btn-group ml-2">
        <button className="btn btn-outline-primary">Buscar</button>
      </div>
    </div>
  </form>
);

export default SearchForm;
