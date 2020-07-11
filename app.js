var Minutes = 0;
var Seconds = 0;
var miliSecond = 0;
var miliSecondsHeading = document.getElementById("Minutes")
var SecondHeading = document.getElementById("Seconds");
var MinutesHeading = document.getElementById("miliSecond");
var blankVar;



function myFoo() {
    miliSecond++;
    miliSecondsHeading.innerHTML = miliSecond;
    if (miliSecond >= 100) {
        Seconds++;
        SecondHeading.innerHTML = Seconds;
        miliSecond = 0;
    } else if (Seconds >= 60) {
        Minutes++;
        MinutesHeading.innerHTML = Minutes;
        Seconds = 0;
    }
}

function start() {
    blankVar = setInterval(myFoo, 10);
    document.getElementById('slow').disabled = true;
}

function stop() {
    clearInterval(blankVar)
    document.getElementById('slow').disabled = false;
}

function reset() {
    miliSecond = 0;
    Seconds = 0;
    Minutes = 0;
    MinutesHeading.innerHTML = Minutes;
    SecondHeading.innerHTML = Seconds;
    miliSecondsHeading.innerHTML = miliSecond;

    stop();
    document.getElementById('slow').disabled = false;
}