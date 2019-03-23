var config = {
    apiKey: "AIzaSyDubjsdHO7i9bvrA1vzyDdYmd-yXKgZKr0",
    authDomain: "olx-pakistan6727.firebaseapp.com",
    databaseURL: "https://olx-pakistan6727.firebaseio.com",
    projectId: "olx-pakistan6727",
    storageBucket: "olx-pakistan6727.appspot.com",
    messagingSenderId: "151904918691"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
    // console.log(user)
    if (user === null || user === "" || user === undefined) {
        swal({
            title: 'you are logout',
            showConfirmButton: false,
            padding: "1em"
        })

        setTimeout(() => {
            location = '../../index.html'
        }, 500)
    }
    localStorage.setItem('uid', user.uid);
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            // console.log(data[key].UID)
            // console.log(user.uid);
            if (data[key].UID === user.uid) {
                document.getElementById("allAds").innerHTML +=
                    `
                <div class="card" style="width: 25rem";"border-radius: 15px" >
                        <img class="card-img-top" src='${data[key].image}'/>
                        <div class="card-body">
                          <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                          <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                          <button class="btn btn-danger" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="delModal(this)">Delete</button>
                        </div>
                        </div>
                `
            }
            else {
                document.getElementById("allAds").innerHTML +=
                    `
                <div class="card" style="width: 25rem";"border-radius: 15px" >
                        <img class="card-img-top" src='${data[key].image}'/>
                        <div class="card-body">
                          <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                          <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                          <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
                        </div>
                        </div>
                `
            }
        }
    })
})

function searchAds() {
    document.getElementById("allAds").innerHTML = "";
    let uid = firebase.auth().currentUser.uid;
    let txtSearch = document.getElementById("txtSearch").value;
    firebase.database().ref("allProducts").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            console.log(data[key])
            if (txtSearch == data[key].AdTitle) {
                if (data[key].UID === uid) {
                    document.getElementById("allAds").innerHTML = "";
                    document.getElementById("allAds").innerHTML +=
                        `
                <div class="card" style="width: 25rem";"border-radius: 15px" >
                        <img class="card-img-top" src='${data[key].image}'/>
                        <div class="card-body">
                          <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                          <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                          <button class="btn btn-danger" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="delModal(this)">Delete</button>
                        </div>
                        </div>
                `
                }
                else if (data[key].UID !== uid) {
                    console.log("hsdfbk")
                    document.getElementById("allAds").innerHTML = "";
                    document.getElementById("allAds").innerHTML +=
                        `
                        <div class="card" style="width: 25rem";"border-radius: 15px" >
                                <img class="card-img-top" src='${data[key].image}'/>
                                <div class="card-body">
                                  <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                                  <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                                  <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                                  <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
                                </div>
                                </div>
                        `
                }
            }
        }
    })
}

function allAds() {
    document.getElementById("allAds").innerHTML = "";
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            // console.log(data[key])
            if (data[key].UID === uid) {
                document.getElementById("allAds").innerHTML +=
                    `
                    <div class="card" style="width: 25rem";"border-radius: 15px" >
                    <img class="card-img-top" src='${data[key].image}'/>
                    <div class="card-body">
                      <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                      <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                      <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                      <button class="btn btn-danger" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="delModal(this)">Delete</button>
                    </div>
                    </div>
            `
            }
            else {
                document.getElementById("allAds").innerHTML +=
                    `
                <div class="card" style="width: 25rem";"border-radius: 15px" >
                <img class="card-img-top" src='${data[key].image}'/>
                <div class="card-body">
                  <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                  <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                  <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                  <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
                </div>
                </div>
        `
            }
        }
    })
}

function searchBike() {
    document.getElementById("allAds").innerHTML = "";
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Bikes") {
                // console.log(data[key])
                if (data[key].UID === uid) {
                    document.getElementById("allAds").innerHTML +=
                        `
                        <div class="card" style="width: 25rem";"border-radius: 15px" >
                        <img class="card-img-top" src='${data[key].image}'/>
                        <div class="card-body">
                          <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                          <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                          <button class="btn btn-danger" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="delModal(this)">Delete</button>
                        </div>
                        </div>
                `
                }
                else {
                    document.getElementById("allAds").innerHTML +=
                        `
                    <div class="card" style="width: 25rem";"border-radius: 15px" >
                    <img class="card-img-top" src='${data[key].image}'/>
                    <div class="card-body">
                      <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                      <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                      <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                      <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
                    </div>
                    </div>
            `
                }
            }
            // else {
            //     document.getElementById("allAds").innerHTML =
            //         `<div class="card" style="width: 25rem;border-radius: 15px; text-align:center;" >
            //     No Data Found
            //     </div>
            //     `
            // }
        }
    })
}

