var ponteiroHoras = document.querySelector('.ponteiro.horas');
var ponteiroMinutos = document.querySelector('.ponteiro.minutos');
var ponteiroSegundos = document.querySelector('.ponteiro.segundos');

var setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360);

}

var setRelogio = () => {
    var currentDate = new Date();

    var segundosPercentage = currentDate.getSeconds() / 60;
    var minutosPercentage = (segundosPercentage + currentDate.getMinutes()) / 60;
    var horasPercentage = (minutosPercentage + currentDate.getHours()) / 12;

    setRotation(ponteiroSegundos, segundosPercentage);
    setRotation(ponteiroMinutos, minutosPercentage);
    setRotation(ponteiroHoras, horasPercentage);
}

setRelogio();

setInterval(setRelogio, 1000);

//---------------------------------------------------------------------------------------------------
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h==0) {
       h = 12;
    }

    if(h>12) {
        h = h - 12;
        session = "PM";
     }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClockDisplay").innerHTML = time;
    document.getElementById("myClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();