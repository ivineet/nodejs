var express = require('express');

var api = express.Router();

api.get("/timezone", function(req, res) {
res.send("Api v1: Sample response for /timezone");
});


api.get("/all_timezones", function(req, res) {
res.send("Api v1: Sample response for /all_timezones");
});

module.exports = api;