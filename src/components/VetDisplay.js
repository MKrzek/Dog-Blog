import React from "react";
import geocoder from "geocoder";

export default class VetDisplay extends React.Component {
  handleClick = () => {
    const address =
      this.props.vet.streetName.toString() +
      " " +
      this.props.vet.streetNumber.toString() +
      " " +
      this.props.vet.city.toString();
    console.log(address);

    geocoder.geocode(address, (error, coordinates) => {
      const data = Object.assign({}, coordinates);
      const data2 = Object.assign({}, data.results);
      const data3 = Object.assign({}, data2[0]);
      const data4 = Object.assign({}, data3.geometry);
      const location = Object.assign({}, data4.location);

      const lat = location.lat;
      const lng = location.lng;
      console.log(lat, lng);
      const geoLocation = [lat, lng, address];
      this.props.vetLocation(geoLocation);
    });
  };

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
