import React from "react";
import MyArticleData from "./MyArticleData.js";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import _ from "lodash";

class MyArticles extends React.Component {
  componentDidMount() {
    this.props.displayMyArticles();
  }

  deleteArticle = key => {
    this.props.deleteArticle(key);
  };

  showMyArticles = () => {
    if (this.props.myArticles) {
      for (const key of Object.keys(this.props.myArticles)) {
        this.props.myArticles[key].key = key;
      }
    }
    return _.map(this.props.myArticles, myArticle => {
      return (
        <MyArticleData
          myArticle={myArticle}
          key={myArticle.key}
          deleteArticle={this.deleteArticle}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {this.props.myArticles ? (
          <div>{this.showMyArticles()}</div>
        ) : (
          <h3>'You have no articles' </h3>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myArticles: state.myArticles
  };
}

export default connect(mapStateToProps, Actions)(MyArticles);
