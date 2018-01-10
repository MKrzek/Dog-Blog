import React from 'react';
import Navigation from './Navigation.js'
import NewArticle from './NewArticle';
export default class Home extends React.Component{
    render(){
        return <div>
               <Navigation/>
               <NewArticle/>
               </div>
               
    
}
}