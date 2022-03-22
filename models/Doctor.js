const mongoose = require("mongoose");
const  Schema  = mongoose.Schema;

const doctorSchema = new Schema({
    doctorId: {
        type: Number,
    },
    name: {
        type: String,
    },
    speciality: {
        type: String,
    },
    sexe: {
        type: Boolean,
    },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
