const express = require('express');
const cors = requires('cors');
const dotenv = require('dotenv');
const db = require('./config/database');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes

// Start Server
const port = process.env.PORT || 5000;
db.connect((err) => {
    if(err) throw err;
    console.log('MySql Connected');
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
})
