import React from "react";
import PreviewPicture from "./PreviewPicture.js";

import * as Actions from "../actions/index.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class ArticlePreview extends React.Component {
  handleClick = () => {
    console.log("click", this.props.article);
    // this.props.history.push(`/articleData/${this.props.article.key}`)
    this.props.SendDataToArticleData(this.props.article);
  };

  render() {
    const { title, picture } = this.props.article;
    return (
      <Link
        to={`/articleData/${this.props.article.key}`}
        onClick={this.handleClick}
      >
        <div className="card ml-3 mb-3 mt-3 previewCard">
          <div>
            <h4 className="titlePreview text-center mx-auto  text-uppercase">
              {title}
            </h4>
          </div>

          <div className="picturePreview">
            <PreviewPicture pictureUrl={picture} />
          </div>
        </div>
        <div />
      </Link>
    );
  }
}

export default connect(null, Actions)(ArticlePreview);
