'use strict';

const Doctor = require('../models/Doctor');


/**
 * Add a new doctor to the healthcare repository
 * 
 *
 * body Doctor Doctor object that needs to be added to the repository
 * no response value expected for this operation
 **/
exports.addDoctor = function(body) {
  return new Promise( async function(resolve, reject) {
    const doctor = new Doctor(body);
    try {
       const newDoctor = await doctor.save();
       newDoctor.forEach(element => {
        console.log(element.data())
       });
       return {
           success: true,
           data: newDoctor,
       };
      
     } catch (err) {
         return { success: false, message: "Failed to add doctor" };
     }
  });
}


/**
 * Update an existing doctor
 * 
 *
 * body Patient Doctor object that needs to be added to the repository
 * no response value expected for this operation
 **/
exports.updateDoctor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

