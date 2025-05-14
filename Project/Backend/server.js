const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database');

const authRoutes = require('./Routes/authRoutes');
const userRoutes = require('./Routes/userRoutes');
const employeeRoutes = require('./Routes/employeeRoutes');
const leaveRoutes = require('./Routes/leaveRoutes');

dotenv.config();
const app = express();

app.use(
    cors({
        origin: "http://localhost:4200",
        credentials: true
    })
);
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/leaves', leaveRoutes);


// Start Server
const port = process.env.PORT || 5000;
db.connect((err) => {
    if(err) throw err;
    console.log('MySql Connected');
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
})
