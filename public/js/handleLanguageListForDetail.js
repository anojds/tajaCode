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
        contentDiv.appendChild(div);

        var wrapdiv = document.createElement('div');
        wrapdiv.className = "wrap";
        div.appendChild(wrapdiv);

        var span = document.createElement('span');
        span.className = "title"
        span.innerHTML = json[i].name;
        wrapdiv.appendChild(span);

        var lanimg = document.createElement('img');
        lanimg.src = `/static/img/code/${json[i].language}.png`;
        lanimg.width = "25";
        lanimg.height = "25";
        wrapdiv.appendChild(lanimg);

        var wrapdiv2 = document.createElement('div');
        wrapdiv2.className = "wrap2";
        div.appendChild(wrapdiv2);

        var lineicon = document.createElement('img');
        lineicon.src = `/static/img/icon/line.png`;
        lineicon.width = "15";
        lineicon.height = "15";
        lineicon.className = "code_line_icon";
        lineicon.style.opacity = "0.5";
        wrapdiv2.appendChild(lineicon);

        var span2 = document.createElement('span');
        span2.className = "line_of_code"
        span2.innerHTML = json[i].line + "줄";
        wrapdiv2.appendChild(span2);

        var wrapdiv3 = document.createElement('div');
        wrapdiv3.className = "wrap3";
        div.appendChild(wrapdiv3);

        var devicon = document.createElement('img');
        devicon.src = `/static/img/icon/list_code.png`;
        devicon.width = "15";
        devicon.height = "15";
        devicon.className = "code_redirect_icon";
        devicon.style.opacity = "0.5";
        wrapdiv3.appendChild(devicon);
        
        var span3 = document.createElement('span');
        span3.className = "line_of_code"
        span3.innerHTML = json[i].github_url;
        wrapdiv3.appendChild(span3);
    }
}