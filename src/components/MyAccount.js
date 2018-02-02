import React from 'react';
import Navigation from './Navigation.js';
import Messages from './Messages.js';
import MyArcticles from './MyArticles.js';
import Footer from './Footer.js';
export default class MyAccount extends React.Component{
    render(){
        return <div>
                <Navigation/>
                <div className='container'>
                <div>
                  <h2 className='text-center mt-2 mb-2'>Messages</h2>
                <Messages/>
               </div>
               <div>
                   <h2 className='text-center mt-2 mb-2'>Articles</h2>
                   <MyArcticles/>  
                </div>
                </div>
                <div>
                    <Footer/>
                </div>
               </div>
    }
}