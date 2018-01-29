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
      <div className=" card mr-2 ml-2">
        <div>
          <h4 className="text-center mt-2">Title: {title}</h4>
        </div>
        
        <div className='text-center'>
          <PreviewPicture pictureUrl={picture} />
        </div>
        <button onClick={this.handleClick} className='btn btn-alert mb-2'>Remove This Article</button>
      </div>
    );
  }
}
