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
                if(companiesObj === null){
                    document.getElementById("companies").innerHTML = "No company" 
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
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" key=${a} onClick="showVacancy(this)">Show Vacancy</button>
                        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" key=${a} onClick="delCompany(this)">Remove</button>
                    </div>
                </div>`
                }
            })
    })
}

function showVacancy(e) {
    document.getElementById("companies").style.display = "none";
    let key = e.getAttribute('key');
    // console.log(key)
    document.getElementById("companies-vacancy").style.display = "block";
    firebase.database().ref("vacancy/" + key)
        .once("value", (data) => {
            let companiesObj = data.val()
            // console.log(companiesObj);
            if (companiesObj === null) {
                document.getElementById("companies-vacancy").innerHTML = "Sorry you have not post any vacancy"
            }
            for (var a in companiesObj) {
                // console.log(companiesObj[a])
                document.getElementById("companies-vacancy").innerHTML += `
                <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">${companiesObj[a].jobType}</h5>
                            <p class="card-text">Email : ${companiesObj[a].designation}</p>
                            <p class="card-text"><small class="text-muted">Address : ${companiesObj[a].description}</small></p>
                            <p class="card-text"><small class="text-muted">Number : ${companiesObj[a].salary}</small></p>
                            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" att=${key} key=${a} onClick="delVacancy(this)">Remove</button>
                        </div>
                    </div>`
            }
        })

}
function delVacancy(e) {
    let key = e.getAttribute('key');
    let parKey = e.getAttribute('att');
    // console.log(key + " " + parKey);
    firebase.database().ref(`vacancy/${parKey}/${key}`).remove();
    location.reload();
}

function delCompany(e) {
    let key = e.getAttribute('key');
    firebase.database().ref(`company/${key}`).remove();
    firebase.database().ref("vacancy/" + key).remove();
    location.reload();
}

function signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }));
        window.location = "../../pages/admin/adminSignIn.html";
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