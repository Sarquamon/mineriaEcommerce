import React from "react";

const SearchForm = () => (
  <form className="form-inline">
    <input
      type="text"
      className="form-control"
      placeholder="Ingrese un articulo"
    />

    <button className="btn btn-outline-primary">Buscar</button>
  </form>
);

export default SearchForm;
