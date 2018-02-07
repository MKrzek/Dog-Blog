import React from "react";
/*global google*/

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
  }

  componentDidMount() {
    this.initMap();
  }
  initMap = () => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15
    });
    this.setState({
      map: map
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
      });
    }
  };

  geocodeAddress = (geocoder, resultsMap) => {
    let address = this.props.vetAddress;
    geocoder.geocode({ address: address }, function(results, status) {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  render() {
     if (typeof this.props.vetAddress === 'string') {
      let geocoder = new google.maps.Geocoder();
       this.geocodeAddress(geocoder, this.state.map);
    } 

    return (
      <div className=" d-flex justify-content-center">
        <div id="map" className="map" />
      </div>
    );
  }
}
