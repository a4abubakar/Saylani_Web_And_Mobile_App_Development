function signUp() {
    username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var retPass = document.getElementById("retype-password").value;
    if (username !== "" && username !== " " && password !== "" && password !== " " && email !== "" && email !== " " &&
        retPass !== "" && retPass !== " ") {
        if (password === retPass) {
            var formData = {
                user: username,
                pass: password,
                email_add: email,
                checkPass: retPass
            };
            localStorage.setItem("formInfo", JSON.stringify(formData));
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("email").value = "";
            document.getElementById("retype-password").value = "";
            document.write("Creating New ID Pleas wait..............");
            setTimeout(function () { window.location.replace("Sign-in.html") }, 1500);
        }
        else {
            swal({
                title: "Error",
                text: "Incorrect Password",
                icon: "error",
                button: "OK"
            });
            document.getElementById("password").value = "";
            document.getElementById("retype-password").value = "";
        }
    }
    else {
        swal({
            title: "Error",
            text: "Please Fill All Field",
            icon: "error",
            button: "OK"
        });
    }
}
function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var loginForm = localStorage.getItem("formInfo");
    var loginData = JSON.parse(loginForm);
    if(email === "admin@gmail.com" && password === "admin123"){
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.write("Signing In Pleas wait..............");
        setTimeout(function () { window.location.replace("admin.html") }, 1500);
    }
    else if (email === loginData.email_add && password === loginData.pass) {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.write("Signing In Pleas wait..............");
        setTimeout(function () { window.location.replace("employee.html") }, 1500);
    }
    else {
        swal({
            title: "Error",
            text: "Invalid Email or Password",
            icon: "error",
            button: "OK"
        });
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
}
function sell(){
    document.getElementById("sell").value = "Sold";
}