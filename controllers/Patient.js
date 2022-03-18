'use strict';

var utils = require('../utils/writer.js');
var Patient = require('../service/PatientService');

module.exports.findPetsBySpeciality = function findPetsBySpeciality (req, res, next) {
  var speciality = req.swagger.params['speciality'].value;
  Patient.findPetsBySpeciality(speciality)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
