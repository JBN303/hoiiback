const express = require('express');
const Patient = require('../model/patientmodel'); // Adjust the path accordingly
const router = express.Router();

router.post('/pnew', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(200).send(savedPatient);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add more routes as needed

module.exports = router;