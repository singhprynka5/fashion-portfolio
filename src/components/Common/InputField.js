import React from "react";

const InputField = props => (
  <div className="form-group">
    <label>{props.label}</label>
    <span className="pull-right text-danger">
      <small>{props.error}</small>
    </span>
    <input
      className="form-control"
      type={props.type ? props.type : "text"}
      name={props.name}
      value={props.value}
      onChange={(e)=>props.onChange(e)}
    />
  </div>
);

export default InputField;
