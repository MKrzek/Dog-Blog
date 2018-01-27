import React from "react";
import Navigation from "./Navigation.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import VetDisplay from "./VetDisplay.js";
import GoogleMap from "./GoogleMap.js";
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
      return <VetDisplay vet={vet} key={vet.key} vetLocation={this.vetLocation} />;
    });
  };

  vetLocation=(address)=>{

    this.props.vetLocation(address)
  }


  render() {
    console.log('propsy vetowe', this.props.vetAddress)
    return <div>
        <Navigation />
        <div className="container">
          <div className="row">
            <h2 className="mb-5 mt-4 ml-2">List of vets</h2>
            <Link className="btn btn-primary btn-lg mt-4 ml-10" to="/addVet">
              Add a vet
            </Link>
          </div>
          <div className="vetElement row mt-3">{this.showVets()}</div>
          <div>
            <GoogleMap vetAddress={this.props.vetAddress} />
          </div>
        </div>
      </div>;
  }
}
function mapStateToProps(state) {
  console.log ('address w vetach', state.vetLocation)
  return {
    vets: state.displayVets,

    vetAddress: state.vetLocation
  };
}

export default connect(mapStateToProps, Actions)(Vets);
