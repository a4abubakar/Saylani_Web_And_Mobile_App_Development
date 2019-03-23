var mainDiv = document.getElementById("game");
mainDiv.setAttribute("class", "main-div")
var heading = document.createElement("h1");
var h1Text = document.createTextNode("Random Number Game");
heading.appendChild(h1Text);
heading.setAttribute("class", "heading");
mainDiv.appendChild(heading);

var table = document.createElement("table");
table.setAttribute("class", "table");
table.setAttribute("id", "tab");

var td1 = document.createElement("td");
td1.setAttribute("id", "td1");
td1.setAttribute("onClick", "td('td1');")
td1.setAttribute("class", "td");

var td2 = document.createElement("td");
td2.setAttribute("id", "td2");
td2.setAttribute("onClick", "td('td2');")
td2.setAttribute("class", "td");

var td3 = document.createElement("td");
td3.setAttribute("id", "td3");
td3.setAttribute("onClick", "td('td3');")
td3.setAttribute("class", "td");

var td4 = document.createElement("td");
td4.setAttribute("id", "td4");
td4.setAttribute("onClick", "td('td4');")
td4.setAttribute("class", "td");

var td5 = document.createElement("td");
td5.setAttribute("id", "td5");
td5.setAttribute("onClick", "td('td5');")
td5.setAttribute("class", "td");

var td6 = document.createElement("td");
td6.setAttribute("id", "td6");
td6.setAttribute("onClick", "td('td6');")
td6.setAttribute("class", "td");

var td7 = document.createElement("td");
td7.setAttribute("id", "td7");
td7.setAttribute("onClick", "td('td7');")
td7.setAttribute("class", "td");

var td8 = document.createElement("td");
td8.setAttribute("id", "td8");
td8.setAttribute("onClick", "td('td8');")
td8.setAttribute("class", "td");

var td9 = document.createElement("td");
td9.setAttribute("id", "td9");
td9.setAttribute("onClick", "td('td9');")
td9.setAttribute("class", "td");

var tr1 = document.createElement("tr");
tr1.setAttribute("class", "tr1");
tr1.setAttribute("id", "tr1");

tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);

table.appendChild(tr1);

var tr2 = document.createElement("tr");
tr2.setAttribute("class", "tr2");
tr2.setAttribute("id", "tr2");

tr2.appendChild(td4);
tr2.appendChild(td5);
tr2.appendChild(td6);

table.appendChild(tr2);

var tr3 = document.createElement("tr");
tr3.setAttribute("class", "tr3");
tr3.setAttribute("id", "tr3");

tr3.appendChild(td7);
tr3.appendChild(td8);
tr3.appendChild(td9);

table.appendChild(tr3);

mainDiv.appendChild(table);

var numberArray = [];
var isCondition = false;
var increament = 0;
function td(id) {
    var tdMembers = document.getElementById(id);
    tdMembers.style.backgroundColor = "blue";
    tdMembers.removeAttribute("onClick");

    var randomNumber = Math.ceil(Math.random() * 10);
    var tdValue = document.createTextNode(randomNumber);
    tdMembers.appendChild(tdValue);
    tdMembers.setAttribute("class", "td");

    numberArray.push(tdMembers.innerText);
    increament++;

    var td = document.getElementsByTagName("td");

    for (var i = 0; i < numberArray.length; i++) {
        for (var j = i; j < numberArray.length; j++) {
            for (var k = 0; k < numberArray.length; k++) {
                if ((i !== j && k !== i && j !== k) && (numberArray[i] === numberArray[j] && numberArray[i] === numberArray[k] &&
                    numberArray[j] === numberArray[k])) {
                    var storingArray = numberArray[j];
                    isCondition = true;
                    alert("You won");
                    for (var i = 0; i < td.length; i++) {
                        document.getElementsByTagName("td")[i].removeAttribute("onClick", "td();");
                        if (storingArray === td[i].innerText) {
                            td[i].style.backgroundColor = "green";
                            td[i].setAttribute("class", "td");
                        }
                    }
                    break;
                }
            }
        }
    }
    if (increament > 8) {
        for (var i = 0; i <= numberArray.length; i++) {
            for (var j = i; j <= numberArray.length; j++) {
                for (var x = 0; x <= numberArray.length; x++) {
                    if ((i != j && i != x && j != x) && (numberArray[i] != numberArray[j] && numberArray[i] != numberArray[x]) && numberArray[j] != numberArray[x]) {
                        increament = 0;
                        var a = 1;
                        break;
                    }
                }
            }
        }
        if (a === 1) {
            alert("Sorry You Loss");
            for (var i = 0; i < td.length; i++) {
                var d = "td" + (i + 1);
                td[i].setAttribute("onClick", "td(" + "'" + d + "'" + ")");
                td[i].setAttribute("class", "td")
                td[i].style.backgroundColor = "yellow";
                td[i].innerText = "";
                numberArray = [];
            }
        }
    }
}