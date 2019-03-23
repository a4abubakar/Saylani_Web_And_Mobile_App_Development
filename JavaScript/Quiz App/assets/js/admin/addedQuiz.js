var config = {
    apiKey: "AIzaSyC1jDruLzU21dmT12s59Cz6iauVaVkHxv8",
    authDomain: "quiz-app6727.firebaseapp.com",
    databaseURL: "https://quiz-app6727.firebaseio.com",
    projectId: "quiz-app6727",
    storageBucket: "quiz-app6727.appspot.com",
    messagingSenderId: "195207357496"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
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
    document.getElementById("new-div").style.display = "block";
    firebase.database().ref("quiz/").once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            let a = key;
            console.log(a)
            for (var key2 in data[key]) {
                console.log(key2);
                document.getElementById("new-div").innerHTML +=
                    `
                    <div style="text-align:center; font-weight: bold;">${a}</div>
                    <ul class="list-group">
                    <li class="list-group-item">${key2}<button class="btn btn-outline-success my-2 my-sm-0" type="submit" quizName=${a} quizSubName=${key2} onClick="showQuestion(this)">Show</button></li>
                    </ul>
                `
            }
        }
    })
})


function showQuestion(e) {
    document.getElementById("quiz").innerHTML = "Added Questions";
    document.getElementById("new-div").style.display = "none";
    document.getElementById("que-div").style.display = "block";
    let quizName = e.getAttribute("quizName");
    let quizSubName = e.getAttribute("quizSubName");
    firebase.database().ref(`quiz/${quizName}/${quizSubName}/questions`).once("value", snap => {
        let data = snap.val();
        for (var key in data) {
            console.log(key);
            console.log(data[key].question);
            document.getElementById("que-div").innerHTML +=
                `
            <div>
            <textarea id="question" readonly>${data[key].question}</textarea></br>
    
            <input type="radio" for="option1" value="${data[key].option1}"><label id="option1">${data[key].option1}</label><br>
            <input type="radio" for="option2" value="${data[key].option2}"><label id="option2">${data[key].option2}</label><br>
            <input type="radio" for="option3" value="${data[key].option3}"><label id="option3">${data[key].option3}</label><br>
            <input type="radio" for="option4" value="${data[key].option4}"><label id="option4">${data[key].option4}</label>
            <button name=${quizName} subName=${quizSubName} queKey="${key}" onClick="delQuestion(this)">Delete</button>
         </div><br/>
    
            `
        }
    })
}

function delQuestion(e) {
    let queKey = e.getAttribute("queKey");
    let quizName = e.getAttribute("name");
    let quizSubName = e.getAttribute("subName");
    firebase.database().ref(`quiz/${quizName}/${quizSubName}/questions/${queKey}`).remove();
    location.reload();
}

function signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }));
        window.location = "../../pages/admin/adminLogin.html";
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