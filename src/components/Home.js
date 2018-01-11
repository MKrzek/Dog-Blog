import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation.js'
import {connect} from 'react-redux';
export default class Home extends React.Component{
    render(){
        return <div>
               <Navigation/>
               <div>
                   <h2>List of Articles</h2>
               </div>
               <Link className='btn btn-primary' to='/newArticle'>Add a new Article</Link>
               </div>
               
    
}
}
