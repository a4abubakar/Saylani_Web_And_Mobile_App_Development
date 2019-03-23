var config = {
    apiKey: "AIzaSyC1C2rAe6zjUNWMUTQAKkn5GiOPJ0Cz4cI",
    authDomain: "blood-bank6727.firebaseapp.com",
    databaseURL: "https://blood-bank6727.firebaseio.com",
    projectId: "blood-bank6727",
    storageBucket: "blood-bank6727.appspot.com",
    messagingSenderId: "773775797239"
};
firebase.initializeApp(config);

//Sign Up
function signUp() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let number = document.getElementById("number").value;
    let weight = document.getElementById("weight").value;
    let gender = document.getElementById("gender").value;
    let type = document.getElementById("type").value;
    let bloodGrp = document.getElementById("bloodGroup").value;
    let password = document.getElementById("password").value;
    document.getElementById("loaders").style.display = "block";
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            let obj = {
                username,
                email,
                dob,
                number,
                weight,
                gender,
                type,
                bloodGrp,
                password
            };
            let UID = firebase.auth().currentUser.uid;
            firebase.database().ref("blood-users/" + UID).set(obj)
                .then((success) => {
                    document.getElementById("loaders").style.display = "none";
                    swal({
                        title: "Welcome",
                        text: "Account Created",
                        icon: "success",
                        button: "Done"
                    }).then(() => {
                        setTimeout(() => {
                            window.location = "../pages/signIn.html";
                        }, 2000)
                    })
                })
        })
        .catch((error) => {
            document.getElementById("loaders").style.display = "none";
            swal({
                title: "Error",
                text: error.message,
                icon: "warning",
                button: "Ok",
            });
        })
}

//Sign In
function signIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let type = document.getElementById("type");
    document.getElementById("loaders").style.display = "block";
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((success) => {
            document.getElementById("loaders").style.display = "none";
            localStorage.setItem("authentication", JSON.stringify(success));
            window.location = "../pages/Home.html";
        })
        .catch((error) => {
            document.getElementById("loaders").style.display = "none";
            swal({
                title: "Error",
                text: error.message,
                icon: "warning",
                button: "Ok"
            });
        });
}

//Sign Out
function signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }));
        window.location = "../pages/signIn.html";
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

//State Change
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.UID = user.uid;
        return firebase.database().ref('blood-users/' + UID).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            var email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
            var bloodGroup = (snapshot.val() && snapshot.val().bloodGrp) || 'Anonymous';
            var dob = (snapshot.val() && snapshot.val().dob) || 'Anonymous';
            var gender = (snapshot.val() && snapshot.val().gender) || 'Anonymous';
            var number = (snapshot.val() && snapshot.val().number) || 'Anonymous';
            var weight = (snapshot.val() && snapshot.val().weight) || 'Anonymous';
            document.getElementById("un").innerHTML = "Welcome " + username;
            document.getElementById("bg").innerHTML = "Email : " + email;
            document.getElementById("dob").innerHTML = "Blood Group : " + bloodGroup;
            document.getElementById("em").innerHTML = "Date of Birth : " + dob;
            document.getElementById("gen").innerHTML = "Gender : " + gender;
            document.getElementById("num").innerHTML = "Number : " + number;
            document.getElementById("wt").innerHTML = "Weight : " + weight;
            check();
            display();
        })
    }
})
function donor() {
    swal({
        title: "Are you sure?",
        text: "Do you want to donate blood in future!",
        icon: "info",
        buttons: true,
    })
        .then((willDonate) => {
            if (willDonate) {
                let isDonor = true;
                let availability = "available";
                let uid = firebase.auth().currentUser.uid;
                if (uid !== null && uid !== undefined) {
                    let obj = { isDonor, availability };
                    firebase.database().ref("Blood Donor/" + uid).push(obj);
                }
                swal("You are registered as a donor...", {
                    icon: "success",
                });
                setTimeout(() => {
                    location.reload();
                }, 2000)
            } else {
                swal("Your are welcome as acceptor.");
            }
        });
}

function check() {
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("Blood Donor/" + uid).once("value", snap => {
        let data = snap.val();
        for (let key in data) {
            for (let key2 in data[key]) {
                var a = data[key][key2];
            }
        }
        if (a === true) {
            document.getElementById("donor").innerHTML = "Donor";
            var element = document.getElementById("donor");
            element.setAttribute("onClick", "");
        }
    })
}

