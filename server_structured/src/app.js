const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const createOtpDbConnection = require('../config/database');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
const privateKey = process.env.PRIVATEKEY;
const salt = 10;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
createOtpDbConnection();

// Other app configurations and middleware

// Routes
const clinicsRoutes = require('../src/routes/clinicsroutes');
// const userRoutes = require('./src/routes/userRoutes');
// const profileRoutes = require('./src/routes/profileRoutes');
// const cartRoutes = require('./src/routes/cartRoutes');
// const passwordResetRoutes = require('./src/routes/passwordResetRoutes');

app.use('/clinics', clinicsRoutes);
// app.use('/user', userRoutes);
// app.use('/profile', profileRoutes);
// app.use('/cart', cartRoutes);
// app.use('/password-reset', passwordResetRoutes);


// Start the server
app.get('/', (req, res) => {
    res.status(200).json({
        Message: `Konnect Server running on port ${PORT}`
    })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
