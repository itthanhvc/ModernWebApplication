var express = require('express');
var router = express.Router({ strict: true, caseSensitive: true });
var fileReader = require('../helpers/FileReader');
var util = require('util');
/* GET Contact page. */
router.get('/', function (req, res, next) {
    res.render('contactus', { title: 'Contact Us' });
});
router.post('/', function (req, res, next) {
    req.assert("fullname", "Fullname is required").notEmpty();
    req.assert("message", "Message is required").notEmpty();

    var errors = req.validationErrors();
    if (errors)
        res.render('contactus', { title: 'Contact Us', errors: errors });
    else {
        var message = util.format("User Ip: %s \r\n" +
            "Full name: %s \r\n" +
            "Type: %s \r\n" +
            "Message: %s", req.ip, req.body.fullname, req.body.type, req.body.message);
        fileReader.saveRequestBody(message)
            .then(()=> res.render('thankyou', { title: 'Thanh you', fullname: req.body.fullname }))
            .catch(error => res.end(error));
    }
});

module.exports = router;
