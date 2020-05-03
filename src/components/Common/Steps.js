import React, { Component } from "react";

class Steps extends Component {
  render() {
    const { step } = this.props;
    return (
      <div className="row form-steps">
        <div className={"col-xs-3 " + (step > 0 ? "active" : "")}>
          <i className="fa fa-address-book" aria-hidden="true"></i>
          <br />
          Contact Info
        </div>
        <div className={"col-xs-3 " + (step > 1 ? "active" : "")}>
          <i className="fa fa-address-card-o" aria-hidden="true"></i>
          <br />
          Details
        </div>
        <div className={"col-xs-3 " + (step > 2 ? "active" : "")}>
          <i className="fa fa-upload" aria-hidden="true"></i>
          <br />
          Pictures
        </div>
      </div>
    );
  }
}

export default Steps;
