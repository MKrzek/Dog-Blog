import React from 'react';

export default class PreviewPicture extends React.Component{
    render(){

    const {pictureUrl, picture} = this.props;

    if (!pictureUrl){
        return <div style={{
            height: '400px',
            borderStyle:'solid', 
            borderColor: 'grey'
        }} className='text-center mb-1'>{picture}</div>
    }else{
       return <img className='img-fluid mb-2 mt-2' src={pictureUrl}/>
    }
    
   
    }

}