'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path')
var favicon = require('serve-favicon')
var blarg = require('./blarg.js')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(favicon(__dirname + '/public/favicon.ico'))
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'pug')

app.use(blarg)

app.get('/', function(req, res) {
	res.render('index', { title: 'Rob\'s Super Awesome App', message: 'Hello, World!' })
})

// Spin up the server
app.listen(app.get('port'), function() {
  console.log('running on port ', app.get('port'))
  console.log(path.join(__dirname, 'public/favicon.ico'))
})