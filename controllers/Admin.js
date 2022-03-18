'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.addPatient = function addPatient (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.addPatient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
