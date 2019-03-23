var mainDiv = document.getElementById("tictac");

var backBox = document.createElement("div");
backBox.setAttribute("id", "backBox");
backBox.setAttribute("class", "back-box");

var box1 = document.createElement("div");
box1.setAttribute("id", "box1");
box1.setAttribute("class", "box1Div");
box1.setAttribute("onClick", "boxFunc('box1Div');");

var box2 = document.createElement("div");
box2.setAttribute("id", "box2");
box2.setAttribute("class", "box2Div");
box2.setAttribute("onClick", "boxFunc('box2Div');");

var box3 = document.createElement("div");
box3.setAttribute("id", "box3");
box3.setAttribute("class", "box3Div");
box3.setAttribute("onClick", "boxFunc('box3Div');");

var box4 = document.createElement("div");
box4.setAttribute("id", "box4");
box4.setAttribute("class", "box4Div");
box4.setAttribute("onClick", "boxFunc('box4Div');");

var box5 = document.createElement("div");
box5.setAttribute("id", "box5");
box5.setAttribute("class", "box5Div");
box5.setAttribute("onClick", "boxFunc('box5Div');");

var box6 = document.createElement("div");
box6.setAttribute("id", "box6");
box6.setAttribute("class", "box6Div");
box6.setAttribute("onClick", "boxFunc('box6Div');");

var box7 = document.createElement("div");
box7.setAttribute("id", "box7");
box7.setAttribute("class", "box7Div");
box7.setAttribute("onClick", "boxFunc('box7Div');");

var box8 = document.createElement("div");
box8.setAttribute("id", "box8");
box8.setAttribute("class", "box8Div");
box8.setAttribute("onClick", "boxFunc('box8Div');");

var box9 = document.createElement("div");
box9.setAttribute("id", "box9");
box9.setAttribute("class", "box9Div");
box9.setAttribute("onClick", "boxFunc('box9Div');");

var first_user;
var second_user;
var x_Array = [];
var o_Array = [];

function first_input() {
    swal({
        text: "Please enter first player name from X or O",
        content: "input",
        button: {
            text: "Next",
            closeModal: false,
        },
    })
        .then(function (value) {
            var x = "X";
            var o = "O";
            if (value !== null && value !== "" && value !== " " && value.toUpperCase() === x || value.toUpperCase() === o) {
                swal({
                    text: "The first turn is of Player " + value.toUpperCase(),
                    button: {
                        text: "Next",
                        closeModal: true,
                    },
                })
                    .then(function () {
                        first_user = value.toUpperCase();
                        for (var i = 0; i < 4; i++) {
                            if (first_user === "X") {
                                x_Array.push(first_user);
                            }
                            else {
                                o_Array.push(first_user);
                            }
                        }
                        second_input();
                    })
            }
            else {
                swal({
                    text: "Please enter a player name from X or 0",
                    button: {
                        text: "Go",
                        closeModal: true,
                    },
                })
                    .then(function () {
                        first_input();
                    })
            }
        })
        .catch(function (error) {
            first_input();
        })
}
first_input();

function second_input() {
    swal({
        text: "Please enter second player name from X or O",
        content: "input",
        button: {
            text: "Next",
            closeModal: false,
        },
    })
        .then(function (value) {
            var x = "X";
            var o = "O";
            if (value !== null && value !== "" && value !== " " && value.toUpperCase() === x || value.toUpperCase() === o) {
                swal({
                    text: "The second turn is of player" + value.toUpperCase(),
                    button: {
                        text: "Next",
                        closeModal: true,
                    },
                })
                    .then(function () {
                        second_user = value.toUpperCase();
                        for (var i = 0; i < 4; i++) {
                            if (second_user === "O") {
                                o_Array.push(second_user);
                            }
                            else {
                                x_Array.push(second_user);
                            }
                        }
                        startGame();
                    })
            }
            else {
                swal({
                    text: "Please enter a player name from X or 0",
                    button: {
                        text: "Go",
                        closeModal: true,
                    },
                })
                    .then(function () {
                        second_input();
                    })
            }
        })
        .catch(function (error) {
            second_input();
        })
}

var playerDiv = document.getElementById("sweetDiv");
playerDiv.setAttribute("class", "sweetDiv");
var player = document.createElement("h3");
player.setAttribute("id", "player-line");
player.setAttribute("class", "player");

var fillingArray = [];

