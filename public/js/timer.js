var sec = 0;
var min = 0;

let timerText = document.getElementById('timer_value')
function timer() {
    sec = sec + 1;
    if(sec === 60) {
        sec = 0;
        min = min + 1;
    }
    timerText.innerText = `${min}:${sec}`;
    document.getElementById('endDiv_list_1_value').innerText = `${min}:${sec}`;
}

function start() {
    setInterval(timer, 1000);
}