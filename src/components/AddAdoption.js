import React from "react";
import { Field, reduxForm } from "redux-form";
import * as Actions from "../actions/index.js";
import { connect } from "react-redux";
import FileField from "./FileField.js";
import Navigation from "./Navigation.js";
import Footer from './Footer.js';

class AddAdoption extends React.Component {
  renderField = field => {
    const { input, type, label, meta: { touched, error } } = field;
    const className = `form-group${touched && error ? "has-error" : ""}`;
    return (
      <fieldset className={className}>
        <label className='label-control'>{label}</label>
        <div>
          <input {...input} type={type}
          className='form-control' />
          {touched &&
            error && <div className="alert alert-danger">{error}</div>}
        </div>
      </fieldset>
    );
  };

  submitForm = values => {
    
    this.props.addAdoption(values, () => {
      this.props.history.push("/adoption");
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className='container'>
         <h2 className='mt-5 text-center'>Find a new home for your dog</h2>
         <div className='col-md-6 col-md-offset-3 mx-auto'> 
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
            <button className='btn btn-primary btn-lg' type="submit">Submit</button>
          </form>
          </div>
        </div>
        <div>
          <Footer/>
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
