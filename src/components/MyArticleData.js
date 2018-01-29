import React from "react";
import PreviewPicture from "./PreviewPicture.js";

export default class MyArticleData extends React.Component {
 
   handleClick=()=>{
       console.log ('dziala', this.props.myArticle.key)
       this.props.deleteArticle(this.props.myArticle.key)
   }

  render() {
    const { title, content, picture } = this.props.myArticle;
    return (
      <div className=" card ml-3">
        <div>
          <h4 className="text-justify">Title: {title}</h4>
        </div>
        
        <div>
          <PreviewPicture pictureUrl={picture} />
        </div>
        <button onClick={this.handleClick} className='btn btn-alert'>Remove This Article</button>
      </div>
    );
  }
}
