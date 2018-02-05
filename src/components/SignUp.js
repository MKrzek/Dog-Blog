import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import * as Actions from "../actions/index.js";

class SignUp extends React.Component {
  renderSignUp = field => {
    const {input, label, type, meta: { touched, error } } = field;
    const className = `form-group${touched && error ? "has-error" : ""}`;
    return <fieldset className={className}>
        <label className="control-label">{label}</label>
        <div>
          <input className="form-control" {...input} type={type} />
        </div>
        {touched && error && <div className="alert alert-danger">
              {error}
            </div>}
      </fieldset>;
  };
  SignUp = values => {
    this.props.SignUpUser(values);
  };
  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return (
        <div className="alert alert-danger">
          {this.props.authenticationError}
        </div>
      );
    }
    return <div />;
  }
  render() {
    const { handleSubmit } = this.props;

    return <div className="container">
        <div className="col-md-6 col-md-offset-3 mx-auto">
         <h1 className='text-center mb-4'>Dogether - blog about dogs</h1>
          <h2 className="text-center">Sign Up</h2>
          {this.renderAuthenticationError()}

          <form onSubmit={handleSubmit(this.SignUp)}>
            <Field name="email" component={this.renderSignUp} label="Email" type="email" />
            <Field name="password" component={this.renderSignUp} label="Password" type="password" />
            <Field name="confirmPassword" component={this.renderSignUp} label="Confirm password" type="password" />
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <div>
            <Link to="/" className="btn btn-primary mt-2">
              Already a member yet? Log in
            </Link>
            </div>
          </form>
        </div>
      </div>;
  }
}
function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Please enter a password.";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please enter a password confirmation.";
  }
  if (values.password !== values.confirmPassword) {
    errors.password = "Passwords do not match.";
  }
  return errors;
}
function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  };
}
export default connect(mapStateToProps, Actions)(
  reduxForm({
    form: "signUp",
    validate: validate
  })(SignUp)
);
