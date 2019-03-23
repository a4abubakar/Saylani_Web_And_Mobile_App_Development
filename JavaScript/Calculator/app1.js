var a, b, result;
function setValues()
{
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
}
function add()
{
    setValues();
    result = a + b;
    alert("The addition of " + a + " and " + b + " is : " + result);
}
function subtract()
{
    setValues();
    result = a - b;
    alert("The subtraction of " + a + " and " + b + " is : " + result);
}
function multiply()
{
    setValues();
    result = a * b;
    alert("The multiplication of " + a + " and " + b + " is : " + result);
}
function divide()
{
    setValues();
    result = a / b;
    alert("The division of " + a + " and " + b + " is : " + result);
}
function modulus()
{
    setValues();
    result = a % b;
    alert("The modulus of " + a + " and " + b + " is : " + result);
}
