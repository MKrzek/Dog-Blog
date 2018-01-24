import React from "react";
import Navigation from "./Navigation.js";
import { Field, reduxForm } from "redux-form";
import * as Actions from "../actions/index.js";
import FileField from "./FileField.js";
import { connect } from "react-redux";

class AddGallery extends React.Component {
  renderForm = field => {
    const { input, label, type, meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-error" : ""}`;
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
    this.props.addGallery(values, () => {
      this.props.history.push("/gallery");
    });
  };
  render() {
    return (
      <div>
        <Navigation />
        <div>
          <form onSubmit={this.props.handleSubmit(this.submitForm)}>
            <Field
              type="picture"
              name="picture"
              label="Picture"
              component={FileField}
            />
            <Field
              name="name"
              type="text"
              label="Your pet's name"
              component={this.renderForm}
            />

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Please enter your pet's name";
  }
  if (!values.picture) {
    errors.picture = "Please attached a picture";
  }

  return errors;
}

export default connect(null, Actions)(
  reduxForm({
    form: "addGallery",
    validate
  })(AddGallery)
);