function startGame() {
    if (first_user === "X") {
        for (var i = 0; i < x_Array.length; i++) {
            fillingArray.push(x_Array[i]);
            if (x_Array[i] !== o_Array[i]) {
                fillingArray.push(o_Array[i]);
            }
        }
    }
    else {
        for (var i = 0; i < o_Array.length; i++) {
            fillingArray[i].push(o_Array[i]);
            if (o_Array[i] !== x_Array[i]) {
                fillingArray.push(x_Array[i]);
            }
        }
    }
    backBox.appendChild(box1);
    backBox.appendChild(box2);
    backBox.appendChild(box3);
    backBox.appendChild(box4);
    backBox.appendChild(box5);
    backBox.appendChild(box6);
    backBox.appendChild(box7);
    backBox.appendChild(box8);
    backBox.appendChild(box9);

    var txt = "Player " + first_user + " turn";
    var h3txt = document.createTextNode(txt);
    player.appendChild(h3txt);
    playerDiv.appendChild(player);

    mainDiv.appendChild(backBox);
}

var count1 = 0;
function boxFunc(id) {
    document.getElementById(id).removeAttribute('onClick');

    if ((document.getElementById("box1").innerText === document.getElementById("box2").innerText) &&
        (document.getElementById("box3").innerText === document.getElementById("box2").innerText) &&
        document.getElementById("box1").innerText != "" && document.getElementById("box2").innerText != "" &&
        document.getElementById("box3").innerText != "" ||
        document.getElementById("box4").innerText === document.getElementById("box5").innerText &&
        document.getElementById("box6").innerText === document.getElementById("box4").innerText &&
        document.getElementById("box4").innerText != "" && document.getElementById("box5").innerText != "" &&
        document.getElementById("box6").innerText != "" ||
        document.getElementById("box7").innerText === document.getElementById("box8").innerText &&
        document.getElementById("box9").innerText === document.getElementById("box7").innerText &&
        document.getElementById("box7").innerText != "" && document.getElementById("box8").innerText != "" &&
        document.getElementById("box9").innerText != "" ||
        document.getElementById("box1").innerText === document.getElementById("box5").innerText &&
        document.getElementById("box9").innerText === document.getElementById("box1").innerText &&
        document.getElementById("box1").innerText != "" && document.getElementById("box5").innerText != "" &&
        document.getElementById("box9").innerText != "" ||
        document.getElementById("box3").innerText === document.getElementById("box5").innerText &&
        document.getElementById("box7").innerText === document.getElementById("box3").innerText &&
        document.getElementById("box3").innerText != "" && document.getElementById("box5").innerText != "" &&
        document.getElementById("box7").innerText != "" ||
        document.getElementById("box1").innerText === document.getElementById("box4").innerText &&
        document.getElementById("box7").innerText === document.getElementById("box1").innerText &&
        document.getElementById("box1").innerText != "" && document.getElementById("box4").innerText != "" &&
        document.getElementById("box7").innerText != "" ||
        document.getElementById("box2").innerText === document.getElementById("box5").innerText &&
        document.getElementById("box8").innerText === document.getElementById("box2").innerText &&
        document.getElementById("box2").innerText != "" && document.getElementById("box5").innerText != "" &&
        document.getElementById("box8").innerText != "" ||
        document.getElementById("box3").innerText === document.getElementById("box6").innerText &&
        document.getElementById("box9").innerText === document.getElementById("box3").innerText &&
        document.getElementById("box3").innerText != "" && document.getElementById("box6").innerText != "" &&
        document.getElementById("box9").innerText != "") {
        if (first_user === "X") {

            swal("Player X wins")
                .then(function () {
                    location = './index.html'
                });
        }
        else {
            swal("Player Y wins")
                .then(function () {
                    location = './index.html'
                })
        }
        count1 = 1;
    }

    if (count1 === 0 && document.getElementById("box1").innerText != ""
        && document.getElementById("box2").innerText != "" && document.getElementById("box3").innerText != "" &&
        document.getElementById("box4").innerText != "" && document.getElementById("box5").innerText != "" &&
        document.getElementById("box6").innerText != "" && document.getElementById("box7").innerText != "" &&
        document.getElementById("box8").innerText != "" && document.getElementById("box9").innerText != "") {

        swal("Match draw!", "press restart to play again", {
            buttons: {
                Restart: true,
            },
        })
            .then(function () {
                location = './index.html'
            })
    }
    checkPlayer(succeedTry);
    createSequence(box);
}

var userTry = 0;
function comaparing(box) {
    var succeedTry;
    if (userTry > 7) {
        swal({
            text: "Match Tied",
            button: {
                text: "Play Again",
                closeModal: true,
            }
        })
            .then(function () {
                location = "./index.html";
            })
    }
    else {
        box.style.background = "yellow";
        succeedTry = fillingArray[userTry];
        var span = document.createElement("span");
        span.setAttribute("class", "spans");
        var tried = document.createTextNode(succeedTry);
        span.appendChild(tried);
        box.appendChild(span);
    }
    userTry++;
    
}

function checkPlayer(test) {
    if (test === "X") {
        var text = "Player X turn";
        document.getElementById("player-line").textContent = text;
    }
    else if (test === "O") {
        var text = "Player O turn";
        document.getElementById("player-line").textContent = text;
    }
}