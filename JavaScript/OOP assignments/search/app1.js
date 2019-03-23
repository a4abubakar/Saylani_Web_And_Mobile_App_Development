// var mobilePhone = {
//     Samsung: {
//         Model: {
//             s4: {
//                 Sim: "Single",
//                 Display: "4.5 inch",
//                 Ram: "2 gb",
//                 Rom: "8 gb",
//                 CameraF: "2 mpx",
//                 CameraB: "5 mpx"
//             },
//             s5: {
//                 Sim: "Single or Double",
//                 Display: "5.8 inch",
//                 Ram: "2.5 gb",
//                 Rom: "16 gb",
//                 CameraF: "5 mpx",
//                 CameraB: "8 mpx"
//             },
//             s6: {
//                 Sim: "Single",
//                 Display: "6.5 inch",
//                 Ram: "3 gb",
//                 Rom: "16 or 32 gb",
//                 CameraF: "8 mpx",
//                 CameraB: "16 mpx"
//             }
//         }
//     },
//     iPhone: {
//         Model: {
//             i4: {
//                 Sim: "Single",
//                 Display: "5 inch",
//                 Ram: "11.0",
//                 Rom: "8 gb",
//                 CameraF: "2 mpx",
//                 CameraB: "5 mpx"
//             },
//             i5: {
//                 Sim: "Double",
//                 Display: "6 inch",
//                 Ram: "11.0",
//                 Rom: "16 gb",
//                 CameraF: "5 mpx",
//                 CameraB: "8 mpx"
//             },
//             i6: {
//                 Sim: "Single or Double",
//                 Display: "6.5 inch",
//                 Ram: "11.0",
//                 Rom: "16 or 32 gb",
//                 CameraF: "8 mpx",
//                 CameraB: "16 mpx"
//             }
//         }
//     }
// }
// var tableData = document.getElementById("table");
// var check = true;
// var companyChoice = prompt("Please input from samsung or iphone");
// for (var key in mobilePhone) {
//     for (var key2 in mobilePhone[key]) {
//         if (key.toUpperCase() === companyChoice.toUpperCase()) {
//             for (var key3 in mobilePhone[key][key2]) {
//                 document.getElementById("th").innerHTML = key;
//                 document.getElementById("th1").innerHTML = key2;
//                 tableData.innerHTML += "<tr>" +
//                     "<td>" +
//                     key3
//                     + "</td>"
//                     + "<td>" +
//                     mobilePhone[key][key2][key3].Sim
//                     + "</td>"
//                     + "<td>" +
//                     mobilePhone[key][key2][key3].Display
//                     + "</td>"
//                     + "<td>" +
//                     mobilePhone[key][key2][key3].Ram
//                     + "</td>"
//                     + "<td>" +
//                     mobilePhone[key][key2][key3].Rom
//                     + "</td>"
//                     + "<td>" +
//                     mobilePhone[key][key2][key3].CameraF
//                     + "</td>"
//                     + "<td>" +
//                     mobilePhone[key][key2][key3].CameraB
//                     + "</td>"
//                     + "</tr>"
//                 // var propertyName = mobilePhone[key][key2][key3];
//                 // if (check === true) {
//                 //     for (var key4 in propertyName) {
//                 //         if (key4 === "Sim") {
//                 //             document.getElementById("th2").innerHTML = key4;
//                 //         }
//                 //         if (key4 === "Display") {
//                 //             document.getElementById("th3").innerHTML = key4;
//                 //         }
//                 //         if (key4 === "Ram") {
//                 //             document.getElementById("th4").innerHTML = key4;
//                 //         }
//                 //         if (key4 === "Rom") {
//                 //             document.getElementById("th5").innerHTML = key4;
//                 //         }
//                 //         if (key4 === "CameraF") {
//                 //             document.getElementById("th6").innerHTML = key4;
//                 //         }
//                 //         if (key4 === "CameraB") {
//                 //             document.getElementById("th7").innerHTML = key4;
//                 //         }
//                 //     }
//                 //     check = false;
//                 // }
//                 // if (key3 === "s4") {
//                 //     document.getElementById("td8").innerHTML = key3;
//                 //     document.getElementById("td9").innerHTML = propertyName.Sim;
//                 //     document.getElementById("td10").innerHTML = propertyName.Display;
//                 //     document.getElementById("td11").innerHTML = propertyName.Ram;
//                 //     document.getElementById("td12").innerHTML = propertyName.Rom;
//                 //     document.getElementById("td13").innerHTML = propertyName.CameraF;
//                 //     document.getElementById("td14").innerHTML = propertyName.CameraB;
//                 // }
//                 // if (key3 === "s5") {
//                 //     document.getElementById("td15").innerHTML = key3;
//                 //     document.getElementById("td16").innerHTML = propertyName.Sim;
//                 //     document.getElementById("td17").innerHTML = propertyName.Display;
//                 //     document.getElementById("td18").innerHTML = propertyName.Ram;
//                 //     document.getElementById("td19").innerHTML = propertyName.Rom;
//                 //     document.getElementById("td20").innerHTML = propertyName.CameraF;
//                 //     document.getElementById("td21").innerHTML = propertyName.CameraB;
//                 // }
//                 // if (key3 === "s6") {
//                 //     document.getElementById("td22").innerHTML = key3;
//                 //     document.getElementById("td23").innerHTML = propertyName.Sim;
//                 //     document.getElementById("td24").innerHTML = propertyName.Display;
//                 //     document.getElementById("td25").innerHTML = propertyName.Ram;
//                 //     document.getElementById("td26").innerHTML = propertyName.Rom;
//                 //     document.getElementById("td27").innerHTML = propertyName.CameraF;
//                 //     document.getElementById("td28").innerHTML = propertyName.CameraB;
//                 // }
//                 // if (key3 === "i4") {
//                 //     document.getElementById("td8").innerHTML = key3;
//                 //     document.getElementById("td9").innerHTML = propertyName.Sim;
//                 //     document.getElementById("td10").innerHTML = propertyName.Display;
//                 //     document.getElementById("td11").innerHTML = propertyName.Ram;
//                 //     document.getElementById("td12").innerHTML = propertyName.Rom;
//                 //     document.getElementById("td13").innerHTML = propertyName.CameraF;
//                 //     document.getElementById("td14").innerHTML = propertyName.CameraB;
//                 // }
//                 // if (key3 === "i5") {
//                 //     document.getElementById("td15").innerHTML = key3;
//                 //     document.getElementById("td16").innerHTML = propertyName.Sim;
//                 //     document.getElementById("td17").innerHTML = propertyName.Display;
//                 //     document.getElementById("td18").innerHTML = propertyName.Ram;
//                 //     document.getElementById("td19").innerHTML = propertyName.Rom;
//                 //     document.getElementById("td20").innerHTML = propertyName.CameraF;
//                 //     document.getElementById("td21").innerHTML = propertyName.CameraB;
//                 // }
//                 // if (key3 === "i6") {
//                 //     document.getElementById("td22").innerHTML = key3;
//                 //     document.getElementById("td23").innerHTML = propertyName.Sim;
//                 //     document.getElementById("td24").innerHTML = propertyName.Display;
//                 //     document.getElementById("td25").innerHTML = propertyName.Ram;
//                 //     document.getElementById("td26").innerHTML = propertyName.Rom;
//                 //     document.getElementById("td27").innerHTML = propertyName.CameraF;
//                 //     document.getElementById("td28").innerHTML = propertyName.CameraB;
//                 // }
//             }
//         }
//         else{
//             alert("Please reload the page & select from Samsung or Iphone");
//         }
//         break;
//     }
// }
// var flag = false;
// function search_func() {
//     // var table = document.getElementById("table");
//     // table.setAttribute("id", "#table");
//     var input = document.getElementById("input_type");
//     var search = input.value.toLowerCase();
//     if (search !== undefined && search !== "" && search !== " ") {
//         for (var key in mobilePhone) {
//             for (var key2 in mobilePhone[key]) {
//                 for (var key3 in mobilePhone[key][key2]) {
//                     if (key3.toLowerCase() === search) {
//                         tableData.innerHTML = "";
//                         tableData.innerHTML +=
//                             "<tr>" +
//                             "<th colspan='7'>" + "<h2 id='th'>" + key + "</h2>" + "</th>" +
//                             "</tr>" +
//                             "<tr>" +
//                             "<th class='ths' id='th1'>" + key2 + "</th>" +
//                             "<th class='ths'>" + "Sim" + "</th>" +
//                             "<th class='ths'>" + "Display" + "</th>" +
//                             "<th class='ths'>" + "Ram" + "</th>" +
//                             "<th class='ths'>" + "Rom" + "</th>" +
//                             "<th class='ths'>" + "Front Camera" + "</th>" +
//                             "<th class='ths'>" + "Back Camera" + "</th>"
//                             + "</tr>" +
//                             "<tr>" +
//                             "<td>" +
//                             key3
//                             + "</td>"
//                             + "<td>" +
//                             mobilePhone[key][key2][key3].Sim
//                             + "</td>"
//                             + "<td>" +
//                             mobilePhone[key][key2][key3].Display
//                             + "</td>"
//                             + "<td>" +
//                             mobilePhone[key][key2][key3].Ram
//                             + "</td>"
//                             + "<td>" +
//                             mobilePhone[key][key2][key3].Rom
//                             + "</td>"
//                             + "<td>" +
//                             mobilePhone[key][key2][key3].CameraF
//                             + "</td>"
//                             + "<td>" +
//                             mobilePhone[key][key2][key3].CameraB
//                             + "</td>"
//                             + "</tr>"
//                         flag = true;
//                         // var tr = table.getElementsByTagName("tr");
//                         // for (var i = 0; i < tr.length; i++) {
//                         //     var td = tr[i].getElementsByTagName("td")[0];
//                         //     // td.setAttribute("td");
//                         //     if (td) {
//                         //         if (td.innerHTML.toLowerCase().indexOf(search) > -1) {
//                         //             tr[i].style.display = "";
//                         //         }
//                         //         else {
//                         //             tr[i].style.display = "none";
//                         //         }
//                         //     }
//                         // }
//                     }
//                 }
//             }
//         }
//         if (flag === false) {
//             alert("Sorry not found..!");
//         }
//     }
//     else {
//         alert("Please enter complete model name..!");
//     }
// }
// // function search_func() {
// //     var input = document.getElementById("input_type");
// //     var search = input.value.toLowerCase();
// //     if (search !== undefined && search !== "" && search !== " ") {
// //         for (var key in mobilePhone) {
// //             for (var key2 in mobilePhone[key]) {
// //                 for (var key3 in mobilePhone[key][key2]) {
// //                     if (key3.toLowerCase() === search) {
// //                         tableData.innerHTML = "";
// //                         tableData.innerHTML +=
// //                             "<tr>" +
// //                             "<th colspan='7'>" + "<h2 id='th'>" + key + "</h2>" + "</th>" +
// //                             "</tr>" +
// //                             "<tr>" +
// //                             "<th class='ths' id='th1'>" + key2 + "</th>" +
// //                             "<th class='ths'>" + "Sim" + "</th>" +
// //                             "<th class='ths'>" + "Display" + "</th>" +
// //                             "<th class='ths'>" + "Ram" + "</th>" +
// //                             "<th class='ths'>" + "Rom" + "</th>" +
// //                             "<th class='ths'>" + "Front Camera" + "</th>" +
// //                             "<th class='ths'>" + "Back Camera" + "</th>"
// //                             + "</tr>" +
// //                             "<tr>" +
// //                             "<td>" +
// //                             key3
// //                             + "</td>"
// //                             + "<td>" +
// //                             mobilePhone[key][key2][key3].Sim
// //                             + "</td>"
// //                             + "<td>" +
// //                             mobilePhone[key][key2][key3].Display
// //                             + "</td>"
// //                             + "<td>" +
// //                             mobilePhone[key][key2][key3].Ram
// //                             + "</td>"
// //                             + "<td>" +
// //                             mobilePhone[key][key2][key3].Rom
// //                             + "</td>"
//                             + "<td>" +
//                             mobilePhone[key][key2][key3].CameraF
//                             + "</td>"
//                             + "<td>" +
//                             mobilePhone[key][key2][key3].CameraB
//                             + "</td>"
//                             + "</tr>"
//                     }
//                 }
//             }
//         }
//     }
// }