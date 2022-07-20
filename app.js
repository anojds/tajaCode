const express = require('express');
const app = express();
const port = 1026;
const fs = require("fs");


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));


app.get(`/code/:id`, (req, res) => {
    try {
        fs.readFile(`public/json/list.json`, "utf8", (err, data) => {
            var json = JSON.parse(data);
            let i = req.params.id;
            fs.readFile(`public/code/${json[i].language}/${json[i].fileName}.txt`, "utf8", (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    res.render('code.ejs', { 'data': data, 'name': json[i].name, 'language': json[i].language })
                }
            });
        })
    } catch (e) {
        console.log(e)
    }
});

app.get(`/list/:lang`, (req, res) => {
    var html = ""
    fs.readFile(`public/json/list.json`, "utf8", (err, data) => {
        json = JSON.parse(data);
        let lan = req.params.lang;

        res.render('listDetail.ejs', { 'json': data, 'language': req.params.lang,})
    })
})
app.get(`/list`, (req, res) => {
    fs.readFile(`public/json/language.json`, "utf8", (err, data) => {
        res.render('list.ejs', { 'json': data })
    })
})

app.get(`/`, (req, res) => {
    res.render('home.ejs')
})


app.listen(port, () => {
    console.log(`Express server on port {port}!`);
});
