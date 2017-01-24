var index = require('./index');
var contactus = require('./contactus');
var message = require('./message');
function RouteConfig(expApp) {
    this.app = expApp;
}
RouteConfig.prototype.config = function () {
    this.app.use('/', index);
    this.app.use('/contactus', contactus);
    this.app.use('/message', message);
}
module.exports = RouteConfig;