import React from 'react';
import Navigation from './Navigation.js';
import Messages from './Messages.js';
import MyArcticles from './MyArticles.js';
import Footer from './Footer.js';
export default class MyAccount extends React.Component{
    render(){
        return <div>
            <Navigation />
            <div className="container">
              <div className='mt-5 mb-4 d-flex' style={{ backgroundColor: "white", height: "10vh" }}>
                <h2 className="mx-auto align-self-center">Messages</h2>
              </div>
              <Messages />
              <div className='mt-5 mb-4 d-flex' style={{ backgroundColor: "white", height: "10vh" }}>
                <h2 className=" mx-auto align-self-center">Articles</h2>
              </div>
             
              <MyArcticles />
              
            </div>
            <div>
              <Footer />
            </div>
          </div>;
    }
}