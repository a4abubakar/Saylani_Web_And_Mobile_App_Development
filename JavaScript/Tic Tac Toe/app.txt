var player_name = "X";
swal({
    text: "Please select from X and O",
    buttons: {
        catch: {
            text: "O",
            value: "oCatch",
        },
        X: true,
    },
})
    .then(function (value) {
        switch (value) {
            case "X":
                swal("The First Player is X \n\n The Second Player is O");
                player_name = "X";
                break;
            case "oCatch":
                swal("The First Player is O \n\n The Second Player is X");
                player_name = "O";
                break;
            default:
                location = './index.html'
        }
    });

var mainDiv = document.getElementById("tictac");

var backBox = document.createElement("div");
backBox.setAttribute("id", "backBox");
backBox.setAttribute("class", "back-box");

var box1 = document.createElement("div");
box1.setAttribute("id", "box1");
box1.setAttribute("class", "box1Div");
box1.setAttribute("onClick", "boxFunc('box1');");

var box2 = document.createElement("div");
box2.setAttribute("id", "box2");
box2.setAttribute("class", "box2Div");
box2.setAttribute("onClick", "boxFunc('box2');");

var box3 = document.createElement("div");
box3.setAttribute("id", "box3");
box3.setAttribute("class", "box3Div");
box3.setAttribute("onClick", "boxFunc('box3');");

var box4 = document.createElement("div");
box4.setAttribute("id", "box4");
box4.setAttribute("class", "box4Div");
box4.setAttribute("onClick", "boxFunc('box4');");

var box5 = document.createElement("div");
box5.setAttribute("id", "box5");
box5.setAttribute("class", "box5Div");
box5.setAttribute("onClick", "boxFunc('box5');");

var box6 = document.createElement("div");
box6.setAttribute("id", "box6");
box6.setAttribute("class", "box6Div");
box6.setAttribute("onClick", "boxFunc('box6');");

var box7 = document.createElement("div");
box7.setAttribute("id", "box7");
box7.setAttribute("class", "box7Div");
box7.setAttribute("onClick", "boxFunc('box7');");

var box8 = document.createElement("div");
box8.setAttribute("id", "box8");
box8.setAttribute("class", "box8Div");
box8.setAttribute("onClick", "boxFunc('box8');");

var box9 = document.createElement("div");
box9.setAttribute("id", "box9");
box9.setAttribute("class", "box9Div");
box9.setAttribute("onClick", "boxFunc('box9');");

backBox.appendChild(box1);
backBox.appendChild(box2);
backBox.appendChild(box3);
backBox.appendChild(box4);
backBox.appendChild(box5);
backBox.appendChild(box6);
backBox.appendChild(box7);
backBox.appendChild(box8);
backBox.appendChild(box9);

mainDiv.appendChild(backBox);

var count1 = 0;
function boxFunc(id) {
    document.getElementById(id).innerText = player_name;
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
        if (player_name === "X") {

            swal("Player X wins")
                .then(function () {
                    location = './index.html'
                });
        }
        else {
            swal("Player O wins")
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
    if (player_name === "X") {
        player_name = "O";
    }
    else {
        player_name = "X";
    }
}