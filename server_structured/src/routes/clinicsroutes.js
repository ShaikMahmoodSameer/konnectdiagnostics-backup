const express = require('express');
const router = express.Router();
const clinicsController = require('../controllers/clinicsController');

// Define clinics routes
router.get('/', clinicsController.getAllClinics);
router.get('/search', clinicsController.getClinics);
router.get('/pinsearch', clinicsController.getClinicsByPincode);

module.exports = router;
