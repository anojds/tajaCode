const text = new Array();
var index = 0;
var index1 = 0;
var isBr = false;
var Tab = 0;
var marginleft = 0;
var oneTime = true;
var ota = 0;
var keyIndex = 0;
var keyIndexv = 0;
function getTxtFile() {
    var now_code = document.getElementsByClassName('word')[0];

    for (var forindex = 0; forindex < codeText.length; forindex++) {
        if (codeText[forindex] === "#") {
            const br = document.createElement('br');
            br.className = "not"
            br.id = index1;
            now_code.appendChild(br);
            forindex = forindex + 1;
            text.push(codeText[forindex]);
        } else if (codeText[forindex] === "^") {
            marginleft = marginleft + 20;
            index1 = index1 - 1;
        } else {
            const span = document.createElement('span');
            span.innerHTML = codeText[forindex];
            if (forindex === 0) {
                span.className = "notnowcode";
                document.getElementById('now_code').innerText = codeText[forindex]
            } else {
                span.className = "not";
            }
            span.id = index1;
            Tab ? span.style.marginLeft = marginleft + "px" : false;
            Tab = Tab - 1;
            marginleft = 0;
            now_code.appendChild(span);
            text.push(codeText[forindex]);
        }
        index1 = index1 + 1
    }
}

getTxtFile()

window.addEventListener("keydown", (e) => keyboard_down(e.key));

function changeProgress() {
    keyIndex = keyIndex + 1;
    keyIndexv = keyIndex / text.length * 100;
    document.getElementById('header_progress').style.width = keyIndexv + "%";
    document.getElementById('header_percent').innerText = Math.floor(keyIndexv) + "%";
}

function keyboard_down(key) {
    if (index === text.length - 1) {
        changeProgress()
        document.getElementById(index).className = 'not';
        const select_span = document.getElementById(index);
        select_span.className = 'not';
        select_span.className = 'clear';
        clearInterval(timer)
    } else {
        if (text[index] === key) {
            changeProgress()
            oneTimef()
            document.getElementById(index).className = 'not';
            const select_span = document.getElementById(index);
            select_span.className = 'not';
            select_span.className = 'clear';
            index = index + 1;
            document.getElementById(index).className = 'notnowcode';
            if (text[index] === " ") {
                document.getElementById('now_code').innerText = "Space"
            } else if (document.getElementById(index).tagName === "BR") {
                document.getElementById('now_code').innerText = "Enter"
            } else {
                document.getElementById('now_code').innerText = text[index]
            }
            return;
        } else if (key === "Enter" && document.getElementById(index).tagName === "BR") {
            changeProgress()
            document.getElementById(index).className = 'not';
            const select_span = document.getElementById(index);
            select_span.className = 'clear';
            index = index + 1;
            document.getElementById(index).className = 'notnowcode';
            if (text[index] === " ") {
                document.getElementById('now_code').innerText = "Space";
            } else if (document.getElementById(index).tagName === "BR") {
                document.getElementById('now_code').innerText = "Enter";
            } else {
                document.getElementById('now_code').innerText = text[index];
            }
            return;
        } else if (key === "Shift") {
            return;
        } else {
            ota = ota + 1;
            document.getElementById('ota_value').innerText = ota + "개";
            return;
        }
    }
}

function oneTimef() {
    if (oneTime) {
        start()
        oneTime = false
    }
}