var config = {
  apiKey: "AIzaSyBokDEVI_D7CU2PCq0x18lCvgTaf3SZH9c",
  authDomain: "crs-6727.firebaseapp.com",
  databaseURL: "https://crs-6727.firebaseio.com",
  projectId: "crs-6727",
  storageBucket: "crs-6727.appspot.com",
  messagingSenderId: "585664159617"
};
firebase.initializeApp(config);

function signUp() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let dob = document.getElementById("dob").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  let enroll_no = document.getElementById("enroll_no").value;
  let age = document.getElementById("age").value;
  let education = document.getElementById("education").value;
  let gender = document.getElementById("gender").value;
  let image = document.getElementById("image").files[0];
  let password = document.getElementById("password").value;
  document.getElementById("loaders").style.display = "block";
  if (username == "" && username == " ") {
    document.getElementById('nameErr').innerHTML = "Name is Required";
    return false
  }
  if (username.length <= 2 || username.length > 20) {
    document.getElementById('nameErr').innerHTML = "Enter Full Name Between 3 to 20 Characters";
    return false
  }
  if (!isNaN(username)) {
    document.getElementById('nameErr').innerHTML = "Enter only Characters";
    return false
  }
  if (email == "" && email == " ") {
    document.getElementById('emailErr').innerHTML = "Email is Required";
    return false
  }
  var reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (reg.test(email) === false) {
    document.getElementById('emailErr').innerHTML = "Invalid Email Address";
    return false
  }
  if (dob == "" && dob == " ") {
    document.getElementById('dobErr').innerHTML = "DOB is Required";
    return false
  }
  if (password == "" && password == " ") {
    document.getElementById('passErr').innerHTML = "password is Required";
    return false
  }
  if (password.length <= 5 || password.length > 11) {
    document.getElementById('passErr').innerHTML = "Enter Password atleast 6 to 12 Characters or digits";
    return false
  }
  if (number == "" && number == " ") {
    document.getElementById('numErr').innerHTML = "Contact Number is required";
    return false
  }
  if (isNaN(number)) {
    document.getElementById('numErr').innerHTML = "Enter Only Numbers";
    return false
  }
  if (number.length != 11) {
    document.getElementById('numErr').innerHTML = "Enter Correct Mobile Number must be 11 digit";
    return false
  }
  if (age == "" && age == " ") {
    document.getElementById('ageErr').innerHTML = "Age is required";
    return false
  }
  if (isNaN(age)) {
    document.getElementById('ageErr').innerHTML = "Enter Only Numbers";
    return false
  }
  if (enroll_no == "" && enroll_no == " ") {
    document.getElementById('enrolErr').innerHTML = "Enrollment Number is required";
    return false
  }
  if (isNaN(enroll_no)) {
    document.getElementById('enrolErr').innerHTML = "Enter Only Numbers";
    return false
  }
  if (gender == "Gender") {
    document.getElementById('genErr').innerHTML = "Please Select Gender";
    return false
  }
  if (image == "") {
    document.getElementById('picerr').innerHTML = "Please Select Your Picture";
    return false
  }
  if (education == "" && education == " ") {
    document.getElementById('eduErr').innerHTML = "Enter Your Education";
    return false
  }
  if (address == "" && address == " ") {
    document.getElementById('addErr').innerHTML = "Enter Your Complete Address";
    return false
  }
  else {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        let obj = {
          username,
          email,
          dob,
          number,
          address,
          enroll_no,
          age,
          education,
          gender,
          image,
          createTime: firebase.database.ServerValue.TIMESTAMP
        };
        let UID = firebase.auth().currentUser.uid;
        let storageRef = firebase.storage().ref().child(`userimages/${image.name}`)
        storageRef.put(image)
          .then((snap) => {
            snap.ref.getDownloadURL().then((snapUrl) => {
              obj.image = snapUrl;
              firebase.database().ref("students/" + UID).set(obj)
                .then((success) => {
                  document.getElementById("loaders").style.display = "none";
                  swal({
                    title: "Welcome",
                    text: "Account Created",
                    icon: "success",
                    button: "Done"
                  }).then(() => {
                    document.getElementById("username").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("dob").value = "";
                    document.getElementById("number").value = "";
                    document.getElementById("address").value = "";
                    document.getElementById("enroll_no").value = "";
                    document.getElementById("age").value = "";
                    document.getElementById("education").value = "";
                    document.getElementById("gender").value = "";
                    document.getElementById("image").value = "";
                    document.getElementById("password").value = "";
                    setTimeout(() => {
                      window.location = "../../pages/student/studentSignIn.html";
                    }, 2000)
                  })
                })
            })
          })
      })
      .catch((error) => {
        document.getElementById("loaders").style.display = "none";
        swal({
          title: "Error",
          text: error.message,
          icon: "warning",
          button: "Ok",
        });
      })
  }
}

function signIn() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  document.getElementById("loaders").style.display = "block";
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((success) => {
      document.getElementById("loaders").style.display = "none";
      localStorage.setItem("authentication", JSON.stringify(success));
      window.location = "../../pages/student/Home.html";
    })
    .catch((error) => {
      document.getElementById("loaders").style.display = "none";
      swal({
        title: "Error",
        text: error.message,
        icon: "warning",
        button: "Ok"
      });
    });
}
