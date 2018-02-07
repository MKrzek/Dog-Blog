import React from "react";

export default class VetDisplay extends React.Component {
  handleClick = () => {
    const address =
      this.props.vet.streetName.toString() +
      " " +
      this.props.vet.streetNumber.toString() +
      " " +
      this.props.vet.city.toString();
    console.log(typeof address );
      this.props.vetLocation(address);
  }

  render() {
    const { vet, streetName, streetNumber, www, phone, city } = this.props.vet;
    return (
      <div className="col-md-4 ml-1 mr-1 card mb-4 text-center vetItem cardScroll">
        <h3 className="mb-1 mt-3">{vet}</h3>
        <p>
          {streetName} {streetNumber}
        </p>
        <div>{city}</div>
        <a target="_blank" href={`https://${www}`} className="mt-1">
          {www}
        </a>
        <p className="mt-1 mb-3">{phone}</p>
        <button className="btn btn-primary mb-3" onClick={this.handleClick}>
          Show on map
        </button>
      </div>
    );
  }
}
