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
     if (this.props.articles){
      for (const key of Object.keys(this.props.articles)){
          console.log (key, this.props.articles[key])
          this.props.articles[key].key=(key)    
      }
    }
        return _.map(this.props.articles, article=>{
            return <ArticleData article={article} key={article.key}/>
        })
    }
      
    render(){
      
        return <div>
               <Navigation/>
               <div className='container'>
               <div className='row'>
                   <h2 className='mb-5 mt-4 ml-2'>List of Articles</h2>
                   <Link className = 'btn btn-primary mt-4 ml-4' to = '/newArticle' > Add a new Article </Link>
               </div>
               </div>
               <div className='container'>
               <div className='row'>
                   {this.showArticle()}
               </div>
               </div>
               </div>
               
               
              
               
    
}
}
function mapStateToProps(state){
   
    return {articles : state.displayArticle}
}
export default connect (mapStateToProps, Actions)(Home);