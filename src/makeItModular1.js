// exports.module1 = function (dirName, fileNameExtension,callback){
//     var fs = require('fs');
//     var path = require('path');
//     var fileNameExtension ="."+ fileNameExtension;
//     fs.readdir(dirName,function (err,data) {
//         for (var i=0; i< data.length;i++){
//             if(path.extname(data[i]) === fileNameExtension){
//                 callback(data[i]);
//             }
//             else{
//                 callback(error);
//             }
//         }
//
//     });
// };
var fs = require('fs'),
    path = require('path');

module.exports = function  (dir, ext, callback) {
    //to understand further on callback you can see the video
    //https://www.youtube.com/watch?v=pTbSfCT42_M
    ext = '.' + ext;
    fs.readdir(dir, function (err, data) { //these are call back functions. fs.readdir happens when finishes gives data and err
        if (err) return callback(err);
        data = data.filter(function (file) { //data.filter contains callback. These are not async functions. It changes the data array based on conditions
            if (path.extname(file) === ext) {
                return true;
            } else {
                return false;
            }
        });
        //Not an async will not call this immediately.
        callback(null, data);
    });
};