import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class  SearchBar extends React.Component{

    renderField=(field)=>{
        const {input, type, label, meta:{touched, error}} = field
        return <fieldset className={`form-group${touched && error ? "has-error" : ""}`}>
            <div>
                <div className='row justify-content-center'>
              <input {...input} type={type} placeholder={label} className='col-md-7 form-control text-lowercase' />
              <button type="submit" className="btn bmd-btn-icon">
                <i className="material-icons">search</i>
              </button>
              </div>

               {touched && error && <div className="alert alert-danger">{error} </div>}
            </div>
          </fieldset>;
    }

    submitForm=(values)=>{
        this.props.fetchDfTags(values)
        values.searchBar='';
    }

    render(){
        return <div>
            <form onSubmit={this.props.handleSubmit(this.submitForm)}>
              <Field name="searchBar" type="text" label="Enter a query" component={this.renderField} />
            </form>
          </div>;
    }
}

function validate(values){
    const errors={};
    if (!values.searchBar){
        errors.searchBar='Enter your query';   
    }

        return errors
}

export default connect (null, Actions) (reduxForm({
    validate,
    form:'searchBar',
    
}) (SearchBar))