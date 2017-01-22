var index = require('./index');
var contactus = require('./contactus');
function RouteConfig(expApp) {
    this.app = expApp;
}
RouteConfig.prototype.config = function () {
    this.app.use('/', index);
    this.app.use('/contactus', contactus);
}
module.exports = RouteConfig;