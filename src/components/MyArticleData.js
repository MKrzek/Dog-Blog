import React from "react";
import PreviewPicture from "./PreviewPicture.js";

export default class MyArticleData extends React.Component {
 
   handleClick=()=>{
       console.log ('dziala', this.props.myArticle.key)
       this.props.deleteArticle(this.props.myArticle.key)
   }

  render() {
    const { title, picture } = this.props.myArticle;
    return (
      <div className="col-md-5 ml-2 card  mt-3  mb-4">
        
          <h4 style={{height: "6vh"}} className="text-center mt-4">{title}</h4>
        
        
        <div className='text-center mt-3 mb-2'>
          <PreviewPicture pictureUrl={picture} />
        </div>
        <button onClick={this.handleClick} className='btn btn-warning btn-lg mt-3 mb-4'>Remove This Article</button>
      </div>
    );
  }
}
