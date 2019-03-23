var config = {
    apiKey: "AIzaSyBokDEVI_D7CU2PCq0x18lCvgTaf3SZH9c",
    authDomain: "crs-6727.firebaseapp.com",
    databaseURL: "https://crs-6727.firebaseio.com",
    projectId: "crs-6727",
    storageBucket: "crs-6727.appspot.com",
    messagingSenderId: "585664159617"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
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
    else if (user) {
        this.uid = user.uid;
        return firebase.database().ref('company/' + uid).once('value', snap => {
            // console.log(snap.val())
            var username = (snap.val() && snap.val().username) || 'Anonymous User';
            document.getElementById("welcome").innerHTML = "WELCOME " + username.toUpperCase();
        })
    }
})

function signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }));
        window.location = "../../pages/company/companySignIn.html";
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