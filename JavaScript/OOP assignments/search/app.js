var mobilePhone = {
    Samsung: {
        Model: {
            s4: {
                Sim: "Single",
                Display: "4.5 inch",
                Ram: "2 gb",
                Rom: "8 gb",
                CameraF: "2 mpx",
                CameraB: "5 mpx"
            },
            s5: {
                Sim: "Single or Double",
                Display: "5.8 inch",
                Ram: "2.5 gb",
                Rom: "16 gb",
                CameraF: "5 mpx",
                CameraB: "8 mpx"
            },
            s6: {
                Sim: "Single",
                Display: "6.5 inch",
                Ram: "3 gb",
                Rom: "16 or 32 gb",
                CameraF: "8 mpx",
                CameraB: "16 mpx"
            }
        }
    },
    iPhone: {
        Model: {
            i4: {
                Sim: "Single",
                Display: "5 inch",
                Ram: "11.0",
                Rom: "8 gb",
                CameraF: "2 mpx",
                CameraB: "5 mpx"
            },
            i5: {
                Sim: "Double",
                Display: "6 inch",
                Ram: "11.0",
                Rom: "16 gb",
                CameraF: "5 mpx",
                CameraB: "8 mpx"
            },
            i6: {
                Sim: "Single or Double",
                Display: "6.5 inch",
                Ram: "11.0",
                Rom: "16 or 32 gb",
                CameraF: "8 mpx",
                CameraB: "16 mpx"
            }
        }
    }
}
var tableData = document.getElementById("table");
var check = true;
var companyChoice = prompt("Please input from samsung or iphone");
for (var key in mobilePhone) {
    for (var key2 in mobilePhone[key]) {
        if (companyChoice.toUpperCase() === key.toUpperCase()) {
            for (var key3 in mobilePhone[key][key2]) {
                document.getElementById("th").innerHTML = key;
                document.getElementById("th1").innerHTML = key2;
                tableData.innerHTML += "<tr>" +
                    "<td>" +
                    key3
                    + "</td>"
                    + "<td>" +
                    mobilePhone[key][key2][key3].Sim
                    + "</td>"
                    + "<td>" +
                    mobilePhone[key][key2][key3].Display
                    + "</td>"
                    + "<td>" +
                    mobilePhone[key][key2][key3].Ram
                    + "</td>"
                    + "<td>" +
                    mobilePhone[key][key2][key3].Rom
                    + "</td>"
                    + "<td>" +
                    mobilePhone[key][key2][key3].CameraF
                    + "</td>"
                    + "<td>" +
                    mobilePhone[key][key2][key3].CameraB
                    + "</td>"
                    + "</tr>"
            }
        }
    }
}
function search_func() {
    var input = document.getElementById("input_type");
    var search = input.value.toLowerCase();
    var tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toLowerCase().indexOf(search) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}