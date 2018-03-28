//npm modules
const express = require('express');

const mongoose = require('mongoose');
const fs = require('fs');
const Disasters = require('./models/disasterModel');
var cors = require('cors')



const path = require('path');

//the actual express app instance;
const app = express();
app.use(cors());



//parsing body for post routes
const bodyParser = require('body-parser');

// Controllers
const disastersController = require('./controllers/disastersController');


// Middleware 
//pathing to specific files
app.use(express.static(path.join(__dirname, './../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/getDisasters', disastersController.getDisasters, (req, res) => {
	res.json(res.locals.disasters);
});

app.listen(3000);
