import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export  class GoogleMap extends React.Component {
         constructor(props) {
           super(props);
           this.state = { 
            
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
           const lat=this.props.lat;
           const lng=this.props.lng;
           console.log ('lat google', this.props.lat)
           console.log('lng w google', this.props.lng)
           console.log('addres w google', this.props.vetAddress)
          
           
           const style = { width: "60%", height: "50%", position: "relative" };
        
          
           return <Map className={'map'} google={this.props.google} zoom={14} style={style} onClick={this.onMapClick}
                 centerAroundCurrentLocation={true} 
                 center={{ lat: lat, lng: lng }}>
                <Marker title={this.props.vetAddress} 
                        name={this.props.vetAddress} 
                        position={{ lat: lat, lng: lng }} 
                        onClick={this.onMarkerClick} />
               <InfoWindow visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
                 <h1>{this.props.vetAddress}</h1>
               </InfoWindow>
             </Map>;
         }
       }
 
export default GoogleApiWrapper({
apiKey: 'AIzaSyDvDsA03o-EGEDr5C_u0fIKHovtwp9Sjuk'
}) (GoogleMap)