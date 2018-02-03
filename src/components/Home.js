import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import _ from "lodash";

import Navigation from "./Navigation.js";
import ArticlePreview from "./ArticlePreview.js";
import HomeGallery from "./HomeGallery.js";
import Footer from "./Footer.js";

class Home extends React.Component {
  componentDidMount() {
    this.props.displayArticles();
  }

  showArticle = () => {
    if (this.props.articles) {
      for (const key of Object.keys(this.props.articles)) {
        this.props.articles[key].key = key;
      }
    }
    return _.map(this.props.articles, article => {
      return <ArticlePreview article={article} key={article.key} />;
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container mb-5">
          <div className="row justify-content-center">
            <h2 className="mb-2 mt-4 ml-2 text-center">Latest Articles</h2>
            <Link className="btn btn-primary btn-lg mt-4 ml-3" to="/newArticle">
              Add a new Article
            </Link>
          </div>
          <div className="row justify-content-center">{this.showArticle()}</div>
          <div className="mt-4">
            <h2 className="mb-4 mt-4 text-center">Gallery</h2>
            <HomeGallery />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { articles: state.displayArticle };
}
export default connect(mapStateToProps, Actions)(Home);
