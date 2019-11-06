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
    const productName = this.props.location.state.productName;

    axios
      .get(`${vetAPI}/product/name/${productName}`)
      .then(res => {
        this.setState({activeProduct: res.data[0]});
        // console.log(this.state.activeProduct);
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
          <div>
            <h1>{product.productName}</h1>
            <Link to="/store/">
              <button className="btn btn-outline-primary">Regresar</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
