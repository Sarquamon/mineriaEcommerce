import React, {Component} from "react";
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
        console.log(this.state.activeProduct);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);

    return <h1>Hola!</h1>;
  }
}

export default Product;
