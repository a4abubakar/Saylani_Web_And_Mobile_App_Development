var config = {
    apiKey: "AIzaSyBokDEVI_D7CU2PCq0x18lCvgTaf3SZH9c",
    authDomain: "crs-6727.firebaseapp.com",
    databaseURL: "https://crs-6727.firebaseio.com",
    projectId: "crs-6727",
    storageBucket: "crs-6727.appspot.com",
    messagingSenderId: "585664159617"
};
firebase.initializeApp(config);

window.addEventListener("load", async function loader() {
    await addVacancy();
})

async function addVacancy() {
    await firebase.auth().onAuthStateChanged(function (user) {
        if (user === null || user === "undefined" || user === "") {
            swal({
                title: 'you are logout...',
                showConfirmButton: false,
                padding: "1em"
            })

            setTimeout(() => {
                location = '../../index.html'
            }, 1500)
        }
        else if (user) {
            let jobType = document.getElementById("job-type").value;
            let designation = document.getElementById("designation").value;
            let description = document.getElementById("description").value;
            let salary = document.getElementById("salary").value;
            document.getElementById("loaders").style.display = "block";
            if (jobType == "job-type") {
                document.getElementById('jobErr').innerHTML = "Job Type is Required";
                document.getElementById("loaders").style.display = "none";
                return false
            }
            if (salary == "" && salary == " ") {
                document.getElementById('salErr').innerHTML = "Salary is required";
                document.getElementById("loaders").style.display = "none";
                return false
            }
            if (isNaN(salary)) {
                document.getElementById('salErr').innerHTML = "Enter Only Numbers";
                document.getElementById("loaders").style.display = "none";
                return false
            }
            if (designation == "" && designation == " ") {
                document.getElementById('desgErr').innerHTML = "Please Enter Designation";
                document.getElementById("loaders").style.display = "none";
                return false
            }
            if (description == "" && description == " ") {
                document.getElementById('descErr').innerHTML = "Please Enter Description";
                document.getElementById("loaders").style.display = "none";
                return false
            }
            let obj = {
                jobType,
                designation,
                description,
                salary,
                createTime: firebase.database.ServerValue.TIMESTAMP
            };
            firebase.database().ref(`vacancy/${user.uid}`).push(obj)
                .then((success) => {
                    document.getElementById("loaders").style.display = "none";
                    swal({
                        title: "Succeed",
                        text: "Vacancy Addeed",
                        icon: "success",
                        button: "Done"
                    }).then(() => {
                        document.getElementById("job-type").value = "";
                        document.getElementById("designation").value = "";
                        document.getElementById("description").value = "";
                        document.getElementById("salary").value = "";
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
    })
}


function signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.setItem("authentication", JSON.stringify({ user: 'null' }));
        window.location = "../../pages/company/companySignIn.html";
    })
        .catch((error) => {
            swal({
                title: "Error",
                text: errorMessage,
                icon: "warning",
                button: "Ok",
            });
        });
}