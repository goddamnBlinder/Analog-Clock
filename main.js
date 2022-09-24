let seconds = 0;
var minutes = 0;
var hours = 0;
var d = new Date();

setInterval(
    function(){
        d = new Date();
        seconds = d.getSeconds();
        minutes = d.getMinutes();
        hours = d.getHours();
        document.getElementById("second-hand").style.transform = "rotate(" + seconds + "deg)";

    }, 1000
);