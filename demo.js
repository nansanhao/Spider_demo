var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res) {
    request('https://www.zhihu.com', function(error, response, body) {
console.log(body)
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            console.log($('h2.subtitle').text())
            res.json({
                title: $('h2.subtitle').text()
            });
        }
    })
});

var server = app.listen(3000, function() {
    console.log('listening at 3000');
});