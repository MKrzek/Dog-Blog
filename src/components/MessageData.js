import React from "react";
export default class MessageData extends React.Component {
  handleClick = () => {
    const key = this.props.message.key;
    this.props.deleteMessage(key);
  };

  render() {
    const { name, phone, message } = this.props.message;
    return (
      <div className="card text-white bg-info mb-3 col-md-5 ml-2 cardScroll">
        <div className="card-header bg-info">Contact: {phone}</div>
        <div className="card-body">
          <h5 className="card-title">From: {name}</h5>
          <p className="card-text"> {message}</p>
          <button onClick={this.handleClick} className="btn btn-warning">
            Remove
          </button>
        </div>
      </div>
    );
  }
}
