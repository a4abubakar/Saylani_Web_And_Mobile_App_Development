var a = prompt("Enter a number");
var b = prompt("Enter a number");
var operator = prompt("Enter a operation or trignometric function");
if(operator === "+")
{
    alert("The addition of " + a + " and " + b + " is : " + (parseInt(a)+parseInt(b)));
}
else if(operator === "-")
{
    alert("The subtraction of " + a + " and " + b + " is : " + (parseInt(a)-parseInt(b)));
}
else if(operator === "*")
{
    alert("The multiplication of " + a + " and " + b + " is : " + (parseInt(a)*parseInt(b)));
}
else if(operator === "/")
{
    alert("The division of " + a + " and " + b + " is : " + (parseInt(a)/parseInt(b)));
}
else if(operator === "%")
{
    alert("The modulus of " + a + " and " + b + " is : " + (parseInt(a)%parseInt(b)));
}
else if(operator === "sin")
{
    alert("The sin of " + a +  " is : " + Math.sin(parseInt(a) * Math.PI/180) + "\n" + "The sin of " + b +  " is : " + Math.sin(parseInt(b) * Math.PI/180));
    
}
else if(operator === "cos")
{
    alert("The cos of " + a +  " is : " + Math.cos(parseInt(a) * Math.PI/180) + "\n" + "The cos of " + b +  " is : " + Math.cos(parseInt(b) * Math.PI/180));
}
else if(operator === "tan")
{
    alert("The tan of " + a +  " is : " + Math.tan(parseInt(a) * Math.PI/180) + "\n" + "The tan of " + b +  " is : " + Math.tan(parseInt(b) * Math.PI/180));
}
else
{
    alert("Invalid Operator!!!");
}