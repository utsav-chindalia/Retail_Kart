var express = require('express');
var imageRoute = require('./images/testImage');
var router = express.Router();
router
    .get('/', (req, res) => {
        res.send('<center>Server Running for Customer First Queries</center>');
    })
    .use('/image', imageRoute);

module.exports = router;