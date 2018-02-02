import React from "react";

import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";

import Navigation from "./Navigation.js";
import FileField from "./FileField.js";
import Footer from './Footer.js';

class NewArticle extends React.Component {
  renderNewArticle = field => {
    const className = `form-group ${field.meta.touched && field.meta.error ? "has-error" : ""}`;
    return (
      <fieldset className={className}>
        
        <div>
          <textarea {...field.input} type={field.type} placeholder={field.label} className='form-control' />
         {field.meta.touched && field.meta.error && <div className="alert alert-danger">{field.meta.error}</div>}
        </div>
      </fieldset>
    );
  };

  submitNewArticle = values => {
    
    this.props.createNewArticle(values, () => {
      this.props.history.push("/home");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return <div>
        <Navigation />
        <div className="container">
          <h2 className="mt-5 mb-3 text-center"> Add a new article</h2>
          <div className="col-md-6 col-md-offset-3 mx-auto">
            <form onSubmit={handleSubmit(this.submitNewArticle)}>
              <Field name="title" component={this.renderNewArticle} label="Add a title to your article" type="text" />
              <Field name="content" component={this.renderNewArticle} label="Add an article" type="text" />
              <Field name="picture" label="Attach a picture" component={FileField} />
              <button type="submit" className="btn  btn-lg btn-primary">Submit your article</button>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>;
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Please enter a title";
  }
  if (!values.content) {
    errors.content = "Plase add content";
  }
  return errors;
}
export default connect(null, Actions)(
  reduxForm({
    form: "newArticle",
    validate
  })(NewArticle)
);
