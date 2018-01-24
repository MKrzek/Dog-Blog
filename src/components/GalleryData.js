import React from 'react';
import PreviewPicture from './PreviewPicture.js'
export default class GalleryData extends React.Component{
    render(){
        const {name, picture}=this.props.dog
        return <div className= 'col card ml-3 mr-2 text-center  galleryItem'>
                    <PreviewPicture pictureUrl={picture}/>
                    <p>{name}</p>
               </div>
    }
}