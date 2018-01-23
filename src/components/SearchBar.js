import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class  SearchBar extends React.Component{

    renderField=(field)=>{
        const {input, type, label, meta:{touched, error}} = field
        return <fieldset className={`form-group${touched && error ? "has-error" : ""}`}>
            <div>
              <input {...input} type={type} />
              {touched && error && <div className="alert alert-danger">
                    {error}
                  </div>}
            </div>
          </fieldset>;
    }
    
    submitForm=(values)=>{
        this.props.fetchDfTags(values)
    }

    render(){
        return <div>
                <form onSubmit={this.props.handleSubmit(this.submitForm)}>
                     <Field 
                      name='searchBar'
                      type='text'
                      label='Enter a query'
                      component={this.renderField}
                      />
                    <button type='submit' className='btn btn-primary'> Submit</button>
                </form>
               </div>
    }
}

function validate(values){
    const errors={}
    if (!values.SearchBar){
        errors.SearchBar='Enter your query'
    }

        return errors
    }

export default connect (null, Actions) (reduxForm({
    form:'searchBar',
    validate
}) (SearchBar))