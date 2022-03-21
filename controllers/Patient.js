'use strict';

var utils = require('../utils/writer.js');
var Patient = require('../service/PatientService');

module.exports.findDoctorsBySpeciality = function findDoctorsBySpeciality (req, res, next) {
  var speciality = req.swagger.params['speciality'].value;
  Patient.findDoctorsBySpeciality(speciality)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
