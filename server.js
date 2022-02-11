const express = require('express')
const db = require('./db')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));