var contentDiv = document.getElementsByClassName('content')[0]

json = json.replace(/&#34;/g, '"');
json = JSON.parse(json);

for(i=0;i<json.length;i++) {
    if(json[i].language === lan) {
        var div = document.createElement('div');
        div.className = "list";
        div.id = i
        div.onclick = function () {
            location.href = "../code/" + this.id;
        };
        contentDiv.appendChild(div)
    
        var span = document.createElement('span');
        span.className = "title"
        span.innerHTML = json[i].name;
        div.appendChild(span);
    }
}