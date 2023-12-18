const clinicsService = require('../services/clinicsService');

const getAllClinics = (req, res) => {
  clinicsService.getAllClinicsData((error, clinicsData) => {
    if (error) {
      console.error('Error fetching clinics data:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(clinicsData);
    }
  });
};

const getClinics = (req, res) => {
  clinicsService.getClinicsData(req, (error, clinicsData) => {
    if (error) {
      console.error('Error fetching clinics data:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(clinicsData);
    }
  })
};

const getClinicsByPincode = (req, res) => {
  clinicsService.getClinicsDataByPin(req, (error, clinicsData) => {
    if (error) {
      console.error('Error fetching clinics data:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(clinicsData);
    }
  })
};

module.exports = {
    getAllClinics,
    getClinics,
    getClinicsByPincode
};

