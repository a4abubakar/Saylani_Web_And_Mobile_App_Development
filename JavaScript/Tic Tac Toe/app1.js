var check1 = true;
function box1Func() {
    if (check1) {
        comaparing(box1);
        check1 = false;
    }
    else {
        alert("You can click at one time only");
    }
}

var check2 = true;
function box2Func() {
    if (check2) {
        comaparing(box2);
        check2 = false;
    }
    else {
        alert("You can click at one time only");
    }
}

var check3 = true;
function box3Func() {
    if (check3) {
        comaparing(box3);
        check3 = false;
    }
    else {
        alert("You can click at one time only");
    }
}

var check4 = true;
function box4Func() {
    if (check4) {
        comaparing(box4);
        check4 = false;
    }
    else {
        alert("You can click at one time only");
    }
}

var check5 = true;
function box5Func() {
    if (check5) {
        comaparing(box5);
        check5 = false;
    }
    else {
        alert("You can click at one time only");
    }
}

var check6 = true;
function box6Func() {
    if (check6) {
        comaparing(box6);
        check6 = false;
    }
    else {
        alert("You can click at one time only");
    }
}

var check7 = true;
function box7Func() {
    if (check7) {
        comaparing(box7);
        check7 = false;
    }
    else {
        alert("You can click at one time only");
    }
}

var check8 = true;
function box8Func() {
    if (check8) {
        comaparing(box8);
        check8 = false;
    }
    else {
        alert("You can click at one time only");
    }
}

var check9 = true;
function box9Func() {
    if (check9) {
        comaparing(box9);
        check9 = false;
    }
    else {
        alert("You can click at one time only");
    }
}

var box1Value
var box2Value
var box3Value
var box4Value
var box5Value
var box6Value
var box7Value
var box8Value
var box9Value

function createSequance(box) {
    var cases = box.getAttribute("class");
    switch (cases) {
        case 'box1': {
            if (box.childNodes[0] !== undefined) {
                var span = box.childNodes[0].childNodes[0]
                box1Value = span.nodeValue
                break;
            }
        }
        case 'box2': {
            if (box.childNodes[0] !== undefined) {
                var span = box.childNodes[0].childNodes[0]
                box2Value = span.nodeValue
                break;
            }
        }
        case 'box3': {
            if (box.childNodes[0] !== undefined) {
                var span = box.childNodes[0].childNodes[0]
                box3Value = span.nodeValue
                break;
            }
        }
        case 'box4': {
            if (box.childNodes[0] !== undefined) {
                var span = box.childNodes[0].childNodes[0]
                box4Value = span.nodeValue
                break;
            }
        }
        case 'box5': {
            if (box.childNodes[0] !== undefined) {
                var span = box.childNodes[0].childNodes[0]
                box5Value = span.nodeValue
                break;
            }
        }
        case 'box6': {
            if (box.childNodes[0] !== undefined) {
                var span = box.childNodes[0].childNodes[0]
                box6Value = span.nodeValue
                break;
            }
        }
        case 'box7': {
            if (box.childNodes[0] !== undefined) {
                var span = box.childNodes[0].childNodes[0]
                box7Value = span.nodeValue
                break;
            }
        }
        case 'box8': {
            if (box.childNodes[0] !== undefined) {
                var span = box.childNodes[0].childNodes[0]
                box8Value = span.nodeValue
            }
            break;
        }
        case 'box9': {
            if (box.childNodes[0] !== undefined) {
                var span = box.childNodes[0].childNodes[0]
                box9Value = span.nodeValue
            }
            break;
        }
        default: { }
    }

    if (box1Value !== undefined && box2Value !== undefined && box3Value !== undefined && box1Value === box2Value && box2Value === box3Value && box3Value === box1Value) {
        swal({
            text: "User " + box1Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function () {
                location = './index.html'
            })
    }
    else if (box4Value !== undefined && box5Value !== undefined && box6Value !== undefined && box4Value === box5Value && box5Value === box6Value && box4Value === box6Value) {
        swal({
            text: "User " + box5Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function () {
                location = './index.html'
            })
    }
    else if (box7Value !== undefined && box8Value !== undefined && box9Value !== undefined && box7Value === box8Value && box8Value === box9Value && box7Value === box9Value) {
        swal({
            text: "User " + box8Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function () {
                location = './index.html'
            })
    }
    else if (box1Value !== undefined && box4Value !== undefined && box7Value !== undefined && box1Value === box4Value && box4Value === box7Value && box1Value === box7Value) {
        swal({
            text: "User " + box4Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function () {
                location = './index.html'
            })
    }
    else if (box2Value !== undefined && box5Value !== undefined && box8Value !== undefined && box2Value === box5Value && box5Value === box8Value && box2Value === box8Value) {
        swal({
            text: "User " + box5Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function () {
                location = './index.html'
            })
    }
    else if (box3Value !== undefined && box6Value !== undefined && box9Value !== undefined && box3Value === box6Value && box6Value === box9Value && box3Value === box9Value) {
        swal({
            text: "User " + box6Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function () {
                location = './index.html'
            })
    }
    else if (box1Value !== undefined && box5Value !== undefined && box9Value !== undefined && box1Value === box5Value && box5Value === box9Value && box1Value === box9Value) {
        swal({
            text: "User " + box9Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function () {
                location = './index.html'
            })
    }
    else if (box3Value !== undefined && box5Value !== undefined && box7Value !== undefined && box3Value === box5Value && box5Value === box7Value && box3Value === box7Value) {
        swal({
            text: "User " + box7Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function () {
                location = './index.html'
            })
    }
}