var multer = require('multer');

var u = exports;

exports.storage = function() {
    return multer.diskStorage({
        destination: function(req, res, cb) {
            cb(null, './public/images');
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    })
}