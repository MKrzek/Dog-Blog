import React from 'react';
import Slider from  'react-slick';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import _ from 'lodash';

import HomeGalleryData from './HomeGalleryData.js';

class HomeGallery extends React.Component{

  componentDidMount(){
    this.props.displayGallery()
  }

renderGallery=()=>{
  console.log ('propsy', this.props.photos)
  if (this.props.photos) {
    for (const key of Object.keys(this.props.photos)) {
      this.props.photos[key].key = key;
    }
  }
  return _.map(this.props.photos, photo=>{
    return <div key={photo.key}>
          <HomeGalleryData dog={photo} key={photo.key} />
          </div>
      
  
  })
}

render(){
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  //variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 1}

  return <Slider {...settings}>
           {this.renderGallery()}
         </Slider>

}
};
function mapStateToProps(state){
  return {
    photos: state.displayGallery
  }
}

export default connect (mapStateToProps, Actions)(HomeGallery);