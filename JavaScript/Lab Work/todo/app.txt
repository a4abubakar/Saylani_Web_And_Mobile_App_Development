var mainDiv = document.getElementById("todo");
var userDiv = document.createElement("div");

var h2 = document.createElement("h2");
var h2Text = document.createTextNode("Todo App");
h2.appendChild(h2Text);
userDiv.appendChild(h2);
mainDiv.appendChild(userDiv);

var input = document.createElement("input");
input.setAttribute("placeholder", "Enter your text");
input.setAttribute("type", "text");
input.setAttribute("id", "todoList");
input.setAttribute("class", "todo-list");
userDiv.appendChild(input);
mainDiv.appendChild(userDiv);

var button = document.createElement("button");
button.setAttribute("onClick", "addWork();");
button.setAttribute("class", "btn");
var buttonText = document.createTextNode("Add Work");
button.appendChild(buttonText);
userDiv.appendChild(button);
mainDiv.appendChild(userDiv);

var listDiv = document.createElement("div");
listDiv.setAttribute("class", "list-box");
var ul = document.createElement("ul");

function addWork()
{
    var addTodo =document.getElementById("todoList").value;
    var li = document.createElement("li");
    var liText = document.createTextNode(addTodo);

    var buttonLi = document.createElement("button");
    buttonLi.setAttribute("class", "btnLi");
    var buttonLiText = document.createTextNode("Delete");

    li.appendChild(liText);
    buttonLi.appendChild(buttonLiText);
    li.appendChild(buttonLi);
    ul.appendChild(li);
}