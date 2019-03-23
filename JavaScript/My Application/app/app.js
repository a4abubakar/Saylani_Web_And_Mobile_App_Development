var config = {
    apiKey: "AIzaSyCVwmlGypvCfc_CmbynUJqnaWsWK5XOUOA",
    authDomain: "myapplication-123-456.firebaseapp.com",
    databaseURL: "https://myapplication-123-456.firebaseio.com",
    projectId: "myapplication-123-456",
    storageBucket: "myapplication-123-456.appspot.com",
    messagingSenderId: "250912704821"
};
firebase.initializeApp(config);

//Sign Up
function signUp() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let password = document.getElementById("password").value;
    document.getElementById("loaders").style.display = "block";
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            let obj = {
                username,
                email,
                gender,
                password,
                isAdmin: false
            };
            let UID = firebase.auth().currentUser.uid;
            firebase.database().ref('users/' + UID).set(obj)
                .then((success) => {
                    document.getElementById("loaders").style.display = "none";
                    swal({
                        title: "Welcome",
                        text: "Account Created",
                        icon: "success",
                        button: "Done",
                    }).then(() => {
                        window.location = "../SignIn/signin.html"
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
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            document.getElementById("loaders").style.display = "none";
            swal({
                title: "Error",
                text: errorMessage,
                icon: "warning",
                button: "Ok",
            });
        });
}

//Sign In
function signIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    document.getElementById("loaders").style.display = "block";
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((success) => {
            document.getElementById("loaders").style.display = "none";
            localStorage.setItem("authentication", JSON.stringify(success));
            window.location = "../../pages/home.html";
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            document.getElementById("loaders").style.display = "none";
            swal({
                title: "Error",
                text: error.message,
                icon: "warning",
                button: "Ok",
            });
        });
}


//State Changed
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.userId = user.uid;
        return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            var email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
            var isAdmin = (snapshot.val() && snapshot.val().isAdmin) || 'Anonymous';

            //Checking User
            if (isAdmin === true) {
                alert("You are admin");
                document.getElementById("head").innerHTML = "Welcome " + username;
                document.getElementById("para").innerHTML = "Your email address is " + email;
                document.getElementById("news").style.display = "none";
                document.getElementById("comment").style.display = "none";
                viewData();
            }
            else {
                document.getElementById("table-div").style.display = "none";
                document.getElementById("head").innerHTML = "Welcome " + username;
                document.getElementById("para").innerHTML = "Your email address is " + email;
            }
        })
    }
})


//View Data
function viewData() {
    let tr = document.getElementById("table-tr");
    firebase.database().ref().child("users").on("value", snap => {
        let dataObj = snap.val();
        let dataArr = Object.keys(dataObj);
        let dataLen = dataArr.length - 1;
        firebase.database().ref().child("users").limitToFirst(dataLen).on("child_added", snap => {
            let data = snap.val();
            //edit
            var edit = document.createElement("a");
            edit.setAttribute("userid", snap.key);
            edit.setAttribute("class", "edit");
            edit.setAttribute("title", "Edit");
            edit.setAttribute("data-toggle", "tooltip");
            var editI = document.createElement("i");
            editI.setAttribute("class", "material-icons");
            editI.innerHTML = "&#xE254";
            editI.setAttribute("onClick", "edit(this);");
            edit.appendChild(editI);
            //delete
            var del = document.createElement("a");
            del.setAttribute("class", "delete");
            del.setAttribute("title", "Delete");
            del.setAttribute("data-toggle", "tooltip");
            del.setAttribute("userid", snap.key);
            var delI = document.createElement("i");
            delI.setAttribute("class", "material-icons");
            delI.innerHTML = "&#xE872;";
            delI.setAttribute("onClick", "dele(this);");
            del.appendChild(delI);
            tr.innerHTML +=
                "<tr>"
                + "<td>" + data.username + "</td>"
                + "<td>" + data.email + "</td>"
                + "<td>" + data.gender + "</td>"
                + "<td>" + data.password + "</td>"
                + "<td>" + data.isAdmin + "</td>"
                + "<td>" + edit.outerHTML + del.outerHTML + "</td>"
                + "</tr>";
        })
    })
}

//Add-User
const addUser = document.getElementById("add-user-btn");
addUser.addEventListener("click", addUser => {
    const userRef = firebase.database().ref("users/");
    var addUserInput = document.getElementsByClassName("user-input");
    let newUser = {};
    for (let i = 0; i < addUserInput.length; i++) {
        let key = addUserInput[i].getAttribute("data-key");
        let val = addUserInput[i].value;
        newUser[key] = val;
    }
    userRef.push(newUser, () => { console.log("Data inserted successfully") })
    addUserInput.innerHTML = '';
    let tr = document.getElementById("table-tr");
    tr.innerHTML = "";
    viewData();
})

