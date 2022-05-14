import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderList = () => {
    return this.props.dataArr.map((item) => {
      return (
        <ProductItem
          dataEachItem={item}
          changeProduct={this.props.changeProduct}
        />
      );
    });
  };

  render() {
    return <div className="row">{this.renderList()}</div>;
  }
}
