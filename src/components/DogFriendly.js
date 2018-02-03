import React from "react";
import { Link } from "react-router-dom";
import * as Actions from "../actions/index.js";
import { connect } from "react-redux";
import _ from "lodash";

import DogFriendlyData from "./DogFriendlyData.js";
import Navigation from "./Navigation.js";
import SearchBar from "./SearchBar.js";
import Footer from './Footer.js';

class DogFriendly extends React.Component {
  componentDidMount = () => {
    this.props.displayDogFriendly();
  };
  showAllData = () => {
    this.props.displayDogFriendly();
  };
  showDogFriendly = () => {
    if (this.props.dogFriendly) {
      for (const key of Object.keys(this.props.dogFriendly)) {
        this.props.dogFriendly[key].key = key;
      }
    }

    return _.map(this.props.dogFriendly, data => {
      return <DogFriendlyData key={data.key} data={data} />;
    });
  };
  render() {
    return <div>
        <Navigation />
        <div className="container mb-4">
          <div className=" d-flex flex-column">
           
            <Link to="/addDogFriendly" className="btn btn-lg btn-primary mt-5 ">
              Add Dog Friendly Places
            </Link>
           <div className='mt-5 mb-5'>
            <SearchBar />
          </div>
            <button onClick={this.showAllData} className="btn btn-lg btn-primary text-center">
              Search All Places
            </button>
          
          </div>
          <div className="row justify-content-center mt-5">
            {this.showDogFriendly()}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>;
  }
}
function mapStateToProps(state) {
  return {
    dogFriendly: state.displayDogFriendly
  };
}
export default connect(mapStateToProps, Actions)(DogFriendly);
