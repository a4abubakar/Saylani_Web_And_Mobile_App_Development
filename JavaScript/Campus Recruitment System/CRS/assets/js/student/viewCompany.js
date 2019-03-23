var config = {
    apiKey: "AIzaSyBokDEVI_D7CU2PCq0x18lCvgTaf3SZH9c",
    authDomain: "crs-6727.firebaseapp.com",
    databaseURL: "https://crs-6727.firebaseio.com",
    projectId: "crs-6727",
    storageBucket: "crs-6727.appspot.com",
    messagingSenderId: "585664159617"
};
firebase.initializeApp(config);

window.addEventListener("load", async function loader() {
    await load();
})
async function load() {
    await firebase.auth().onAuthStateChanged(function (user) {
        if (user === null || user === "undefined" || user === "") {
            swal({
                title: 'you are logout...',
                showConfirmButton: false,
                padding: "1em"
            })

            setTimeout(() => {
                location = '../../index.html'
            }, 1500)
        }
        firebase.database().ref("company/")
            .once("value", (data) => {
                let companiesObj = data.val()
                if (companiesObj === null) {
                    document.getElementById("companies").innerHTML = "No Company"
                }
                for (var a in companiesObj) {
                    // console.log(a);
                    document.getElementById("companies").innerHTML += `
                    <div class="card" >
                    <img class="card-img-top" src="${companiesObj[a].image}" height="300px" style="border-radius:150px; width:300px; margin:0px auto;" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${companiesObj[a].username}</h5>
                        <p class="card-text">Email : ${companiesObj[a].email}</p>
                        <p class="card-text"><small class="text-muted">Address : ${companiesObj[a].address}</small></p>
                        <p class="card-text"><small class="text-muted">Number : ${companiesObj[a].number}</small></p>
                    </div>
                </div>`
                }
            })
    })
}

function signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }));
        window.location = "../../pages/student/studentSignIn.html";
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