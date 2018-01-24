import React from 'react';
import PreviewPicture from './PreviewPicture.js';
import * as Actions from '../actions/index.js';
import {connect} from 'react-redux'


class AdoptionData extends React.Component{

   handleClick=()=>{
       const data='reserved'
       const key = this.props.dog.key
       this.props.reserveDog(data, key) 
}

    render(){
        console.log ('reserve', this.props.dog.adoption)
        const {name, breed, picture, adoption} = this.props.dog
        return <div className='col-3 card ml-1 mr-1 mb-4 text-center'>
                <div className='mt-3 mb-4'>
                 <PreviewPicture pictureUrl={picture} />
                 </div>
                 <p>{name}</p>
                 <p>{breed}</p>   
                <button className='mb-3' onClick={this.handleClick}>{adoption}</button> 
               </div>
    }
}

export default connect (null, Actions) (AdoptionData)