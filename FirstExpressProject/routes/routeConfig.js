var index = require('./index');
var users = require('./users');
var inventors = require('./inventors');
function RouteConfig(expApp) {
    this.app = expApp;
}
RouteConfig.prototype.config = function () {
    this.app.use('/', index);
    this.app.use('/inventors', inventors);
}
module.exports = RouteConfig;