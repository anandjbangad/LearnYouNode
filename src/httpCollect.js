var bl = require('bl');
var http = require('http');
var list =[]
http.get(process.argv[2], function (res) {

    res.on('error',function (error) {
        console.log(error);

    });
    res.pipe(bl(function (err,data) {
        console.log(data.toString().length);
        console.log(data.toString());
    }))



});