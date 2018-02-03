import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import _ from "lodash";
import Navigation from "./Navigation.js";
import AdoptionData from "./AdoptionData.js";
import DogModal from "./DogModal.js";
import Footer from "./Footer.js";

class Adoption extends React.Component {
  componentDidMount = () => {
    this.props.displayAdoption();
  };

  onDogSelect = dog => {
    this.props.openModal(dog);
  };

  closeModal = () => {
    this.props.closeModal();
  };

  showData = () => {
    if (this.props.adoption) {
      for (const key of Object.keys(this.props.adoption)) {
        this.props.adoption[key].key = key;
      }
    }

    return _.map(this.props.adoption, dog => {
      return (
        <AdoptionData dog={dog} key={dog.key} onDogSelect={this.onDogSelect} />
      );
    });
  };
  render() {
    return (
      <div>
        <Navigation />
        <div className="container mt-3 mb-4">
          <div className="row justify-content-center">
            <h2 className="text-center">Adopt a dog</h2>
            <Link to="/addForAdoption" className="btn btn-lg ml-3 btn-primary">
              Add a dog
            </Link>
          </div>

          <div className="row justify-content-center mt-4">
            {this.showData()}
          </div>
          <div>
            <DogModal
              modalIsOpen={this.props.modalIsOpen}
              selectedDog={this.props.selectedDog}
              onRequestClose={this.closeModal}
            />
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
  return {
    adoption: state.displayAdoption,
    selectedDog: state.modal.selectedDog,
    modalIsOpen: state.modal.modalIsOpen
  };
}
export default connect(mapStateToProps, Actions)(Adoption);
