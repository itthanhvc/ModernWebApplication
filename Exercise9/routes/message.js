var express = require('express');
var router = express.Router({ strict: true, caseSensitive: true });
var appConstants = require('../app.Constants');
var dataService = require('../base/dataService');
var cryptoHelper = require('../helpers/cryptHelper');
/* GET Contact page. */
router.get('/', function (req, res, next) {
    dataService.getItem("messages")
        .then(item => {
            var message = cryptoHelper.decrypt(item.message, appConstants.crytoConfig.algorithm, appConstants.crytoConfig.key);
            res.render('message', {
                title: 'Messages',
                encryptMsg: item.message,
                decryptMsg: message
            });
        })
        .catch(error => res.end(error));

});
module.exports = router;
