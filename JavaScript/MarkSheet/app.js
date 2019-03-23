function submit() {
    if (document.getElementById("sn").value && document.getElementById("rn").value &&
        document.getElementById("fn").value
        && document.getElementById('mkhtml').value && document.getElementById('mkcss1').value &&
        document.getElementById('mkcss2').value !== "") {
        var studentName = document.getElementById("sn").value;
        document.getElementById("tsn").innerHTML = studentName;
        document.getElementById("sn").value = "";

        var rollNo = document.getElementById("rn").value;
        document.getElementById("trn").innerHTML = rollNo;
        document.getElementById("rn").value = "";

        var fatherName = document.getElementById("fn").value;
        document.getElementById("tfn").innerHTML = fatherName;
        document.getElementById("fn").value = "";

        var html = document.getElementById('mkhtml').value;
        html = parseInt(html);
        document.getElementById("tmkhtml").innerHTML = html + "%";
        document.getElementById('mkhtml').value = "";

        var css1 = document.getElementById('mkcss1').value;
        css1 = parseInt(css1);
        document.getElementById("tmkcss1").innerHTML = css1 + "%";
        document.getElementById('mkcss1').value = "";

        var css2 = document.getElementById('mkcss2').value;
        css2 = parseInt(css2);
        document.getElementById("tmkcss2").innerHTML = css2 + "%";
        document.getElementById('mkcss2').value = "";

        var avg = Math.round((html + css1 + css2) / 3);
        document.getElementById("avg").innerHTML = avg + "%";
    }
}