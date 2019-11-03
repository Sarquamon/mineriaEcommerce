import React, {Component} from "react";
import SearchForm from "../searchForm/SearchForm";

export class Store extends Component {
  render() {
    return (
      <div>
        <h5>Store</h5>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <SearchForm />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
