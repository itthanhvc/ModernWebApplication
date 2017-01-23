var express = require('express');
var router = express.Router({ strict: true, caseSensitive: true });
var fileReader = require("../helpers/fileReader");
/* GET home page. */
router.get('/', function (req, res, next) {
    var invertors = require("../sampleFiles/inventors.json");
    res.render('inventors', {  title: 'Inventors', invertors: invertors });
});

module.exports = router;
