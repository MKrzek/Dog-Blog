import React from "react";
import { connect } from "react-redux";
import PreviewPicture from "./PreviewPicture.js";
import * as Actions from "../actions/index.js";

class GalleryData extends React.Component {
  handleClick = () => {
    if (this.props.blockVote) {
      const votes = this.props.dog.votes;
      let counter = votes + 1;
      const key = this.props.dog.key;
      this.props.addVote(counter, key);
      this.props.castVote(false);
      setTimeout(() => {
        this.props.castVote(true);
      }, 100000);
    }
  };

  render() {
    const { name, picture, votes } = this.props.dog;
    return (
      <div className="col-md-4 card ml-2 mr-2 text-center mb-2 mt-2">
        <div className="mt-3">
          <PreviewPicture pictureUrl={picture} />
        </div>
        <p>{name}</p>
        <div>{votes}</div>
        <button onClick={this.handleClick} className="btn btn-primary mb-3">
          Vote for this dog
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blockVote: state.blockVote
  };
}
export default connect(mapStateToProps, Actions)(GalleryData);
