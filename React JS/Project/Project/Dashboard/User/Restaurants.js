import React, { Component } from 'react';
// import './style.css'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import { Container, Row, Col } from 'react-bootstrap';
// import '../../assets/css/bootstrap/bootstrap.min.css'
// import '../../assets/css/bootstrap/bootstrap.css'
// import '../../assets/js/bootstrap/bootstrap'
// import '../../assets/js/bootstrap/bootstrap.min.js'
// import '../../assets/css/bootstrap3/bootstrap.css'
// import '../../assets/css/bootstrap3/aj'
// import '../../assets/js/bootstrap/bootstrap'
import '../../assets/css/style.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import All from '../../Images/Good_Food_Display_-_NCI_Visuals_Online.jpg'
import BBQ from '../../Images/How-To-BBQ-Hero-951x512.jpg'
import FastFood from '../../Images/1095035.jpg'
import Pizza from '../../Images/download.jpg'
import Chinese from '../../Images/images.jpg'
import Search from '../../Images/search.png'

import fire from '../../config/firebase';

class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            card: "all",
            search: ""
        }
        this.all = this.all.bind(this);
        this.bbq = this.bbq.bind(this)
        this.pizza = this.pizza.bind(this)
        this.fastFood = this.fastFood.bind(this)
        this.chineese = this.chineese.bind(this)
        this.search = this.search.bind(this)
    }
    // componentDidMount() {
    //     navigator.geolocation.getCurrentPosition((location) => {
    //         this.setState({
    //             lat: location.coords.latitude,
    //             lng: location.coords.longitude
    //         })
    //     });
    // }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }
    componentDidMount() {
        const arr = []
        let uid = localStorage.getItem("uid");
        fire.database().ref("users/" + uid).once("value", snap => {
            let data = snap.val()
            console.log(data.lat, data.lng)
            const arr2 = this.state.data
            fire.database().ref("restaurants/").on("child_added", snap => {
                let data2 = snap.val()
                let a = this.getDistanceFromLatLonInKm(data.lat, data.lng, data2.lat, data2.lng)
                arr2.push({
                    uid: data2.uid,
                    category: data2.category,
                    city: data2.city,
                    country: data2.country,
                    email: data2.email,
                    fullName: data2.fullName,
                    image: data2.image,
                    lat: data2.lat,
                    lng: data2.lng,
                    distance: a
                })
                // console.log(data.lat, data2.lat)
                // console.log(a)
                // arr.push(a)
                // this.setState({ data: a })
                this.setState({ data: arr2 })
            })
        })
    }
    all() {
        this.setState({ card: "all" })
    }
    bbq() {
        this.setState({ card: "bbq" })
    }
    pizza() {
        this.setState({ card: "pizza" })
    }
    fastFood() {
        this.setState({ card: "fastfood" })
    }
    chineese() {
        this.setState({ card: "chineese" })
    }
    search() {
        this.setState({ card: "search" })
    }
    render() {
        console.log(this.state.data)
        const forces = this.state.data.map((elem) => {
            // console.log(elem.distance)
            if (elem.distance < 1) {
                if (this.state.card === "all") {
                    return <div className="allAds" id="allAds">
                        {/* <li>{elem.category}</li> */}
                        <div className="card" style={{ width: "25rem", borderRadius: "15px" }} >
                            <img className="card-img-top" src={elem.image} />
                            <div className="card-body">
                                <h3 className="card-title" id="card-title">{elem.fullName}</h3>
                                <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Category:{elem.category}</h4>
                                {/* <h3 className="card-text" id="card-price"></h3> */}
                                <button className="btn btn-danger" data-toggle="modal" data-target="#product_view"><Link to={{ pathname: "/detail", state: { data: elem } }}>Show Detail</Link></button>
                                {/* {
                                    console.log(this.props)
                                    onClick={() => this.props.history.push("/detail", {text:"hssjh"})}
                                } */}
                            </div>
                        </div>
                    </div>
                }
                else if (this.state.card === "bbq") {
                    if (elem.category === "BBQ") {
                        return <div className="allAds" id="allAds">
                            {/* <li>{elem.category}</li> */}
                            <div className="card" style={{ width: "25rem", borderRadius: "15px" }} >
                                <img className="card-img-top" src={elem.image} />
                                <div className="card-body">
                                    <h3 className="card-title" id="card-title">{elem.fullName}</h3>
                                    <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Category:{elem.category}</h4>
                                    {/* <h3 className="card-text" id="card-price"></h3> */}
                                    <button className="btn btn-danger" data-toggle="modal" data-target="#product_view">Show Detail</button>
                                </div>
                            </div>
                        </div>
                    }
                }
                else if (this.state.card === "pizza") {
                    if (elem.category === "Pizza") {
                        return <div className="allAds" id="allAds">
                            {/* <li>{elem.category}</li> */}
                            <div className="card" style={{ width: "25rem", borderRadius: "15px" }} >
                                <img className="card-img-top" src={elem.image} />
                                <div className="card-body">
                                    <h3 className="card-title" id="card-title">{elem.fullName}</h3>
                                    <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Category:{elem.category}</h4>
                                    {/* <h3 className="card-text" id="card-price"></h3> */}
                                    <button className="btn btn-danger" data-toggle="modal" data-target="#product_view">Show Detail</button>
                                </div>
                            </div>
                        </div>
                    }
                }
                else if (this.state.card === "fastfood") {
                    if (elem.category === "FastFood") {
                        return <div className="allAds" id="allAds">
                            {/* <li>{elem.category}</li> */}
                            <div className="card" style={{ width: "25rem", borderRadius: "15px" }} >
                                <img className="card-img-top" src={elem.image} />
                                <div className="card-body">
                                    <h3 className="card-title" id="card-title">{elem.fullName}</h3>
                                    <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Category:{elem.category}</h4>
                                    {/* <h3 className="card-text" id="card-price"></h3> */}
                                    <button className="btn btn-danger" data-toggle="modal" data-target="#product_view">Show Detail</button>
                                </div>
                            </div>
                        </div>
                    }
                }
                else if (this.state.card === "chineese") {
                    if (elem.category === "Chineese") {
                        return <div className="allAds" id="allAds">
                            {/* <li>{elem.category}</li> */}
                            <div className="card" style={{ width: "25rem", borderRadius: "15px" }} >
                                <img className="card-img-top" src={elem.image} />
                                <div className="card-body">
                                    <h3 className="card-title" id="card-title">{elem.fullName}</h3>
                                    <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Category:{elem.category}</h4>
                                    {/* <h3 className="card-text" id="card-price"></h3> */}
                                    <button className="btn btn-danger" data-toggle="modal" data-target="#product_view">Show Detail</button>
                                </div>
                            </div>
                        </div>
                    }
                }
                else if (this.state.card === "search") {
                    if (elem.fullName === this.state.search) {
                        return <div className="allAds" id="allAds">
                            {/* <li>{elem.category}</li> */}
                            <div className="card" style={{ width: "25rem", borderRadius: "15px" }} >
                                <img className="card-img-top" src={elem.image} />
                                <div className="card-body">
                                    <h3 className="card-title" id="card-title">{elem.fullName}</h3>
                                    <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Category:{elem.category}</h4>
                                    {/* <h3 className="card-text" id="card-price"></h3> */}
                                    <button className="btn btn-danger" data-toggle="modal" data-target="#product_view">Show Detail</button>
                                </div>
                            </div>
                        </div>
                    }
                }
            }

        })
        // this.state.data.map((a) => {
        //     console.log(a)
        // })
        // const { lat, lng } = this.state;
        // console.log(arr)
        // const url = "https://developers.zomato.com/api/v2.1/search?start=0&count=10&lat" + lat + "&lan" + lng + '&radius=500000';
        // console.log(url)
        return (
            <div>
                <div className="Main">
                    {/* {
                        console.log(arr)
                    } */}
                    {/* <div className="header" id="myHeader">
                        <a href="" id="img"><img src="" height="100px" width="100px" /></a>
                        <h3 id="title">Pakistan Largest Market Place</h3>
                        <button className="account">Sign In</button>
                    </div>

                    <div className="SearchDiv container jumbotron">
                        <div className="searchTab">
                            <input type="search" id="txtSearch" placeholder="Search" style={{ border: "none" }} />
                            <img src="" id="searchImg" />
                        </div>
                    </div> */}
                    <div class="SearchDiv container jumbotron">
                        <div class="searchTab">
                            <input type="search" id="txtSearch" placeholder="Search" style={{ border: "none" }} onChange={(e) => { this.setState({ search: e.target.value }) }} value={this.state.search} />
                            <img src={Search} onClick={this.search} id="searchImg" />
                        </div>

                    </div>
                    <div className="titleDiv">
                        <h1 className="heading container" id="heading" data-toggle="collapse" data-target="#collapseExample"
                            aria-expanded="false" aria-controls="collapseExample" style={{ color: "black" }}>Categories</h1>
                    </div>

                    <div className="container categories" id="catogries">
                        <div className="collapse collapse in" id="collapseExample">
                            <div>
                                <ul className="catogriesRow">

                                    <li>
                                        <a onClick={this.all}><img src={All} alt="" /></a>All
                        </li>

                                    <li>
                                        <a onClick={this.bbq}><img src={BBQ} alt="" /></a>BBQ
                        </li>
                                    <li>
                                        <a onClick={this.pizza}><img src={Pizza} alt="" /></a>Pizza
                        </li>
                                    <li>
                                        <a onClick={this.fastFood}><img src={FastFood} alt="" /></a>Fast Food
                        </li>
                                    <li>
                                        <a onClick={this.chineese}><img src={Chinese} alt="" /></a>Chinese
                        </li>
                                </ul>

                            </div>

                        </div>

                    </div>
                    {/* {
                        Object.keys(this.state.data).map((a) => {
                            console.log(a)
                        })
                    } */}
                    <div>
                        {
                            forces
                        }
                    </div>
                </div>
                {/* <div>
                    <input placeholder="Search Here" onChange={this.search} />
                </div> */}

                {/* <MyMapComponent
                    isMarkerShown
                    location={{ lat, lng }}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                /> */}
                {/* {
                    console.log(lat, lng)
                } */}
            </div>
        )
    }
}
// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//     <GoogleMap
//         defaultZoom={18}
//         defaultCenter={{ lat: props.location.lat, lng: props.location.lng }}
//     >
//         <Marker
//             draggable={true}
//             position={{ lat: props.location.lat, lng: props.location.lng }}
//             onDragEnd={(loc) => { console.log('loc ===>', loc.latLng.lat(), loc.latLng.lng()) }}
//         />
//     </GoogleMap>
// ))
export default Restaurants;