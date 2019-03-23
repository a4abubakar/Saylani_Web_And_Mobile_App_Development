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

function gettingRooms() {
    var userUid = localStorage.getItem('uid');
    firebase.database().ref("chatApp/" + userUid).once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            firebase.database().ref(`users/${key}`).once("value", snapshot => {
                // console.log(key)
                let userData = snapshot.val();
                // console.log(userData)
                document.getElementById("ChatMain").innerHTML +=
                    `
                <a onClick="gotoRoom(this)" roomId=${userUid} reciverId=${userData.uid} >
                <div class="chatRoom">
                <img src="${userData.image}" width="80px" height="80px;" id="Pic">
                <h1>${userData.username}</h1>
                <h1 id="rightArrow">></h1>	
                </div>
                </a>
                `
            })
        }
    })
}

function gotoRoom(e) {
    var RoomId = e.getAttribute('roomId');
    var reciverId = e.getAttribute('reciverId');
    // console.log(RoomId,reciverId)
    localStorage.setItem("RoomId", RoomId);
    localStorage.setItem("reciverId", reciverId);
    window.location = "./conversationAd.html";
}

function gettingSubRooms() {
    let roomId = localStorage.getItem("RoomId");
    let reciverId = localStorage.getItem("reciverId");
    firebase.database().ref(`users/${reciverId}`).once("value", snap => {
        let data = snap.val();
        // console.log(data.email);
        document.getElementById("MessageBox").innerHTML =
            `
        <div class="container">
                   
        <div class="chatRoom">
       <img src="${data.image}" width="80px" height="80px;" id="Pic">
       <h1>  ${data.username}</h1>
       </div>

      </div><br/>
        `
    })
    firebase.database().ref(`chatApp/${roomId}/${reciverId}`).once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            firebase.database().ref(`allProducts/${key}`).once("value", snapshot => {
                let adData = snapshot.val();
                // console.log(adData.key)
                document.getElementById("ChatMain").innerHTML +=
                    `
                <a onClick="gotoAdRoom(this)" roomId=${roomId} reciverId=${reciverId} reciverAdId=${adData.key}>
                <div class="chatRoom">
                <img src="${adData.image}" width="80px" height="80px;" id="Pic">
                <h1>${adData.Name}</h1>
                <h1 id="rightArrow">></h1>	
                </div>
                </a>
                `
            })
        }
    })
}

function gotoAdRoom(e) {
    var RoomId = e.getAttribute('roomId');
    var reciverId = e.getAttribute('reciverId');
    var reciverAdId = e.getAttribute('reciverAdId');
    // console.log(RoomId,reciverId,reciverAdId);
    localStorage.setItem("RoomId", RoomId);
    localStorage.setItem("reciverId", reciverId);
    localStorage.setItem("reciverAdId", reciverAdId);
    window.location = "./mainConversationAd.html";
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