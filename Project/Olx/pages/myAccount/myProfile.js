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
    // console.log(user.uid)
    firebase.database().ref("users/" + user.uid)
        .once("value", (data) => {
            let profileObj = data.val()

            // console.log(a);
            document.getElementById("profile").innerHTML += `
                    <div class="card" >
                    <img class="card-img-top" src="${profileObj.image}" height="300px" style="border-radius:150px; width:300px; margin:0px auto;" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${profileObj.username}</h5>
                        <p class="card-text">Email : ${profileObj.email}</p>
                    </div>
                </div>`
        })
})

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