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
    await addCompany();
})

async function addCompany() {
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
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;
        let address = document.getElementById("address").value;
        let image = document.getElementById("image").files[0];
        let password = document.getElementById("password").value;
        document.getElementById("loaders").style.display = "block";
        if (username == "" && username == " ") {
            document.getElementById('nameErr').innerHTML = "Name is Required";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (username.length <= 2 || username.length > 20) {
            document.getElementById('nameErr').innerHTML = "Enter Full Name Between 3 to 20 Characters";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (!isNaN(username)) {
            document.getElementById('nameErr').innerHTML = "Enter only Characters";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (email == "" && email == " ") {
            document.getElementById('emailErr').innerHTML = "Email is Required";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        var reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (reg.test(email) === false) {
            document.getElementById('emailErr').innerHTML = "Invalid Email Address";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (password == "" && password == " ") {
            document.getElementById('passErr').innerHTML = "password is Required";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (password.length <= 5 || password.length > 11) {
            document.getElementById('passErr').innerHTML = "Enter Password atleast 6 to 12 Characters or digits";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (number == "" && number == " ") {
            document.getElementById('numErr').innerHTML = "Contact Number is required";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (isNaN(number)) {
            document.getElementById('numErr').innerHTML = "Enter Only Numbers";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (number.length != 11) {
            document.getElementById('numErr').innerHTML = "Enter Correct Mobile Number must be 11 digit";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (image == "") {
            document.getElementById('picerr').innerHTML = "Please Select Your Picture";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        if (address == "" && address == " ") {
            document.getElementById('addErr').innerHTML = "Enter Your Complete Address";
            document.getElementById("loaders").style.display = "none";
            return false
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    let obj = {
                        username,
                        email,
                        number,
                        address,
                        image,
                        createTime: firebase.database.ServerValue.TIMESTAMP
                    };
                    let UID = firebase.auth().currentUser.uid;
                    let storageRef = firebase.storage().ref().child(`userimages/${image.name}`)
                    storageRef.put(image)
                        .then((snap) => {
                            snap.ref.getDownloadURL().then((snapUrl) => {
                                obj.image = snapUrl;
                                firebase.database().ref("company/" + UID).set(obj)
                                    .then((success) => {
                                        document.getElementById("loaders").style.display = "none";
                                        swal({
                                            title: "Company Added",
                                            text: "You can check in View Student",
                                            icon: "success",
                                            button: "Done"
                                        }).then(() => {
                                            document.getElementById("username").value = "";
                                            document.getElementById("email").value = "";
                                            document.getElementById("number").value = "";
                                            document.getElementById("address").value = "";
                                            document.getElementById("image").value = "";
                                            document.getElementById("password").value = "";
                                        })
                                    })
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
    })
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