var config = {
    apiKey: "AIzaSyC1jDruLzU21dmT12s59Cz6iauVaVkHxv8",
    authDomain: "quiz-app6727.firebaseapp.com",
    databaseURL: "https://quiz-app6727.firebaseio.com",
    projectId: "quiz-app6727",
    storageBucket: "quiz-app6727.appspot.com",
    messagingSenderId: "195207357496"
};
firebase.initializeApp(config);

function signInAdmin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    document.getElementById("loaders").style.display = "block";
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((success) => {
            document.getElementById("loaders").style.display = "none";
            localStorage.setItem("authentication", JSON.stringify(success));
            window.location = "../../pages/admin/Home.html";
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