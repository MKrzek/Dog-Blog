import React from "react";

export default class PreviewPicture extends React.Component {
  render() {
    const { pictureUrl, picture } = this.props;

    if (!pictureUrl) {
      return (
        <div
          style={{
            height: "300px",
            borderStyle: "solid",
            borderColor: "grey",
            width: "300px"
          }}
          className="text-center mt-1 ml-3"
        >
          {picture}
        </div>
      );
    } else {
      return (
        <img
          className="img-fluid"
          style={{ height: "300px"}}
          src={pictureUrl}
          alt={picture}
        />
      );
    }
  }
}
