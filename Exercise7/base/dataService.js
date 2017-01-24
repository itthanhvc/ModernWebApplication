var mongo = require('mongoskin');
function DataService() {
    this.db = mongo.db("mongodb://localhost:27017/homework7", { native_parser: true });
}

DataService.prototype.getItems = function (dbName, query, projection) {
    var self = this;
    return new Promise(function (resolve, reject) {
        try {
            self.db.bind(dbName);
            query = query | {};
            if (projection == undefined) {
                self.db[dbName].find().toArray(function (err, item) {
                    resolve(item);
                });
            } else {
                self.db[dbName].find(query, projection).toArray(function (err, item) {
                    resolve(item);
                });
            }
        } catch (e) {
            reject(e.toString());
        }
    });
}
DataService.prototype.getItem = function (dbName, query, projection) {
    var self = this;
    return new Promise(function (resolve, reject) {
        try {
            self.db.bind(dbName);
            query = query | {};
            if (projection == undefined) {
                self.db[dbName].findOne(function (err, item) {
                    resolve(item);
                });
            } else {
                self.db[dbName].findOne(query, projection, function (err, item) {
                    resolve(item);
                });
            }
            
        } catch (e) {
            reject(e.toString());
        }
    });
}
module.exports = new DataService();