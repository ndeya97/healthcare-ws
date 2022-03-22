const express = require('express');
const router = express.Router();
let { addDoctor} = require('../controllers/Doctor')


router.post('/', async (req, res) => {
    let body = {
        doctorId: req.body.doctorId,
        name: req.body.name,
        speciality: req.body.speciality,
        sexe: req.body.sexe,
    };
    let response = await addDoctor(body);

    if (response.success == true) {
        res.status(201).json(response);
    } else {
        res.status(404).json(response);
    }
});


module.exports = router;