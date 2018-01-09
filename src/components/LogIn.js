import React from 'react';
import {Field, reduxForm} from 'redux-form';
class LogIn extends React.Component{

    renderLogin(field){
        return <div className='form-group'>
                   <label>{label}</label>
                   <input {...field.input} type='email'/>
               </div>
               

    }
    render(){
        return <form>
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
                   
               </form>
            
    }
}
function validate(values){
    console.log (values)
    const errors={}
    return errors;

}
export default reduxForm({
    validate: validate,
    form:'LogIn'
})(LogIn)