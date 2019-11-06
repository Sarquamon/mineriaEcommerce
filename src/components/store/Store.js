import React, {Component} from "react";
import axios from "axios";

import SearchForm from "../searchForm/SearchForm";
import Products from "../products/Products";

const vetAPI = "https://newvetsapi.herokuapp.com";

export class Store extends Component {
  state = {
    products: []
  };

  getProduct = e => {
    const productName = e.target.elements.productName.value;

    e.preventDefault();

    axios
      .get(`${vetAPI}/product/name/${productName}`)
      .then(res => {
        this.setState({products: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    const json = localStorage.getItem("products");
    const products = JSON.parse(json);
    this.setState({products});
  };

  componentDidUpdate = () => {
    const products = JSON.stringify(this.state.products);
    localStorage.setItem("products", products);
  };

  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <SearchForm getProduct={this.getProduct} />
              <Products products={this.state.products} />
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
