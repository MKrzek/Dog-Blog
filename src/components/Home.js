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
      for (const key of Object.keys(this.props.articles)){
          console.log (key, this.props.articles[key])
          this.props.articles[key].id=(key)
          console.log (this.props.articles)
      }
        return _.map(this.props.articles, article=>{
            return <ArticleData article={article} key={article.id}/>
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
   
    return {articles : state.displayArticle}
}
export default connect (mapStateToProps, Actions)(Home);