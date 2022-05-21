var contentDiv = document.getElementsByClassName('content')[0]

json = json.replace(/&#34;/g, '"');
json = JSON.parse(json);

for(i=0;i<json.length;i++) {
    var div = document.createElement('div');
    div.className = "list";
    div.id = json[i].redirect;
    div.onclick = function () {
        location.href = "list/" + this.id;
    };
    JSON.parse(localStorage.getItem("thema")) ? div.dataset.theme = 'none' : div.dataset.theme = 'none';
    contentDiv.appendChild(div);

    var img = document.createElement('img');
    img.src = "/static/img/code/" + json[i].redirect + ".png";
    img.width = "100";
    img.height = "100";
    div.appendChild(img);

    var span = document.createElement('span');
    span.innerHTML = json[i].name;
    div.appendChild(span);
}