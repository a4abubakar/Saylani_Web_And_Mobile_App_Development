var config = {
    apiKey: "AIzaSyDubjsdHO7i9bvrA1vzyDdYmd-yXKgZKr0",
    authDomain: "olx-pakistan6727.firebaseapp.com",
    databaseURL: "https://olx-pakistan6727.firebaseio.com",
    projectId: "olx-pakistan6727",
    storageBucket: "olx-pakistan6727.appspot.com",
    messagingSenderId: "151904918691"
};
firebase.initializeApp(config);

function signInWithFb() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            let user = result.user;
            let userData = {
                username: user.displayName,
                email: user.email,
                image: user.photoURL,
                uid: user.uid
            }
            localStorage.setItem("authentication", JSON.stringify(result));
            firebase.database().ref("users/").once("value", snap => {
                let data = snap.val();
                for (var key in data) {
                    // console.log(key)
                    if (userData.uid === key) {
                        setTimeout(() => {
                            // console.log(success)
                            location = '../afterSignIn/Home.html';
                            console.log("Already a User")
                        }, 1500)
                    }
                    else {
                        firebase.database().ref("users/" + userData.uid).set(userData)
                            .then((success) => {
                                setTimeout(() => {
                                    console.log(success)
                                    console.log("Not a user")
                                    location = '../afterSignIn/Home.html';
                                }, 1500)
                            })
                    }
                }
            })
        }).catch(function (error) {
            console.log("error===>", error)
            swal({
                title: "Error",
                text: error.message,
                icon: "warning",
                button: "Ok",
            });
        })
}
function signIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    document.getElementById("loaders").style.display = "block";
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((success) => {
            console.log(success)
            document.getElementById("loaders").style.display = "none";
            localStorage.setItem("authentication", JSON.stringify(success));
            window.location = "../../pages/afterSignIn/Home.html";
        })
        .catch((error) => {
            document.getElementById("loaders").style.display = "none";
            swal({
                title: "Error",
                text: error.message,
                icon: "warning",
                button: "Ok"
            });
        });
}