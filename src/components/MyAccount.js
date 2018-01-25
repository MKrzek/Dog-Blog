import React from 'react';
import Navigation from './Navigation.js';
import Messages from './Messages.js';
export default class MyAccount extends React.Component{
    render(){
        return <div>
                <Navigation/>
                <Messages/>
               </div>
    }
}