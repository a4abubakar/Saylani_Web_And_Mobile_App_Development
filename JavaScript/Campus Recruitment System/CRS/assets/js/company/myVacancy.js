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
        firebase.database().ref("vacancy/" + user.uid)
            .once("value", (data) => {
                let vacancyObj = data.val();
                if (vacancyObj === null) {
                    document.getElementById("my-vacancy").innerHTML = "You have not post any vacancy";
                }
                // console.log(vacancyObj)
                for (var a in vacancyObj) {
                    // console.log(vacancyObj[a]);
                    document.getElementById("my-vacancy").innerHTML += `
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">${vacancyObj[a].jobType}</h5>
                                <p class="card-text">Email : ${vacancyObj[a].designation}</p>
                                <p class="card-text"><small class="text-muted">Address : ${vacancyObj[a].description}</small></p>
                                <p class="card-text"><small class="text-muted">Number : ${vacancyObj[a].salary}</small></p>
                                <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" att=${user.uid} key=${a} onClick="delVacancy(this)">Remove</button>
                            </div>
                        </div>`
                }
            })
    })
}

function delVacancy(e) {
    let key = e.getAttribute('key');
    let parKey = e.getAttribute('att');
    // console.log(key + " " + parKey);
    firebase.database().ref(`vacancy/${parKey}/${key}`).remove();
    location.reload();
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