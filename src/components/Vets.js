import React from "react";
import Navigation from "./Navigation.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import VetDisplay from "./VetDisplay.js";
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
      return <VetDisplay vet={vet} key={vet.key} />;
    });
  };
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row">
            <h2 className="mb-5 mt-4 ml-2">List of vets</h2>
            <Link className="btn btn-primary btn-lg mt-4 ml-10" to="/addVet">
              Add a vet
            </Link>
          </div>
          <div className="vetElement mt-5">{this.showVets()}</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    vets: state.displayVets
  };
}

export default connect(mapStateToProps, Actions)(Vets);
