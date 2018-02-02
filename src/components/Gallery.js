import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import _ from "lodash";

import Navigation from "./Navigation.js";
import GalleryData from "./GalleryData.js";
import Footer from './Footer.js';

class Gallery extends React.Component {
  componentDidMount() {
    this.props.displayGallery();
  }

  showGallery = () => {
    if (this.props.gallery) {
      for (const key of Object.keys(this.props.gallery)) {
        this.props.gallery[key].key = key;
      }
    }

    return _.map(this.props.gallery, picture => {
      return <GalleryData dog={picture} key={picture.key} />;
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
            <div className='text-center'>
            <Link className="btn btn-primary text-center btn-lg mb-3 mt-5" to="/addGallery">
              Add your pet
            </Link>
            </div>
          
          <div className="row justify-content-center mb-5">
                 {this.showGallery()}
                 
          </div>
          </div>
         
        
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    gallery: state.displayGallery
  };
}

export default connect(mapStateToProps, Actions)(Gallery);
