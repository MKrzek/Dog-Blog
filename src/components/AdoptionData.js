import React from "react";
import PreviewPicture from "./PreviewPicture.js";
import * as Actions from "../actions/index.js";
import { connect } from "react-redux";
import swal from 'sweetalert';

class AdoptionData extends React.Component {
  
  handleClick = () => {
    const dog = this.props.dog;
    if (this.props.dog.adoption ==='reserved'){
        swal('This dog has already been reserved')
    }else{
    this.props.onDogSelect(dog);
    }
  };

  render() {
    console.log("reserve", this.props.dog.adoption);
    const { name, breed, picture, adoption } = this.props.dog;
    return (
      <div className="col-3 card ml-1 mr-1 mb-4 text-center">
        <div className="mt-4">
            <PreviewPicture pictureUrl={picture} />
        </div>
        <div>{name}</div>
        <div className="mb-1">{breed}</div>
        <button className="mb-3 btn btn-primary" onClick={this.handleClick}>
          {adoption}
        </button>
      </div>
    );
  }
}

export default connect(null, Actions)(AdoptionData);
