import React, { Component } from 'react';
import '../../assets/css/style.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import fire from '../../config/firebase';

export default class MyRequests extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let uid = localStorage.getItem("uid")
        fire.database().ref(`users/${uid}/orders/`).once("value", snap => {
            let data = snap.val()
            console.log(data)
            let resUid;
            for (let key in data) {
                for (let key2 in data[key]) {
                    resUid = data[key][key2].restaurant
                    // console.log(id)
                }
            }
            console.log(resUid)
            const arr2 = this.state.data
            fire.database().ref(`restaurants/orders`).once("value", snap => {
                console.log(data)
                let data2;
                let data3;
                let newData = snap.val()
                // let key = Object.keys(newData)
                // console.log(key)
                console.log(newData)
                for (let key in newData) {
                    // for (let key2 in newData[key]) {
                        data3 = newData[key]
                    // }
                }
                for(let key in data3){
                    data2 = data3[key].restaurant
                    console.log(data2)
                    fire.database().ref("restaurants/" + data2).once("value",snap=>{
                        let data = snap.val()
                        console.log(data)
                        arr2.push({
                            uid: data.uid,
                            category: data.category,
                            city: data.city,
                            country: data.country,
                            email: data.email,
                            fullName: data.fullName,
                            status: data3[key].status,
                            image: data.image,
                            lat: data.lat,
                            lng: data.lng
                        })
                    })
                }
                this.setState({ data: arr2 })
            })
        })
    }
    render() {
        console.log(this.state.data)
        const force = this.state.data.map((elem) => {
            return <div className="allAds" id="allAds">
                {/* <li>{elem.category}</li> */}
                <div className="card" style={{ width: "25rem", borderRadius: "15px" }} >
                    <img className="card-img-top" src={elem.image} />
                    <div className="card-body">
                        <h3 className="card-title" id="card-title">{elem.fullName}</h3>
                        <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Category: {elem.category}</h4>
                        <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Status: {elem.status}</h4>
                        {/* <h3 className="card-text" id="card-price"></h3> */}
                        {/* <button className="btn btn-danger" data-toggle="modal" data-target="#product_view">Show Detail</button> */}
                    </div>
                </div>
            </div>
        })
        // console.log(this.state.data) 
        return (
            <div>
                {
                    force
                }
            </div>
        )
        // return <div className="allAds" id="allAds">
        //     {/* <li>{elem.category}</li> */}
        //     <div className="card" style={{ width: "25rem", borderRadius: "15px" }} >
        //         <img className="card-img-top" src={data2.image} />
        //         <div className="card-body">
        //             <h3 className="card-title" id="card-title">{data2.fullName}</h3>
        //             <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Category:{data2.category}</h4>
        //             {/* <h3 className="card-text" id="card-price"></h3> */}
        //             {/* <button className="btn btn-danger" data-toggle="modal" data-target="#product_view">Show Detail</button> */}
        //         </div>
        //     </div>
        // </div>

        // return (
        //     <div>
        //         dj
        //     </div>
        // )
    }
}