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
        firebase.database().ref("students/" + user.uid)
            .once("value", (data) => {
                let studentObj = data.val()

                // console.log(a);
                document.getElementById("student").innerHTML += `
                    <div class="card" >
                    <img class="card-img-top" src="${studentObj.image}" height="300px" style="border-radius:150px; width:300px; margin:0px auto;" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${studentObj.username}</h5>
                        <p class="card-text">Email : ${studentObj.email}</p>
                        <p class="card-text"><small class="text-muted">Address : ${studentObj.address}</small></p>
                        <p class="card-text"><small class="text-muted">Number : ${studentObj.number}</small></p>
                        <p class="card-text"><small class="text-muted">Age : ${studentObj.age}</small></p>
                        <p class="card-text"><small class="text-muted">Number : ${studentObj.number}</small></p>
                        <p class="card-text"><small class="text-muted">Enrollment Number : ${studentObj.enroll_no}</small></p>
                        <p class="card-text"><small class="text-muted">Date of Birth : ${studentObj.dob}</small></p>
                        <p class="card-text"><small class="text-muted">Gender : ${studentObj.gender}</small></p>
                        <p class="card-text"><small class="text-muted">Education : ${studentObj.education}</small></p>
                    </div>
                </div>`
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