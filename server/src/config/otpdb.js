const mysql = require('mysql2');

const createOtpDbConnection = () => {
  const otpdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'konnect_db0'
  });

  otpdb.connect((err) => {
    if (err) {
      console.error('Error connecting to OTP database:', err);
      process.exit(1); // Exit the application on connection failure
    }
    // console.log('DB connected');
  });

  return otpdb;
};

module.exports = createOtpDbConnection;