function display() {
    var arr = [];
    var arr1 = [];
    var donorDiv = document.getElementById("donorDiv");
    firebase.database().ref("Blood Donor/").on("value", snap => {
        let data = snap.val();
        for (let key in data) {
            arr.push(key);
        }
        console.log(arr);

    })
    firebase.database().ref("blood-users/").on("value", snap => {
        let data = snap.val();
        for (let key in data) {
            arr1.push(key);
        }
        console.log(arr1);
        var filtered = arr.filter(function (e) { return this.indexOf(e) >= 0; }, arr1);
        // console.log("New array: " + filtered);
        var isResultFound = false;
        for (var i = 0; i < filtered.length; i++) {
            firebase.database().ref("blood-users/" + filtered[i]).on("value", snap => {
                var data = snap.val();
                var donorBldGrp = data.bloodGrp;
                console.log(donorBldGrp);
                let uid = firebase.auth().currentUser.uid;
                firebase.database().ref("blood-users/" + uid).on("value", snap => {
                    let newData = snap.val();
                    let userBldGrp = newData.bloodGrp;
                    // console.log(userBldGrp);
                    if (userBldGrp === donorBldGrp) {
                        var b;
                        console.log("abcd");
                        isResultFound = true;
                        firebase.database().ref("Blood Donor/" + filtered[i]).on("value", snap => {
                            var donorData = snap.val();
                            for (let key in donorData) {
                                for (let key2 in donorData[key]) {
                                    for (let key3 in donorData[key][key2]) {
                                        b = donorData[key][key2];
                                    }
                                }
                            }
                            console.log(b);
                        })
                        console.log(data.username + " " + data.email + " " + data.bloodGrp + " " + data.dob + " " + data.gender + " " + data.number + " " + data.weight);
                        donorDiv.innerHTML +=
                            `
                                <div class="container" id="newDiv">
                                    <p>Donor Name : ${data.username}</p>
                                    <p>Email : ${data.email}</p>
                                    <p>Blood Group : ${data.bloodGrp}</p>
                                    <p>Date of Birth : ${data.dob}</p>
                                    <p>Gender : ${data.gender}</p>
                                    <p>Number : ${data.number}</p>
                                    <p>Weight : ${data.weight}</p>
                                    <button onClick="avail(this)" id="avail" userid=${filtered[i]}>${b}</button>
                                </div><br/><br/>
                        `
                    }
                })
            })
        }
        if (!isResultFound) {
            donorDiv.innerHTML +=
                `
                         <div class="container" id="newDiv">Sorry No Donor is Available for this Blood Group</div>
                 `;
        }
    })
}


function avail(e) {
    var b;
    let id = e.getAttribute("userid");
    firebase.database().ref("Blood Donor/" + id).on("value", snap => {
        let donorData = snap.val();
        for (let key in donorData) {
            b = key;
        }
        console.log(b);
        firebase.database().ref(`Blood Donor/${id}/${b}`).set({ availability: "Donated", isDonor: true, isDonated: true });
    })
    var donorDiv = document.getElementById("donorDiv");
    donorDiv.innerHTML = "";
    display();
    checking(id);
}

function checking(id) {
    firebase.database().ref("Blood Donor/" + id).on("value", snap => {
        let data = snap.val();
        for (let key in data) {
            for (let key2 in data[key]) {
                var a = data[key].isDonated;
            }
        }
        console.log(a);
        if (a === true) {
            let element = document.getElementById("avail");
            element.setAttribute("onClick", "");
            console.log("already donated");
        }
    })
}

//
var arr = [];
var arr1 = [];
var donorDiv = document.getElementById("availDonor");
var table = document.createElement("table");
table.setAttribute("id", "donors");
var tr = document.createElement("tr");
var th1 = document.createElement("th");
th1.innerHTML = "Username";
var th2 = document.createElement("th");
th2.innerHTML = "Gender";
var th3 = document.createElement("th");
th3.innerHTML = "Email";
var th4 = document.createElement("th");
th4.innerHTML = "Date of Birth";
var th5 = document.createElement("th");
th5.innerHTML = "Blood Group";
var th6 = document.createElement("th");
th6.innerHTML = "Number";
var th7 = document.createElement("th");
th7.innerHTML = "Weight";
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
tr.appendChild(th6);
tr.appendChild(th7);
table.appendChild(tr);
donorDiv.appendChild(table);
firebase.database().ref("Blood Donor/").on("value", snap => {
    let data = snap.val();
    for (let key in data) {
        arr.push(key);
    }
    console.log(arr);

})
firebase.database().ref("blood-users/").on("value", snap => {
    let data = snap.val();
    for (let key in data) {
        arr1.push(key);
    }
    console.log(arr1);
    var filtered = arr.filter(function (e) { return this.indexOf(e) >= 0; }, arr1);
    // console.log("New array: " + filtered);
    var isResultFound = false;
    for (var i = 0; i < filtered.length; i++) {
        firebase.database().ref("blood-users/" + filtered[i]).on("value", snap => {
            var data = snap.val();
            // var dataArr = Object.keys(data);
            console.log(data);
            isResultFound = true;
            table.innerHTML +=
                `
                        <tr>
                            <td>${data.username}</td>
                            <td>${data.gender}</td>
                            <td>${data.email}</td>
                            <td>${data.dob}</td>
                            <td>${data.bloodGrp}</td>
                            <td>${data.number}</td>
                            <td>${data.weight}</td>
                        </tr>
                `
        })
    }
    // if (isResultFound === true) {
    //     donorDiv.setAttribute("onClick", "");
    // }
})

//
let btn = document.getElementById("btn");
