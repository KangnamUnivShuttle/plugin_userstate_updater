const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()
const app = express()

// application/json
app.use(express.json());

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const axios = require('axios');
const {errorResponse, successResponse } = require('./lib');

const {} = require('./global');

const {} = require('./db')


app.post('/chat', (req, res) => {
    res.send(req.body)
})

module.exports = app;