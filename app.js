const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));


app.get(`/code/:id`,(req,res) => {
    fs.readFile(`public/json/list.json`, "utf8", (err, data) => {
        var json = JSON.parse(data);
        let i = req.params.id;
        fs.readFile(`public/code/${json[i].language}/${json[i].fileName}.txt`, "utf8", (err, data) => {
            if (err) {
                console.error(err);
            } else {
                res.render('code.ejs', {'data' : data, 'name': json[i].name})
            }
          });
    })
});


app.listen(port,()=>{
    console.log("Express server on port 3000!");
});