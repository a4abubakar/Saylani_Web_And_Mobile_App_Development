var config = {
    apiKey: "AIzaSyC1jDruLzU21dmT12s59Cz6iauVaVkHxv8",
    authDomain: "quiz-app6727.firebaseapp.com",
    databaseURL: "https://quiz-app6727.firebaseio.com",
    projectId: "quiz-app6727",
    storageBucket: "quiz-app6727.appspot.com",
    messagingSenderId: "195207357496"
};
firebase.initializeApp(config);

function loginWithFb() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            let user = result.user;
            let userData = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                uid: user.uid
            }
            firebase.database().ref().child(`users/${userData.uid}`).set(userData)
                .then(() => {
                    setTimeout(() => {
                        location = '././pages/user/Home.html';
                    }, 1500)
                })
        }).catch(function (error) {
            console.log("error===>", error)
        });
}