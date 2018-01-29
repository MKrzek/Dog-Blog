import React from  'react';
import * as Actions from '../actions/index.js';
import {connect} from 'react-redux';
import _ from 'lodash';

import MessageData from './MessageData.js';

class Messages extends React.Component{
    
   componentDidMount=()=>{
        this.props.displayMessages()
    }

    deleteMessage=(key)=>{
        this.props.deleteMessage(key)
    }

    showMessages=()=>{
        if (this.props.messages){
              for (const key of Object.keys(this.props.messages)) {
                this.props.messages[key].key = key;
              }
            
        }
        return _.map(this.props.messages, message=>{
           return <MessageData message={message} key={message.key} deleteMessage={this.deleteMessage}/>
        
        })
    
    }
    
    render(){
        return<div className='container'>
                {this.props.messages ? (<div className='row  justify-content-center'>{this.showMessages()}</div>) : (<div className='alert alert-info'>'You have no messages'</div>)}
              </div>
    }
}
function mapStateToProps(state){
    console.log (state.displayMessages)
    return {
        messages: state.displayMessages
    }
}

export default connect (mapStateToProps, Actions) (Messages);