var config = {
    apiKey: "AIzaSyDubjsdHO7i9bvrA1vzyDdYmd-yXKgZKr0",
    authDomain: "olx-pakistan6727.firebaseapp.com",
    databaseURL: "https://olx-pakistan6727.firebaseio.com",
    projectId: "olx-pakistan6727",
    storageBucket: "olx-pakistan6727.appspot.com",
    messagingSenderId: "151904918691"
};
firebase.initializeApp(config);

firebase.database().ref("allProducts/").once("value", snap => {
    let data = snap.val();
    for (var key in data) {
        // console.log(data[key].UID)
        // console.log(user.uid);
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
})

function searchAds() {
    document.getElementById("allAds").innerHTML = "";
    let txtSearch = document.getElementById("txtSearch").value;
    console.log(txtSearch);
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            // console.log(data[key])
            if (txtSearch === data[key].AdTitle) {
                document.getElementById("allAds").innerHTML = "";
                console.log(data[key])
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
        //     else {
        //         document.getElementById("allAds").innerHTML = "";
        //         document.getElementById("allAds").innerHTML +=
        //             `
        // <div class="card" style="width: 25rem";"border-radius: 15px" >
        //         <img class="card-img-top" src='${data[key].image}'/>
        //         <div class="card-body">
        //           <h3 class="card-title" id="card-title">${data[key].AdTitle}</h3>
        //           <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key].city}</h4>
        //           <h3 class="card-text" id="card-price">Rs ${data[key].price}</h3>
        //           <button class="btn btn-primary" data-toggle="modal" data-target="#product_view" adId=${data[key].UID} adCat=${data[key].Category} adKey=${data[key].key} onClick="buyModal(this)">Buy</button>
        //         </div>
        //         </div>
        // `
        //     }
        }
    })
}

function allAds() {
    document.getElementById("allAds").innerHTML = "";
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            // console.log(data[key])
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
    })
}

function searchBike() {
    document.getElementById("allAds").innerHTML = "";
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Bikes") {
                // console.log(data[key])
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
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Cars") {
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
    })
}

function searchMobiles() {
    document.getElementById("allAds").innerHTML = "";
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Mobiles") {
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
    })
}

function searchFurnitures() {
    document.getElementById("allAds").innerHTML = "";
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Furniture") {
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
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Crockery") {
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
    firebase.database().ref("allProducts/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            if (data[key].Category === "Kids") {
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
                        <button type="button" class="btn btn-primary" onClick="messageMod()"><span class="glyphicon glyphicon-envelope"></span> Message</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}

function messageMod() {
    swal({
        title: "Warning",
        text: "Please Login First",
        icon: "warning",
        button: "Ok",
    }).then(() => {
        window.location = "../../pages/signIn/signIn.html";
    })
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