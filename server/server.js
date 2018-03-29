//npm modules
const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const app = express();



const path = require('path');

//the actual express app instance;


//parsing body for post routes
const bodyParser = require('body-parser');

// Controllers
const disastersController = require('./controllers/disastersController');


// Middleware 
//pathing to specific files
app.use(cors());
app.use(express.static(path.join(__dirname, './../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/getDisasters', disastersController.getDisasters, (req, res) => {
	console.log('got here');
	res.json(res.locals.disasters);
});

app.listen(3000);
