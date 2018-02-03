import React from "react";
import PreviewPicture from "./PreviewPicture.js";
import { connect } from "react-redux";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";

class ArticleData extends React.Component {
  render() {
    const params = this.props.match.params.id;
    console.log("params", params);
    const { title, content, picture } = this.props.article;
    return (
      <div>
        <Navigation />
        <div className="card cardScroll">
          <div>
            <h4 className="text-justify mt-4 ml-2 mr-2 mb-3">{title}</h4>
          </div>
          <div>
            <div className="ml-2 mr-2">{content}</div>
          </div>
          <div className="mb-1 mt-5  mb-4 text-center">
            <PreviewPicture pictureUrl={picture} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    article: state.sendDataToArticleData
  };
}
export default connect(mapStateToProps, null)(ArticleData);
