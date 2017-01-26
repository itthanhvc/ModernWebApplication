var express = require('express');
var router = express.Router({ strict: true, caseSensitive: true });
var fileReader = require('../helpers/FileReader');
var util = require('util');
/* GET Contact page. */
var mongodb = require('mongodb').MongoClient;

router.get('/', function (req, res, next) {
    //access db to get all locations
    mongodb.connect('mongodb://127.0.0.1:27017/homework9', function (err, db) {
        if (err) {
            res.end(err);
            return;
        }
        db.collection("geolocation").find().toArray(function (err, doc) {
            res.render('geolocation', { title: 'Geolocation', geoLocations: doc });
        });

    });
});

router.post('/near', function (req, res, next) {

    var criteria = req.body.criteria;
    var currentLong = parseFloat(req.body.currentLong);
    var currentLat = parseFloat(req.body.currentLat);

    //access db to get all locations
    mongodb.connect('mongodb://127.0.0.1:27017/homework9', function (err, db) {
        if (err) {
            res.end(err);
            return;
        }
        var geoLocations = [];
        db.collection("geolocation").find().toArray(function (err, doc) {
            geoLocations = doc;
        });
        var query = { $text: { $search: criteria }, 'location': { '$geoWithin': { '$center': [[currentLong, currentLat], 10] } } };
        db.collection("geolocation").find(query).limit(3).toArray(function (err, doc) {
            res.render('geolocation', { title: 'Geolocation', geoLocations: geoLocations, nearLocations: doc });
        });

    });
});
router.post('/', function (req, res, next) {
    var isdeleted = req.body.action === "delete";
    var isAdd = req.body.action === "add";
    if (!isdeleted) {
        req.assert("name", "Name is required").notEmpty();
        req.assert("category", "Category is required").notEmpty();
    }
    req.assert("longtitude", "Longtitude is required").notEmpty();
    req.assert("latitude", "Latitude is required").notEmpty();

    var errors = req.validationErrors();
    if (errors)
        res.render('geolocation', { title: 'Geolocation', errors: errors });
    else {
        mongodb.connect('mongodb://127.0.0.1:27017/homework9', function (err, db) {
            if (err) {
                res.end(err);
                return;
            }
            if (isAdd) {
                db.collection("geolocation").insert({
                    "name": req.body.name,
                    "category": req.body.category,
                    "location": [parseFloat(req.body.longtitude), parseFloat(req.body.latitude)]
                }, function (err, docInSert) {
                    if (err) {
                        console.log(err.toString());
                        res.end(err.message);
                        return;
                    }
                    db.close();
                    res.redirect("/geolocation");
                });
                return;
            }
            var query = {
                "location.0": parseFloat(req.body.longtitude),
                "location.1": parseFloat(req.body.latitude)
            };
            if (isdeleted) {
                db.collection("geolocation").remove(query, function (err, removed) {
                    if (err) {
                        console.log(err.toString());
                        res.end(err.message);
                        return;
                    }
                    db.close();
                    res.redirect("/geolocation");
                });
                return;
            }

            var name = req.body.name;
            var category = req.body.category;
            db.collection("geolocation").findOne(query, function (err, doc) {
                if (err) {

                    console.log(err.toString());
                    res.end(err);
                    return;
                }
                doc['name'] = name;
                doc['category'] = category;
                query['_id'] = doc['_id'];
                db.collection("geolocation").update(query, doc, function (err, num) {
                    if (err) {
                        console.log(err.toString());
                        res.end(err.message);
                        return;
                    }
                    db.close();
                    res.redirect("/geolocation");
                });
            });
        });
        return;
    }
});

module.exports = router;
