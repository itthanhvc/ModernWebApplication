var index = require('./index');
var contactus = require('./contactus');
var message = require('./message');
var geolocation = require('./geolocation');
function RouteConfig(expApp) {
    this.app = expApp;
}
RouteConfig.prototype.config = function () {
    this.app.use('/', index);
    this.app.use('/contactus', contactus);
    this.app.use('/message', message);
    this.app.use('/geolocation', geolocation);
}
module.exports = RouteConfig;