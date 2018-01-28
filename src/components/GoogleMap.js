import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export  class GoogleMap extends React.Component {
         constructor(props) {
           super(props);
           this.state = { 
            lat: 54.98046410000001, 
            lng: -1.616564799999992,
            showingInfoWindow: false, 
            activeMarker: {},
            selectedPlace: {}, 
          
          };
        }
        
        
          
         onMarkerClick = (props, marker, e) => {
           this.setState({
             selectedPlace: props,
             activeMarker: marker,
             showingInfoWindow: true
           });
         };

         onMapClick = props => {
           if (this.state.showingInfoWindow) {
             this.setState({
               showingInfoWindow: false,
               activeMarker: null
             });
           }
         };

         render() {
          
           
           const style = { width: "60%", height: "50%", position: "relative" };
        
          
           return <Map google={this.props.google} 
                      zoom={14} 
                      
                      style={style} 
                      initialCenter={{ lat: this.state.lat, lng: this.state.lng } //className="mx-auto mt-5"
                       } onClick={this.onMapClick}>
                       <Marker type={"vet"}
                                name={"vet"} 
                                position={{ lat: this.state.lat, lng: this.state.lng }} 
                                onClick={this.onMarkerClick} />
                  <InfoWindow 
                    visible={this.state.showingInfoWindow}
                    marker={this.state.activeMarker}>
                     <h1>{this.props.vetAddress}</h1></InfoWindow>
             </Map>;
         }
       }
 
export default GoogleApiWrapper({
apiKey: 'AIzaSyDvDsA03o-EGEDr5C_u0fIKHovtwp9Sjuk'
}) (GoogleMap)