//Delete
function dele(e) {
    let id = e.parentNode.getAttribute("userid");
    console.log(id);
    let del = firebase.database().ref().child("users/" + id);
    del.remove();
    let tr = document.getElementById("table-tr");
    tr.innerHTML = "";
    console.log("User deleted");
    viewData();
}

//Edit
function edit(e) {
    document.getElementById('edit-user-module').style.display = "block";
    const userId = e.parentNode.getAttribute("userid");
    // console.log(userId)
    document.querySelector(".edit-userid").value = userId;
    const editRef = firebase.database().ref().child("users/" + userId);
    const editFormValue = document.querySelectorAll(".edit-user-input");
    editRef.on("value", snap => {
        for (let i = 0; i < editFormValue.length; i++) {
            var key = editFormValue[i].getAttribute("data-key");
            editFormValue[i].value = snap.val()[key];
        }
    })
}

//Updating
function update() {
    const userId = document.querySelector(".edit-userid").value;
    const ref = firebase.database().ref().child("users/" + userId);
    let editObj = {};
    const editInputValue = document.querySelectorAll(".edit-user-input");
    editInputValue.forEach(function (textField) {
        let key = textField.getAttribute("data-key");
        let val = textField.value;
        editObj[key] = val;
    })
    ref.update(editObj, function () {
        console.log("user has been updated successfully");
    })
    document.getElementById('edit-user-module').style.display = "none";
    let tr = document.getElementById("table-tr");
    tr.innerHTML = "";
    viewData();
}

//Sign Out
function signOut() {
    firebase.auth().signOut().then(function () {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }))
        window.location = "../pages/SignIn/signin.html";
    })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            swal({
                title: "Error",
                text: errorMessage,
                icon: "warning",
                button: "Ok",
            });
        });
}

//News
const mainDiv = document.getElementById("div");
const selector = document.getElementById("selector");
var apiKey = '2fea6986d2c14521ae1c56e32077b122';
var newsName = document.getElementById("newsName");
const defaultVal = "the-washington-post";

window.addEventListener('load', async a => {
    await updateSelector();
    updateNews();
    selector.value = defaultVal;
    selector.addEventListener('change', a => {
        updateNews(a.target.value);
    })
})
async function updateSelector() {
    const selectorUrl = await fetch(`https://newsapi.org/v1/sources`);
    const selectorData = await selectorUrl.json();
    selector.innerHTML = selectorData.sources
        .map(src => `<option value="${src.id}">${src.name}</option>`).join("\n");
}
async function updateNews(params = defaultVal) {
    const mainUrl = await fetch(`https://newsapi.org/v1/articles?source=${params}&apikey=${apiKey}`);
    const mainData = await mainUrl.json();
    newsName.innerHTML = params.toUpperCase();
    mainDiv.innerHTML = mainData.articles.map(newArticles).join('\n');
}
function newArticles(article) {
    return `
    <div class="col-md-8 col-md-offset-2">
    <h2 class='h2'>${article.title}</h2>
    <img class="img-rounded" width='100%' src="${article.urlToImage}"/>
    <p class='h4'>${article.description}</p>
    </div>`
}

//Comment
function commentBox() {
    let uid = firebase.auth().currentUser.uid;
    if (uid !== null && uid !== undefined) {
        let userName = document.getElementById("user").value;
        let comment = document.getElementById("comment").value;
        let commentDisplayDiv = document.getElementById("myPost");
        let obj = {
            userName,
            comment
        }
        firebase.database().ref("comments/" + uid)
            .push(obj)
            .then((success) => {
                firebase.database().ref("comments/" + uid).once("value", snap => {
                    let data = snap.val();
                    let arr = [];
                    for (let key in data) {
                        arr.push(data[key]);
                    }
                    arr.map((value, index) => {
                        commentDisplayDiv.innerHTML +=
                            `
                            <div class="card">
                                <div class="container">
                                <h4><b>${value.userName}</b></h4> 
                                <p>${value.comment}</p> 
                                </div>
                            </div><br/>
                    `
                    })
                })
            })
            .catch((error) => {
                let errorMsg = error;
                swal({
                    title: "Error",
                    text: errorMsg,
                    icon: "error",
                    button: "Ok",
                })
            })
    }
    else {
        swal({
            title: "Error",
            text: "please Login First",
            icon: "error",
            button: "Ok",
        })
    }
}