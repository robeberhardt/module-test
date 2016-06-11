const express = require('express')
const app = module.exports = express() 
const path = require('path')
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'pug')

app.get('/blarg', function(req, res) {
	res.render('blarg', {message: 'wtf blarg!!!!!'})
})

// module.exports = function(app) {
// 	app.get('/blarg', function(req, res) {
// 		res.render('blarg', {message: 'wtf blarg!!!!!'})
// 	})

// 	var hello = function() {
// 		console.log("hello world!");
// 	}
// }