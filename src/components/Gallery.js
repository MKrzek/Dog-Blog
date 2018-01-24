import React from 'react';
import Navigation from './Navigation.js';
import {Link} from 'react-router-dom';


export default class Gallery extends React.Component{
    render(){
        return <div>
               <Navigation/>
               <div>
                   <h2>Dog Gallery</h2>
                   <Link className ='btn btn-primary' to ='/addGallery'>Add your pet</Link>
               </div>
               </div>
    }
}