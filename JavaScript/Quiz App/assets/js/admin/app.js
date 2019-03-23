var config = {
    apiKey: "AIzaSyC1jDruLzU21dmT12s59Cz6iauVaVkHxv8",
    authDomain: "quiz-app6727.firebaseapp.com",
    databaseURL: "https://quiz-app6727.firebaseio.com",
    projectId: "quiz-app6727",
    storageBucket: "quiz-app6727.appspot.com",
    messagingSenderId: "195207357496"
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
})

function createQuiz(){
    location = 'createQuiz.html';
}

function signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }));
        window.location = "../../pages/admin/adminLogin.html";
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