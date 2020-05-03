import React, { Component } from "react";

class ImageUpload extends Component {
  render() {
    const { prevStep, nextStep } = this.props;
    return (
      <div className="form-card">
        <div className="form-group">
          <button className="btn btn-danger" onClick={() => prevStep()}>
            Prev
          </button>
          <button className="btn btn-success" onClick={() => nextStep(true)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
