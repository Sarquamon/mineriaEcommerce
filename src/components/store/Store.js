import React, {Component} from "react";
import SearchForm from "../searchForm/SearchForm";

export class Store extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <SearchForm />
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
