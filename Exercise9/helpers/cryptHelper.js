var crypto = require('crypto');

function CryptHelper() {

}
CryptHelper.prototype.encrypt = function (text, algorithm, password) {
    var cipher = crypto.createCipher(algorithm, password);
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

CryptHelper.prototype.decrypt = function (text, algorithm, password) {
    var decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}
module.exports = new CryptHelper();