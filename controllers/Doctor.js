'use strict';

var utils = require('../utils/writer.js');
var Doctor = require('../service/DoctorService');

module.exports.addDoctor = function addDoctor (req, res, next) {
  var body = req.swagger.params['body'].value;
  Doctor.addDoctor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDoctor = function updateDoctor (req, res, next) {
  var body = req.swagger.params['body'].value;
  Doctor.updateDoctor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
