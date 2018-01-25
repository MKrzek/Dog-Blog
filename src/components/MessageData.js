import React from 'react';
export default class MessageData extends React.Component {
    render(){
        const {name, phone, message }=this.props.message
        return <div className='card text-white bg-info mb-3 col-md-5 ml-2'>
                  <div className='card-header bg-info'>Contact: {phone}</div>
                  <div className='card-body'>
                     <h5 className='card-title'>From: {name}</h5>
                     <p className='card-text'> {message}</p>
                </div>
               </div>
    }
}