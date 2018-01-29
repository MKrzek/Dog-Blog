import React from "react";
import PreviewPicture from "./PreviewPicture.js";
export default class ArticleData extends React.Component {
  render() {
    const { title, content, picture } = this.props.article;
    return (
      <div className="card ml-3">
        <div>
          <h4 className="text-justify mt-2 ml-2 mr-2">Title: {title}</h4>
        </div>
        <div>
          <div className='ml-2 mr-2'>Content: {content}</div>
        </div>
        <div className='mb-2 ml-2 mr-2' >
          <PreviewPicture pictureUrl={picture} />
        </div>
      </div>
    );
  }
}
