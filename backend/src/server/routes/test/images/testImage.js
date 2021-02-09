var express = require('express');
var multer = require('multer');
var router = express.Router();

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './server/routes/test/images/uploadedFiles/');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

var upload = multer({ storage: storage });

router
    .post('/uploadSingleImage', upload.single('uploadSingleImage'), (req, res) => {
        try {
            res.send(req.file);
        } catch {
            res.send(400);
        }
    });

router
    .post('/uploadBulkImages', upload.array('uploadBulkImages',4) , (req, res) => {
        try {
            res.send(req.files);
        } catch {
            res.send( 400 );
        }
    });

module.exports = router;