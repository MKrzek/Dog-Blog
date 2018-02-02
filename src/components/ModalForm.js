import React from 'react';
import {Field, reduxForm} from 'redux-form';
import * as Actions from '../actions/index.js';
import {connect} from 'react-redux';

class ModalForm extends React.Component{

    renderInput=(field)=>{
        const {input, type, label, meta:{touched, error}}=field;
        const className=`form-group${touched && error ? 'has-error' : ''}`;
        return <fieldset className={className}>
                   <input {...input} type={type} placeholder={label} className='form-control'/>
                   {touched && error && (<div className='alert alert-danger'>{error}</div>)}
               </fieldset>
}

    renderTextarea=(field)=>{
        const { input, type, label, meta: { touched, error } } = field;
        const className = `form-group${touched && error ? "has-error" : ""}`;
        return <fieldset className={className}>
            
            <textarea {...input} type={type} placeholder={label} className='form-control' />
            {touched && error && <div className="alert alert-danger">
                  {error}
                </div>}
          </fieldset>;

    }

    submitForm=(values)=>{
        const data = "reserved";
        const key = this.props.dog.key;
        this.props.adoptMessage(values, this.props.ownerUiD)
        this.props.onRequestClose()
        this.props.reserveDog(data, key)
    }


    render(){
        return <div className='text-center col-md-6 col-md-offset-3 mx-auto'>
            <form onSubmit={this.props.handleSubmit(this.submitForm)}>
              <Field type="text" name="name" label="Enter your name and surname" component={this.renderInput} />
              <Field type="text" name="phone" label="Enter your phone number" component={this.renderInput} />
              <Field type="text" name="message" label="Enter your message" component={this.renderTextarea} />
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>;

        
    }
}

function validate(values){
    const errors = {}
    if (!values.name){
        errors.name='Please enter your name'
    }
    if (!values.phone || values.phone.search("[0-9]") === -1 || values.phone.length < 7) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!values.message){
        errors.message='Please enter your message'
    }
    return errors
}

export default connect(null, Actions) (reduxForm({
form: 'modalForm',
validate
}) (ModalForm));