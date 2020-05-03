import React, { Component } from "react";
import InputField from "../../Common/InputField";

class ContactInfo extends Component {
  render() {
    const {
      firstNameErr,
      firstName,
      onChange,
      lastNameErr,
      lastName,
      contactErr,
      contact,
      emailErr,
      email,
      nextStep
    } = this.props;
    return (
      <div className="form-card">
        <InputField
          label="First Name"
          error={firstNameErr}
          value={firstName}
          name="firstName"
          onChange={onChange}
        />
        <InputField
          label="Last Name"
          error={lastNameErr}
          value={lastName}
          name="lastName"
          onChange={onChange}
        />
        <InputField
          label="Email"
          error={emailErr}
          value={email}
          name="email"
          type="email"
          onChange={onChange}
        />
        <InputField
          label="Contact"
          error={contactErr}
          value={contact}
          name="contact"
          type="tel"
          onChange={onChange}
        />
        <div className="form-group">
          <button
            className="btn btn-success"
            onClick={() => nextStep()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
