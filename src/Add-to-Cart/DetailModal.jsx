/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

export default class DetailModal extends Component {
  render() {
    let { image, name, description, shortDescription, price, quantity } =
      this.props.content;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#detailModal"
          style={{ display: "none" }}
        >
          Launch demo modal
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="detailModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "60vw" }}
          >
            <div className="modal-content">
              <div className="modal-header" style={{ borderBottom: "none" }}>
                <img
                  src={image}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Name:</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Description:</td>
                    <td>
                      {description} {shortDescription}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Price:</td>
                    <td>{price}$</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Quantity:</td>
                    <td>{quantity}</td>
                  </tr>
                </table>
              </div>
              <div className="modal-footer">
                <a
                  className="btn btn-dark"
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => {
                    this.props.addProduct(this.props.content);
                  }}
                >
                  Add to Cart
                  <i className="fa-solid fa-cart-plus ml-2" />
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
