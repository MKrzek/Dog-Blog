import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";

import Navigation from "./Navigation.js";
import VetDisplay from "./VetDisplay.js";
import GoogleMap from "./GoogleMap.js";
import Footer from './Footer.js';
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
    
    return <div>
        <Navigation />
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="mb-5 mt-4 ml-2">List of vets</h2>
            <Link className="btn btn-primary btn-lg mt-4 ml-10" to="/addVet">Add a vet</Link>
          </div>
          <div className="vetElement row justify-content-center mt-3">{this.showVets()}</div>
          <div className='mb-4 justify-content-center'>
            <GoogleMap vetAddress={this.props.vetAddress[2]} 
                        lat={this.props.vetAddress[0]}
                         lng={this.props.vetAddress[1]} />
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
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
