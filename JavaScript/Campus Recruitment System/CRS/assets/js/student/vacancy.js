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
        firebase.database().ref("vacancy/")
            .once("value", (data) => {
                let vacanciesObj = data.val()
                // console.log(vacanciesObj)
                if(vacanciesObj === null){
                    document.getElementById("vacancies").innerHTML = "Sorry no vaccancies"
                }
                for (var a in vacanciesObj) {
                    // console.log(a);
                    firebase.database().ref("company/" + a).once("value", (snap) => {
                        let companyData = snap.val();
                        // console.log(comapanyData.address)

                        for (var key in vacanciesObj[a]) {
                            // console.log(key)
                            document.getElementById("vacancies").innerHTML += `
                            <div class="card" >
                            <img class="card-img-top" src="${companyData.image}" height="300px" style="border-radius:150px; width:300px; margin:0px auto;" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${companyData.username}</h5>
                                <p class="card-text">Email : ${companyData.email}</p>
                                <p class="card-text"><small class="text-muted">Job Type : ${vacanciesObj[a][key].jobType}</small></p>
                                <p class="card-text"><small class="text-muted">Designation : ${vacanciesObj[a][key].designation}</small></p>
                                <p class="card-text"><small class="text-muted">Description : ${vacanciesObj[a][key].description}</small></p>
                                <p class="card-text"><small class="text-muted">Salary : ${vacanciesObj[a][key].salary}</small></p>
                                <p class="card-text"><small class="text-muted">Address : ${companyData.address}</small></p>
                                <p class="card-text"><small class="text-muted">Number : ${companyData.number}</small></p>
                            </div>
                        </div>`
                        }
                    })
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