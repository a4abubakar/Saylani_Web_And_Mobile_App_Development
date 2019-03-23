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
        firebase.database().ref("company/" + user.uid)
            .once("value", (data) => {
                let companiesObj = data.val()

                // console.log(a);
                document.getElementById("companies").innerHTML += `
                    <div class="card" >
                    <img class="card-img-top" src="${companiesObj.image}" height="300px" style="border-radius:150px; width:300px; margin:0px auto;" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${companiesObj.username}</h5>
                        <p class="card-text">Email : ${companiesObj.email}</p>
                        <p class="card-text"><small class="text-muted">Address : ${companiesObj.address}</small></p>
                        <p class="card-text"><small class="text-muted">Number : ${companiesObj.number}</small></p>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><a href="../../pages/company/Vacancy.html" style="text-decoration:none">Post Vacancy</a></button>
                    </div>
                </div>`
            })
    })
}

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