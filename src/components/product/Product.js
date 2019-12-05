import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const vetAPI = "https://newvetsapi.herokuapp.com";

//component for individual product
export class Product extends Component {
  state = {
    activeProduct: []
  };

  componentDidMount = () => {
    const productID = this.props.location.state.productID;

    axios
      .get(`${vetAPI}/product/id/${productID}`)
      .then(res => {
        this.setState({activeProduct: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const product = this.state.activeProduct;
    return (
      <div>
        {this.state.activeProduct.length !== 0 && (
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-lg-12">
                <h1>{product.productName}</h1>
              </div>
              <Link to="/store/">
                <button className="btn btn-outline-primary">Regresar</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
