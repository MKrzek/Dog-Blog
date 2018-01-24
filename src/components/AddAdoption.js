import React from "react";
import { Field, reduxForm } from "redux-form";
import * as Actions from "../actions/index.js";
import { connect } from "react-redux";
import FileField from "./FileField.js";
import Navigation from "./Navigation.js";

class AddAdoption extends React.Component {
  renderField = field => {
    const { input, type, label, meta: { touched, error } } = field;
    const className = `form-group${touched && error ? "has-error" : ""}`;
    return (
      <fieldset className={className}>
        <label>{label}</label>
        <div>
          <input {...input} type={type} />
          {touched &&
            error && <div className="alert alert-danger">{error}</div>}
        </div>
      </fieldset>
    );
  };

  submitForm = values => {
    console.log("adoption values", values);
    this.props.addAdoption(values, () => {
      this.props.history.push("/adoption");
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div>
          <form onSubmit={this.props.handleSubmit(this.submitForm)}>
            <Field
              name="picture"
              type="picture"
              label="Add your dog's photo"
              component={FileField}
            />
            <Field
              name="name"
              type="text"
              label="Your dog's name"
              component={this.renderField}
            />
            <Field
              name="breed"
              type="text"
              label="Your dog's breed"
              component={this.renderField}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Please enter your dog's name";
  }
  if (!values.breed) {
    errors.breed = "Please enter your dog's breed";
  }

  return errors;
}
export default connect(null, Actions)(
  reduxForm({
    form: "adoption",
    validate
  })(AddAdoption)
);
