import React from 'react';
import {connect} from 'react-redux';
import PreviewPicture from './PreviewPicture.js';
import * as Actions from '../actions/index.js';

class GalleryData extends React.Component{

   handleClick=()=>{
       
       const votes = this.props.dog.votes;
       let counter= votes + 1;
       const key = this.props.dog.key;
       this.props.addVote(counter, key)
     
   }

    render(){
        const {name, picture, votes}=this.props.dog
        return <div className= 'col-md-4 card ml-3 mr-2 text-center  mb-2 mt-2 galleryItem'>
                    <div className='mt-2'>
                    <PreviewPicture pictureUrl={picture}/>
                    </div>
                    
                    <p>{name}</p>
                    <div>{votes}</div>
                    <button onClick={this.handleClick} className='btn btn-primary'>Vote for this dog</button>
               </div>
    }
}
export default connect (null, Actions) (GalleryData)