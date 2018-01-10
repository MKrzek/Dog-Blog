import React from 'react'
// import Navigation from './Navigation.js';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class NewArticle extends React.Component{

    renderNewArticle=(field)=>{
        const className=`form-group${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
        return <fieldset className={className}>
            <label className='control-label'>{field.label}</label>
            <div>
                <textarea {...field.input} type={field.type}/>
            </div>
            <div className='help-text'>
                {field.meta.touched ? field.meta.error : ''}
            </div>
        </fieldset>
}

    submitNewArticle = (values) => {
       this.props.createNewArticle(values)
}

    render(){
        const{handleSubmit}=this.props;
        return <div>
                <div className='container'>
                    <div  className='col-md-6 col-md-offset-3'>
                        <h2> Add a new article</h2>
                        <form onSubmit={handleSubmit(this.submitNewArticle)}>
                            <Field name='title'
                                component={this.renderNewArticle}
                                label='Add a title to your article'
                                type='text'/>
                            <Field name='content'
                                component={this.renderNewArticle}
                                label='Add an article'
                                type='text'/>
                            <button type='submit' className='btn btn-primary'> Submit your article </button>
                        </form>
                </div>
               </div>
               </div>
    }
};

function validate(values){
    
    const errors={}
    if (!values.title){
       errors.title='Please enter a title';
    };
    if (!values.content){
        errors.content='Plase add content';
    }
    return errors
};
export default connect (null, Actions)(reduxForm({
    form: 'newArticle',
    validate,
}) (NewArticle));