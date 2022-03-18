'use strict';


/**
 * Finds Doctors by specialities
 * Multiple doctors specialities can be provided with comma separated strings
 *
 * speciality List Speciality values that need to be considered for filter
 * returns List
 **/
exports.findPetsBySpeciality = function(speciality) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

