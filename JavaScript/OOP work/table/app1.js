var mobilePhone = {
    Samsung: {
        model: {
            s4: {
                sim: "Single",
                display: "4.5 inch",
                ram: "2 gb",
                rom: "8 gb",
                cameraF: "2 mpx",
                cameraB: "5 mpx"
            },
            s5: {
                sim: "Single or Double",
                display: "5.8 inch",
                ram: "2.5 gb",
                rom: "16 gb",
                cameraF: "5 mpx",
                cameraB: "8 mpx"
            },
            s6: {
                sim: "Single",
                display: "6.5 inch",
                ram: "3 gb",
                rom: "16 or 32 gb",
                cameraF: "8 mpx",
                cameraB: "16 mpx"
            }
        }
    },
    iPhone: {
        model: {
            i4: {
                sim: "Single",
                display: "5 inch",
                ram: "2 gb",
                rom: "8 gb",
                cameraF: "2 mpx",
                cameraB: "5 mpx"
            },
            i5: {
                sim: "Double",
                display: "6 inch",
                ram: "3 gb",
                rom: "16 gb",
                cameraF: "5 mpx",
                cameraB: "8 mpx"
            },
            i6: {
                sim: "Single or Double",
                display: "6.5 inch",
                ram: "3 gb",
                rom: "16 or 32 gb",
                cameraF: "8 mpx",
                cameraB: "16 mpx"
            }
        }
    }
}
//===============
// var mobilePhone2 = [
//     {"name":"Samsung", 
//     "model":[
// { "name":"s4", "sim": "Single", "display": "4.5 inch", "ram": "2 gb",  "rom": "8 gb", cameraF: "2 mpx",  cameraB: "5 mpx"},
// { "name":"s5", "sim": "Single", "display": "4.6 inch", "ram": "2 gb",  "rom": "8 gb", cameraF: "2 mpx",  cameraB: "5 mpx"},
// { "name":"s6", "sim": "Single", "display": "4.7 inch", "ram": "2 gb",  "rom": "8 gb", cameraF: "2 mpx",  cameraB: "5 mpx"}
// ]
// },
// {"name":"Iphone", 
// "model":[
// { "name":"i4", "sim": "Single", "display": "4.5 inch", "ram": "2 gb",  "rom": "8 gb", cameraF: "2 mpx",  cameraB: "5 mpx"},
// { "name":"i5", "sim": "Single", "display": "4.6 inch", "ram": "2 gb",  "rom": "8 gb", cameraF: "2 mpx",  cameraB: "5 mpx"},
// { "name":"i6", "sim": "Single", "display": "4.7 inch", "ram": "2 gb",  "rom": "8 gb", cameraF: "2 mpx",  cameraB: "5 mpx"}
// ]
// }
   
// $.grep( [{"name":"Lenovo Thinkpad 41A4298","website":"google"},{"name":"Lenovo Thinkpad 41A2222","website":"google"}], function( n, i ) {
//     return n.website==='google';
//   });

// ]
// //===============

// console.log(mobilePhone);

var companyChoice = prompt("Please input from samsung or iphone");
var isheaderread=false;
for (var key in mobilePhone) {//======================Iphone, samsung
        var mobilenumber=key;   //console.log(mobilenumber);
             for (var key2 in mobilePhone[key]) { //===========Model
                var mobilenumber_model_key=key2;   //console.log(mobilenumber_model_key);
         if (key.toUpperCase() === companyChoice.toUpperCase()) {
            // console.log(companyChoice.toUpperCase());
             var iterationNo=0;
             for (var key3 in mobilePhone[key][key2]) {//=============i4, i5, i6
                var mobilenumber_model_object=key3;   //console.log(mobilenumber_model_object);
                var i345object=mobilePhone[key][key2][key3];
                //head logic
                if(isheaderread==false)
                {
                 for(var item in i345object)
                 {
                     if(item=="sim")
                     {
                   console.log(item);
                     }
                //    // if(item=="sim")
                //     //{
                //     //console.log("Key =",item );
                //     //}
                //     //console.log("Key =");
                //     //Object.keys
                //     //console.log(item);
                 }
                 isheaderread=true;
                }
              //  var propertyname=Object.keys(mobilePhone[key][key2]["i4"])[iterationNo];
                //console.log(mobilePhone[key][key2]);
    //             //console.log(key3, mobilePhone[key][key2][key3].cameraB);
                // document.getElementById("th").innerHTML = key;
                 //document.getElementById("td1").innerHTML = key2;
    //console.log(propertyname);
                 //             //console.log(mobilePhone[key][key2][key3]);
    //             console.log(Object.keys(mobilePhone[key][key2][key3])[iterationNo]);
    //             // document.getElementById("td2").innerHTML = mobilePhone[key][key2][key3].cameraB;
                 //iterationNo++;
             }
         }
     }
}
// for (var key in mobilePhone) {//======================Iphone, samsung
//     for (var key2 in mobilePhone[key]) { //===========Model
//         if (key.toUpperCase() === companyChoice.toUpperCase()) {
//             var iterationNo=0;
//             for (var key3 in mobilePhone[key][key2]) {
//                 //console.log(key3, mobilePhone[key][key2][key3].cameraB);
//                 document.getElementById("th").innerHTML = key;
//                 document.getElementById("td1").innerHTML = key2;
//                 //console.log(mobilePhone[key][key2][key3]);
//                 console.log(Object.keys(mobilePhone[key][key2][key3])[iterationNo]);
//                 // document.getElementById("td2").innerHTML = mobilePhone[key][key2][key3].cameraB;
//                 iterationNo++;
//             }
//         }
//     }
// }