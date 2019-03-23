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
                ram: "11.0",
                rom: "8 gb",
                cameraF: "2 mpx",
                cameraB: "5 mpx"
            },
            i5: {
                sim: "Double",
                display: "6 inch",
                ram: "11.0",
                rom: "16 gb",
                cameraF: "5 mpx",
                cameraB: "8 mpx"
            },
            i6: {
                sim: "Single or Double",
                display: "6.5 inch",
                ram: "11.0",
                rom: "16 or 32 gb",
                cameraF: "8 mpx",
                cameraB: "16 mpx"
            }
        }
    }
}
var check = true;
var companyChoice = prompt("Please input from samsung or iphone");
for (var key in mobilePhone) {
    for (var key2 in mobilePhone[key]) {
        if (key.toUpperCase() === companyChoice.toUpperCase()) {
            for (var key3 in mobilePhone[key][key2]) {
                document.getElementById("th").innerHTML = key;
                document.getElementById("td1").innerHTML = key2;
                var propertyName = mobilePhone[key][key2][key3];
                if (check === true) {
                    for (var key4 in propertyName) {
                        if (key4 === "sim") {
                            document.getElementById("td2").innerHTML = key4;
                        }
                        if (key4 === "display") {
                            document.getElementById("td3").innerHTML = key4;
                        }
                        if (key4 === "ram") {
                            document.getElementById("td4").innerHTML = key4;
                        }
                        if (key4 === "rom") {
                            document.getElementById("td5").innerHTML = key4;
                        }
                        if (key4 === "cameraF") {
                            document.getElementById("td6").innerHTML = key4;
                        }
                        if (key4 === "cameraB") {
                            document.getElementById("td7").innerHTML = key4;
                        }
                    }
                    check = false;
                }
                if(key3 === "s4"){
                    document.getElementById("td8").innerHTML = key3;
                    document.getElementById("td9").innerHTML = propertyName.sim;
                    document.getElementById("td10").innerHTML = propertyName.display;
                    document.getElementById("td11").innerHTML = propertyName.ram;
                    document.getElementById("td12").innerHTML = propertyName.rom;
                    document.getElementById("td13").innerHTML = propertyName.cameraF;
                    document.getElementById("td14").innerHTML = propertyName.cameraB;
                }
                if(key3 === "s5"){
                    document.getElementById("td15").innerHTML = key3;
                    document.getElementById("td16").innerHTML = propertyName.sim;
                    document.getElementById("td17").innerHTML = propertyName.display;
                    document.getElementById("td18").innerHTML = propertyName.ram;
                    document.getElementById("td19").innerHTML = propertyName.rom;
                    document.getElementById("td20").innerHTML = propertyName.cameraF;
                    document.getElementById("td21").innerHTML = propertyName.cameraB;
                }
                if(key3 === "s6"){
                    document.getElementById("td22").innerHTML = key3;
                    document.getElementById("td23").innerHTML = propertyName.sim;
                    document.getElementById("td24").innerHTML = propertyName.display;
                    document.getElementById("td25").innerHTML = propertyName.ram;
                    document.getElementById("td26").innerHTML = propertyName.rom;
                    document.getElementById("td27").innerHTML = propertyName.cameraF;
                    document.getElementById("td28").innerHTML = propertyName.cameraB;
                }
                if(key3 === "i4"){
                    document.getElementById("td8").innerHTML = key3;
                    document.getElementById("td9").innerHTML = propertyName.sim;
                    document.getElementById("td10").innerHTML = propertyName.display;
                    document.getElementById("td11").innerHTML = propertyName.ram;
                    document.getElementById("td12").innerHTML = propertyName.rom;
                    document.getElementById("td13").innerHTML = propertyName.cameraF;
                    document.getElementById("td14").innerHTML = propertyName.cameraB;
                }
                if(key3 === "i5"){
                    document.getElementById("td15").innerHTML = key3;
                    document.getElementById("td16").innerHTML = propertyName.sim;
                    document.getElementById("td17").innerHTML = propertyName.display;
                    document.getElementById("td18").innerHTML = propertyName.ram;
                    document.getElementById("td19").innerHTML = propertyName.rom;
                    document.getElementById("td20").innerHTML = propertyName.cameraF;
                    document.getElementById("td21").innerHTML = propertyName.cameraB;
                }
                if(key3 === "i6"){
                    document.getElementById("td22").innerHTML = key3;
                    document.getElementById("td23").innerHTML = propertyName.sim;
                    document.getElementById("td24").innerHTML = propertyName.display;
                    document.getElementById("td25").innerHTML = propertyName.ram;
                    document.getElementById("td26").innerHTML = propertyName.rom;
                    document.getElementById("td27").innerHTML = propertyName.cameraF;
                    document.getElementById("td28").innerHTML = propertyName.cameraB;
                }
            }
        }
    }
}