function searchCars() {
    document.getElementById("allAds").innerHTML = "";
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Cars") {
                if (data[key].UID === uid) {
                    document.getElementById("allAds").innerHTML +=
                        `
                        <div class="card" style="width: 25rem";"border-radius: 15px" >
                        <img class="card-img-top" src='${data[key].image}'/>
                        <div class="card-body">
                          <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                          <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                          <button class="btn btn-danger" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="delModal(this)">Delete</button>
                        </div>
                        </div>
                `
                }
                else {
                    document.getElementById("allAds").innerHTML +=
                        `
                    <div class="card" style="width: 25rem";"border-radius: 15px" >
                    <img class="card-img-top" src='${data[key].image}'/>
                    <div class="card-body">
                      <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                      <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                      <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                      <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
                    </div>
                    </div>
            `
                }
            }
        }
        // else {
        //     document.getElementById("allAds").innerHTML =
        //         `<div class="card" style="width: 25rem;border-radius: 15px; text-align:center;" >
        //     No Data Found
        //     </div>
        //     `
        // }
    })
}

function searchMobiles() {
    document.getElementById("allAds").innerHTML = "";
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Mobiles") {
                if (data[key].UID === uid) {
                    document.getElementById("allAds").innerHTML +=
                        `
                        <div class="card" style="width: 25rem";"border-radius: 15px" >
                        <img class="card-img-top" src='${data[key].image}'/>
                        <div class="card-body">
                          <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                          <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                          <button class="btn btn-danger" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="delModal(this)">Delete</button>
                        </div>
                        </div>
                `
                }
                else {
                    document.getElementById("allAds").innerHTML +=
                        `
                    <div class="card" style="width: 25rem";"border-radius: 15px" >
                    <img class="card-img-top" src='${data[key].image}'/>
                    <div class="card-body">
                      <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                      <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                      <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                      <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
                    </div>
                    </div>
            `
                }
            }
        }
        // else {
        //     document.getElementById("allAds").innerHTML =
        //         `<div class="card" style="width: 25rem;border-radius: 15px; text-align:center;" >
        //     No Data Found
        //     </div>
        //     `
        // }
    })
}

function searchFurnitures() {
    document.getElementById("allAds").innerHTML = "";
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Furniture") {
                if (data[key].UID === uid) {
                    document.getElementById("allAds").innerHTML +=
                        `
                        <div class="card" style="width: 25rem";"border-radius: 15px" >
                        <img class="card-img-top" src='${data[key].image}'/>
                        <div class="card-body">
                          <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                          <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                          <button class="btn btn-danger" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="delModal(this)">Delete</button>
                        </div>
                        </div>
                `
                }
                else {
                    document.getElementById("allAds").innerHTML +=
                        `
                    <div class="card" style="width: 25rem";"border-radius: 15px" >
                    <img class="card-img-top" src='${data[key].image}'/>
                    <div class="card-body">
                      <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                      <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                      <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                      <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
                    </div>
                    </div>
            `
                }
            }

            // else {
            //     document.getElementById("allAds").innerHTML =
            //         `<div class="card" style="width: 25rem;border-radius: 15px; text-align:center;" >
            //     No Data Found
            //     </div>
            //     `
            // }

        }
    })
}

function searchCrockery() {
    document.getElementById("allAds").innerHTML = "";
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Crockery") {
                if (data[key].UID === uid) {
                    document.getElementById("allAds").innerHTML +=
                        `
                        <div class="card" style="width: 25rem";"border-radius: 15px" >
                        <img class="card-img-top" src='${data[key].image}'/>
                        <div class="card-body">
                          <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                          <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                          <button class="btn btn-danger" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="delModal(this)">Delete</button>
                        </div>
                        </div>
                `
                }
                else {
                    document.getElementById("allAds").innerHTML +=
                        `
                    <div class="card" style="width: 25rem";"border-radius: 15px" >
                    <img class="card-img-top" src='${data[key].image}'/>
                    <div class="card-body">
                      <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                      <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                      <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                      <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
                    </div>
                    </div>
            `
                }
            }
            // else {
            //     document.getElementById("allAds").innerHTML =
            //         `<div class="card" style="width: 25rem;border-radius: 15px; text-align:center;" >
            //     No Data Found
            //     </div>
            //     `
            // }
        }
    })
}

