var config = {
    apiKey: "AIzaSyDubjsdHO7i9bvrA1vzyDdYmd-yXKgZKr0",
    authDomain: "olx-pakistan6727.firebaseapp.com",
    databaseURL: "https://olx-pakistan6727.firebaseio.com",
    projectId: "olx-pakistan6727",
    storageBucket: "olx-pakistan6727.appspot.com",
    messagingSenderId: "151904918691"
};
firebase.initializeApp(config);

function signUp() {
    document.getElementById("loaders").style.display = "block";
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let image = document.getElementById("image").files[0];
    if (username === "" || username === " " || email === "" || email === " " || password === "" || password === " " || image === null) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Please fill all fields";
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            let uid = firebase.auth().currentUser.uid;
            let obj = {
                username,
                email,
                image,
                uid
            };
            let storageRef = firebase.storage().ref().child(`userimages/${image.name}`)
            storageRef.put(image)
                .then((snap) => {
                    snap.ref.getDownloadURL().then((snapUrl) => {
                        obj.image = snapUrl;
                        firebase.database().ref("users/" + uid).set(obj)
                            .then((success) => {
                                document.getElementById("loaders").style.display = "none";
                                swal({
                                    title: "Welcome",
                                    text: "Account Created",
                                    icon: "success",
                                    button: "Done"
                                }).then(() => {
                                    document.getElementById("username").value = "";
                                    document.getElementById("email").value = "";
                                    document.getElementById("image").value = "";
                                    document.getElementById("password").value = "";
                                    setTimeout(() => {
                                        window.location = "../signIn/signIn.html";
                                    }, 2000)
                                })
                            })
                    })
                })
        })
        .catch((error) => {
            document.getElementById("loaders").style.display = "none";
            swal({
                title: "Error",
                text: error.message,
                icon: "warning",
                button: "Ok",
            });
        })
}