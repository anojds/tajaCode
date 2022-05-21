var sec = 0;
var min = 0;

let timerText = document.getElementById('timer_value')
function timer() {
    if (!isEnd) {
        sec = sec + 1;
        if (sec === 60) {
            sec = 0;
            min = min + 1;
        }
        timerText.innerText = `${min}:${sec}`;
        document.getElementById('endDiv_list_1_value').innerText = `${min}:${sec}`;
    }
}

function start() {
    const intervalId = setInterval(() => timer(), 1000);
}

function end() {
    isEnd = true;
    document.getElementsByClassName('endDiv_wrapper')[0].style.visibility = 'visible';
    var indexv = index + 1
    document.getElementById('endDiv_list_4_value').innerText = Math.floor(indexv / pressIndex * 100) + "%";
}