function searchKids() {
    document.getElementById("allAds").innerHTML = "";
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Kids") {
                if (data[key].UID === uid) {
                    document.getElementById("allAds").innerHTML +=
                        `
                        <div class="card" style="width: 25rem";"border-radius: 15px" >
                        <img class="card-img-top" src='${data[key].image}'/>
                        <div class="card-body">
                          <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                          <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                          <button class="btn btn-danger" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="delModal(this)">Delete</button>
                        </div>
                        </div>
                `
                }
                else {
                    document.getElementById("allAds").innerHTML +=
                        `
                    <div class="card" style="width: 25rem";"border-radius: 15px" >
                    <img class="card-img-top" src='${data[key].image}'/>
                    <div class="card-body">
                      <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
                      <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
                      <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
                      <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
                    </div>
                    </div>
            `
                }
            }
            // else {
            //     document.getElementById("allAds").innerHTML =
            //         `<div class="card" style="width: 25rem;border-radius: 15px; text-align:center;" >
            //     No Data Found
            //     </div>
            //     `
            // }
        }
    })
}

function delModal(e) {
    let adId = e.getAttribute("adId");
    let adCat = e.getAttribute("adCat");
    let adKey = e.getAttribute("adKey");
    // console.log(adId, adCat, adKey);
    firebase.database().ref(`users/${adId}/ad/${adCat}/${adKey}`).once("value", snap => {
        let data = snap.val();
        // console.log(data)
        document.getElementById("ModalMain").innerHTML =
            `
            <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-left"><span class="glyphicon glyphicon-remove"></span></a>
                <h3 class="modal-title">${data.Category}</h3>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6 product_img">
                        <img src="${data.image}" class="img-responsive">
                    </div>
                    <div class="col-md-6 product_content">
                        <h2 id="Adtitle">${data.AdTitle}</h2>
                        <h4 id="name">Name: ${data.Name}</h4>
                        <p id="AdDescriptiion">${data.AdDescription}</p>
                        <h3 id="city"><span class="glyphicon glyphicon-map-marker"></span>${data.city}</h3>
                        <h3 id="Number"><span class="glyphicon glyphicon-earphone"></span>${data.number}</h3>
                        <h3 id="price"> RS ${data.price}</h3>
                        <div class="space-ten"></div>
                        <div class="btn-ground">
                        <button type="button" class="btn btn-danger" adId=${adId} adCat=${adCat} adKey=${adKey} onClick="delAd(this)"><span class="glyphicon glyphicon-trash"></span> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}

function buyModal(e) {
    let adId = e.getAttribute("adId");
    let adCat = e.getAttribute("adCat");
    let adKey = e.getAttribute("adKey");
    // console.log(adId, adCat, adKey);
    firebase.database().ref(`users/${adId}/ad/${adCat}/${adKey}`).once("value", snap => {
        let data = snap.val();
        // console.log(data)
        document.getElementById("ModalMain").innerHTML =
            `
            <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-left"><span class="glyphicon glyphicon-remove"></span></a>
                <h3 class="modal-title">${data.Category}</h3>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6 product_img">
                        <img src="${data.image}" class="img-responsive">
                    </div>
                    <div class="col-md-6 product_content">
                        <h2 id="Adtitle">${data.AdTitle}</h2>
                        <h4 id="name">Name: ${data.Name}</h4>
                        <p id="AdDescriptiion">${data.AdDescription}</p>
                        <h3 id="city"><span class="glyphicon glyphicon-map-marker"></span>${data.city}</h3>
                        <h3 id="Number"><span class="glyphicon glyphicon-earphone"></span>${data.number}</h3>
                        <h3 id="price"> RS ${data.price}</h3>
                        <div class="space-ten"></div>
                        <div class="btn-ground">
                        <button type="button" class="btn btn-primary" adId=${adId} adCat=${adCat} adKey=${adKey} onClick="message(this)"><span class="glyphicon glyphicon-envelope"></span> Message</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}

function message(e) {
    let uid = firebase.auth().currentUser.uid;
    console.log(uid)
    let adId = e.getAttribute("adId");
    let adCat = e.getAttribute("adCat");
    let adKey = e.getAttribute("adKey");
    localStorage.setItem('uid', uid);
    localStorage.setItem('adId', adId);
    localStorage.setItem('adCat', adCat);
    localStorage.setItem('adKey', adKey);
    window.location = "../conversation/conversation.html";
}

function delAd(e) {
    let adId = e.getAttribute("adId");
    let adCat = e.getAttribute("adCat");
    let adKey = e.getAttribute("adKey");
    firebase.database().ref(`users/${adId}/ad/${adCat}/${adKey}`).remove();
    firebase.database().ref("allProducts/" + adKey).remove();
    location.reload();
}

function signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }));
        window.location = "../../index.html";
    })
        .catch((error) => {
            swal({
                title: "Error",
                text: errorMessage,
                icon: "warning",
                button: "Ok",
            });
        });
}