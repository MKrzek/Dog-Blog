import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";

import Navigation from "./Navigation.js";
import VetDisplay from "./VetDisplay.js";
import GoogleMap from "./GoogleMap.js";
import Footer from "./Footer.js";
import _ from "lodash";

class Vets extends React.Component {
  componentDidMount() {
    this.props.displayVets();
  }
  showVets = () => {
    if (this.props.vets) {
      for (const key of Object.keys(this.props.vets)) {
        this.props.vets[key].key = key;
      }
    }
    return _.map(this.props.vets, vet => {
      return (
        <VetDisplay vet={vet} key={vet.key} vetLocation={this.vetLocation} />
      );
    });
  };

  vetLocation = address => {
    this.props.vetLocation(address);
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container mb-4">
          <div className="row justify-content-center">
            <h2 className="mb-5 mt-4 ml-2">List of vets</h2>
            <Link className="btn btn-primary btn-lg mt-4 ml-10" to="/addVet">
              Add a vet
            </Link>
          </div>
          <div className=" row justify-content-center mt-3">
            {this.showVets()}
          </div>
          <div className="justify-content-center mx-auto text-center ml-3 parentGoogleMap">
            <GoogleMap vetAddress={this.props.vetAddress} />
          </div>
        </div>
        <div className="footerVet">
          <Footer />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    vets: state.displayVets,
    vetAddress: state.vetLocation
  };
}

export default connect(mapStateToProps, Actions)(Vets);
