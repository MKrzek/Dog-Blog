import React from 'react';
import {Field, reduxForm} from 'redux-form';
class SignUp extends React.Component {

    renderSignUp(field) {
        return <div className='form-group'>
            <label>{field.label}</label>
            <input {...field.input} type='email'/>
            {field.meta.error}
        </div>

    }
    render() {
        return <form>
            <Field 
                name='email' 
                component={this.renderSignUp} 
                label='Email'/>
            <Field 
                name='password' 
                component={this.renderSignUp} 
                label='Password'/>
            <Form
                name='confirmPassword'
                component={this.renderSignUp}
                label='Confirm password'/>
            <button type='submit'>Submit</button>
        </form>

    }
}
function validate(values) {
    console.log(values)
    const errors = {}
    if (!values.email){
        errors.email='Please enter an email.';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address.';
    if (!values.password){
         errors.password='Please enter a password.';
    }
    if (!values.confirmPassword){
        errors.confirmPassword = 'Please enter a password confirmation.';
    }
    if (values.password!==values.confirmPassword){
        errors.password='Passwords do not match.';
    }
}
    
    return errors;

}
export default reduxForm({validate: validate, form: 'SignUp'})(SignUp)