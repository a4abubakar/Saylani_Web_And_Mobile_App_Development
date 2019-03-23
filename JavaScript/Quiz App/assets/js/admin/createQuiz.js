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
})

function addQuiz() {
    let quizName = document.getElementById("quizName").value;
    let quizSubName = document.getElementById("quizSubName").value;
    let duration = document.getElementById("duration").value;
    let totalMarks = document.getElementById("totalMarks").value;
    let passingMarks = document.getElementById("passingMarks").value;
    let description = document.getElementById("description").value;
    let proctoringKey = document.getElementById("proctoring").value;
    let obj = {
        quizName,
        quizSubName,
        duration,
        totalMarks,
        passingMarks,
        proctoringKey,
        description
    };
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref(`quiz/${quizName}/${quizSubName}/quizDetail`).set(obj)
        .then((success) => {
            swal({
                title: "Quiz Added",
                text: "Successed",
                icon: "success",
                button: "Done"
            }).then(() => {
                document.getElementById("quizName").value = "";
                document.getElementById("quizSubName").value = "";
                document.getElementById("duration").value = "";
                document.getElementById("totalMarks").value = "";
                document.getElementById("passingMarks").value = "";
                document.getElementById("description").value = "";
                setTimeout(() => {
                    showQuestionForm(quizName, quizSubName)
                }, 2000)
            })
        })
}

function showQuestionForm(quizName, quizSubName) {
    // console.log(quizName,quizSubName)
    document.getElementById("old-div").style.display = "none";
    document.getElementById("quiz").innerHTML = "Add Question";
    document.getElementById("new-div").style.display = "block";
    document.getElementById("new-div").innerHTML +=
        `
    <div class="container">
            <label for="question"><b>Question</b></label>
            <input type="text" placeholder="Enter Question" id="question" required>
            <label for="option1"><b>Option 1</b></label>
            <input type="text" placeholder="Enter Option 1" id="option1" required>
            <label for="option2"><b>Option 2</b></label>
            <input type="text" placeholder="Enter Option 2" id="option2" required>
            <label for="option3"><b>Option 3</b></label>
            <input type="text" placeholder="Enter Option 3" id="option3" required>
            <label for="option4"><b>Option 4</b></label>
            <input type="text" placeholder="Enter Option 4" id="option4" required>
            <label>Correct Option</label><br />
            <select id="correctOption">
                <option value="Select Option" disabled selected>Select Option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
            </select></br></br>
            <button type="submit" key1=${quizName} key2=${quizSubName} onClick="addQuestion(this)">Add</button>
            <button type="submit" onClick="endQuestion();">Submit</button>
        </div>
    `
}

function addQuestion(e) {
    let quizName = e.getAttribute('key1');
    let quizSubName = e.getAttribute('key2');
    // console.log(quizName,quizSubName)
    let question = document.getElementById("question").value;
    let option1 = document.getElementById("option1").value;
    let option2 = document.getElementById("option2").value;
    let option3 = document.getElementById("option3").value;
    let option4 = document.getElementById("option4").value;
    let correct = document.getElementById("correctOption").value;
    let correctAnswer = document.getElementById(correct).value;
    var key = firebase.database().ref(`quiz/${quizName}/${quizSubName}/questions`).push().key;
    let questionDetail = {
        question,
        option1,
        option2,
        option3,
        option4,
        correctAnswer,
        key
    }
    console.log(questionDetail)
    firebase.database().ref(`quiz/${quizName}/${quizSubName}/questions/${key}`).set(questionDetail)
        .then(() => {
            document.getElementById("question").value = "";
            document.getElementById("option1").value = "";
            document.getElementById("option2").value = "";
            document.getElementById("option3").value = "";
            document.getElementById("option4").value = "";
            document.getElementById("correctOption").value = "";
        })

}

function endQuestion() {
    swal({
        title: "Quetions Added",
        text: "Successed",
        icon: "success",
        button: "Done"
    }).then(() => {
        setTimeout(() => {
            window.location = "../../pages/admin/Home.html";
        }, 2000)
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