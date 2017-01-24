var mongo = require('mongoskin');
function DataService() {
    this.db = mongo.db("mongodb://localhost:27017/homework7", { native_parser: true });
}

DataService.prototype.find = function (dbName) {
    var self = this;
    return new Promise(function (resolve, reject) {
        try {
            self.db.bind(dbName);
            self.db[dbName].find().toArray(function (err, item) {
                resolve(item);
            });
        } catch (e) {
            reject(e.toString());
        }
    });
}

module.exports = new DataService();