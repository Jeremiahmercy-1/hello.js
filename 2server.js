require("dotenv").config()

const express = require('express');
const express = require('express');

const app = express();
const port = process.env.PORT;

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//serve the main page
app.get('/about', (req, res) => {
    res.sendfilepath.join(__dirname, 'views, 'index.html'));
}) 

app.use(express.json());

