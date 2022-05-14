/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <a
          className="btn btn-primary"
          data-toggle="modal"
          href="#ignismyModal"
          style={{ display: "none" }}
        >
          open Popup
        </a>
        <div className="modal fade" id="ignismyModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label=""
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="thank-you-pop text-center">
                  <img
                    src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png"
                    style={{
                      width: "15vw",
                    }}
                  />
                  <h1>Successfullly!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
