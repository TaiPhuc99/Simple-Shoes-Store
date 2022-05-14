/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

const increaseOrder = 1;
const decreaseOrder = -1;

export default class CartModal extends Component {
  // Funtion render Product from Cart
  renderProduct = () => {
    return this.props.cart.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.image} style={{ maxWidth: "150px" }} />
          </td>
          <td>{item.price}$</td>
          <td>
            <a
              className="btn btn-success mx-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.ChangeOrderQuantity(item.id, increaseOrder);
              }}
            >
              +
            </a>
            {item.oderQuantity}
            <a
              className="btn btn-primary mx-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.ChangeOrderQuantity(item.id, decreaseOrder);
              }}
            >
              -
            </a>
          </td>
          <td>{item.price * item.oderQuantity}$</td>
        </tr>
      );
    });
  };

  // Get Total Order Quantity
  getTotalOrderQuantity = () => {
    return this.props.cart.reduce((sum, item) => {
      return (sum += item.oderQuantity);
    }, 0);
  };

  render() {
    return (
      <div>
        {/* Button trigger modal */}
        <div className="text-right mb-3">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#cartModal"
          >
            CART ({this.getTotalOrderQuantity()})
          </button>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="cartModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "80vw" }}
          >
            <div className="modal-content">
              <div className="modal-header justify-content-center">
                <h5 className="modal-title " id="exampleModalLabel">
                  PRODUCT ORDER
                </h5>
              </div>
              <div className="modal-body">
                <table className="table text-center">
                  <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Expense</th>
                  </thead>
                  <tbody>{this.renderProduct()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
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
