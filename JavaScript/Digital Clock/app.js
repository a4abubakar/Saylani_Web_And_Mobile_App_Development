var digital_clock = document.getElementById('digital_clock');
var hex_code = document.getElementById('hex_code');
function clock()
{
    var date = new Date();
    var hr = (date.getHours() % 12).toString();
    var min = (date.getMinutes().toString());
    var sec = (date.getSeconds().toString()); 
    if(hr.length < 2)   
    {
        hr = "0" + hr;
    }
    if(min.length < 2)
    {
        min = "0" + min;
    }
    if(sec.length < 2)
    {
        sec = "0" + sec;
    }
    
    var digital_clock_string = hr + ":" + min + ":" + sec;
    var hex_code_string = "#" + hr + min + sec;

    digital_clock.textContent = digital_clock_string;
    hex_code.textContent = hex_code_string;

    document.body.style.backgroundColor = hex_code_string;
}
clock();
setInterval(clock, 1000);