import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

import Navigation from './Navigation.js';

class AddDogFriendly extends React.Component{


    renderField=(field)=>{
        const {input, type, label, meta: {touched, error}}=field
      
        return <fieldset className={`form-group${touched && error ? 'has-error' : ''}`}>
                 <label>{label}</label>
                 <div>
                 <textarea {...input} type={type}/>
                 {touched && error && (<div className='alert alert-danger'>{error}</div>)}
                 </div>
               </fieldset>
    }

   submitForm = values =>{
        this.props.addDogFriendly(values, ()=>{
            this.props.history.push('/dogFriendly')
        })
    }

    render(){
        return <div>
                <Navigation/>
                <h2>Add a Dog Friendly Place</h2>
                <div>
                    <form onSubmit={this.props.handleSubmit(this.submitForm)}>
                    <Field
                     name='place'
                     type='text'
                     component={this.renderField}
                     label='Add a place'/>
                     <Field 
                     name='tags'
                     type='text'
                     component={this.renderField}
                     label='Add tags'/>
                     <Field
                     name='description'
                     type='text'
                     component={this.renderField}
                     label='Add description'/>
                     <Field 
                     name='www'
                     type='text'
                     component={this.renderField}
                     label='Add a website'/>
                     <button type='submit'>Submit</button>
                     </form>
                </div>
               </div>
    }

}

function validate(values){
    const errors = {};
if (!values.place){
    errors.place ='Please enter a name'
}
if (!values.tags){
    errors.tag =' Please enter tags'
}
if (!values.description){
    errors.description = 'Please enter a description'
}
if (!values.www){
    errors.www='Please enter an address'
}
    return errors
}



export default connect (null, Actions) (reduxForm ({
form:'addDogFriendly',
validate
}) (AddDogFriendly))

