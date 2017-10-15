var http = require('http');

http.get(process.argv[2], function (res) {
    res.on('error', function (error) {
        console.error(error);
    });
    res.on('data', function (data) {
        console.log(data);
    });
    res.setEncoding('utf8');

});