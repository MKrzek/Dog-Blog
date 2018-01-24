import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import Navigation from "./Navigation.js";

class AddVet extends React.Component {
  renderField = field => {
    return (
      <fieldset
        className={`form-group ${
          field.meta.touched && field.meta.error ? "has-error" : ""
        }`}
      >
        <label>{field.label}</label>
        <div>
          <textarea
            {...field.input}
            placeholder={field.label}
            type={field.type}
          />
          {field.meta.touched &&
            field.meta.error && (
              <div className="alert alert-danger">{field.meta.error}</div>
            )}
        </div>
      </fieldset>
    );
  };
  handleNewInfo = values => {
    this.props.addVet(values, callback => {
      this.props.history.push("/vets");
    });
  };

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div className="container">
          <h2>Add a vet</h2>
          <form onSubmit={this.props.handleSubmit(this.handleNewInfo)}>
            <Field name="vet" label=" Vet Name" component={this.renderField} />
            <Field
              name="streetName"
              label="street"
              type="text"
              component={this.renderField}
            />
            <Field
              name="streetNumber"
              label="Street Number"
              type="number"
              component={this.renderField}
            />
            <Field
              name="phone"
              label="Phone number"
              type="number"
              component={this.renderField}
            />
            <Field
              name="www"
              label="Website"
              type="text"
              component={this.renderField}
            />

            <button type="submit" className="btn btn-primary">
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
  if (!values.vet) {
    errors.vet = "Please enter  the vet's name";
  }
  if (!values.streetName) {
    errors.streetName = "Please enter a street name";
  }

  if (!values.streetNumber || values.streetNumber.search("[0-9]") === -1) {
    errors.streetNumber = "Please enter a valid street number";
  }
  if (
    !values.phone ||
    values.phone.search("[0-9]") === -1 ||
    values.phone.length < 7
  ) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!values.wwww) {
    errors.wwww = "Please enter a valid website address";
  }

  return errors;
}

export default connect(null, Actions)(
  reduxForm({
    validate,
    form: "vet"
  })(AddVet)
);
