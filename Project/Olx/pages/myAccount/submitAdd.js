var config = {
    apiKey: "AIzaSyDubjsdHO7i9bvrA1vzyDdYmd-yXKgZKr0",
    authDomain: "olx-pakistan6727.firebaseapp.com",
    databaseURL: "https://olx-pakistan6727.firebaseio.com",
    projectId: "olx-pakistan6727",
    storageBucket: "olx-pakistan6727.appspot.com",
    messagingSenderId: "151904918691"
};
firebase.initializeApp(config);

function submitAd() {
    var AdTitle = document.getElementById("adTitle").value;
    var Category = document.getElementById("Category").value
    var AdDescription = document.getElementById("AdDescription").value;
    var Image = document.getElementById("UploadImage").files[0];
    var Name = document.getElementById("Name").value;
    var number = document.getElementById("Number").value;
    var city = document.getElementById("city").value
    var error = document.getElementById("error")
    var price = document.getElementById("price").value
    if (AdTitle == "" || AdDescription == "" || number == "" || Category == "" || city == "" || price == "" || Image == "" || Name == "") {
        error.style.display = "block";
        error.innerHTML = "Please fill all fields";
    }
    let obj = {
        AdTitle,
        Category,
        AdDescription,
        Image,
        Name,
        number,
        city,
        price
    }
    let UID = firebase.auth().currentUser.uid;
    var key = firebase.database().ref(`users/${UID}/ad/${Category}/`).push().key;
    // console.log(key);
    let productObj = {
        AdTitle,
        Category,
        AdDescription,
        Image,
        Name,
        number,
        city,
        price,
        UID,
        key
    }
    let storageRef = firebase.storage().ref().child(`adImages/${Image.name}`)
    storageRef.put(Image)
        .then((snap) => {
            snap.ref.getDownloadURL().then((snapUrl) => {
                obj.image = snapUrl;
                productObj.image = snapUrl;
                firebase.database().ref(`users/${UID}/ad/${Category}/${key}`).set(obj) && firebase.database().ref(`allProducts/${key}`).set(productObj)
                    .then((success) => {
                        // document.getElementById("loaders").style.display = "none";
                        swal({
                            title: "Succeed",
                            text: "Ad Added",
                            icon: "success",
                            button: "Done"
                        })
                            .then(() => {
                                document.getElementById("adTitle").value = "";
                                document.getElementById("Category").value = "";
                                document.getElementById("AdDescription").value = "";
                                document.getElementById("UploadImage").value = "";
                                document.getElementById("Name").value = "";
                                document.getElementById("Number").value = "";
                                document.getElementById("city").value = "";
                                document.getElementById("price").value = "";
                                // setTimeout(() => {
                                //     window.location = "../signIn/signIn.html";
                                // }, 2000)
                            })
                    })
            })
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