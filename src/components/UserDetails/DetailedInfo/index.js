import React, { Component } from "react";
import InputField from "../../Common/InputField";

class DetailedInfo extends Component {
  render() {
    const {
      height,
      weight,
      dob,
      address,
      dobErr,
      weightErr,
      heightErr,
      addressErr,
      onChange,
      prevStep,
      nextStep
    } = this.props;
    return (
      <div className="form-card">
        <InputField
          label="Height in cm"
          error={heightErr}
          value={height}
          name="height"
          onChange={onChange}
        />
        <InputField
          label="Weight in kg"
          error={weightErr}
          value={weight}
          name="weight"
          onChange={onChange}
        />
        <InputField
          label="Date of birth"
          error={dobErr}
          value={dob}
          name="dob"
          onChange={onChange}
        />
        <InputField
          label="Full address"
          error={addressErr}
          value={address}
          name="address"
          onChange={onChange}
        />
        <div className="form-group">
          <button className="btn btn-danger" onClick={() => prevStep()}>
            Prev
          </button>
          <button className="btn btn-success" onClick={() => nextStep()}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default DetailedInfo;
