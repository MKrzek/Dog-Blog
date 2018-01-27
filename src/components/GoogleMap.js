import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends React.Component{
    
    
    showMarker=()=>{
    const google= this.props.google;
    const address=this.props.vetAddress.toString();
    
     const geocoder= new google.maps.Geocoder()
    
         if (geocoder){
             geocoder.geocode({'address': address},
             (results,status)=>{
            if (status===google.maps.GeocoderStatus.OK){
             console.log ('results', results[0])
             console.log("lan", results[0].geometry.location.lat());
            console.log('lng', results[0].geometry.location.lng())
             return results[0]
            }  
         })
       }
    }
    
    render(){
        console.log("addres w google", this.props.vetAddress);
          if (this.props.vetAddress){
              this.showMarker(this.props.vetAddress)
      };
        
        const style={
            width: '60%',
            height: '50%',
            position: 'relative',
            // left: '20px',   
        }


        return <Map google={this.props.google} zoom={14} style={style} className="mx-auto mt-5">
            <Marker name={"Current location"}
                           position={{lan: 50.205276, lng: 20.22210689999997}} 
                             icon={{ url: "/path/to/custom_icon.png", 
                              }} />
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.props.address}</h1>
              </div>
            </InfoWindow>
          </Map>;
    
  }
}
 
export default GoogleApiWrapper({
apiKey: 'AIzaSyDvDsA03o-EGEDr5C_u0fIKHovtwp9Sjuk'
}) (GoogleMap)