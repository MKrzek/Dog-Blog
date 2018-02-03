import React from "react";
import Modal from "react-modal";
import PreviewPicture from "./PreviewPicture.js";
import ModalForm from './ModalForm.js';
export default class DogModal extends React.Component {

  render() {
    if (!this.props.selectedDog) {
      return <div />;
    } else {
      const { name, picture, userUiD} = this.props.selectedDog;

      const customStyle = {
        overlay: {
          position: "fixed",
          top: '75px',
          left: '150px',
          right: '150px',
          bottom: '75px',
          backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "10px"
        }
      };
      return <Modal isOpen={this.props.modalIsOpen} onRequestClose={() => this.props.onRequestClose()} ariaHideApp={false} style={customStyle}>
          <div className="photo-modal">
            <div>
              <PreviewPicture pictureUrl={picture} alt={name} />
            </div>
            <div>{name}</div>
            <div className="text-center mt-1">
              <ModalForm onRequestClose={this.props.onRequestClose} ownerUiD={userUiD} dog={this.props.selectedDog}/>
              <button className="btn btn-primary mb-2" onClick={() => this.props.onRequestClose()}>
                close
              </button>
            </div>
            <div />
          </div>
        </Modal>
    }
  }
}
