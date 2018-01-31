import React from "react";
import PreviewPicture from "./PreviewPicture.js";

import * as Actions from '../actions/index.js';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class ArticlePreview extends React.Component {

  handleClick=()=>{
    console.log ('click', this.props.article)
    // this.props.history.push(`/articleData/${this.props.article.key}`)
    this.props.SendDataToArticleData(this.props.article)
  }


  render() {
    const {title, picture} = this.props.article;
    return <div className="card ml-3 mb-3 mt-3">
        <div className="text-center">
          <h4 style={{ position: "absolute", top: '40%'}} className="titlePreview mt-2 ml-2 mr-2 text-uppercase justify-content-center">
            {title}
          </h4>
        </div>
        <Link to={`/articleData/${this.props.article.key}`} onClick={this.handleClick}>
          <div className="picturePreview">
            <PreviewPicture pictureUrl={picture} />
          </div>
        </Link>
        <div />
      </div>;
  }
}

export default connect (null, Actions) (ArticlePreview)

