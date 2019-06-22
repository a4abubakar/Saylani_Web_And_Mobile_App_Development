import React, { Component } from 'react';
import './style.css'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lng: null
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((location) => {
            this.setState({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        });
    }
    render() {
        const { lat, lng } = this.state;
        // const url = "https://developers.zomato.com/api/v2.1/search?start=0&count=10&lat" + lat + "&lan" + lng + '&radius=500000';
        // console.log(url)
        return (
            <div>
                <div>
                    <input placeholder="Search Here" onChange={this.search} />
                </div>
                <MyMapComponent
                    isMarkerShown
                    location={{ lat, lng }}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                {/* {
                    console.log(lat, lng)
                } */}
            </div>
        )
    }
}
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: props.location.lat, lng: props.location.lng }}
    >
        <Marker
            draggable={true}
            position={{ lat: props.location.lat, lng: props.location.lng }}
            onDragEnd={(loc) => { console.log('loc ===>', loc.latLng.lat(), loc.latLng.lng()) }}
        />
    </GoogleMap>
))
export default Restaurants;