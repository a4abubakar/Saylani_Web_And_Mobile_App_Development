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
            // console.log(a)
            for (var key2 in data[key]) {
                // console.log(key2);
                document.getElementById("new-div").innerHTML +=
                    `
                    <br/>
                    <div style="text-align:center; font-weight: bold;">${a}</div>
                    <ul class="list-group">
                    <li class="list-group-item">${key2}<button class="btn btn-outline-success my-2 my-sm-0" type="submit" quizName=${a} quizSubName=${key2} onClick="showDetail(this)">Join</button></li>
                    </ul>
                `
            }
        }
    })
})

function showDetail(e) {
    document.getElementById("new-div").style.display = "none";
    document.getElementById("quiz").innerHTML = "Quiz Detail";
    document.getElementById("detail-div").style.display = "block";
    let quizName = e.getAttribute("quizName");
    let quizSubName = e.getAttribute("quizSubName");
    firebase.database().ref(`quiz/${quizName}/${quizSubName}/quizDetail`).once("value", snap => {
        console.log(snap.val())
        let data = snap.val();
        // console.log(data.description)
        document.getElementById("detail-div").innerHTML +=
            `
            <div style="text-align:center">
                <p>Quiz Name : ${data.quizName}</p>
                <p>Quiz Sub Name : ${data.quizSubName}</p>
                <p>Description : ${data.description}</p>
                <p>Duration : ${data.duration}</p>
                <p>Total Marks : ${data.totalMarks}</p>
                <p>Passing Marks : ${data.passingMarks}</p>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" name=${quizName} subName=${quizSubName} onClick="showQuestion(this)">Start Quiz</button>
            </div1>
        `
    })
}

function showQuestion(e) {
    let quizName = e.getAttribute("name");
    let quizSubName = e.getAttribute("subName");
    var questions = [];
    var count = 0;
    // getdata()
    // function getdata() {
    //     // var uid = firebase.auth().currentUser.uid;
    //     firebase.database().ref(`quiz/${quizName}/${quizSubName}/questions`).on('child_added', (data) => {
    //         console.log(data.val())
    //         questions.push(data.val())
    //     })
    // }
    swal({
        content: {
            element: "input",
            attributes: {
                placeholder: "Enter Proctoring Key",
                type: "password",
            },
        },
        closeOnClickOutside: false,
        closeOnEsc: false,
    }).then((success) => {
        console.log(success)
        firebase.database().ref(`quiz/${quizName}/${quizSubName}/quizDetail`).once("value", snap => {
            let data = snap.val();
            console.log(data.proctoringKey)
            // for(var key in queData){
            //     console.log(key)
            // }
            // console.log(queData.description);
            if (success === data.proctoringKey.toString()) {
                document.getElementById("quiz").innerHTML = "Quiz";
                document.getElementById("detail-div").style.display = "none";
                document.getElementById("que-div").style.display = "block";
                firebase.database().ref(`quiz/${quizName}/${quizSubName}/questions`).once("child_added", snap => {
                    let queData = snap.val();
                    questions.push(queData);
                    console.log(questions);
                    document.getElementById("que-div").innerHTML =
                        `  <div>
                        <textarea id="question" readonly>${questions[count].question}</textarea></br>                
                        <input type="radio" for="option1" value="${questions[count].option1}"><label id="option1">${questions[count].option1}</label><br>
                        <input type="radio" for="option2" value="${questions[count].option2}"><label id="option2">${questions[count].option2}</label><br>
                        <input type="radio" for="option3" value="${questions[count].option3}"><label id="option3">${questions[count].option3}</label><br>
                        <input type="radio" for="option4" value="${questions[count].option4}"><label id="option4">${questions[count].option4}</label>
                        <button name=${quizName} subName=${quizSubName} number=${count} onClick="nextQuestion(this)">Next</button>
                     </div><br/>
                     `
                    // for (var key in queData) {
                    //     console.log(key);
                    //     console.log(queData[key].question);
                    //     document.getElementById("que-div").innerHTML +=
                    //         `
                    //     <div>
                    //     <textarea id="question" readonly>${queData[key].question}</textarea></br>                
                    //     <input type="radio" for="option1" value="${queData[key].option1}"><label id="option1">${queData[key].option1}</label><br>
                    //     <input type="radio" for="option2" value="${queData[key].option2}"><label id="option2">${queData[key].option2}</label><br>
                    //     <input type="radio" for="option3" value="${queData[key].option3}"><label id="option3">${queData[key].option3}</label><br>
                    //     <input type="radio" for="option4" value="${queData[key].option4}"><label id="option4">${queData[key].option4}</label>
                    //     <button name=${quizName} subName=${quizSubName} queKey="${key}" onClick="delQuestion(this)">Next</button>
                    //  </div><br/>
                    //     `
                    // }
                })
            }
            else {
                console.log("failed")
            }
        })
    })
}

function nextQuestion(e) {
    var questions = [];
    let quizName = e.getAttribute("name");
    let quizSubName = e.getAttribute("subName");
    let count = e.getAttribute("number");
    count = Number(count) + 1;
    firebase.database().ref(`quiz/${quizName}/${quizSubName}/questions`).once("child_added", snap => {
        let queData = snap.val();
        console.log(queData)
        // questions.push(queData);
        // console.log(questions);
        // document.getElementById("que-div").innerHTML =
        //     `  <div>
        //     <textarea id="question" readonly>${questions[count].question}</textarea></br>                
        //     <input type="radio" for="option1" value="${questions[count].option1}"><label id="option1">${questions[count].option1}</label><br>
        //     <input type="radio" for="option2" value="${questions[count].option2}"><label id="option2">${questions[count].option2}</label><br>
        //     <input type="radio" for="option3" value="${questions[count].option3}"><label id="option3">${questions[count].option3}</label><br>
        //     <input type="radio" for="option4" value="${questions[count].option4}"><label id="option4">${questions[count].option4}</label>
        //     <button name=${quizName} subName=${quizSubName} number=${count} onClick="nextQuestion(this)">Next</button>
        //  </div><br/>
        //  `
    })

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