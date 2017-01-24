var express = require('express');
var router = express.Router({ strict: true, caseSensitive: true });
var appConstants = require('../app.Constants');
var dataService = require('../base/dataService');
var cryptoHelper = require('../helpers/cryptHelper');
/* GET Contact page. */
router.get('/', function (req, res, next) {
    dataService.find("messages")
        .then(items => {
            var message = cryptoHelper.decrypt(items[0].message, appConstants.crytoConfig.algorithm, appConstants.crytoConfig.key);
            res.render('message', {
                title: 'Messages',
                encryptMsg: items[0].message,
                decryptMsg: message
            });
        })
        .catch(error => res.end(error));

});
module.exports = router;
