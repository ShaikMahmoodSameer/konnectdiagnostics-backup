const createOtpDbConnection = require("../../config/database");

const otpdb = createOtpDbConnection();

const getAllClinicsData = (callback) => {
    const query = "SELECT * FROM clinics";
    otpdb.query(query, (error, clinicsData) => {
        callback(error, clinicsData);
    });
};

const getClinicsData = (req, callback) => {
    const searchTerm = req.query.q;
    const query = `SELECT * FROM clinics WHERE name LIKE ? OR area LIKE ? OR city LIKE ?`;
    const searchValue = `%${searchTerm}%`;
    otpdb.query(query, [searchValue, searchValue, searchValue], (error, clinicsData) => {
        callback(error, clinicsData)
    });
}

const getClinicsDataByPin = (req, callback) => {
    const searchTerm = req.query.q;
    const query = `SELECT * FROM clinics WHERE pincode LIKE ?`;
    const searchValue = `%${searchTerm}%`;
    otpdb.query(query, [searchValue], (error, clinicsData) => {
        if (clinicsData) {
            if (clinicsData.length > 0) {
                callback(error, clinicsData)
            } else {
                const nearestPincodeQuery = `SELECT * FROM clinics ORDER BY ABS(pincode - ?) LIMIT 3`;
                otpdb.query(nearestPincodeQuery, [searchTerm], (nearestPincodeError, nearestPincodeResults) => {
                    callback(nearestPincodeError, nearestPincodeResults);
                });
            }
        }
    });
}

module.exports = {
    getAllClinicsData,
    getClinicsData,
    getClinicsDataByPin
};
