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
        firebase.database().ref("students/")
            .once("value", (data) => {
                let studentsObj = data.val();
                if (studentsObj === null) {
                    document.getElementById("students").innerHTML = "No student"
                }
                for (var a in studentsObj) {
                    // console.log(a);
                    document.getElementById("students").innerHTML += `
                    <div class="card" >
                    <img class="card-img-top" src="${studentsObj[a].image}" height="300px"  style="border-radius:150px; width:300px; margin:0px auto;" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${studentsObj[a].username}</h5>
                        <p class="card-text">Email : ${studentsObj[a].email}</p>
                        <p class="card-text"><small class="text-muted">Address : ${studentsObj[a].address}</small></p>
                        <p class="card-text"><small class="text-muted">Age : ${studentsObj[a].age}</small></p>
                        <p class="card-text"><small class="text-muted">Number : ${studentsObj[a].number}</small></p>
                        <p class="card-text"><small class="text-muted">Enrollment Number : ${studentsObj[a].enroll_no}</small></p>
                        <p class="card-text"><small class="text-muted">Date of Birth : ${studentsObj[a].dob}</small></p>
                        <p class="card-text"><small class="text-muted">Gender : ${studentsObj[a].gender}</small></p>
                        <p class="card-text"><small class="text-muted">Education : ${studentsObj[a].education}</small></p>
                    </div>
                </div>`
                }
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