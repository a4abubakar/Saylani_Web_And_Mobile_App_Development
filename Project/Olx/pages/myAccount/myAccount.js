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
            location = '../../index.html';
        }, 500)
    }
    firebase.database().ref(`users/${user.uid}/ad/`).once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            // console.log(key)
            console.log(data[key])
            for (var key2 in data[key]) {
                // console.log(key2,user.uid,key)
                document.getElementById("userAds").innerHTML +=
                    `  
                <div class="card" style="width: 25rem";"border-radius: 15px" >
                <img class="card-img-top" src='${data[key][key2].image}'/>
                <div class="card-body">
                <h3 class="card-title" id="card-title">${data[key][key2].AdTitle}</h3>
                <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${data[key][key2].city}</h4>
                <h3 class="card-text" id="card-price">Rs : ${data[key][key2].price}</h3>
                <h3 class="card-text" id="card-price">Description : ${data[key][key2].AdDescription}</h3>
                <h3 class="card-text" id="card-price">Number : ${data[key][key2].number}</h3>
                <h3 class="card-text" id="card-price">Number : ${data[key][key2].city}</h3>
                <button  class="btn btn-danger" userId=${user.uid} adTitle=${key} adKey=${key2} onClick="delAd(this)">Delete Ad</button>
                </div>
                </div>
                `
            }
        }
    })
})

function delAd(e) {
    let userId = e.getAttribute("userId");
    let adTitle = e.getAttribute("adTitle");
    let adKey = e.getAttribute("adKey");
    // console.log(userId,adTitle,adKey)
    firebase.database().ref(`users/${userId}/ad/${adTitle}/${adKey}`).remove();
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