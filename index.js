const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index', 
	{ 
		title: 'EJS Page Example',
		name: 'Eric'
	});
});

app.listen(8080);