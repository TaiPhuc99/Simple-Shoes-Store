/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { image, name, price } = this.props.dataEachItem;
    return (
      <div className="col-lg-4">
        <div className="card mb-4">
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body text-center">
            <h5 className="card-title" style={{ fontSize: "1rem" }}>
              {name}
            </h5>
            <p className="card-text">{price}$</p>
            <div className="">
              <a
                className="btn btn-success"
                style={{ color: "white", cursor: "pointer" }}
                data-toggle="modal"
                data-target="#detailModal"
                onClick={() => {
                  this.props.changeProduct(this.props.dataEachItem);
                }}
              >
                Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
