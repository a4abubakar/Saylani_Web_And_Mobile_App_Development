var config = {
    apiKey: "AIzaSyDubjsdHO7i9bvrA1vzyDdYmd-yXKgZKr0",
    authDomain: "olx-pakistan6727.firebaseapp.com",
    databaseURL: "https://olx-pakistan6727.firebaseio.com",
    projectId: "olx-pakistan6727",
    storageBucket: "olx-pakistan6727.appspot.com",
    messagingSenderId: "151904918691"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
    // console.log(user)
    if (user === null || user === "" || user === undefined) {
        swal({
            title: 'you are logout',
            showConfirmButton: false,
            padding: "1em"
        })

        setTimeout(() => {
            location = '../../index.html'
        }, 500)
    }
})

function sendMessage() {
    let msgTxt = document.getElementById("messageText").value;
    var roomUid = localStorage.getItem('RoomId');
    var adUid = localStorage.getItem('reciverId');
    var adKey = localStorage.getItem('reciverAdId');
    let userUid = firebase.auth().currentUser.uid;
    // console.log(userUid + adUid)
    let key = firebase.database().ref(`chatApp/${roomUid}/${adUid}/${adKey}/`).push().key;
    let time = new Date().toString();
    time = time.slice(0, 24);
    // console.log(time);
    let obj = {
        msgTxt,
        userUid,
        adUid,
        adKey,
        time,
        key
    }
    firebase.database().ref(`chatApp/${roomUid}/${adUid}/${adKey}/${key}`).set(obj) && firebase.database().ref(`chatApp/${adUid}/${roomUid}/${adKey}/${key}`).set(obj)
        .then(() => {
            document.getElementById("messageText").value = "";
        })
}

function gettingMessages() {
    var roomId = localStorage.getItem('RoomId');
    var reciverId = localStorage.getItem('reciverId');
    var reciverAdId = localStorage.getItem('reciverAdId');
    firebase.database().ref(`chatApp/${roomId}/${reciverId}/${reciverAdId}/`).once("value", snap => {
        let data = snap.val();
        console.log(data)
        for (var key in data) {
            // console.log(data[key])
            if (roomId === data[key].userUid) {
                document.getElementById("Main").innerHTML +=
                    `
                <div class="span1">
                <p id="sendMessage">${data[key].msgTxt}
                <br>
                ${data[key].time}
                </p>
               </div>
                `
            }
            else {
                document.getElementById("Main").innerHTML +=
                    `<div class="span1">
                <p id="reciveMessage">${data[key].msgTxt}
                <br>
                ${data[key].time}
                </p>
                </div>`
            }
            var objDiv = document.getElementById("Main");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    })
}

function signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }));
        window.location = "../../index.html";
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