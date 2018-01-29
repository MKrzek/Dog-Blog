import React from "react";

import PreviewPicture from "./PreviewPicture.js";


export default class HomeGalleryData extends React.Component { 
  render() {
    const { name, picture} = this.props.dog;
    return (
      <div className=" card ml-2 mr-2 text-center mb-2 mt-3">
        <div className="mx-auto text-center">
          <PreviewPicture pictureUrl={picture} />
        </div>
        <h3 className='mb-2'>{name}</h3>
      </div>
    );
  }
}

