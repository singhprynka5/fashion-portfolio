import React, { Component } from "react";
import ContactInfo from "./ContactInfo";
import DetailedInfo from "./DetailedInfo";
import ImageUpload from "./ImageUpload";
import Steps from "../Common/Steps";

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      firstNameErr: "",
      lastNameErr: "",
      emailErr: "",
      contactErr: "",
      height: "",
      weight: "",
      dob: "",
      address: "",
      dobErr: "",
      weightErr: "",
      heightErr: "",
      addressErr: ""
    };
  }

  validate = () => {
    const {
      email,
      step,
      firstName,
      lastName,
      contact,
      height,
      weight,
      dob,
      address
    } = this.state;
    let isError = false;
    const errors = {
      firstNameErr: "",
      lastNameErr: "",
      emailErr: "",
      contactErr: ""
    };

    if (firstName.length < 1) {
      isError = true;
      errors.firstNameErr = "first Name cannot be blank";
    }

    if (lastName.length < 1) {
      isError = true;
      errors.lastNameErr = "last Name cannot be blank";
    }

    if (email.indexOf("@") === -1) {
      isError = true;
      errors.emailErr = "Please enter a valid email address";
    }

    if (contact.length < 1) {
      isError = true;
      errors.contactErr = "Contact cannot be blank";
    }

    if (step > 1) {
      if (height.length < 1) {
        isError = true;
        errors.heightErr = "Height cannot be blank";
      }
      if (weight.length < 1) {
        isError = true;
        errors.weightErr = "Weight cannot be blank";
      }
      if (dob.length < 1) {
        isError = true;
        errors.dobErr = "DOB cannot be blank";
      }
      if (address.length < 1) {
        isError = true;
        errors.addressErr = "Address cannot be blank";
      }
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  nextStep = submit => {
    const err = this.validate();
    if (!err) {
      this.setState({
        step: this.state.step + 1,
        firstNameErr: "",
        lastNameErr: "",
        emailErr: "",
        contactErr: "",
        dobErr: "",
        weightErr: "",
        heightErr: "",
        addressErr: ""
      });
      if (submit) {
        //
      }
    }
  };

  prevStep = () => {
    const err = this.validate();
    if (!err) {
      this.setState({ step: this.state.step - 1 });
    }
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderForm() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <div>
            <ContactInfo
              {...this.state}
              onChange={this.handleOnChange}
              nextStep={this.nextStep}
            />
          </div>
        );
      case 2:
        return (
          <DetailedInfo
            {...this.state}
            nextStep={this.nextStep}
            onChange={this.handleOnChange}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <ImageUpload
            {...this.state}
            nextStep={this.nextStep}
            onChange={this.handleOnChange}
            prevStep={this.prevStep}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <>
        <Steps step={this.state.step} />
        {this.renderForm()}
      </>
    );
  }
}

export default UserDetails;
