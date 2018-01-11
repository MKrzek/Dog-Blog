import React from 'react';
import {Link} from 'react-router-dom';


import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import _ from 'lodash';

import Navigation from './Navigation.js';
import ArticleData from './ArticleData.js';
class Home extends React.Component{

componentDidMount(){
    this.props.displayArticles()
}

 showArticle=()=>{
     console.log ('props.article', this.props.articles)
            return  _.map(this.props.articles, article => {
                console.log ('lodash', article)
                return <ArticleData article={article}/>
           })   
    }  

    render(){
      
        return <div>
               <Navigation/>
               <div>
                   <h2>List of Articles</h2>
               </div>
               <div>   
                   {this.showArticle()}
               </div>
               <Link className='btn btn-primary' to='/newArticle'>Add a new Article</Link>
               </div>
               
    
}
}
function mapStateToProps(state){
    console.log ('displayArticle', state.displayArticle)
    return {articles : state.displayArticle}
}
export default connect (mapStateToProps, Actions)(Home);