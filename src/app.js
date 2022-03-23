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

    successResponse.template.outputs[0].simpleText.text = process.env.msg || '여기에 텍스트를 입력'
    successResponse.template.quickReplies = JSON.parse(process.env.quickReplies || '[]')

    res.send(successResponse)
})

module.exports = app;