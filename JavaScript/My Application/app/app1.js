// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVwmlGypvCfc_CmbynUJqnaWsWK5XOUOA",
    authDomain: "myapplication-123-456.firebaseapp.com",
    databaseURL: "https://myapplication-123-456.firebaseio.com",
    projectId: "myapplication-123-456",
    storageBucket: "myapplication-123-456.appspot.com",
    messagingSenderId: "250912704821"
};
firebase.initializeApp(config);
var completeRecord=[];
// var UID = firebase.auth().currentUser.uid;
// var root = firebase.database().ref().child("users");
// root.child(UID).on("child_added", snap => {
//     var username = snap.child("username").val();
//     var email = snap.child("email").val();
//     document.getElementById("heading").innerHTML = "Welcome " + username;
//     document.getElementById("para").innerHTML = "Your email address is " + email;
// })
// root.on("child_added", snap => {
//     var username = snap.child("username").val().currentUser;
//     var email = snap.child("email").val().currentUser;
//     document.getElementById("heading").innerHTML = "Welcome " + username;
//     document.getElementById("para").innerHTML = "Your email address is " + email;
// })
// firebase.auth().onAuthStateChanged((success) => {
//     if (success) {
//         var UID = firebase.auth().currentUser.uid;
//         var currentUser = firebase.database().ref("users").currentUser;
//         if (currentUser != null) {
//             var root = firebase.database().ref().child("users");
//             root.child(UID).on("child_added", snap => {
//                 var username = snap.child("username").val();
//                 var email = snap.child("email").val();
//                 // var username = currentUser.username;
//                 // var email = currentUser.email;
//                 document.getElementById("heading").innerHTML = "Welcome " + username;
//                 document.getElementById("para").innerHTML = "Your email address is " + email;
//             })
//         }
//     }
// })
// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });
// var UID = firebase.auth().currentUser.uid;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.userId = user.uid;
        return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            var email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
            var isAdmin = (snapshot.val() && snapshot.val().isAdmin) || 'Anonymous';
            // ...
            if (isAdmin === true) {
                alert("You are admin");
                document.getElementById("head").innerHTML = "Welcome " + username;
                document.getElementById("para").innerHTML = "Your email address is " + email;
                // var ref = firebase.database().ref("users");
                // ref.on("value", gotData, errData);
                var firebaseData;
                const ref = firebase.database().ref().child("users");
                ref.on("value", snap => {
                    var dataObject = snap.val();
                    var dataArray = Object.keys(dataObject);
                    var firebaseData = dataArray.length - 1;
                    // console.log(firebaseData)
                    ref.limitToFirst(firebaseData).on("value", snap => {
                        // console.log(success.val());
                        // console.log("value");
                        var data = snap.val();
                        
                        //  console.log(data)
                        var keys = Object.keys(data);
                     
                        // console.log(keys)
                      //console.log(snap);
                        var tr = document.getElementById("table-tr");
                        var a = "<a class='edit' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>"
                            + "<a class='delete' userid="+keys+" id='delete' title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a>";
                        // var add = document.createElement("a");
                        // add.setAttribute("class", "add");
                        // add.setAttribute("title", "Add");
                        // add.setAttribute("data-toggle", "tooltip");
                        // var addI = document.createElement("i");
                        // addI.setAttribute("class", "material-icons");
                        // addI.innerHTML = "&#xE03B;";
                        // add.appendChild(addI);
                        // var edit = document.createElement("a");
                        // edit.setAttribute("userid", snap.key);
                        // edit.setAttribute("title", "Edit");
                        // edit.setAttribute("data-toggle", "tooltip");
                        // var editI = document.createElement("i");
                        // editI.setAttribute("class", "material-icons");
                        // editI.innerHTML = "&#xE254";
                        // edit.appendChild(editI);
                        // var del = document.createElement("a");
                        // del.setAttribute("userid", snap.key);
                        // del.setAttribute("title", "Delete");
                        // del.setAttribute("data-toggle", "tooltip");
                        // var delI = document.createElement("i");
                        // delI.setAttribute("class", "material-icons");
                        // delI.innerHTML = "&#xE872;";
                        // del.appendChild(delI);
                        // var td = document.createElement("td");
                        // td.appendChild(add);
                        // td.appendChild(edit);
                        // td.appendChild(del);
                        // var edit = document.getElementById("delete");
                        // console.log(edit)
                      //  completeRecord=data;
                        for (var i = 0; i < keys.length; i++) {
                            
                            var k = keys[i];
                           // console.log(data[k]);
                            var name = data[k].username;
                            var email = data[k].email;
                            var gender = data[k].gender;
                            var password = data[k].password;
                            var isAdmin = data[k].isAdmin;
                            // console.log(name, email, gender);
                            var aaass = "<a class='edit' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>"
                            + "<a class='delete' userid="+data[k]+" id='delete'  onclick=f1('"+data[k].userid+"'); title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a>";
                            var a = "<a class='edit' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>"
                            + "<a class='delete' userid="+keys[i]+" id='delete'  title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a>";
                            tr.innerHTML +=
                                "<tr>"
                                + "<td>" + name + "</td>"
                                + "<td>" + email + "</td>"
                                + "<td>" + gender + "</td>"
                                + "<td>" + password + "</td>"
                                + "<td>" + isAdmin + "</td>"
                                + "<td>" + a + "</td>"
                                + "</tr>";

                               // completeRecord.push(data[k]);

                        }
                        var del = document.getElementById("delete");
                        // console.log(del)
                        del.addEventListener("click", function deleteClicked(e) {
                            // /console.log(this);
                            // alert("here delete");
                            // e.stopPropagation();
                             //alert(e.target.getAttribute("userid"));
                            //console.log(e);
                            //console.log( e.target.getAttribute("userid"));
                            const delUid = e.target.getAttribute("userid");
                            console.log(delUid);
                            const deleteRef = firebase.database().ref().child("users/" + delUid);
                            deleteRef.remove();
                        })
                    })
                })
                const addUser = document.getElementById("add-user-btn");
                addUser.addEventListener("click", addUser => {
                    const userRef = firebase.database().ref().child("users");
                    var addUserInput = document.getElementsByClassName("user-input");
                    let newUser = {};
                    for (let i = 0; i < addUserInput.length; i++) {
                        let key = addUserInput[i].getAttribute("data-key");
                        let val = addUserInput[i].value;
                        newUser[key] = val;
                    }
                    userRef.push(newUser, () => { console.log("Data inserted successfully") })
                })
                // const ref = firebase.database().ref().child("users");
                // const userList = document.getElementById("userList");
                // ref.limitToFirst(3).on("child_added", snap => {
                //     let editIcon = document.createElement("span");
                //     editIcon.class = "edit-user";
                //     editIcon.innerHTML = "✎";
                //     editIcon.setAttribute("userid", snap.key);
                //     let delIcon = document.createElement("span");
                //     delIcon.class = "delete-user";
                //     delIcon.innerHTML = "X";
                //     delIcon.setAttribute("userid", snap.key);
                //     let user = snap.val();
                //     let li = document.createElement("li");
                //     li.innerHTML = user.username;
                //     editIcon.addEventListener("click", function editClicked(e) {
                //         document.getElementById('edit-user-module').style.display = "block";
                //         const userId = e.target.getAttribute("userid");
                //         // console.log(userId)
                //         document.querySelector(".edit-userid").value = userId;
                //         const editRef = firebase.database().ref().child("users/" + userId);
                //         const editFormValue = document.querySelectorAll(".edit-user-input");
                //         editRef.on("value", snap => {
                //             for (let i = 0; i < editFormValue.length; i++) {
                //                 var key = editFormValue[i].getAttribute("data-key");
                //                 editFormValue[i].value = snap.val()[key];
                //             }
                //         })
                //     });
                //     li.appendChild(editIcon);
                //     delIcon.addEventListener("click", function deleteClicke(e){
                //         e.stopPropagation();
                //         const userId = e.target.getAttribute("userid");
                //         const deleteRef = firebase.database().ref().child("users/" + userId);
                //         deleteRef.remove();
                //     })
                //     li.appendChild(delIcon);

                //     li.setAttribute("child-key", snap.key);
                //     li.addEventListener("click", userClicked);
                //     userList.appendChild(li);
                //     const saveBtn = document.querySelector("#edit-user-btn");
                //     saveBtn.addEventListener("click", saveClicked => {
                //         const userId = document.querySelector(".edit-userid").value;
                //         const ref = firebase.database().ref().child("users/" + userId);
                //         let editObj = {};
                //         const editInputValue = document.querySelectorAll(".edit-user-input");
                //         editInputValue.forEach(function (textField) {
                //             let key = textField.getAttribute("data-key");
                //             let val = textField.value;
                //             editObj[key] = val;
                //         })
                //         ref.update(editObj, function () {
                //             console.log("user has been updated successfully");
                //         })
                //         document.getElementById('edit-user-module').style.display = "none";
                //     })
                // })
                // function userClicked(e) {
                //     var userId = e.target.getAttribute("child-key");
                //     const userRef = firebase.database().ref().child("users/" + userId);
                //     const userDetail = document.getElementById("userDetail");
                //     userDetail.innerHTML = "";
                //     userRef.on("child_added", snap => {
                //         var p = document.createElement("p");
                //         p.innerHTML = snap.key + " - " + snap.val();
                //         userDetail.appendChild(p);
                //     })
                // }
                // const addUser = document.getElementById("add-user-btn");
                // addUser.addEventListener("click", addUser => {
                //     const userRef = firebase.database().ref().child("users");
                //     var addUserInput = document.getElementsByClassName("user-input");
                //     let newUser = {};
                //     for (let i = 0; i < addUserInput.length; i++) {
                //         let key = addUserInput[i].getAttribute("data-key");
                //         let val = addUserInput[i].value;
                //         newUser[key] = val;
                //     }
                //     userRef.push(newUser, () => { console.log("Data inserted successfully") })
                // })

            }
            else {
                document.getElementById("head").innerHTML = "Welcome " + username;
                document.getElementById("para").innerHTML = "Your email address is " + email;
                document.getElementById("table-div").innerHTML = "";
            }
        });
    }
});
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
                    });
                    window.location = "../SignIn/signin.html"
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
                text: error.message,
                icon: "warning",
                button: "Ok",
            });
        });
}
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
                text: error.message,
                icon: "warning",
                button: "Ok",
            });
        });
}

//news
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
    selector.innerHTML = selectorData.sources.map(src => `<option value="${src.id}">${src.name}</option>`).join("\n");
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
function f1(a)
{
    //console.log(completeRecord);
    //console.log(a);
var current=completeRecord.filter(item=>item.userid==a);
console.log(current);

}