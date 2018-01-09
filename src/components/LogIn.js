import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class LogIn extends React.Component{

    renderLogin(field){
        const className=`form-group${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
        return <fieldset className= {className}>
                   <label className='control-label'>{field.label}</label>
                   <input {...field.input} type='email'/>
                   <div className='text-help'>
                   {field.meta.touched ? field.meta.error: ''}
                   </div>
               </fieldset>
               

    }

    LogIn=(values)=>{
        console.log (values);
        this.props.LogInUser(values)
    }

    renderAuthenticationError(){
        if (this.props.authenticationError){
            return <div className='alert alert-danger'>
                        {this.props.authenticationError}
                   </div>
        }
        return <div></div>
    }
    render(){
        const {handleSubmit}= this.props;
        return <div className='container'>
                 <div className='col-md-2 col-md-offset-3'>
                 <h2 className='text-center'>Log In</h2>

                    {this.renderAuthenticationError()}
               <form onSubmit ={handleSubmit(this.LogIn)}>
                   <Field
                        name='email'
                        component={this.renderLogin}
                        label='Email'
                    />
                    <Field
                        name='password'
                        component={this.renderLogin}
                        label='Password'
                    />
                    <button type='submit' className='btn btn-primary'>Log In</button>
                   
               </form>
               </div>
               </div>
            
    }
}
function validate(values){
    console.log (values)
    const errors={}
    if (!values.email){
        errors.email='Please enter a valid email';
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email='Invalid email address';
};

if (!values.password){
    errors.password='Please enter a password';
}

    return errors;

}

function mapStateToProps(state){
    return {
        authenticationError: state.auth.error
    }
}
export default connect (null, Actions)(reduxForm({
    validate: validate,
    form:'logIn'
})(LogIn));