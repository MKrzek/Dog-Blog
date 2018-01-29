import React from "react";
import PreviewPicture from "./PreviewPicture.js";
export default class ArticleData extends React.Component {
  render() {
    const { title, content, picture } = this.props.article;
    return (
      <div className="card ml-3">
        <div>
          <h4 className="text-justify">Title: {title}</h4>
        </div>
        <div>
          <div>Content: {content}</div>
        </div>
        <div>
          <PreviewPicture pictureUrl={picture} />
        </div>
      </div>
    );
  }
}
