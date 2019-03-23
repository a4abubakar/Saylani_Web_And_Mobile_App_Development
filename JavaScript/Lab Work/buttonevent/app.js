var mainDiv = document.getElementById("todo");
var button = document.createElement("button");
button.setAttribute("id", "show");
button.setAttribute("class", "btn");
button.setAttribute("onClick", "clickMe()");
var butText = document.createTextNode("Click Me");
button.appendChild(butText);
mainDiv.appendChild(button);
function clickMe()
{
    document.getElementById("show").style.display="none";
    var p = document.createElement("p");
    p.setAttribute("id", "p");
    var pText = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla veritatis unde, nostrum incidunt aliquid explicabo vitae officia quis magnam rem, rerum voluptatem ea beatae, non iste dolores quo dolorem.");
    var a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("onClick", "lessText()");
    var aText = document.createTextNode("Less");
    p.appendChild(pText);
    a.appendChild(aText);
    p.appendChild(a);
    mainDiv.appendChild(p);
}
function lessText()
{
    document.getElementById('p').style.display="none";
    document.getElementById("show").style.display="block";
}