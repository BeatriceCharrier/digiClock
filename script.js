var time, h, m, s, track;
track = 0;
window.onload = function() {
    setInterval(timeNow, 100);
}

function timeNow() {
    time = new Date();
    track += 1;
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    if (s < 10) {
        s = "0" + s;
    } /* we add a 0 in front of s, when it is lower than 10, because that's what most clocks display, this is for the human user rather than for any need by the computer */
    document.getElementById("time").innerHTML = h + ':' + m + ':' + s;
    document.getElementById("track").innerHTML = track;
}