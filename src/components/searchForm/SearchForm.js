import React, {useState} from "react";
import axios from "axios";

const vetAPI = "https://newvetsapi.herokuapp.com";

const SearchForm = () => {
  const [products, setProducts] = useState(0);

  const GetProduct = e => {
    const productName = e.target.elements.productName.value;
    e.preventDefault();
    axios
      .get(`${vetAPI}/product/name/${productName}`)
      .then(res => {
        console.log(res.data[0].productName);

        setProducts(res.data);

        console.log(`State: ${products}`);

        // return <p>Hola: {products}</p>;
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-around">
      <form className="form-inline" onSubmit={GetProduct}>
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
    </div>
  );
};

export default SearchForm;
